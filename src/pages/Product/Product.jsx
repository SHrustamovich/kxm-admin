// import { Router } from 'express';
import Header from '../../components/Header/Header';
import MenuBar from '../../components/MenuBar/MenuBar';
import Birthday from '../../components/Products/Product';

import '../Home/Home.scss'
const ProductPage= () => {
    return(
        <div className="home">
            <div className="home-menu">
            <MenuBar/>
            </div>
            <div className="home-header">
                <Header/>
                <div className="header-body">
                            <Birthday/>
                </div>
            </div>
        </div>
    )
}
export default ProductPage;