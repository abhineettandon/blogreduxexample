import React from 'react'
import { connect } from "react-redux";
import { fetchPost } from "../actions/postActions";

class Posts extends React.Component {
    componentDidMount() {
        this.props.fetchPost()
    }
    render() {
        const { posts, postCount } = this.props;
        return (
            <React.Fragment>
                <h3>Total posts: {postCount}</h3>
                {posts.map(post =>
                    <div key={post.id}>
                        <h1>{post.title}</h1>
                        <p>{post.body}</p>
                    </div>
                )}
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
    posts: state.postReducer.posts,
    postCount: state.postReducer.postCount
})


export default connect(mapStateToProps, { fetchPost })(Posts);