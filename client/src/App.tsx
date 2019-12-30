import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Navbar from './component/Navbar'
import Landing from './component/Landing'
import Login from './component/Login'
import Register from './component/Register'
import Profile from './component/Profile'
import Cart from './component/Cart'

const App = () => {

    return (
        <Router>
            <div className="App">
                <Navbar/>
                <Route exact path='/' component={Landing}/>
                <div className="container">
                    <Route exact path='/register' component={Register}/>
                    <Route exact path='/login' component={Login}/>
                    <Route exact path='/profile' component={Profile}/>
                    <Route exact path='/Cart' component={Cart}/>
                </div>
            </div>
        </Router>
    );
}

export default App;
