async function login(){

 const email=document.getElementById('email').value;
 const password=document.getElementById('password').value;

 const res=await fetch("/api/login",{
  method:"POST",
  headers:{'Content-Type':'application/json'},
  body:JSON.stringify({email,password})
 });

 const data=await res.json();

 if(res.ok && data.token){
  localStorage.setItem("token",data.token);
  location.href="dashboard.html";
 }else{
  alert("Invalid login");
 }

}

async function registerUser(){

 const full_name=document.getElementById('name').value;
 const email=document.getElementById('email').value;
 const password=document.getElementById('password').value;

 const res=await fetch("/api/register",{
  method:"POST",
  headers:{'Content-Type':'application/json'},
  body:JSON.stringify({full_name,email,password})
 });

 const data=await res.json();

 alert(data.message);

 if(res.ok){
  location.href='login.html';
 }

}
