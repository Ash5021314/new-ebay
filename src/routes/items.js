import express from 'express'
import Item from'../models/Item'
const items = express.Router();

items.get('/', (req, res) => {
    Item.find()
        .then(items => res.json(items))
});
export default items