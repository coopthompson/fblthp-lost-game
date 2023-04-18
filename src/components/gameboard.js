import WhereFblthp from "../images/wheresfblthp.jpeg"
import "../styles/gameboard.css"

const Gameboard = (props) => {

  const {
          playingGame, 
          handleBoardClick,
          handleNo,
          handleYes,
          questionStyling,
          displayQuestion,
          message,
          messageDisplayed
        } = props

  return (
    <>
      {playingGame && <div id="game--container" onClick={handleBoardClick}>
        {messageDisplayed && <div className="click--message">
          {message}
        </div>}
        {displayQuestion && <div id="question--div" style={questionStyling}>
          <p>Did you find Fblthp?</p>
          <button onClick={handleYes}>Yes</button>
          <button onClick={handleNo}>No</button>
        </div>}
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