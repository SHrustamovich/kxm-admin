// import { Router } from 'express';
import { Switch,Route } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Location from '../../components/Location/Location';
import MenuBar from '../../components/MenuBar/MenuBar';
import Orders from '../../components/Orders/Orders';
// import Product from '../../components/Products/Product';
import './Home.scss'
const Home = () => {
    return(
        <div className="home">
            <div className="home-menu">
            <MenuBar/>
            </div>
            <div className="home-header">
                <Header/>
                <div className="header-body">
                    <Switch>
                        <Route path="/main" exact>
                            <Orders/>
                        </Route>
                        <Route path="/location" exact>
                            <Location/>
                        </Route>
                    </Switch>
                </div>
            </div>
        </div>
    )
}
export default Home;