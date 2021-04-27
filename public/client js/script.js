document.body.querySelector(".color").addEventListener("click",(event)=>{
    document.querySelector(".Container").classList.toggle("ColorMode")
})
fetch("http://localhost:5000/").then((res)=>res.json()).then((e)=>console.log(e.test))