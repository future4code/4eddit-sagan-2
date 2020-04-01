import React, { Component } from "react"
import { connect } from "react-redux"
import { push } from "connected-react-router";
import { routes } from "../../containers/Router/index";
import Button from '@material-ui/core/Button'
import { topicVote } from "../../actions/Actions";


class TopicVote extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
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
        {this.props.topicId}
        {this.props.userVoteDirection}
        <Button onClick={() => { this.handlewithVote(1) }}>+</Button>
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