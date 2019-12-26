import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Navbar from './component/Navbar'
import Landing from './component/Landing'
import Login from './component/Login'
import Register from './component/Register'
import Profile from './component/Profile'

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
                </div>
            </div>
        </Router>
    );
}

export default App;
