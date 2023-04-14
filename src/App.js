import "./styles/App.css"
import "./components/leaderboard"
import Gameboard from "./components/gameboard"
import LeaderBoard from "./components/leaderboard"
import InputField from "./components/input"
import GameExplainer from "./components/explain"

function App(props) {
  const {
          explanation,
          named,
          newPlayerEntry,
          onSubmitNewPlayer, 
          leaderBoardArray, 
          scored,
          handleStart,
          playingGame
  
        } = props
  
  return (
    <div className="project--container">
      <GameExplainer 
        explanation={explanation}
        handleStart={handleStart}
      />
      <InputField 
        named={named} 
        newPlayerEntry={newPlayerEntry} 
        onSubmitNewPlayer={onSubmitNewPlayer} 
      />
      <LeaderBoard 
        leaderBoardArray={leaderBoardArray} 
        scored={scored} 
      />
      <Gameboard playingGame={playingGame} />
    </div>
  );
}
 
export default App;






