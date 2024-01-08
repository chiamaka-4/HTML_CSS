var heartLikes = document.querySelectorAll(".fa-regular");
var itemProperties = document.querySelector("cart-items");
// var removeItems = document.getElementsByClassName("cart-items");
var firstDiv = document.querySelector(".div_1");
var footer = document.querySelector(".footer");
var removeButtons = document.querySelectorAll(".price_remove");

let isLiked = false;

heartLikes.forEach(function (icon) {
  icon.addEventListener("click", function () {
    isLiked = !isLiked;
    let className;
    if (isLiked === true) {
      className = "fa-solid fa-heart";
    } else {
      className = "fa-regular fa-heart";
    }
    // set it with dom to change to heart that has been filled using set attribute
    icon.setAttribute("class", className);
  });
});

removeButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    button.closest(".cart-items").remove();
    if (removeButtons.length === 0) {
      remove();
    }
  });
});

var incrementButtons = document.querySelectorAll(".plus-sign");
function increaseEachItemQuantity(incrementBtn) {
  var sibling = incrementBtn.nextElementSibling;

  var quantity = parseInt(sibling.textContent);
  quantity = quantity + 1;
  incrementBtn.textContent = quantity.toString();
  return quantity;
}
var decreaseButtons = document.querySelectorAll(".minus-sign");
function decreaseEachItemQuantity(decrementBtn) {
  var sibling = decrementBtn.nextElementSibling;

  var quantity = parseInt(sibling.textContent);
  quantity = quantity - 1;
  incrementBtn.textContent = quantity.toString();
  return quantity;
}

// create two variables for the increment and decreament
var addBtn = document.querySelectorAll(".plus-sign");
var decreaseBtn = document.querySelectorAll(".minus-sign");

// to get the original prices and increment, create a function first

// function getOriginalPrices() {

// }

// use for loop
var prices = [];

for (let i = 0; i < addBtn.length; i++) {
  // create a local variable for the addbtn with the index of i
  var button = addBtn[i];

  // get original prices in other to increment the prices. from the button, tranverse to the parent element , then to the paragraph

  var priceParagraph = button.parentElement.nextElementSibling;

  // to remove the # sign to get the number use the var for the element sibling then .slice
  // parsint will convert it from a string to a number

  var originalPrice = parseInt(priceParagraph.textContent.slice(1));
  // initialize an empty array before the increment for loop then add the prices to the empty array using . push
  prices.push(originalPrice);

  // add event listener to the btn and pass in a parameter int the function
  button.addEventListener("click", function (event) {
    var buttonClicked = event.target;

    // create a var then get the parent element with its children
    // since we are working with the plus sign, use the index of 0
    var items = buttonClicked.parentElement.children[0];

    // now get the value of the plus sign
    var ItemValue = items.textContent;

    var number = buttonClicked.parentElement.children[1];
    var numberValue = number.textContent;
    var newNumberValue = parseInt(numberValue) + 1;
    number.textContent = newNumberValue;
    // to increment the prices
    var newPriceValue = newNumberValue * prices[i];
    // to concatinate two strings(#) back to the price value

    var newPriceValueString = "#" + newPriceValue.toString();
    var w = buttonClicked.parentElement.nextElementSibling;
    w.textContent = newPriceValueString;
    subTotalprice();
    subTotalQuantity();
  });
}

// for the decrement
// use a for loop

for (let i = 0; i < decreaseBtn.length; i = i + 1) {
  // create a local variable for the addbtn with the index of i
  var button = decreaseBtn[i];
  // add event listener to the btn and pass in a parameter int the function
  button.addEventListener("click", function (event) {
    var buttonClicked = event.target;

    // create a var then get the parent element with its children
    // since we are working with the plus sign, use the index of 0
    var items = buttonClicked.parentElement.children[2];

    // now get the value of the plus sign
    var ItemValue = items.textContent;

    var number = buttonClicked.parentElement.children[1];
    var numberValue = number.textContent;
    var newNumberValue = parseInt(numberValue) - 1;
    if (newNumberValue >= 0) {
      number.textContent = newNumberValue;

      var newPriceValue = newNumberValue * prices[i];
      console.log(newPriceValue);
      // to concatinate two strings(#) back to the price value

      var newPriceValueString = "#" + newPriceValue.toString();
      var w = buttonClicked.parentElement.nextElementSibling;
      w.textContent = newPriceValueString;

      subTotalprice();
      subTotalQuantity();
    }
    return;
  });
}
function subTotalprice() {
  let totalPrice = 0;
  var itemPrices = document.querySelectorAll(".price");

  itemPrices.forEach(function (itemPrices) {
    var prices = parseInt(itemPrices.textContent.slice(1));

    totalPrice = totalPrice + prices;
  });

  var totalPriceString = "#" + totalPrice.toString();

  var subTotalElement = document.querySelector(".sub_totalprice");
  subTotalElement.textContent = totalPriceString;
}

function subTotalQuantity() {
  let totalQuantity = 0;
  var itemQuantity = document.querySelectorAll(".num");

  itemQuantity.forEach(function (itemQuantity) {
    var prices = parseInt(itemQuantity.textContent);
    totalQuantity = totalQuantity + prices;
  });
  c1c;

  // var totalQuantityString = "#" + totalQuantity.toString();

  var subTotalElement = document.querySelector(".totalquantity");

  subTotalElement.textContent = totalQuantity.toString() + " items";
}
