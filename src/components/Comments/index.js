import React, {Component} from "react";
import CommentVote from '../../components/CommentVote/index'
import {StyledPaper, WrapperBottom, WrapperTop, StyledCommentIcon, WrapperContent, StyledAvatar} from './styled'
import Typography from '@material-ui/core/Typography';



class Comments extends Component {

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
                <CommentVote 
                    commentId={this.props.id}
                    votesCount={this.props.votesCount}
                    userVoteDirection={this.props.userVoteDirection}
                    topicId={this.props.topicId}
                />
                <WrapperContent>
                    <WrapperTop>
                        <Typography variant={'caption'} color={'secondary'}>Comentado por <strong> {this.props.username}</strong> a {textData} </Typography>
                    </WrapperTop>
                    <div>
                        <Typography variant={'subtitle2'} color={'textPrimary'}>{this.props.text}</Typography>
                    </div>
                </WrapperContent>
            </StyledPaper>
            );
    }
}

export default Comments
