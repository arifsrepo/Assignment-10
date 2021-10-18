import './App.css';
import {  BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './Components/Home/Home';
import Breakfast from './Components/Menu/Breakfast/Breakfast';
import Lunch from './Components/Menu/Lunch/Lunch';
import Dinner from './Components/Menu/Dinner/Dinner';
import Footer from './Components/Footer/Footer';
import Login from './Components/Login/Login';
import Banner from './Components/Banner/Banner';
import Details from "./Components/Details/Details";
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Navbar from './Components/Navbar/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/breakfast">
              <Breakfast></Breakfast>
            </Route>
            <Route path="/lunch">
              <Lunch></Lunch>
            </Route>
            <Route path="/dinner">
              <Dinner></Dinner>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/details/:detailsid">
              <Details></Details>
            </PrivateRoute>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
