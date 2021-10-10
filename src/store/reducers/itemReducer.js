const initState = {
    item: [
        { id: '1', name: 'młotek' },
        { id: '2', name: 'śrubka' },
        { id: '3', name: 'kabel żółty' }
    ]
}

const itemReducer = (state = initState, action) => {
    return state
};

export default itemReducer;