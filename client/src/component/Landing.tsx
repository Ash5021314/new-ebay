import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux'
import * as productsActions from './actions/product'
import * as filterActions from './actions/filter'
import axios from 'axios'
import {Container, Card, Header, Image, Modal} from 'semantic-ui-react'
import ProductsComponent from "./ProductsComponent";
import Filter from "./Filter";
import {bindActionCreators} from 'redux'
import orderBy from 'lodash/orderBy'
import Cart from './Cart'

const Landing = (props: any) => {
    const {products, setFilter, isReady} = props;
    const [modalOpen, setModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState<{ image: string, title: string, description: string, author: string, price: number, }>({
        image: '',
        title: 'title',
        description: 'description',
        author: 'author',
        price: 132
    });
    useEffect(() => {
        const {setProducts} = props;
        axios.get('/products.json').then(({data}) => {
            setProducts(data)
        })
    }, []);

    return (
        <>
            <Modal
                open={modalOpen}
                closeOnDimmerClick
                onClose={() => setModalOpen(modalOpen => !modalOpen)}
            >
                <Modal.Header>{modalContent.title}</Modal.Header>
                <Modal.Content image scrolling>
                    <Image size='medium' src={modalContent.image} wrapped/>

                    <Modal.Description>
                        <Header>{modalContent.author}</Header>
                        <p>
                            {modalContent.description}
                        </p>
                    </Modal.Description>
                </Modal.Content>
                {/*<Modal.Actions>*/}
                {/*    <Button primary>*/}
                {/*        Proceed <Icon name='chevron right'/>*/}
                {/*    </Button>*/}
                {/*</Modal.Actions>*/}
            </Modal>
            <Container>
                <Filter setFilter={setFilter}/>
                <Card.Group itemsPerRow={4}>
                    {!isReady ? "Loading..." :
                        products.map((product: { id: number, title: string, author: string, price: number, image: string, description: string, onAdd: any }) =>
                            <ProductsComponent key={product.id}  {...product}
                                               onClick={() => {
                                                   setModalContent({
                                                       image: product.image,
                                                       title: product.title,
                                                       author: product.author,
                                                       price: product.price,
                                                       description: product.description
                                                   })
                                                   setModalOpen(!modalOpen)
                                               }}/>)}
                </Card.Group>
            </Container>
        </>
    );
};

const sortBy = (products: any, filterBy: any) => {
    switch (filterBy) {
        case 'all':
            return products;
        case 'price_high':
            return orderBy(products, 'price', 'desc');

        case 'price_low':
            return orderBy(products, 'price', 'asc');

        case 'author':
            return orderBy(products, 'author', 'asc');

        default:
            return products;
    }
};

const filterProducts = (products: any, searchQuery: any) => {
    return products.filter((o: any) =>
        o.title.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0 ||
        o.author.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0
    );
};
const searchProduct = (products: [], filterBy: string, searchQuery: string) => {
    return sortBy(filterProducts(products, searchQuery), filterBy)
};

const mapStateToProps = ({products, filter}: { products: { items: [], isReady: boolean }, filter: any }) => ({
    products: products.items && searchProduct(products.items, filter.filterBy, filter.searchQuery),
    isReady: products.isReady
});

const mapDispatchToProps = (dispatch: any) => ({
    ...bindActionCreators(productsActions, dispatch),
    ...bindActionCreators(filterActions, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(Landing);

