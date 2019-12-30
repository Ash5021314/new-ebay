const initialState = {
    searchQuery: '',
    filterBy: 'all'
};
export default (state = initialState, action: any) => {
    switch (action.type) {
        case 'SET_QUERY':
            return {
                ...state,
                searchQuery: action.payload
            };
        case 'SET_FILTER':
            return {
                ...state,
                filterBy: action.payload
            };
        default:
            return state;
    }
}
