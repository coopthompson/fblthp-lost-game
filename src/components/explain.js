import "../styles/explain.css"

const GameExplainer = (props) => {

    const { explanation } = props

    return (
        <div className="rules--border">
            {explanation && <div className="rules--container">
                <p>
                    Welcome to Fblthp Lost! 
                    This goal of this game is to find Fblthp, 
                    the little blue Cyclops from the plane of Ravnica
                    in the Magic the Gathering Universe.
                    There are five total Fblthp for you to find.
                    Find them all and your time will be importalized on our leader board. 
                </p>
                <button className="play--button">Start Game</button>
            </div>}
        </div>
    )
}

export default GameExplainer