function AddComment(event) {
    event.preventDefault()
    const data=event.target.elements
    fetch("http://localhost:5000/addComment",{
        method:"POST",
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body:JSON.stringify({"name":data[0].value,"message":data[1].value,date:`${(new Date()).getDay()}:${(new Date()).getMonth()}:${(new Date()).getFullYear()}`})
    })
}
function GetComments() {
    fetch("http://localhost:5000/getComment").then((response)=>response.json()).then((result)=>makeComments(result))
}
function makeComments(data) {
    let wrap=document.createDocumentFragment();
    data.data.forEach((value)=>{
        const item=document.createElement("div")
        item.innerHTML=`<h2>${value.name}</h2>
        <p>${value.message}</p>
        <h4>${value.date}</h4>`
        item.classList.add("commentsItem")
        wrap.append(item)
    }) 
    AppendItems(wrap);
}
function AppendItems(data) {
    document.querySelector(".CommentsPlace").appendChild(data)
    document.querySelector(".Loader").classList.remove("Loader")
}
window.onload=()=>{
    GetComments()
}