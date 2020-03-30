import React, {Component} from "react";
import {WrapperPost} from './styled'

class Post extends Component {

    componentDidMount() {
        const token = localStorage.getItem('token')
        if (token === null) {
            this.props.goToLogin()
        }
    }
    render() {
        return (
                <WrapperPost>
                    <p>{this.props.votesCount}</p>
                    <p>{this.props.userVoteDirection}</p>
                    <p>{this.props.commentsNumber}</p>
                    <p>{this.props.id}</p>
                    <p>{this.props.username}</p>
                    <p>{this.props.text}</p>
                    <p>{this.props.createdAt}</p>
                    <p>{this.props.title}</p>
                </WrapperPost>
        );
    }
}

export default Post;