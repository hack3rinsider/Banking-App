async function login(){

 const email=document.getElementById('email').value;
 const password=document.getElementById('password').value;

 const res=await fetch("/api/login",{
  method:"POST",
  headers:{'Content-Type':'application/json'},
  body:JSON.stringify({email,password})
 });

 let data = {};

 try{
  data = await res.json();
 }catch(e){
  data = { error: "Invalid server response" };
 }

 if(res.ok && data.token){
  localStorage.setItem("token",data.token);
  localStorage.setItem("user",JSON.stringify(data.user));
  location.href="dashboard.html";
 }else{
  alert(data.message || data.error || "Invalid login");
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

 let data = {};

 try{
  data = await res.json();
 }catch(e){
  data = { error: "Invalid server response" };
 }

 alert(data.message || data.error || "Request completed");

 if(res.ok){
  location.href='login.html';
 }

}
//Wed May 27 05:14:20 PM IST 2026
