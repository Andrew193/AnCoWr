function GetNews(limit=3) {
    fetch("http://localhost:5000/getNews").then((response)=>response.json()).then((result)=>makeNews(result))
}
function makeNews(data) {
    let wrap=document.createDocumentFragment();
    data.data.forEach((value)=>{
        const item=document.createElement("div")
        item.innerHTML=`<h3>${value.title}</h3>
        <h5 class="newsDate">${value.date}</h5>
        <p>${value.message}</p>`
        item.classList.add("newsItem")
        wrap.append(item)
    }) 
    AppendItems(wrap);
}
function AppendItems(data) {
    document.querySelector(".NewsPlace").appendChild(data)
    document.querySelector(".Loader").classList.remove("Loader")
}
window.onload=()=>{
    GetNews()
}