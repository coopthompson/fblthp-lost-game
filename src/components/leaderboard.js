import "../styles/leaderboard.css"

const LeaderBoard = (props) => {
    const { scored, leaderBoardArray} = props
    return (
        <div>
            {scored && <div>
                <div className="leader--label">Leader Board</div>
                <div className="leader--board" name="leaderBoard">
                <div className="ranking--categories">
                  <p>Rank</p>
                  <p>Name</p>
                  <p>Time</p>
                </div>
                  {leaderBoardArray}
                </div>
            </div>}
        </div>
        )
    }
        
export default LeaderBoard