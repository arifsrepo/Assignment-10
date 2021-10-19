import './App.css';
import {  BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import Login from './Components/Login/Login';
import Details from "./Components/Details/Details";
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import 'bootstrap/dist/css/bootstrap.min.css';
import NotFound from './Components/NotFound/NotFound';
import Navigationbar from './Components/Navigationbar/Navigationbar';
import About from './Components/About/About';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
        <Navigationbar></Navigationbar>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <PrivateRoute path="/details/:detailsid">
              <Details></Details>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
