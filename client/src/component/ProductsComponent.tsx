import React from 'react';
import {Card, Icon, Image, Button} from 'semantic-ui-react'
import {bindActionCreators} from "redux";
import * as cartAction from "./actions/cart";
import {connect} from "react-redux";

const ProductsComponent = (products: any) => {
    const {title, author, price, image, onClick, addToCart, addedCount} = products;
    return (
        <Card>
            <Image onClick={onClick} src={image} wrapped ui={false}/>
            <Card.Content onClick={onClick}>
                <Card.Header>{title}</Card.Header>
                <Card.Meta>
                    <span className='date'>{author}</span>
                </Card.Meta>
                <Card.Description>
                    Matthew is a musician living in Nashville.
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <span>
                    <Icon name='usd'/>
                    {price}
                </span>

            </Card.Content>
            <Button onClick={() => addToCart(products)}>Add to cart {addedCount > 0 && `(${addedCount})`}</Button>
        </Card>
    );
};

const mapStateToProps = ({cart}: any, {id}: any) => ({
    addedCount: cart.items.reduce(
        (count: any, product: any) => count + (product.id === id ? 1 : 0), 0
    )
});
const mapDispatchToProps = (dispatch: any) => ({
    ...bindActionCreators(cartAction, dispatch)
});
export default connect(mapStateToProps, mapDispatchToProps)(ProductsComponent);