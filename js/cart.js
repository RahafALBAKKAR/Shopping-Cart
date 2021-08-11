/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the
// removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart;

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
  for (let i =0; i < cartItems.lenght; i++){
    cart.push(new cartItem);

    cartItems.items[i].product;
    cartItems.items[i].quantity;

  }
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  let tableHeaderRowCount = 1;
  let rowcount = table.rowcount.lenght;
  for (let i = tableHeaderRowCount; i < rowcount ; i++){
    table.deleteRow(tableHeaderRowCount);
  }
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
let tbodyEl=document.getElementsByTagNameNS('tbody');
function showCart() {
  for (let i=0; i < cart.items.lenght; i++){
    let rowEl = document.createElement('tr');
    rowEl.textContent = cartItem[i];
    rowEl.appendChild(cart);
  }


  // TODO: Find the table body

  // TODO: Iterate over the items in the cart
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR
  let tableForm = document.getElementById('cart').getElementsByTagName('tbody');

  let num=0;
  let tBody = document.getElementsByTagNameNS('tbody');
  let tr=document.createElement('tr');
  tBody.appendchild(tr);
  tr.textContent=num;



}

function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();
