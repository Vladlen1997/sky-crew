const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const USERS = 'USERS'


let initialState = {
    users: [
        {
            id: 1,
            photoUrl: 'https://resizer.mail.ru/p/7a1e86df-9686-5098-963e-27304c6f1133/AAACY37OntEVxnf9OOUuLkcQpyEwVtb3AZgK14eU9OI6IljiYtBizDmEp-vG8UfPC3h-OB130PE-ba1mk1rY6S-3Zek.jpg',
            followed: true,
            fullName: 'Syarhei Blinou',
            status: 'live is Alive',
            location: {country: 'Belarus', city: 'Minsk'}
        },
        {
            id: 2,
            photoUrl: 'https://resizer.mail.ru/p/7a1e86df-9686-5098-963e-27304c6f1133/AAACY37OntEVxnf9OOUuLkcQpyEwVtb3AZgK14eU9OI6IljiYtBizDmEp-vG8UfPC3h-OB130PE-ba1mk1rY6S-3Zek.jpg',
            followed: false,
            fullName: 'Victor Serva',
            status: 'i am a boss BelItSoft com',
            location: {country: 'Poland', city: 'Krakov'}
        },
        {
            id: 3,
            photoUrl: 'https://resizer.mail.ru/p/7a1e86df-9686-5098-963e-27304c6f1133/AAACY37OntEVxnf9OOUuLkcQpyEwVtb3AZgK14eU9OI6IljiYtBizDmEp-vG8UfPC3h-OB130PE-ba1mk1rY6S-3Zek.jpg',
            followed: true,
            fullName: 'Varvara Blinova',
            status: 'It secta',
            location: {country: 'Russia', city: 'Moscow'}
        }
    ]
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:

            return {
                ...state,
                users: state.users.map(users => {
                    if (users.id === action.userId) {
                        return {...users, followed: true}
                    }
                    return users;
                })


            }


        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(users => {
                    if (users.id === action.userId) {
                        return {...users, followed: false}
                    }
                    return users;
                })
            }


        case USERS:

            return {
                ...state,
                users: [...state.users, ...action.users]
            }


        default:
            return state;
    }
}


export const followActionCreator = (userId) => ({type: FOLLOW, userId});

export const unfollowActionCreator = (userId) => ({type: UNFOLLOW, userId});

export const setUsersActionCreator = (users) => ({type: USERS, users});


export default usersReducer;