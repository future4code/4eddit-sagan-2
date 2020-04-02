import React, {Component} from "react"
import {connect} from "react-redux"
import {commentVote} from "../../actions/Actions";
import {WrapperDiv} from './styled'
import ForwardRoundedIcon from '@material-ui/icons/ForwardRounded';
import Typography from '@material-ui/core/Typography';

class CommentVote extends Component {

    handlewithVote = (voteValue) => {
        let sendValue = ''
        if (this.props.userVoteDirection === voteValue) {
            sendValue = 0
        } else if (this.props.userVoteDirection !== voteValue) {
            sendValue = voteValue
        }
        let vote = {
            direction: sendValue
        }
        this.props.commentVote(this.props.topicId, vote, this.props.commentId)
    }

    upIcon = () => {
        let colorValue = 'gray'
        if (this.props.userVoteDirection === 1) {
            colorValue = 'green'
        }
        return {transform: 'rotate(270deg)', color: colorValue}
    }
    downIcon = () => {
        let colorValue = 'gray'
        if (this.props.userVoteDirection === -1) {
            colorValue = 'orange'
        }
        return {transform: 'rotate(90deg)', color: colorValue}
    }

    render() {
      return (
          <WrapperDiv>
              <ForwardRoundedIcon onClick={() => {this.handlewithVote(1)}} style={this.upIcon()}/>
              <Typography variant={'body1'}>{this.props.votesCount}</Typography>
              <ForwardRoundedIcon onClick={() => {this.handlewithVote(-1)}} style={this.downIcon()}/>
          </WrapperDiv>
      )
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({
    commentVote: (ti, v, ci) => dispatch(commentVote(ti, v, ci))
})

export default connect(mapStateToProps, mapDispatchToProps)(CommentVote)
