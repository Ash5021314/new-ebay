const initialState = {
    isReady: false,
    items: null,
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
        case 'SET_IS_READY':
            return {
                ...state,
                isReady: action.payload
            };
        default:
            return state;
    }
}
