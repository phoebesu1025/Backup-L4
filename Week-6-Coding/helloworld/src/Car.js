import "./App.css"

function Car({ carName, favCar }) {
    {/*Receiving data from a child component*/ }
    console.log(carName);
    return (
        <div>
            My car is {carName}. My fav car is: {favCar}.🛸
        </div>
    );
}



export default Car;