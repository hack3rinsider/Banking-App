const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();

app.use(cors());
app.use(express.json());

const pool = new Pool({
  host: 'db1',
  user: 'postgres',
  password: 'postgres',
  database: 'bankingdb',
  port: 5432
});

app.get('/', (req, res) => {
  res.send('Banking API Running');
});

app.post('/register', async (req, res) => {
  try {
    const { full_name, email, password } = req.body;

    const hash = await bcrypt.hash(password, 10);

    const account_number = Math.floor(1000000000 + Math.random() * 9000000000).toString();

    await pool.query(
      'INSERT INTO users(full_name,email,password,account_number) VALUES($1,$2,$3,$4)',
      [full_name, email, hash, account_number]
    );

    res.json({ message: 'User Registered' });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/users', async (req, res) => {
  const result = await pool.query(
    'SELECT id,full_name,email,created_at FROM users'
  );

  res.json(result.rows);
});

app.post('/login', async (req, res) => {

  try {

    const { email, password } = req.body;

    const result = await pool.query(
      'SELECT * FROM users WHERE email=$1',
      [email]
    );

    if(result.rows.length === 0){
      return res.status(401).json({
        message:'Invalid Credentials'
      });
    }

    const user = result.rows[0];

    const valid = await bcrypt.compare(
      password,
      user.password
    );

    if(!valid){
      return res.status(401).json({
        message:'Invalid Credentials'
      });
    }

    const token = jwt.sign(
      {
        id:user.id,
        email:user.email
      },
      'banking-secret',
      {
        expiresIn:'24h'
      }
    );

    res.json({
      message:'Login Success',
      token,
      user:{
        id:user.id,
        name:user.full_name,
        email:user.email
      }
    });

  } catch(err){

    res.status(500).json({
      error:err.message
    });

  }

});



app.get('/user/:email', async (req,res) => {

  try {

    const result = await pool.query(
      'SELECT full_name,email,account_number,balance FROM users WHERE email=$1',
      [req.params.email]
    );

    if(result.rows.length === 0){
      return res.status(404).json({
        message:'User not found'
      });
    }

    res.json(result.rows[0]);

  } catch(err){

    res.status(500).json({
      error:err.message
    });

  }

});




app.get('/me', async (req,res)=>{

  try{

    const auth = req.headers.authorization;

    if(!auth){
      return res.status(401).json({
        message:'No token'
      });
    }

    const token = auth.split(' ')[1];

    const decoded = jwt.verify(
      token,
      'banking-secret'
    );

    const result = await pool.query(
      'SELECT full_name,email,account_number,balance FROM users WHERE email=$1',
      [decoded.email]
    );

    res.json(result.rows[0]);

  }catch(err){

    res.status(401).json({
      message:'Invalid Token'
    });

  }

});






app.post('/deposit', async (req,res)=>{

  try{

    const {account,amount}=req.body;

    await pool.query(
      'UPDATE users SET balance=balance+$1 WHERE account_number=$2',
      [amount,account]
    );

    await pool.query(
      'INSERT INTO transactions(type,sender_account,receiver_account,amount) VALUES($1,$2,$3,$4)',
      ['DEPOSIT',account,account,amount]
    );

    res.json({
      message:'Money Added'
    });

  }catch(err){

    res.status(500).json({
      error:err.message
    });

  }

});


app.post('/transfer', async (req,res)=>{

  try{

    const {sender,receiver,amount}=req.body;

    const senderResult=await pool.query(
      'SELECT * FROM users WHERE account_number=$1',
      [sender]
    );

    const receiverResult=await pool.query(
      'SELECT * FROM users WHERE account_number=$1',
      [receiver]
    );

    if(senderResult.rows.length===0 || receiverResult.rows.length===0){
      return res.status(404).json({message:'Account not found'});
    }

    const senderUser=senderResult.rows[0];

    if(Number(senderUser.balance) < Number(amount)){
      return res.status(400).json({message:'Insufficient Balance'});
    }

    await pool.query(
      'UPDATE users SET balance=balance-$1 WHERE account_number=$2',
      [amount,sender]
    );

    await pool.query(
      'UPDATE users SET balance=balance+$1 WHERE account_number=$2',
      [amount,receiver]
    );

    await pool.query(
      'INSERT INTO transactions(sender_account,receiver_account,amount) VALUES($1,$2,$3,$4)',
      [sender,receiver,amount]
    );

    res.json({message:'Transfer Successful'});

  }catch(err){

    res.status(500).json({error:err.message});

  }

});

app.get('/transactions', async (req,res)=>{

  try{

    const result=await pool.query(
      'SELECT * FROM transactions ORDER BY id DESC'
    );

    res.json(result.rows);

  }catch(err){

    res.status(500).json({error:err.message});

  }

});




app.get('/my-transactions', async (req,res)=>{

  try{

    const auth=req.headers.authorization;

    if(!auth){
      return res.status(401).json({message:'No token'});
    }

    const token=auth.split(' ')[1];

    const decoded = jwt.verify(
      token,
      'banking-secret'
    );

    const user=await pool.query(
      'SELECT account_number FROM users WHERE email=$1',
      [decoded.email]
    );

    const account=user.rows[0].account_number;

    const tx=await pool.query(
      `SELECT *
       FROM transactions
       WHERE sender_account=$1
          OR receiver_account=$1
       ORDER BY id DESC`,
      [account]
    );

    res.json(tx.rows);

  }catch(err){

    res.status(500).json({
      error:err.message
    });

  }

});




app.post('/change-password', async (req,res)=>{

  try{

    const auth=req.headers.authorization;

    if(!auth){
      return res.status(401).json({message:'No token'});
    }

    const token=auth.split(' ')[1];

    const decoded = jwt.verify(
      token,
      'banking-secret'
    );

    const {oldPassword,newPassword}=req.body;

    const result=await pool.query(
      'SELECT * FROM users WHERE email=$1',
      [decoded.email]
    );

    const user=result.rows[0];

    const valid=await bcrypt.compare(
      oldPassword,
      user.password
    );

    if(!valid){
      return res.status(400).json({
        message:'Wrong Current Password'
      });
    }

    const hash=await bcrypt.hash(
      newPassword,
      10
    );

    await pool.query(
      'UPDATE users SET password=$1 WHERE email=$2',
      [hash,decoded.email]
    );

    res.json({
      message:'Password Updated'
    });

  }catch(err){

    res.status(500).json({
      error:err.message
    });

  }

});


app.listen(3000, () => {
  console.log('Server running on port 3000');
});


app.get('/admin/users', async (req,res)=>{

 try{

  const auth=req.headers.authorization;

  if(!auth){
   return res.status(401).json({message:'No token'});
  }

  const token=auth.split(' ')[1];

  const decoded=jwt.verify(
   token,
   'banking-secret'
  );

  const admin=await pool.query(
   'SELECT role FROM users WHERE email=$1',
   [decoded.email]
  );

  if(
   admin.rows.length===0 ||
   admin.rows[0].role!=='ADMIN'
  ){
   return res.status(403).json({
    message:'Admin only'
   });
  }

  const users=await pool.query(
   'SELECT full_name,email,account_number,balance,role FROM users ORDER BY id'
  );

  res.json(users.rows);

 }catch(err){

  res.status(500).json({
   error:err.message
  });

 }

});
