
let initialState = {
    nameLink: [
        {id: 1, link: "Profile"},
        {id: 2, link: "Friends"},
        {id: 3, link: "Messages"},
        {id: 4, link: "News"},
        {id: 5, link: "Settings"}
    ]
};

const navBarReducer = (state = initialState, action) => {
    return state;
}

export default navBarReducer;