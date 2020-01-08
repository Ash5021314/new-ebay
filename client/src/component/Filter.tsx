import React, {useState} from 'react';
import {Menu, Input} from 'semantic-ui-react'
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as filterAction from './actions/filter'

const Filter = (props: any) => {
    const [link, setLink] = useState({activeItem: 'all'});
    const {setFilter, searchQuery, setSearchQuery} = props;

    const handleItemClick = (e: any, {name}: any) => {
        setLink({activeItem: name});
        setFilter(name)
    };

    const {activeItem} = link;
    return (
        <Menu secondary>
            <Menu.Item
                name='all'
                active={activeItem === 'all'}
                onClick={handleItemClick}
            >All</Menu.Item>
            <Menu.Item
                name='price_high'
                active={activeItem === 'price_high'}
                onClick={handleItemClick}
            >Price (Expensive)</Menu.Item>
            <Menu.Item
                name='price_low'
                active={activeItem === 'price_low'}
                onClick={handleItemClick}
            >Price (Cheap)</Menu.Item>
            <Menu.Item
                name='author'
                active={activeItem === 'author'}
                onClick={handleItemClick}
            >Author</Menu.Item>
            <Menu.Item>
                <Input onChange={e => setSearchQuery(e.target.value)} value={searchQuery} placeholder="search"
                       icon="search"/>
            </Menu.Item>

        </Menu>
    )
};
const mapStateToProps = ({products, filter}: any) => ({
    filterBy: filter.filterBy

});
const mapDispatchToProps = (dispatch: any) => ({
    ...bindActionCreators(filterAction, dispatch)
});
export default connect(mapStateToProps, mapDispatchToProps)(Filter);