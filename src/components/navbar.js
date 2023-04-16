import "../styles/navbar.css"
import Timer from "../components/timer"

const Navbar = (props) => {

    const { leftToFind, time, isRunning } = props

    return (
        <div className="navbar--container">
            <div className="navbar">
                <Timer time={time} isRunning={isRunning} />
                <h2>Fblthp Lost</h2>
                <p>{leftToFind} remaining</p>
            </div>
        </div>
    )
}

export default Navbar