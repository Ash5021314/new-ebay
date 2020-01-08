import React from 'react';
import {bindActionCreators} from "redux";
import * as cartAction from "./actions/cart";
import {connect} from "react-redux";

const cartContent = ({title, id, image, removeFromCart}: any) => {

    return (
        <div>
            <div className="ui middle aligned divided list">
                <div className="item">
                    <div className="right floated content">
                        <div className="ui button" onClick={() => removeFromCart(id)} color="red">Remove</div>
                    </div>
                    <img className="ui avatar image" src={image} alt=''/>
                    <div className="content">
                        {title}
                    </div>
                </div>

            </div>
        </div>

    );
};
const Cart = (items: any) => {
    return (
        <div>
            // @ts-ignore
            {items.map((product: any) => <cartContent {...product}/>)}
        </div>
    )
}
const mapStateToProps = ({cart}: any) => ({
    items: cart.items
});
const mapDispatchToProps = (dispatch: any) => ({
    ...bindActionCreators(cartAction, dispatch)
});
export default connect(mapStateToProps, mapDispatchToProps)(Cart);