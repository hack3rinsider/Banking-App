const API = "/api";
function getToken(){
 return localStorage.getItem("token");
}

function setToken(token){
 localStorage.setItem("token", token);
}

function logout(){
 localStorage.clear();
 location.href="login.html";
}

async function safeFetch(url, options = {}){

 try{

  const res = await fetch(API + url, {
   ...options,
   headers:{
    "Content-Type":"application/json",
    ...(options.headers || {})
   }
  });

  if(res.status === 401){
   logout();
   return null;
  }

  return res;

 }catch(err){
  console.log("API error:", err);
  return null;
 }

}
