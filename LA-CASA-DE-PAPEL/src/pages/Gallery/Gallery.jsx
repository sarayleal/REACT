import { NavLink } from "react-router-dom";
import "./Gallery.css";

const Gallery = () => {
  return <main class="gallery">
  <NavLink to="/atracadores">
    <div className="divAtracadores">
    <h2>Atracadores</h2>
    </div>
    </NavLink>
    <NavLink to="/policias">
    <div className="divPolicias">
    <h2>Policias/Militares</h2>
    </div>
    </NavLink>
    <NavLink to="/rehenes">
    <div className="divRehenes">
    <h2>Rehenes</h2>
    </div>
    </NavLink>
  </main>
};

export default Gallery;