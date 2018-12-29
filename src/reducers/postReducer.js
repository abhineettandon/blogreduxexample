import { FETCH_POST, SAVE_POST } from "../actions/postActionTypes";

const initialState = {
    posts: [],
    postCount: 0
}

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_POST:
            return {
                ...state, posts: action.payload, postCount: action.postCount
            }
        case SAVE_POST:
            return {
                ...state, posts: [action.payload, ...state.posts], postCount: state.postCount + 1
            }
        default:
            return state;
    }
}

export default postReducer