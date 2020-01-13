export const setProducts = (products: any) => ({
    type: 'SET_PRODUCTS',
    payload: products
});



export const deleteProduct = (products:any) => ({
    type: 'DELETE_ITEM',
    payload: products
})

export const addProduct = (products:any) => ({
    type: 'ADD_ITEM',
    payload: products
})

export const updateProduct = (products:any) => ({
    type: 'UPDATE_ITEM',
    payload: products


})