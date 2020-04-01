import React, {Component} from "react";
import CommentVote from '../../components/CommentVote/index'

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
            <CommentVote 
            commentId={this.props.id}
            votesCount={this.props.votesCount}
            userVoteDirection={this.props.userVoteDirection}
            topicId={this.props.topicId}
            />
            <hr></hr>
        </div>);
    }
}

export default Comments
