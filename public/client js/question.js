function AddQuestion(event) {
    event.preventDefault()
    const data=event.target.elements
    fetch("http://localhost:5000/addQuestion",{
        method:"POST",
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body:JSON.stringify({"feed":data[2].value,"name":data[0].value,"message":data[1].value})
    })
}