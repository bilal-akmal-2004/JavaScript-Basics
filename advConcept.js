function Counter() {
  let count = 0;

  console.log(this);
  this.up = function () {
    return ++count;
  };
  this.down = function () {
    return --count;
  };
}
let counter = new Counter();
console.log(counter.up());
console.log(counter.up());
console.log(counter.down());

let eventEmitter = document.getElementById("eventEmitter");
eventEmitter.addEventListener("click", () => {
  console.log("Event clicked");
});

// module pattern for the to do list will look like this

let todoModule = (function () {
  // private todos here no can acces these
  let todos = [];

  //   to add the value
  function add(todo) {
    todos.push(todo);
  }

  function remove(todoIndex) {
    todos.splice(todoIndex, 1);
  }

  function getAll() {
    return todos;
  }

  //   these are the public function we use these outside
  return { add, remove, getAll };
})();

todoModule.add("he");
// we can ascces the todos direclty bcz it is priviate
console.log(todoModule.todos); //undefined

// we can acces them using the public funciton
console.log(todoModule.getAll()); // todos []

function makeArmy() {
  let shooters = [];
  let i = 0;
  while (i < 10) {
    let shooter = function () {
      alert(i); // This function remembers the reference to 'i'
    };
    shooters.push(shooter);
    i++;
  }
  return shooters;
}

let shoot = makeArmy();
console.log(shoot);
