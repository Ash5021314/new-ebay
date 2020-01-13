import express from 'express'
import Item from'../models/Item'
const items = express.Router();

items.get('/', (req, res) => {
    Item.find()
        .then(items => res.json(items))
});


items.post('/',  (req, res) => {
    const newItem = new Item({
        title: req.body.title,
        author:req.body.author,
        image:req.body.image,
        price:req.body.price,
        description:req.body.description,
    })
    const item = newItem.save()
    res.json(item)
});

items.delete('/:id', (req, res) => {
    Item.findById(req.params.id).then(item => item.remove()
        .then(() => res.json({success: true})))
        .catch(error => res.status(404)
            .json({success: false}))
});

items.put('/:id',  async (req, res) => {
    console.log("reqParams",req.params);
    const result = await Item.updateOne(
        {
            _id: req.params.id,
            title: req.body.title,
            author:req.body.author,
            image:req.body.image,
            price:req.body.price,
            description:req.body.description,
        }


    )

    console.log(result)

    await res.json(result)
    // var query = { name: 'borne' };
    // Model.findOneAndUpdate(query, { name: 'jason bourne' }, options, callback)

    //res.json({status: 'ok'})
});



export default items