import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import SignIn from './components/SignIn/SignIn';
import ServiceDetails from './components/ServiceDetails/ServiceDetails';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

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

          {/* <Route path='/service-details/:id'>
            <ServiceDetails />
          </Route> */}


        </Switch>
      </Router>


    </div>
  );
}

export default App;
