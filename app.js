let tbContainer = document.getElementById("tb-container")
let btnSort = document.getElementById("btn-sort")
let users = null 



fetch("https://jsonplaceholder.typicode.com/users")
.then(response=>response.json())
.then(data=>users=data)



let myInterval = setInterval(() => {
    if(users!=null){
        btnSort.className = "btn btn-sm btn-success"
        DataniDoldur(users)
        clearInterval(myInterval)
    }
}, 1000);




let order_by = true
btnSort.addEventListener("click",function(e){
    e.preventDefault()   
    users.reverse() 
    if(order_by){        
        DataniDoldur(users)
        order_by = false
        console.log("Kliklendi - False Oldu")
    } else {
        DataniDoldur(users)
        order_by = true
        console.log("Kliklendi - True Oldu")

    }
})


function DataniDoldur(array){
    tbContainer.innerHTML = ""
    for (let i = 0; i < array.length; i++) {
        tbContainer.innerHTML+=`
        <tr class="animate__animated animate__fadeIn">
            <th scope="row">${array[i].id}</th>
            <td>${array[i].name}</td>
        </tr>
        `
    }
}