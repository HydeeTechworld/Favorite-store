fetch("https://fakestoreapi.com/products")
.then(res=>res.json())
.then(data=>{
let show="";
data.map(value=>{
show +=`<div class="card">
 <h5>${value.title} </h5>
 <img src=${value.image} class="image" alt="image">
 <p>${value.description} </p>
 <p class="category"><span>Category:</span>${value.category}</p>
 <p class="price"><span>Price:</span>${value.price}</p>
 </div>`
})
document.getElementById("card").innerHTML=show
})
.catch(err=>{
console.log(err)
})