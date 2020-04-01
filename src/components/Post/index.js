import React, {Component} from "react";
import {WrapperPost} from './styled'
import TopicVote from '../TopicVote'

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
                    <div onClick={() => {this.props.selectedId(this.props.id)}}>
                    <p>Número de votos: {this.props.votesCount}</p>
                    <p>Voto computado: {this.props.userVoteDirection}</p>
                    <p>Número de comentarios: {this.props.commentsNumber}</p>
                    <p>ID: {this.props.id}</p>
                    <p>Nome: {this.props.username}</p>
                    <p>Texto do post: {this.props.text}</p>
                    <p>Criado em: {this.props.createdAt}</p>
                    <p>Titulo do post: {this.props.title}</p>
                    </div>
                    <TopicVote
                    key={this.props.id}
                    userVoteDirection={this.props.userVoteDirection}
                    topicId={this.props.id}
                    votesCount={this.props.votesCount}
                    />
                </WrapperPost>
        );
    }
}

export default Post;