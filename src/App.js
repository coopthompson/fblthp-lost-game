import "./styles/App.css"
import "./components/leaderboard"
import Gameboard from "./components/gameboard"
import LeaderBoard from "./components/leaderboard"
import InputField from "./components/input"
import GameExplainer from "./components/explain"

function App(props) {
  const {
          explanationDisplayed,
          inputDisplayed,
          newPlayerEntry,
          onSubmitNewPlayer, 
          leaderBoardArray, 
          leaderBoardDisplayed,
          handleStart,
          playingGame,
          handleBoardClick,
          displayQuestion,
          questionInfo,
          leftToFind,
          handleNo,
          handleYes,
          questionStyling
        } = props
  
  return (
    <div className="project--container">
      <GameExplainer 
        explanationDisplayed={explanationDisplayed}
        handleStart={handleStart}
      />
      <InputField 
        inputDisplayed={inputDisplayed} 
        newPlayerEntry={newPlayerEntry} 
        onSubmitNewPlayer={onSubmitNewPlayer} 
      />
      <LeaderBoard 
        leaderBoardArray={leaderBoardArray} 
        leaderBoardDisplayed={leaderBoardDisplayed} 
      />
      <Gameboard 
        playingGame={playingGame} 
        handleBoardClick={handleBoardClick}
        displayQuestion={displayQuestion}
        questionInfo={questionInfo}
        leftToFind={leftToFind}
        handleNo={handleNo}
        handleYes={handleYes}
        questionStyling={questionStyling}
      />
    </div>
  );
}
 
export default App;






