import React, {Component} from "react";
import {connect} from "react-redux";
import {push} from "connected-react-router";
import {routes} from "../../containers/Router/index";
import { getPosts } from '../../actions/Actions'
import Post from '../../components/Post/index'


class Feed extends Component {

    componentDidMount() {
        const token = localStorage.getItem('token')
        if (token === null) {
            this.props.goToLogin()
        }
        this.props.getPosts()
    }
    render() {
        return (
                <div>
                    {
                this.props.posts && this.props.posts.map((item) => (
                    <Post 
                    teste={item.title}
                    />
                ))
            }
                </div>
        );
    }
}

const mapStateToProps = state => ({posts: state.posts.posts});

const mapDispatchToProps = dispatch => ({
    goToLogin: () => dispatch(push(routes.login)),
    getPosts: () => dispatch(getPosts())

});

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
