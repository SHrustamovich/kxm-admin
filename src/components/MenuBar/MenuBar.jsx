import './MenuBar.scss'
import { NavLink } from "react-router-dom";
import CategoryIcon from "../../lib/Icon/CategoryIcon";
// import CustomerIcon from "../../lib/Icon/CustomerIcon";
import HomeIcon from "../../lib/Icon/HomeIcon";
import LocationIcon from "../../lib/Icon/LocationIcon";
// import Logo from "../../lib/Icon/Logo";
import Logo from '../../lib/image/logokxm.png'
import ProductIcon from "../../lib/Icon/ProductIcon";
import TexnologyIcon from "../../lib/Icon/TexnologyIcon";

const MenuBar = () => {
    return(
        <div className="menuBar">
              <div className="container">
                  <ul className="container-list">
                      <li className="container-list-logo">
                          <NavLink to="/main" className="container-list-link">
                             <img src={Logo} alt="" className="logo-img" width={500} />
                          </NavLink>
                      </li>
                      <li className="container-list-item">
                          <NavLink to="/main" className="container-link">
                              <div><HomeIcon/></div>
                              <p className="container-link-name">Main</p>
                          </NavLink>
                      </li>

                      <li className="container-list-item">
                          <NavLink to="/category" className="container-link">
                              <div><CategoryIcon/></div>
                              <p className="container-link-name">Courses</p>
                          </NavLink>
                      </li>

                      <li className="container-list-item">
                          <NavLink to="/product" className="container-link">
                              <div><ProductIcon/></div>
                              <p className="container-link-name">Birthday</p>
                          </NavLink>
                      </li>

                      <li className="container-list-item">
                          <NavLink to="/texnology" className="container-link">
                              <div><TexnologyIcon/></div>
                              <p className="container-link-name">News</p>
                          </NavLink>
                      </li>

                      <li className="container-list-item">
                          <NavLink to="/location" className="container-link">
                              <div><LocationIcon/></div>
                              <p className="container-link-name">Network</p>
                          </NavLink>
                      </li>
                  </ul>
              </div>
        </div>
    )
}
export default MenuBar;