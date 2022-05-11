// import { Router } from 'express';
import Customer from '../../components/Customer/Customer';
import Header from '../../components/Header/Header';
import MenuBar from '../../components/MenuBar/MenuBar';

import '../Home/Home.scss'
const CustomerPage= () => {
    return(
        <div className="home">
            <div className="home-menu">
            <MenuBar/>
            </div>
            <div className="home-header">
                <Header/>
                <div className="header-body">
                            <Customer/>
                </div>
            </div>
        </div>
    )
}
export default CustomerPage;