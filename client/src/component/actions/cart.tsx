export const addToCart = (obj: object) => ({
    type: 'ADD_TO_CART',
    payload: obj
});
export const removeFromCart = (id: number) => ({
    type: 'REMOVE_FROM_CART',
    payload: id
});