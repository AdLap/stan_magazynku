const initState = {
    category: [
        {id: '1', name: 'kable'},
        {id: '2', name: 'narzędzia'},
        {id: '3', name: 'części'}
    ]
}

const categoryReducer = (state = initState, action) => {
    return state
};

export default categoryReducer;