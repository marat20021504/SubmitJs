document.getElementById("Submit").addEventListener("click", function (event) {
    event.preventDefault()

    let name = (document.getElementById("name")).value
    let age = (document.getElementById("age")).value

    let tbody = document.getElementById("tbody")

    let tr = document.createElement("tr")

    let td1 = document.createElement("td")
    let td2 = document.createElement("td")

    td1.innerText = name
    td2.innerText = age

    tr.appendChild(td1)
    tr.appendChild(td2)

    tbody.appendChild(tr)

})