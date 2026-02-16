// Manual version of the FILTER utility
function myFilter(arr, callback) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
}

// list of array numbers
let arrayOfNumbers = [1, 2, 3, 4];

// funciton for the less then number
let lessThanThreeFunction = (num) => {
  return num < 3;
};

// displaying the filter
// console.log(myFilter(arrayOfNumbers, lessThanThreeFunction));

// now here wil recreate the MAP utility
function myMap(arr, callback) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }
  return result;
}

// console.log(
//   "Mapp result: ",
//   myMap(arrayOfNumbers, (num) => num * 2),
// );

// here is the reduce utility
function myReduce(arr, callback, initialValue) {
  let accumulator = initialValue;
  for (let i = 0; i < arr.length; i++) {
    accumulator = callback(accumulator, arr[i]);
  }
  return accumulator;
}
// console.log(
//   "reduce here: ",
//   myReduce(arrayOfNumbers, (acc, num) => acc + num, 0),
// );

// object for the bank accoutn
let person = {
  name: "Bilal Akmal",
  money: 2000,

  widrawMoney: function (amountToWidraw) {
    if (this.money < amountToWidraw) {
      console.log("Insufficient Balance.");
      return;
    }
    this.money = this.money - amountToWidraw;

    console.log("Amount Transfered Succesfully.", this.money);
  },
};
person.widrawMoney(200);
console.log(person.money);

// some common string manipulation functions are
let str = "Bilal";

console.log(str.toUpperCase()); //BILAL

console.log(str.split("").reverse().join("")); //laliB

console.log(str.charAt(0).toLocaleLowerCase() + str.slice(1)); //bilal

console.log(str.includes("i")); // true yes i exists

console.log(str.replaceAll("ilal", "ILAL")); // BILAL save it to some vairble to use it

console.log(str.repeat(2)); //BilalBilal

console.log(str.slice(0, 3)); // Bil

let str2 = "Kaleem Shakeel";
let arr = str2.split(" ");
console.log(arr); // [ 'Kaleem', 'Shakeel' ]

console.log(arr.join(" ")); // Kaleem Shakeel

// here are the function for the cart system

let cart = [];

// to add the some products in the cart
let watch = {
  id: 1,
  model: "apple",
  price: 200,
  quantity: 1,
};
function addToCart(product) {
  let existing = cart.find((item) => item.id === product.id);

  if (existing) {
    existing.quantity++;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
}

addToCart(watch);
console.log(cart);

// if user want to add the aadd the same product again he will click the plus button
function updateQuantity(productId, newQuantity) {
  let item = cart.find((item) => item.id === productId);
  if (item) {
    item.quantity = newQuantity;
  }
}

updateQuantity(watch.id, 3);
console.log(cart);

//to remve  item fom the cart
function removeFromCart(productId) {
  cart = cart.filter((item) => item.id !== productId);
}

// removeFromCart(watch.id);
console.log(cart);

// to calculate the total
function getTotal() {
  return cart.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
}

console.log(getTotal());

//remove full cart
function clearCart() {
  cart = [];
}

let batman = {
  health: 100,
  car: 1,
  bike: 1,
};
let { health, car } = batman;
console.log("Batman: ", health);

let villains = ["Joker", "Bane"];
let [villain01, villian2] = villains;
console.log("Villains: ", villian2);

// spread operator

villains = { ...batman, batman };

console.log("Spread operator: ", villains);
