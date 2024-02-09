fetch("https://fakestoreapi.com/products/").then(res=>res.json()).then(data=>displayProducts(data))


function displayProducts(products){
  let htmlData=``
  products.forEach(p=>{
    htmlData+=`
    <div class="col-4">
      <div class="card" style="width: 18rem;">
        <img src="${p.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${p.title}</h5>
          <p class="card-text">${p.description}.</p>
          <a href="#" class="btn btn-primary">${p.price}</a>
        </div>
      </div>
    </div>
    `
  })
  document.querySelector("#result").innerHTML=htmlData
}

displayProducts()