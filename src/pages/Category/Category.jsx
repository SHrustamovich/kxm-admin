// import { Router } from 'express';
import Category from '../../components/Category/Category';
import Header from '../../components/Header/Header';
import MenuBar from '../../components/MenuBar/MenuBar';

import '../Home/Home.scss'
const CategoryPage= () => {
    return(
        <div className="home">
            <div className="home-menu">
            <MenuBar/>
            </div>
            <div className="home-header">
                <Header/>
                <div className="header-body">
                            <Category/>
                </div>
            </div>
        </div>
    )
}
export default CategoryPage;