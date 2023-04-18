import "../styles/explain.css"
import Fblthp from "../images/fblthp.jpg"

const GameExplainer = (props) => {

    const { explanationDisplayed, handleStart } = props

    return (
        <>
          {explanationDisplayed && <div className="rules--border">
            <div className="rules--container">
              <p>
                Welcome to Fblthp Lost! 
                This goal of this game is to find Fblthp, 
                the little blue Cyclops from the plane of Ravnica
                in the Magic the Gathering Universe.
                There are five total Fblthp for you to find.
                Find them all and your time will be importalized on our leader board. 
              </p>
              <label htmlFor="fblthp-photo">This is Fblthp</label>
              <img name="fblthp-photo" className="fblthp--portrait" src={Fblthp} alt="Fblthp being cute"/>
              <button className="play--button" onClick={handleStart}>Start Game</button>
            </div>
          </div>}
        </>
        
    )
}

export default GameExplainer