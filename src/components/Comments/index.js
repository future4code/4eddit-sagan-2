import React, {Component} from "react";
import {WrapperDiv} from './styled'

class Comments extends Component {

    render() {
        return (
        <div>
            <p>Número de votos: {this.props.votesCount}</p>
            <p>Voto computado: {this.props.userVoteDirection}</p>
            <p>ID: {this.props.id}</p>
            <p>Nome: {this.props.username}</p>
            <p>Texto do post: {this.props.text}</p>
            <p>Criado em: {this.props.createdAt}</p>
            <hr></hr>
        </div>);
    }
}

export default Comments
