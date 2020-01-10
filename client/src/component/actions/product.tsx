export const setProducts = (products: any) => ({
    type: 'SET_PRODUCTS',
    payload: products
});



export const deleteProduct = (products:any) => ({
            type: 'DELETE_ITEM',
            payload: products
})