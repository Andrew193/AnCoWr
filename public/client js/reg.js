function Log(event) {
    event.preventDefault()
    const data=event.target.elements
    fetch("http://localhost:5000/reg",{
        method:"POST",
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body:JSON.stringify({"number":data[0].value,"name":data[1].value})
    })
}
function LogCard(event) {
    event.preventDefault()
    const data=event.target.elements
    fetch("http://localhost:5000/regCard",{
        method:"POST",
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body:JSON.stringify({"dayin":data[0].value,"name":data[1].value,"name2":data[2].value,"name3":data[3].value,
        "male":data[4].value,"bdate":data[5].value})
    })
}