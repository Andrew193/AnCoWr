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