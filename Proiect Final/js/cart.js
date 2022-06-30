let produs = {};
let url =
  "https://magazinonline-4e4cd-default-rtdb.europe-west1.firebasedatabase.app/";
let index = window.location.search.substring(4);

if (index.length < 1) {
  window.location = "index.html";
}
async function getLista() {
  const response = await fetch(url + index + ".json");
  produs = await response.json();
  draw();
}
function draw(){
  let cartTable = document.querySelector("#cart-container > table > tbody")
  let cart = localStorage.getItem("cart")
  if(cart === null) {
    cart = [];
  }else {
    cart = JSON.parse(cart)
  }
  let str = "";
  for (let c of cart) {
    str+=`
    <tr>
        <td>${c.name}</td>
        <td>${c.image}</td>
        <td>${c.price}</td>
        <td>${c.quantity}</td>`
  }
  cartTable.innerHTML = str
}
