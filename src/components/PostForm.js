import React from "react";
import { connect } from "react-redux";
import { savePost } from '../actions/postActions'

class PostForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: ''
        }
    }
    handleChange = e => {
        const { name, value } = e.target
        this.setState(() =>
            ({
                [name]: value
            })
        )
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.savePost(this.state);
    }
    render() {
        return (
            <React.Fragment>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Title</label>
                        <input type="text" name="title" onChange={this.handleChange} />
                    </div>
                    <div>
                        <label>Body</label>
                        <input type="text" name="body" onChange={this.handleChange} />
                    </div>
                    <div>
                        <button type="submit">Save post</button>
                    </div>
                </form>
            </React.Fragment>
        );
    }
}

export default connect(null, { savePost })(PostForm)