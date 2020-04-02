import React, {Component} from "react"
import {connect} from "react-redux"
import {topicVote} from "../../actions/Actions";
import {WrapperDiv} from './styled'
import ForwardRoundedIcon from '@material-ui/icons/ForwardRounded';
import Typography from '@material-ui/core/Typography';

class TopicVote extends Component {

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
        this.props.topicVote(this.props.topicId, vote)
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
    topicVote: (i, v) => dispatch(topicVote(i, v))
})

export default connect(mapStateToProps, mapDispatchToProps)(TopicVote)
