const initialState = {
    items: []
};
export default (state = initialState, action: any) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                items: [
                    ...state.items,
                    action.payload
                ]
            };
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                // @ts-ignore
                items: state.items.filter(o => o._id != action.payload)
            }

        default:
            return state;
    }
}
