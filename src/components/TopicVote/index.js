import React, { Component } from "react"
import { connect } from "react-redux"
import Button from '@material-ui/core/Button'
import { topicVote } from "../../actions/Actions";


class TopicVote extends Component {
  
  handlewithVote = (voteValue) => {
    let sendValue = ''
    if (this.props.userVoteDirection === voteValue) {
      sendValue = 0
    } else if (this.props.userVoteDirection !== voteValue) {
      sendValue = voteValue
    }
    let vote = {direction: sendValue}
    this.props.topicVote(this.props.topicId, vote)
  }

  render() {
    return (
      <div>
        <Button onClick={() => { this.handlewithVote(1) }}>+</Button>
        <p>{this.props.votesCount}</p>
        <Button onClick={() => { this.handlewithVote(-1) }}>-</Button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({
  topicVote: (i, v) => dispatch(topicVote(i, v))
})

export default connect(mapStateToProps, mapDispatchToProps)(TopicVote)