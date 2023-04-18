import "../styles/sidebar.css"
import Fblthp from "../images/fblthp-avatar.jpg"

const Sidebar = () => {
    return (
      <div className="sidebar">
        <p>Can you find me?</p>
        <img src={Fblthp} className="fblthp--cutout" alt="fblthp hiding"/>
        <p>There are 5 total</p>
      </div>
       
    )
}

export default Sidebar
