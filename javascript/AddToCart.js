// open cart modal
const cart = document.querySelector('#cart');
const cartModalOverlay = document.querySelector('.cart-modal-overlay');

cart.addEventListener('click', () => {
  if (cartModalOverlay.style.transform === 'translateX(200%)'){
    cartModalOverlay.style.transform = 'translateX(0)';
  } else {
    cartModalOverlay.style.transform = 'translateX(200%)';
  }
})
// end of open cart modal

// close cart modal
const closeBtn = document.querySelector ('#close-btn');

closeBtn.addEventListener('click', () => {
  cartModalOverlay.style.transform = 'translateX(200%)';
});

cartModalOverlay.addEventListener('click', (e) => {
  if (e.target.classList.contains('cart-modal-overlay')){
    cartModalOverlay.style.transform = 'translateX(200%)'
  }
})
// end of close cart modal

// add products to cart
const addToCart = document.getElementsByClassName('add-to-cart');
const productRow = document.getElementsByClassName('product-row');

for (var i = 0; i < addToCart.length; i++) {
  button = addToCart[i];
  button.addEventListener('click', addToCartClicked)
}

function addToCartClicked (event) {

  button = event.target;
  var cartItem = button.parentElement;
  var price = cartItem.getElementsByClassName('product-price')[0].innerText;
  var pricepak = cartItem.getElementsByClassName('product-pricePAK')[0].innerText;
  
  
  var imageSrc = cartItem.getElementsByClassName('product-image')[0].src;
  addItemToCart (pricepak, price,  imageSrc);
  updateCartPrice()
}

function addItemToCart (pricepak, price, imageSrc) {
  
  var productRow = document.createElement('div');
  productRow.classList.add('product-row');
  var productRows = document.getElementsByClassName('product-rows')[0];
  var cartImage = document.getElementsByClassName('cart-image');
  
  for (var i = 0; i < cartImage.length; i++){
    if (cartImage[i].src == imageSrc){
      alert ('This item has already been added to the cart')
      return;
    }
  }
  
  var cartRowItems = `
  <div class="product-row">
         <hr>
        <img class="cart-image" src="${imageSrc}" alt="">
        <span class ="cart-price">${price}</span>
         <span class ="cart-price2">${pricepak}</span>
        <input class="product-quantity" type="number" value="1">
        <button class="remove-btn">Remove</button>
        </hr>
        </div>
        
      `
  productRow.innerHTML = cartRowItems;
  productRows.append(productRow);
  productRow.getElementsByClassName('remove-btn')[0].addEventListener('click', removeItem)
  productRow.getElementsByClassName('product-quantity')[0].addEventListener('change', changeQuantity)
  updateCartPrice()
}
// end of add products to cart

// Remove products from cart
const removeBtn = document.getElementsByClassName('remove-btn');
for (var i = 0; i < removeBtn.length; i++) {
  button = removeBtn[i]
  button.addEventListener('click', removeItem)
}

function removeItem (event) {
  btnClicked = event.target
  btnClicked.parentElement.parentElement.remove()
  updateCartPrice()
}

// update quantity input
var quantityInput = document.getElementsByClassName('product-quantity')[0];

for (var i = 0; i < quantityInput; i++){
  input = quantityInput[i]
  input.addEventListener('change', changeQuantity)
}



function changeQuantity(event) {
  var input = event.target
  if (isNaN(input.value) || input.value <= 0){
    input.value = 1
  }
  updateCartPrice()
}
// end of update quantity input

// update total price
function updateCartPrice() {
  var total = 0
  for (var i = 0; i < productRow.length; i += 2) {
    cartRow = productRow[i]
  var priceElement = cartRow.getElementsByClassName('cart-price')[0]
  var quantityElement = cartRow.getElementsByClassName('product-quantity')[0]
  var price = parseFloat(priceElement.innerText.replace('$', ''))
  var quantity = quantityElement.value
  total = total + (price * quantity )
    
  }
  document.getElementsByClassName('total-price3')[0].innerText =   'Rs ' + parseInt(total * 217) ;
  document.getElementsByClassName('total-price')[0].innerText =  '$ ' + parseFloat(total).toFixed(2);
  document.getElementsByClassName('total-price5')[0].innerText =  '€ ' +  parseFloat(total * 1.03).toFixed(2) ;
  document.getElementsByClassName('total-price6')[0].innerText =  '£ ' +  parseFloat(total * 0.90).toFixed(2) ;
   document.getElementsByClassName('total-price7')[0].innerText =   'د.إ ' +  parseFloat(total * 3.67).toFixed(2) ;
   document.getElementsByClassName('total-price8')[0].innerText =   '₹ ' +  parseFloat(total * 82.18).toFixed(2) ;
document.getElementsByClassName('cart-quantity')[0].textContent = i /= 2;






}

