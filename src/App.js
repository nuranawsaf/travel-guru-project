import React, { createContext, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NoFound from './components/NoFound/NoFound';
import Booking from './components/Booking/Booking';
import fakeData from './components/fakeData/fakeData';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
// import { Search } from 'react-bootstrap-icons';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Search from './components/Search/Search';
import allHotel from './components/fakeData/allHotels';


export const UserContext = createContext();

function App(props) {

  const [loggedInUser, setLoggedInUser] = useState({});

  console.log('app page props', props);

  return (


    <UserContext.Provider value={[loggedInUser, setLoggedInUser]} className="background">
      
      <Header></Header>

      {/* <h1>Name: {loggedInUser.name}</h1> */}

      <Router>

        <Switch>
          
        <Route path="/home">
          <Home></Home>
        </Route>

        <Route path="/booking/:id">
          <Booking info={fakeData} />
        </Route>

        <Route path="/login">
          <Login></Login>
        </Route>

        <Route path="/registration">
          <Registration></Registration>
        </Route>
        
          <PrivateRoute path="/search">
            <Search />
          </PrivateRoute>

        <Route exact path="/">
          <Home></Home>
        </Route>

        <Route path="*">
          <NoFound></NoFound>
        </Route>

      </Switch>
    </Router >

    </UserContext.Provider>

  );
}

export default App;
