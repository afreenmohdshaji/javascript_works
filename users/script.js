

function displayUsers(users){
    let htmlData=``
    users.forEach(u=>{
        htmlData+=`
        <div class="col m-3">
                <div class="card" style="width: 18rem;">
                    <div class="card-header">
                      ${u.name}
                    </div>
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item">${u.email}</li>
                      <li class="list-group-item">${u.address.city}</li>
                      <li class="list-group-item">${u.phone}</li>
                      <li class="list-group-item">${u.website}</li>
                    </ul>
                </div>
        </div>
        
        `
    })
    document.querySelector("#result").innerHTML=htmlData
}

fetch("https://jsonplaceholder.typicode.com/users/").then(res=>res.json()).then(data=>displayUsers(data))