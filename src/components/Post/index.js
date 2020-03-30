import React, {Component} from "react";

class Post extends Component {

    componentDidMount() {
        const token = localStorage.getItem('token')
        if (token === null) {
            this.props.goToLogin()
        }
    }
    render() {
        return (
                <div>
                    <p>{this.props.teste}</p>
                </div>
        );
    }
}

export default Post;
