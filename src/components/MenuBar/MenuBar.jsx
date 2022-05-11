import './MenuBar.scss'
import { NavLink } from "react-router-dom";
import CategoryIcon from "../../lib/Icon/CategoryIcon";
import CustomerIcon from "../../lib/Icon/CustomerIcon";
import HomeIcon from "../../lib/Icon/HomeIcon";
import LocationIcon from "../../lib/Icon/LocationIcon";
import Logo from "../../lib/Icon/Logo";
import ProductIcon from "../../lib/Icon/ProductIcon";
import TexnologyIcon from "../../lib/Icon/TexnologyIcon";

const MenuBar = () => {
    return(
        <div className="menuBar">
              <div className="container">
                  <ul className="container-list">
                      <li className="container-list-logo">
                          <NavLink to="/main" className="container-list-link">
                              <Logo/>
                          </NavLink>
                      </li>
                      <li className="container-list-item">
                          <NavLink to="/main" className="container-link">
                              <div><HomeIcon/></div>
                              <p className="container-link-name">Buyurtmalar</p>
                          </NavLink>
                      </li>

                      <li className="container-list-item">
                          <NavLink to="/customer" className="container-link">
                              <div><CustomerIcon/></div>
                              <p className="container-link-name">Customers</p>
                          </NavLink>
                      </li>

                      <li className="container-list-item">
                          <NavLink to="/category" className="container-link">
                              <div><CategoryIcon/></div>
                              <p className="container-link-name">Toifalar</p>
                          </NavLink>
                      </li>

                      <li className="container-list-item">
                          <NavLink to="/product" className="container-link">
                              <div><ProductIcon/></div>
                              <p className="container-link-name">Maxsulotlar</p>
                          </NavLink>
                      </li>

                      <li className="container-list-item">
                          <NavLink to="/texnology" className="container-link">
                              <div><TexnologyIcon/></div>
                              <p className="container-link-name">Texnologiyalar</p>
                          </NavLink>
                      </li>

                      <li className="container-list-item">
                          <NavLink to="/location" className="container-link">
                              <div><LocationIcon/></div>
                              <p className="container-link-name">Manzil</p>
                          </NavLink>
                      </li>
                  </ul>
              </div>
        </div>
    )
}
export default MenuBar;