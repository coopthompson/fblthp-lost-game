import "../styles/navbar.css"

const Navbar = (props) => {

    const { leftToFind } = props

    return (
        <div className="navbar--container">
            <div className="navbar">
                <div>timer</div>
                <h2>Fblthp Lost</h2>
                <p>{leftToFind} remaining</p>
            </div>
        </div>
    )
}

export default Navbar