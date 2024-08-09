import profilepic from './assets/react.svg'
import './index.css'
function Card(){
    return (
        <div className = "Card">
            <img className="card-image" src={profilepic} alt="profile pic"></img>
            <h1 className="card-title">Bro Code</h1>
            <p className="card-text">I make Youtube videos and play video games</p>
        </div>
        


    );

}
export default Card