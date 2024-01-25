var product={
    code:"mnt34",
    title:"oreo",
    category:"food",
    avlqty:550
}

console.log(product.title);

if("price" in product){
    console.log(" founded");
}
else{
    console.log("not founded");
}

product["price"]=120
console.log(product);