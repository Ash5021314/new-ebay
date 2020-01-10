import express from 'express'
import Item from'../models/Item'
const items = express.Router();

items.get('/', (req, res) => {
    Item.find()
        .then(items => res.json(items))
});

items.delete('/:id', (req, res) => {
    console.log(req.params.id);
    Item.findById(req.params.id).then(item => item.remove().then(() => res.json({success: true}))).catch(error => res.status(404).json({success: false}))
})
export default items