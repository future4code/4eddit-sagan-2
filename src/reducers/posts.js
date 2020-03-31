const initialState = {
    posts: [],
    postDetail: null,
    postComments: null
}

const posts = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_POSTS':
            return {
                ...state,
                posts: action.payload.posts.posts
            }
        case 'SET_POST_DETAIL':
            return {
                ...state,
                postDetail: action.payload.post,
                postComments: action.payload.post.comments
            }
        default:
            return state
    }
}

export default posts
