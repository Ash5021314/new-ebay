const initialState = {
    isReady: false,
    items: [],
    filterBy: 'all'
};
export default (state = initialState, action: any) => {
    switch (action.type) {
        case 'SET_PRODUCTS':
            return {
                ...state,
                items: action.payload,
                isReady: true
            };
        case 'DELETE_ITEM':
            return {
                ...state,
                items: state.items.filter(({_id}) => _id !== action.payload)
            };
        case 'ADD_ITEM':
            return {
                ...state,
                items: [action.payload, ...state.items]
            };

        case 'SET_IS_READY':
            return {
                ...state,
                isReady: action.payload
            };
        default:
            return state;
    }
}
