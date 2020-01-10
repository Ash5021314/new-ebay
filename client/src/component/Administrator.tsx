import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as productsActions from "./actions/product";
import axios from "axios";
import './Admin.css'
import { Table } from 'semantic-ui-react';

const Administrator = (props:any) => {
    const {products, isReady,deleteProduct} = props;
    useEffect(() => {
        const {setProducts} = props;
        axios.get('items').then(({data}) => {
            setProducts(data)
        })

    }, []);
    const deleteItem = (id:any)=>{
        axios.delete(`items/${id}`).then((res:any) => {
            deleteProduct(id)
        })
    }
const insertItem = ()=>{

    }
    return (
                <Table celled>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Count</Table.HeaderCell>
                            <Table.HeaderCell>Image</Table.HeaderCell>
                            <Table.HeaderCell>Title</Table.HeaderCell>
                            <Table.HeaderCell>Description</Table.HeaderCell>
                            <Table.HeaderCell>Price</Table.HeaderCell>
                            <Table.HeaderCell>Author</Table.HeaderCell>
                            <Table.HeaderCell>Update</Table.HeaderCell>
                            <Table.HeaderCell>Delete</Table.HeaderCell>
                            <Table.HeaderCell><button onClick={insertItem}>Insert</button></Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
    {!isReady ? "Loading..." :
        products.map((product: { _id: number, title: string, author: string, price: number, image: string, description: string, onAdd: any }) =>
                        <Table.Row   key={product._id}>
                            <Table.Cell></Table.Cell>
                            <Table.Cell>< img className="ui productImg" src={product.image} alt=''/></Table.Cell>
                            <Table.Cell>{product.title }</Table.Cell>
                            <Table.Cell>{product.description}</Table.Cell>
                            <Table.Cell>{product.price }</Table.Cell>
                            <Table.Cell>{product.author }</Table.Cell>
                            <Table.Cell><button>Update</button></Table.Cell>

                            <Table.Cell><button onClick={()=>deleteItem(product._id)}>Delete</button></Table.Cell>
                        </Table.Row>

        )
        }
                    </Table.Body>

                </Table>
    );
};
const mapStateToProps = ({products}: { products: { items: [], isReady: boolean } }) => ({
    products: products.items ,
    isReady: products.isReady
});

const mapDispatchToProps = (dispatch: any) => ({
    ...bindActionCreators(productsActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps) (Administrator);