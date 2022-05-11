import './Header.scss'
import Search from '../../lib/image/pusk.png'
import Man from '../../lib/image/man.jpg'
const Header = () => {
    return(
        <nav className="header">
              <div className="header-container">
              <ul className="header-list">
                  <li className="header-list-item">
                       <img src={Search} alt="Icon" className="header-icon" />
                      <input type="text" className="header-input" placeholder='user'/>
                  </li>
                  <li className="header-list-item">
                      <div><img src={Man} alt="avatar" className="header-avatar" width={50} height={50}/></div>
                  </li>
                  <li className="header-list-item">
                      <div className="header-name">John Doe</div>
                  </li>
              </ul>
              </div>
        </nav>
    )
}
export default Header;