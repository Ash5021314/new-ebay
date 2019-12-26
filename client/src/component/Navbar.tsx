import React from 'react'
import {Link, withRouter} from 'react-router-dom'

const Navbar = (props: any) => {
    console.log(props);
    const logout = (e: any) => {
        e.preventDefault();
        localStorage.removeItem('usertoken');
        props.history.push('/');
    };
    const search = (<input type='text'/>);
    const loginRegLink = (

        <ul className="navbar-nav">
            <li className="nav-item">
                <Link to="/login" className="nav-link">
                    Login
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/register" className="nav-link">
                    Register
                </Link>
            </li>
        </ul>
    );

    const userLink = (
        <ul className="navbar-nav">
            <li className="nav-item">
                <Link to="/profile" className="nav-link">
                    User
                </Link>
            </li>
            <li className="nav-item">
                <a href="" onClick={
                    logout
                } className="nav-link">
                    Logout
                </a>
            </li>
        </ul>
    );
    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar1"
                    aria-controls="navbar1" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-md-center" id="navbar1">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">
                            Home
                        </Link>
                    </li>
                </ul>
                {search}
                {localStorage.usertoken ? userLink : loginRegLink}
            </div>

        </nav>
    )
};

export default withRouter(Navbar);