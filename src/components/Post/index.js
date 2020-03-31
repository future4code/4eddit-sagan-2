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
                <WrapperPost onClick={() => {this.props.selectedId(this.props.id)}}>
                    <p>Número de votos: {this.props.votesCount}</p>
                    <p>Voto computado: {this.props.userVoteDirection}</p>
                    <p>Número de comentarios: {this.props.commentsNumber}</p>
                    <p>ID: {this.props.id}</p>
                    <p>Nome: {this.props.username}</p>
                    <p>Texto do post: {this.props.text}</p>
                    <p>Criado em: {this.props.createdAt}</p>
                    <p>Titulo do post: {this.props.title}</p>
                </WrapperPost>
        );
    }
}

export default Post;