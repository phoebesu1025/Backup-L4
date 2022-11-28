import Car from "./Car.js"
import Person from "./Person.js"

<Person name="Phoebe" age="25"></Person>

const fruits1 = [
  {
    name: "Apple",
    units: 3,
    price: 0.25,
  },
  {
    name: "Mango",
    units: 6,
    price: 0.35,
  },
  {
    name: "Banana",
    units: 4,
    price: 0.15,
  },
]
const statement = fruits1.map((fruit, index) => {
  return (`${index + 1} ) ${fruit.units} of ${fruit.name} costs  ${fruit.price * fruit.units} `);
})

console.log(statement)

const numbers = [1, 4, 9];
const newNumber = numbers.forEach((number) => number + 1);
console.log(newNumber);


const fruits = ["apple", "mango", "orange"];

fruits.map((fruit, index) => {
  console.log(`${index}. ${fruit}`);
});


const myFavCar = "Tesla"
function App() {
  return (
    <div className="App">
      {/*Passing data to a child component */}
      <Car favCar={myFavCar} carColor="white" carName="Toyota"></Car>
      {5 + 5}

      {fruits1.map((fruit, index) => {
        return (
          <div>
            {index + 1}) {fruit.units} units of {fruit.name}
            costs ${(fruit.price * fruit.units).toFixed(2)}
          </div>
        );
      })}
      {[<p>Oh!</p>, <p>what a beautiful morning!</p>]
      }
      <Person name="Phoebe" age="25"></Person>
    </div >
  );
}



//Object Destructuring
const user = {
  id: 42,
  isVerified: true
};

//const id = user.id;
//const isVerified = user.isVerified;
const { id, isVerified } = user;
console.log(id, isVerified);


const myObj = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
  company: {
    name: "Romaguera-Crona",
    catchPhrase: "It's collaboration time",
    bs: "harness real-time e-markets",
  },
};

const { name, email } = myObj;
console.log(name, email);

//Destructuring Arrays
const [first, , third] = ['Laide', 'Gabriel', 'Jets']
console.log(first, third);















export default App;