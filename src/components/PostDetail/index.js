import React, {Component} from "react";
import {connect} from "react-redux";
import {WrapperDiv} from './styled'
import Comments from '../Comments/index'

class PostDetail extends Component {

    render() {
        const post = {
            ...this.props.postDetail
        }

        return (
            <div> 
                <p>Número de votos: {post.votesCount}</p>
                <p>Voto computado: {post.userVoteDirection}</p>
                <p>Número de comentarios: {post.commentsNumber}</p>
                <p>ID: {post.id}</p>
                <p>Nome: {post.username}</p>
                <p>Texto do post: {post.text}</p>
                <p>Criado em: {post.createdAt}</p>
                <p>Titulo do post: {post.title}</p>
                <div>
                    <h3>comentarios:</h3>
                    <hr></hr>
                    {this.props.postDetail && this.props.postDetail.comments.map((item) => (
                        <Comments
                        key={item.id}
                        votesCount={item.votesCount}
                        userVoteDirection={item.userVoteDirection}
                        id={item.id}
                        username={item.username}
                        text={item.text}
                        createdAt={item.createdAt}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({postDetail: state.posts.postDetail, postComments: state.posts.postComments});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);
