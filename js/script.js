const cart = [];

const myButtons = document.getElementsByClassName("myBtn");
for (let btn of myButtons) {
  btn.addEventListener("click", function (e) {
    // console.log(e.target.parentNode.parentNode.children[2].children[0].innerText);
    const pdName = e.target.parentNode.parentNode.children[0].innerText;
    const pdPrice =
      e.target.parentNode.parentNode.children[2].children[0].innerText;

    const pd = {
      pdName: pdName,
      pdPrice: parseInt(pdPrice),
    };

    cart.push(pd);
    displayProduct();
  });
}

function displayProduct() {
  //   console.log("kaj kore re bhai kore");
  document.getElementById("total-product").innerText = cart.length;

  const cartProducts = document.getElementById("cart-products");
  console.log(cartProducts);

  cartProducts.innerHTML = "";
  let total = 0;
  for (let singleProduct of cart) {
    total = total + singleProduct.pdPrice;
    console.log(total);
    const tr = document.createElement("tr");
    tr.innerHTML = `
    <td>${cart.indexOf(singleProduct) + 1}</td>
        <td>${singleProduct.pdName}</td>
        <td>${singleProduct.pdPrice}</td>
    `;
    cartProducts.appendChild(tr);
  }
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <th></th>
    <td class="font-bold text-2xl">Total Price</td>
    <td class="font-bold text-2xl">${total}</td>

  `;
  cartProducts.appendChild(tr);
}
