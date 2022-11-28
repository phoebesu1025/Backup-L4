import { useState } from "react";
import catPic from "./cat.jpg";
import dogPic from "./dog.jpg";

function CatDogFoxRabbit(props) {
  const [animalImageURL, setAnimalImageURL] = useState(false);

  const handleShowCat = () => setAnimalImageURL(catPic); //button function
  const handleShowDog = () => setAnimalImageURL(dogPic);
  const handleShowFox = () => setAnimalImageURL("https://media.wired.co.uk/photos/606db0c8d051e15de128c7a3/master/w_1600,c_limit/william-doranflickrcc-by-nc-sa-20.jpg"
  );
  const handleShowRabbit = () => setAnimalImageURL("https://i.pinimg.com/originals/ee/74/e3/ee74e39fc1a451f495d8ac54bbd665d0.jpg"
  );

  return (
    <div>
      <button onClick={handleShowCat}>Show me the Cat</button>
      <button onClick={handleShowDog}>Show me the Dog</button>
      <br />
      <button onClick={handleShowFox}>Show me the Fox</button>
      <button onClick={handleShowRabbit}>Show me the  Rabbit</button>
      <img src={animalImageURL} width="50%"></img>


    </div>
  );
}
export default CatDogFoxRabbit;
{/*{showACat && <img src={catPic} width="50%" />}
      {showADog && <img src={dogPic} width="50%" />}
      {showAFox && (
        <img
          src="https://media.wired.co.uk/photos/606db0c8d051e15de128c7a3/master/w_1600,c_limit/william-doranflickrcc-by-nc-sa-20.jpg"
          width="50%"
        />
      )}
      {showARabbit && (
        <img
          src="https://i.pinimg.com/originals/ee/74/e3/ee74e39fc1a451f495d8ac54bbd665d0.jpg"
          width="50%"
        />
      )}*/}