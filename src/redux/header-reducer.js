
let initialState =  {
    headerLink: [
        {id: 1, object: "Shutdown mode"},
        {id: 2, object: "do not disturb mode"},
        {id: 3, object: "accessibility mode"}
    ]
};

const headerReducer = (state = initialState, action) => {
    return state;
}


export default headerReducer;