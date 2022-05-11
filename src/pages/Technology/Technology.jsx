// import { Router } from 'express';
import Header from '../../components/Header/Header';
import MenuBar from '../../components/MenuBar/MenuBar';
import Technology from '../../components/Technology/Technology';

import '../Home/Home.scss'
const TechnologyPages= () => {
    return(
        <div className="home">
            <div className="home-menu">
            <MenuBar/>
            </div>
            <div className="home-header">
                <Header/>
                <div className="header-body">
                            <Technology/>
                </div>
            </div>
        </div>
    )
}
export default TechnologyPages;