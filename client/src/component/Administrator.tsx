import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as productsActions from "./actions/product";
import axios from "axios";
import './Admin.css'
import {Button,  Modal, Table} from 'semantic-ui-react';

const Administrator = (props:any) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [names, setNames] = useState({})
    const {products, isReady,deleteProduct,addProduct,updateProduct} = props;
    console.log(products);
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
    };
    const onChange = (e:any) => {
        setNames({
            ...names,
            [e.target.name]: e.target.value,
        })
    };
    const updateItem = (id: any) => {

        axios.put(`items/${id}`, names).then((res: any) => {
            updateProduct(names);

        });
        window.location.reload()
    };

    const onSubmit = (e:any) => {
        e.preventDefault()
        axios.post('items', names).then(res => {
            addProduct(names)
        })
    };

    return (
        <>
        <Modal
            open={modalOpen}
            closeOnDimmerClick
            onClose={() => setModalOpen(modalOpen => !modalOpen)}
        >

            <Modal.Content image scrolling>

                <Modal.Description>
                    <form  onSubmit={onSubmit}>
                        <div className="ui form">
                        <div className="field">
                        <div className="field">
                            <label htmlFor='image'>Image</label>
                            <input type="text" name='image' id='image' onChange={onChange}/>
                        </div>
                            <label htmlFor='title'>Title</label>
                            <input type="text" name='title' id='title' onChange={onChange}/>
                        </div>
                        <div className="field">
                            <label htmlFor='description'>Short Text</label>
                            <textarea name='description' id='description' onChange={onChange}/>
                        </div>
                        <div className="field">
                            <label htmlFor='price'>Price</label>
                            <input type="text" name='price' id='price'  onChange={onChange}/>
                        </div>
                        <div className="field">
                            <label htmlFor='author'>Author</label>
                            <input type="text" name='author' id='author' onChange={onChange}/>
                        </div>
                    </div>
                    <Button primary>
                        Insert
                    </Button>
                    </form>
                </Modal.Description>
            </Modal.Content>
        </Modal>
        <Table celled>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Image</Table.HeaderCell>
                    <Table.HeaderCell>Title</Table.HeaderCell>
                    <Table.HeaderCell>Description</Table.HeaderCell>
                    <Table.HeaderCell>Price</Table.HeaderCell>
                    <Table.HeaderCell>Author</Table.HeaderCell>
                    <Table.HeaderCell>Update</Table.HeaderCell>
                    <Table.HeaderCell>Delete</Table.HeaderCell>
                    <Table.HeaderCell><button onClick={()=>setModalOpen(!modalOpen)}>Insert</button></Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {!isReady ? "Loading..." :
                     products.map((product: { _id: number, title: string, author: string, price: number, image: string, description: string, onAdd: any }) =>
                    <Table.Row   key={product._id}>
                        <Table.Cell>< img className="ui productImg"  src={product.image} alt=''/><input type="text" name='image' onChange={onChange}/></Table.Cell>
                        <Table.Cell><input type="text" defaultValue={product.title } name='title' onChange={onChange}/></Table.Cell>
                        <Table.Cell><textarea defaultValue={product.description } name='description'  onChange={onChange}/></Table.Cell>
                        <Table.Cell> <input type="text" defaultValue={product.price } name='price' onChange={onChange}/></Table.Cell>
                        <Table.Cell> <input type="text" defaultValue={product.author } name='author' onChange={onChange}/></Table.Cell>
                        <Table.Cell><button onClick={()=>updateItem(product._id)}>Update</button></Table.Cell>
                        <Table.Cell><button onClick={()=>deleteItem(product._id)}>Delete</button></Table.Cell>
                    </Table.Row>
                )
            }
            </Table.Body>
        </Table>
            </>
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