export const setFilter = (filter: any) => ({
    type: 'SET_FILTER',
    payload: filter
});
export const setSearchQuery = (value: any) => ({
    type: 'SET_QUERY',
    payload: value
})