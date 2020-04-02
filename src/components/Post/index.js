import React, {Component} from "react";
import {StyledPaper, WrapperBottom, WrapperTop, StyledCommentIcon, WrapperContent, StyledAvatar} from './styled'
import TopicVote from '../TopicVote'
import Typography from '@material-ui/core/Typography';
import CommentIcon from '@material-ui/icons/Comment';
import {Avatar} from '@material-ui/core';


class Post extends Component {

    componentDidMount() {
        const token = localStorage.getItem('token')
        if (token === null) {
            this.props.goToLogin()
        }
        this.calcHour()
    }

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

    calcHour = () => {
        let text = ""
        let fulltime = (new Date() - new Date(this.props.createdAt))/1000/60/60
        let inteiro = Math.trunc(fulltime)
        let minutos = Math.floor((fulltime-inteiro)*60)
        let horas = 0
        let dias = 0
        let diasinteiro = inteiro/24
        if (diasinteiro > 1) {
            dias = Math.trunc(diasinteiro)
            horas = Math.floor((diasinteiro-dias)*24)
        }
        if (diasinteiro < 1) {
            horas = (diasinteiro)*24
        }

        let datautc = new Date(this.props.createdAt)
        let diafull = datautc.getDate()
        let monthfull = datautc.getMonth()+1
        let yearfull = datautc.getFullYear()

        if (dias > 0) {
            text = `${dias} dias, ${horas} horas e ${minutos} minutos (${diafull}/${monthfull}/${yearfull}).`
        } else if (dias <= 0 && horas > 0) {
            text = `${horas} horas e ${minutos} minutos (${diafull}/${monthfull}/${yearfull}).`
        } else if (dias <= 0 && horas <= 0) {
            text = `${minutos} minutos (${diafull}/${monthfull}/${yearfull}).`
        }
        return text

    }

    render() {
        const textData = (
            this.calcHour()
        )
        return (
                <StyledPaper>
                    <TopicVote
                        key={this.props.id}
                        userVoteDirection={this.props.userVoteDirection}
                        topicId={this.props.id}
                        votesCount={this.props.votesCount}
                    />
                    <WrapperContent onClick={() => {this.props.selectedId(this.props.id)}}>
                        <WrapperTop>
                            <StyledAvatar src={`https://picsum.photos/1${this.gna()}${this.gna()}`} />
        <Typography variant={'caption'} color={'secondary'}><strong>r/categoria</strong> Criado por: <strong>u/{this.props.username}</strong> a {textData}</Typography>
                        </WrapperTop>
                        <div>
                            <Typography variant={'h6'} color={'textPrimary'}>{this.props.title}</Typography>
                            <Typography variant={'subtitle1'} color={'textPrimary'}>{this.props.text}</Typography>
                        </div>
                        <WrapperBottom>
                            <StyledCommentIcon />
                            <Typography variant={'caption'} color={'secondary'}> {this.props.commentsNumber} {this.textComment()}</Typography>
                        </WrapperBottom>
                    </WrapperContent>
                </StyledPaper>
        );
    }
}

export default Post;