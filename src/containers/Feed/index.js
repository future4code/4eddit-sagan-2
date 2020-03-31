import React, {Component} from "react";
import {connect} from "react-redux";
import {push} from "connected-react-router";
import {routes} from "../../containers/Router/index";
import { getPosts, getPostDetail } from '../../actions/Actions'
import Post from '../../components/Post/index'
import NewPost from '../../containers/NewPost/index'


class Feed extends Component {

    componentDidMount() {
        const token = localStorage.getItem('token')
        if (token === null) {
            this.props.goToLogin()
        }
        this.props.getPosts()
    }
    componentDidUpdate() {
        if (this.props.postComments !== null) {
            this.props.goToPostDetail()
        }
        const token = localStorage.getItem('token')
        if (token === null) {
            this.props.goToLogin()
        }
    }

    handleWhitSelect = (event) => {
        this.props.getPostDetail(event)
    };

    render() {
        return (
                <div>
                    <h1>Novo post</h1>
                    {<NewPost />}
                    <h1>Todos os posts</h1>
                    {
                this.props.posts && this.props.posts.map((item) => (
                    <Post 
                    key={item.id}
                    votesCount={item.votesCount}
                    userVoteDirection={item.userVoteDirection}
                    commentsNumber={item.commentsNumber}
                    id={item.id}
                    username={item.username}
                    text={item.text}
                    createdAt={item.createdAt}
                    title={item.title}
                    selectedId={this.handleWhitSelect}
                    />
                ))
            }
                </div>
        );
    }
}

const mapStateToProps = state => ({posts: state.posts.posts, postComments: state.posts.postComments, user: state.posts.user});

const mapDispatchToProps = dispatch => ({
    goToLogin: () => dispatch(push(routes.login)),
    goToPostDetail: () => dispatch(push(routes.postdetails)),
    getPosts: () => dispatch(getPosts()),
    getPostDetail: (id) => dispatch(getPostDetail(id))

});

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
