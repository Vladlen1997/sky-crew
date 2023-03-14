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
        likesCount: [
            {id: 1, likesCount: 1, message: 'Hi, how are you?'},
            {id: 2, likesCount: 12, message: 'What is your name?'},
            {id: 3, likesCount: 20, message: 'Where are you from?'},
            {id: 4, likesCount: 6, message: 'Tail is a part of plane'}
        ]
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



export default state;