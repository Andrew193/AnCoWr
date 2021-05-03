function GetComments() {
    fetch("http://localhost:5000/getRooms").then((response) => response.json()).then((result) => makeComments(result))
}
function makeComments(data) {
    let wrap = document.createDocumentFragment();
    data.data.forEach((value) => {
        if (value.isready) {
            const item = document.createElement("div")
            item.innerHTML = `<h2>Тип номера ${value.type}</h2>
            <h4>Номер ${value.number}</h4>
            <p>Находится на этаже ${value.floor}. Стоимость за ночь ${value.price}. Телефон обслуживания ${value.phone}</p>`
            item.classList.add("commentsItem")
            wrap.append(item)
        } else{
            const item = document.createElement("div")
            item.innerHTML = `<h2>Тип номера ${value.type}</h2>
            <h4>Номер ${value.number}</h4>
            <p>Номер занят</p>`
            item.classList.add("commentsItem")
            wrap.append(item)
        }
    })
    AppendItems(wrap);
}
function AppendItems(data) {
    document.querySelector(".RoomsPlace").appendChild(data)
    document.querySelector(".Loader").classList.remove("Loader")
}