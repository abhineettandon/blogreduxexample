import { FETCH_POST, SAVE_POST } from "./postActionTypes";

export const fetchPost = () => dispatch => {
    fetch('http://blog.test/api/post')
        .then(res => res.json())
        .then(posts => dispatch({
            type: FETCH_POST,
            payload: posts.data,
            postCount: posts.data.length
        }));
}

export const savePost = post => dispatch => {
    dispatch({
        type: SAVE_POST,
        payload: {
            id: 6,
            title: post.title,
            body: post.body
        }
    })
}