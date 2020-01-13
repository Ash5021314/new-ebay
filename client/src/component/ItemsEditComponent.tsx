import React from 'react';
import {Table} from "semantic-ui-react";
import {Link} from "react-router-dom";
import {bindActionCreators} from "redux";
import * as productsActions from "./actions/product";
import {connect} from "react-redux";

const ItemsEditComponent = (props:any) => {
    const {products, isReady,updateProduct} = props;
    return (
        <div>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Image</Table.HeaderCell>
                        <Table.HeaderCell>Title</Table.HeaderCell>
                        <Table.HeaderCell>Description</Table.HeaderCell>
                        <Table.HeaderCell>Price</Table.HeaderCell>
                        <Table.HeaderCell>Author</Table.HeaderCell>
                        <Table.HeaderCell>Update</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {!isReady ? "Loading..." :
                        products.map((product: { _id: number, title: string, author: string, price: number, image: string, description: string, onAdd: any }) =>
                            <Table.Row   key={product._id}>
                                <Table.Cell>< img className="ui productImg"  src={product.image} alt=''/><input type="text" name='image'/></Table.Cell>
                                <Table.Cell><input type="text" defaultValue={product.title }/></Table.Cell>
                                <Table.Cell><textarea defaultValue={product.description } name='description' /></Table.Cell>
                                <Table.Cell> <input type="text" defaultValue={product.price } name='price'/></Table.Cell>
                                <Table.Cell> <input type="text" defaultValue={product.author } name='author'/></Table.Cell>
                                <Table.Cell><button><Link to={'/ItemsEditComponent'}>Update</Link> </button></Table.Cell>
                            </Table.Row>
                        )
                    }
                </Table.Body>
            </Table>
        </div>
    );
};

const mapStateToProps = ({products}: { products: { items: [], isReady: boolean } }) => ({
    products: products.items ,
    isReady: products.isReady
});

const mapDispatchToProps = (dispatch: any) => ({
    ...bindActionCreators(productsActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemsEditComponent);