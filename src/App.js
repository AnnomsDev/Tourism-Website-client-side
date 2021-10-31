import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import SignIn from './components/SignIn/SignIn';
import ServiceDetails from './components/ServiceDetails/ServiceDetails';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import MyOrders from './components/MyOrders/MyOrders';
import ManageAllOrders from './components/ManageAllOrders/ManageAllOrders';
import AddService from './components/AddService/AddService';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path="/signin">
            <SignIn />
          </Route>
          <PrivateRoute path='/service-details/:id'>
            <ServiceDetails />
          </PrivateRoute>
          <PrivateRoute path='/my-orders'>
            <MyOrders />
          </PrivateRoute>
          <PrivateRoute path='/manage-all-orders'>
            <ManageAllOrders />
          </PrivateRoute>
          <PrivateRoute path='/add-service'>
            <AddService />
          </PrivateRoute>
          <Route path='*'>
            <NotFound />
          </Route>


        </Switch>
      </Router>


    </div>
  );
}

export default App;
