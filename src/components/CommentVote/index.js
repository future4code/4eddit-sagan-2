import React, { Component } from "react"
import { connect } from "react-redux"
import Button from '@material-ui/core/Button'
import { commentVote } from "../../actions/Actions";


class CommentVote extends Component {

  handlewithVote = (voteValue) => {
    let sendValue = ''
    if (this.props.userVoteDirection === voteValue) {
      sendValue = 0
    } else if (this.props.userVoteDirection !== voteValue) {
      sendValue = voteValue
    }
    let vote = {direction: sendValue}
    this.props.commentVote(this.props.topicId, vote, this.props.commentId)
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
  commentVote: (ti, v, ci) => dispatch(commentVote(ti, v, ci))
})

export default connect(mapStateToProps, mapDispatchToProps)(CommentVote)