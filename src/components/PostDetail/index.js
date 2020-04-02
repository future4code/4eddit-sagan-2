import React, { Component } from "react";
import { connect } from "react-redux";
import Comments from '../Comments/index'
import NewComment from "../NewComment/index"
import Post from '../../components/Post/index'
import {WrapperDiv} from './styled'
import {push} from "connected-react-router";
import {routes} from "../../containers/Router/index";

class PostDetail extends Component {

    textComment = () => {
        let text = 'comentarios'
        if (this.props.commentsNumber === 1) {
            text = 'comentario'
        }
        return text
      }
      
    gna = () => {
        return (Math.floor(Math.random() * 9))
    }

    componentDidUpdate() {
        const token = localStorage.getItem('token')
        if (token === null) {
            this.props.goToLogin()
        }
    }

    render() {
        const post = {
            ...this.props.postDetail
        }

        return (
            <WrapperDiv>
                <Post 
                    key={post.id}
                    votesCount={post.votesCount}
                    userVoteDirection={post.userVoteDirection}
                    commentsNumber={post.commentsNumber}
                    id={post.id}
                    username={post.username}
                    text={post.text}
                    createdAt={post.createdAt}
                    title={post.title}
                    selectedId={() => {console.log(post.id)}}
                />
                    <NewComment
                        id={post.id}
                    />
                    {this.props.postDetail && this.props.postDetail.comments.map((item) => (
                        <Comments
                            key={item.id}
                            votesCount={item.votesCount}
                            userVoteDirection={item.userVoteDirection}
                            id={item.id}
                            username={item.username}
                            text={item.text}
                            createdAt={item.createdAt}
                            topicId={post.id}
                        />
                    ))}
            </WrapperDiv>
        );
    }
}

const mapStateToProps = state => ({ postDetail: state.posts.postDetail,  user: state.posts.user});

const mapDispatchToProps = dispatch => ({
    goToLogin: () => dispatch(push(routes.login))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);
