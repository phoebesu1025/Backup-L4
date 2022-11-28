import dogPic from "./dog.jpg";
import "../App.css"

function Home() {
    return (
        <div>
            This is the home page
            <br />
            <img src={dogPic} width="70%"></img>
        </div>

    )
}

export default Home;