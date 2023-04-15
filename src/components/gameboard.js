import WhereFblthp from "../images/wheresfblthp.jpeg"
import "../styles/gameboard.css"

const Gameboard = (props) => {

  const {
          playingGame, 
          handleBoardClick, 
          questionInfo,
          leftToFind 
        } = props

  const questionPosition = {
    top: questionInfo.top,
    left: questionInfo.left,
    backgroundColor: "black",
    color: "white"
  }

  return (
    <>
      {playingGame && <div id="game--container" onClick={handleBoardClick}>
        {playingGame && <div id="question--div" style={questionPosition}>Test</div>}
        <div id="fib1" className="square--div"></div>
        <div id="fib2" className="square--div"></div>
        <div id="fib3" className="square--div"></div>
        <div id="fib4" className="square--div"></div>
        <div id="fib5" className="square--div"></div>
        <img 
          src={WhereFblthp} 
          alt="Fblthp mosaic with mtg references" 
          className="game--image"
        />
      </div>}
      
    </>
  )
}

export default Gameboard