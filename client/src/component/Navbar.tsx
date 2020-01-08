import React from 'react'
import {Link} from 'react-router-dom'
import {bindActionCreators} from "redux";
import * as cartAction from "./actions/cart";
import {connect} from "react-redux";
import {Popup} from "semantic-ui-react";
import uniqBy from 'lodash/uniqBy'

const Navbar = (props: any) => {
    const {totalPrice, count, items} = props;
    const logout = (e: any) => {
        e.preventDefault();
        localStorage.removeItem('usertoken');
        props.history.push('/');
    };

    const CartComponent = ({_id, title, image, removeFromCart}:any)=>(
        <div className="ui middle aligned divided list">
            <div className="item">
                <div className="right floated content">
                    <div  onClick={()=>removeFromCart(_id)} className="ui button">Remove</div>
                </div>
                <img className="ui avatar image" src={image}/>
                    <div className="content">
                        {title}
                    </div>
            </div>
        </div>
    )

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
                {localStorage.usertoken ? userLink : loginRegLink}
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="" className="nav-link">
                            Total: <b>{totalPrice}</b> $
                        </Link>
                    </li>
                    <Popup
                    trigger={
                        <li className="nav-item">
                            <Link to="" className="nav-link">
                                Cart (<b>{count}</b>)
                            </Link>
                        </li>
                    }
                        content={ items.map((product:any)=><CartComponent key={product._id} {...product}/>)}
                    on="click"
                    />
                </ul>
            </div>
        </nav>
    )
};

const mapStateToProps = ({cart}: any) => ({
    totalPrice: cart.items.reduce((total: number, product: any) => total + product.price, 0),
    count: cart.items.length,
// @ts-ignore
    items:uniqBy(cart.items, o=>o._id)
});
const mapDispatchToProps = (dispatch: any) => ({
    ...bindActionCreators(cartAction, dispatch)
});
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);