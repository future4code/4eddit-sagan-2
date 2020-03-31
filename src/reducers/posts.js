const initialState = {
    posts: [],
    user: []
}

const posts = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_POSTS':
            return {
                ...state,
                posts: action.payload.posts.posts
            }
        case 'SET_USER':
            return{
                ...state,
                user: action.payload.userData
            }
            case 'NEW_USER':
            return{
                ...state,
                newUser: action.payload.newUserData
            }
            case 'SET_LOGOUT':
            return{
                ...state,
                user: []
            }
        default:
            return state
    }
}

export default posts
