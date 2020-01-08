import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    title: {
        type: String
    },
    author:{
        type: String
    },
    image:{
        type: String
    },
    price:{
        type: Number
    },
    description:{
        type: String
    }
});
const Item = mongoose.model('items', ItemSchema);

export default Item