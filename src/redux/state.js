let rerenderEntireTree = () => {
    console.log('state was changed');
}

let state = {

    headerPage: {
        headerLink: [
            {id: 1, object: "Shutdown mode"},
            {id: 2, object: "do not disturb mode"},
            {id: 3, object: "accessibility mode"}
        ]
    },

    dialogsPage: {
        dialogs: [
            {id: 1, dialog: 'Vlad'},
            {id: 2, dialog: 'Oleg'},
            {id: 3, dialog: 'Petr'},
            {id: 4, dialog: 'Fedya'}
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 1, message: 'How are you?'},
            {id: 1, message: 'apsddkd'},
            {id: 1, message: 'cool'},
        ],
    },
    profilePage: {
        post: [
            {id: 1, likesCount: 1, message: 'Hi, how are you?'},
            {id: 2, likesCount: 12, message: 'What is your name?'},
            {id: 3, likesCount: 20, message: 'Where are you from?'},
            {id: 4, likesCount: 6, message: 'Tail is a part of plane'}
        ],

        newPostText: ''
    },

    navBarPage: {
        nameLink: [
            {id: 1, link: "Profile"},
            {id: 2, link: "Friends"},
            {id: 3, link: "Messages"},
            {id: 4, link: "News"},
            {id: 5, link: "Settings"}
        ]
    }

}


export const addNewPost = () => {
    let newPost = {id: 5, likesCount: 8, message: state.profilePage.newPostText};
    state.profilePage.post.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}


export const updateNewPostText = (newPost) => {
    state.profilePage.newPostText = newPost;
    rerenderEntireTree(state);
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}


export default state;