function menudiscount() {
  var total = 0
  for (var i = 0; i < productRow.length; i += 2) {
    cartRow = productRow[i]
  var priceElement = cartRow.getElementsByClassName('cart-price')[0]
  var quantityElement = cartRow.getElementsByClassName('product-quantity')[0]
  var price = parseFloat(priceElement.innerText.replace('$', ''))
  var quantity = quantityElement.value
  total = total + (price * quantity )
    
  }
  document.getElementsByClassName('total-price')[0].innerText =  '$ ' + parseFloat(total).toFixed(2);
  document.getElementsByClassName('total-price3')[0].innerText =   'Rs ' + parseInt(total * 217) ;
  document.getElementsByClassName('total-price5')[0].innerText =  '€ ' +  parseFloat(total * 1.03).toFixed(2) ;
  document.getElementsByClassName('total-price6')[0].innerText =  '£ ' +  parseFloat(total * 0.90).toFixed(2) ;
   document.getElementsByClassName('total-price7')[0].innerText =   'د.إ ' +  parseFloat(total * 3.67).toFixed(2) ;
   document.getElementsByClassName('total-price8')[0].innerText =   '₹ ' +  parseFloat(total * 82.18).toFixed(2) ;

document.getElementsByClassName('cart-quantity')[0].textContent = i /= 2;

var redmenu =document.getElementById("asdasd");
var redmenu2 =document.getElementById("asdss");
var dis = document.getElementById("dis-head");
var disfa = document.getElementById("discountarea");

if( total * 217 >= 1000  || total >= 4.59 || total * 1.03  >= 4.74 || total * 0.90 >= 4.16 || total * 3.67 >= 16.87 || total * 82.18 >= 377.69){


  res = total * 0.70 ;
res2 = total * 0.70 * 219.62 ;
redmenu2.innerHTML = "RS " + parseInt(res2) ;
redmenu.innerHTML = "$ " +  parseFloat(res).toFixed(2) ;
dis.style.display = "block";
disfa.style.display = "block";
}
else{
  alert("SHOPPING MORE THAN RS. 1000 ");
  disfa.style.display = "none";
}



}




// end of update total price

// purchase items
const purchaseBtn = document.querySelector('.purchase-btn');

const closeCartModal = document.querySelector('.cart-modal');

purchaseBtn.addEventListener('click', purchaseBtnClicked)

function purchaseBtnClicked () {
 
  cartModalOverlay.style.transform= 'translateX(100%)'
 var cartItems = document.getElementsByClassName('product-rows')[0]
 while (cartItems.hasChildNodes()) {
   cartItems.removeChild(cartItems.firstChild)
   
 }
  updateCartPrice()
}
// end of purchase items

//alert user if cart is empty


function showcurrencyone(){
  var cur1 = document.getElementById("total-price3"); 
  var cur2 = document.getElementById("total-pricesad"); 
  var cur3 = document.getElementById("redmenusd3"); 
  var cur4 = document.getElementById("total-price"); 
  var cur5 = document.getElementById("redmenu31"); 
  var cur6 = document.getElementById("redmenu3"); 

  cur1.style.display = "block";
  cur2.style.display = "none";
  cur3.style.display = "none";
  cur4.style.display = "none";
  cur5.style.display = "none";
  cur6.style.display = "none";

}

function showcurrencytwo(){
  var cur1 = document.getElementById("total-price3"); 
  var cur2 = document.getElementById("total-pricesad"); 
  var cur3 = document.getElementById("redmenusd3"); 
  var cur4 = document.getElementById("total-price"); 
  var cur5 = document.getElementById("redmenu31"); 
  var cur6 = document.getElementById("redmenu3"); 
  cur1.style.display = "none";
  cur2.style.display = "block";
  cur3.style.display = "none";
  cur4.style.display = "none";
  cur5.style.display = "none";
  cur6.style.display = "none";
}

function showcurrencythree(){
  var cur1 = document.getElementById("total-price3"); 
  var cur2 = document.getElementById("total-pricesad"); 
  var cur3 = document.getElementById("redmenusd3"); 
  var cur4 = document.getElementById("total-price"); 
  var cur5 = document.getElementById("redmenu31"); 
  var cur6 = document.getElementById("redmenu3"); 
  cur1.style.display = "none";
  cur2.style.display = "none";
  cur3.style.display = "block";
  cur4.style.display = "none";
  cur5.style.display = "none";
  cur6.style.display = "none";
}


function showcurrencyfour(){
  var cur1 = document.getElementById("total-price3"); 
  var cur2 = document.getElementById("total-pricesad"); 
  var cur3 = document.getElementById("redmenusd3"); 
  var cur4 = document.getElementById("total-price"); 
  var cur5 = document.getElementById("redmenu31"); 
  var cur6 = document.getElementById("redmenu3"); 
  cur1.style.display = "none";
  cur2.style.display = "none";
  cur3.style.display = "none";
  cur4.style.display = "block";
  cur5.style.display = "none";
  cur6.style.display = "none";
}

function showcurrencyfive(){

  var cur1 = document.getElementById("total-price3"); 
  var cur2 = document.getElementById("total-pricesad"); 
  var cur3 = document.getElementById("redmenusd3"); 
  var cur4 = document.getElementById("total-price"); 
  var cur5 = document.getElementById("redmenu31"); 
  var cur6 = document.getElementById("redmenu3"); 

  cur1.style.display = "none";
  cur2.style.display = "none";
  cur3.style.display = "none";
  cur4.style.display = "none";
  cur5.style.display = "block";
  cur6.style.display = "none";
}

function showcurrencysix(){

  var cur1 = document.getElementById("total-price3"); 
  var cur2 = document.getElementById("total-pricesad"); 
  var cur3 = document.getElementById("redmenusd3"); 
  var cur4 = document.getElementById("total-price"); 
  var cur5 = document.getElementById("redmenu31"); 
  var cur6 = document.getElementById("redmenu3"); 

  cur1.style.display = "none";
  cur2.style.display = "none";
  cur3.style.display = "none";
  cur4.style.display = "none";
  cur5.style.display = "none";
  cur6.style.display = "block";
}