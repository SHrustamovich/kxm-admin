// import { Router } from 'express';
import Header from '../../components/Header/Header';
import Location from '../../components/Location/Location';
import MenuBar from '../../components/MenuBar/MenuBar';

import '../Home/Home.scss'
const LocationPage= () => {
    return(
        <div className="home">
            <div className="home-menu">
            <MenuBar/>
            </div>
            <div className="home-header">
                <Header/>
                <div className="header-body">
                            <Location/>
                </div>
            </div>
        </div>
    )
}
export default LocationPage;