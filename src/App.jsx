import { Redirect } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import './App.scss';
import Login from './components/Login/Login';
import CategoryPage from './pages/Category/Category';
// import CustomerPage from './pages/Customers/Customer';
import Home from './pages/Home/Home';
import LocationPage from './pages/Location/Location';
import ProductPage from './pages/Product/Product';
import TechnologyPages from './pages/Technology/Technology';
function App() {
  return (
    <div className="App">
      <Redirect to="/login"/>
      <Switch>
          <Route path='/login' exact>
            <Login/>
          </Route>
          <Route path={'/main'} exact>
               <Home/>
           </Route>
          <Route path={'/category'} exact>
            <CategoryPage/>
          </Route>
          <Route path={'/product'} exact>
            <ProductPage/>
          </Route>
          <Route path={'/texnology'} exact>
            <TechnologyPages/>
          </Route>
          <Route path={'/location'}>
            <LocationPage/>
          </Route>
      </Switch>
    </div>
  );
}

export default App;

