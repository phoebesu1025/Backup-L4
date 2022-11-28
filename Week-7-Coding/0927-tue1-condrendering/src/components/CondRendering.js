import { useState } from "react";

function CondRendering() {
  const [showContent, setShowContent] = useState(false); //boolean flag;
  const [content, setContent] = useState("Click the button!");

  const changeContent = () => {
    if (showContent) {
      setContent("Click the button.");
      setShowContent(!showContent);
    } else {
      setContent("Congrats, you found the secret content!");
      setShowContent(!showContent);
    }
  };

  return (
    <div>
      <div>
        {/*<div>{content}</div>*/}
        {/*condition? true statement: false statement */}
        {/*<div>{showContent ===true ?"Congrats you've found the hidden content" : " Click the button"} </div> */}
        {showContent && "YOU FOUND IT"}
      </div>
      <button onClick={changeContent}>Click Here</button>
    </div>
  );
}

export default CondRendering;
