import { Link } from "react-router-dom"
import "../styles/leaderboard.css"

const LeaderBoard = (props) => {
    const { leaderBoardDisplayed, leaderBoardArray} = props
    return (
        <div>
            {leaderBoardDisplayed && <div>
                <div className="leader--label">Leader Board</div>
                <div className="leader--board" name="leaderBoard">
                  <div className="ranking--categories">
                    <p>Rank</p>
                    <p>Name</p>
                    <p>Time</p>
                  </div>
                  {leaderBoardArray}
                </div>
                <div className="leaderBoard--buttons">
                  <Link to="/credits" className="buttons">View Credits</Link>
                </div>
            </div>}
        </div>
        )
    }
        
export default LeaderBoard