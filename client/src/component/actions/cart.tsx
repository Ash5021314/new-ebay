export const addToCart = (obj: object) => ({
    type: 'ADD_TO_CART',
    payload: obj
});
export const removeFromCart = (_id: any) => ({
    type: 'REMOVE_FROM_CART',
    payload: _id
});