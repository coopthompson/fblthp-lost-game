import { Link } from "react-router-dom"
import "./styles/credits.css"
import Fblthp from "./images/fblthpchilling.jpg"

const Credits = () => {
    return (
        <div className="credits--page">
            <img className="fblthp--image"src={Fblthp} alt="Fblthp drinking his drink and relaxing"/>
            <div className="credits--container">
                <h2 className="gratitude">Thanks for Playing!</h2>
                <p>Fblthp is the character from MTG which is owned by Hasbro and Wizards of the Coast
                    The image used for the gameboard was from the Fblthp: Completely, Utterly, Totally Lost Secret Lair and was created by Marija Tiurina.
                    The image on this page was also created by Marija Tiurina.
                    The Fblthp image on the starting page was created by Jesper Ejsing.
                    The Fblthp used in the sidebar was from the card Totally Lost and was created by David Palumbo.
                    This game was created by Cooper Thompson as part of the Odin Project.
                </p>
                <Link className="return" to="/">Return to Main Page</Link>
            </div>
        </div>
    )
}

export default Credits