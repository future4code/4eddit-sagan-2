import React, {Component} from "react";
import {connect} from "react-redux";
import {WrapperDiv} from './styled'

class PostDetail extends Component {

    componentWillMount() {
        console.log("will", this.props.postDetail)
    }
    componentDidMount() {
        console.log("didm", this.props.postDetail)
    }
    componentDidUpdate() {
        console.log("didu", this.props.postDetail)
    }
    render() {
        console.log("aqui", this.props.postDetail)
        const post = {
            ...this.props.postDetail
        }
        return (<WrapperDiv>
            <div> 
            {post.username}
            {this.props.postDetail.username}
            </div>
        </WrapperDiv>);
    }
}

const mapStateToProps = state => ({postDetail: state.posts.postDetail});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);

{/* <p>{this.props.postDetail.votesCount}</p>
<p>{this.props.postDetail.userVoteDirection}</p>
<p>{this.props.postDetail.commentsNumber}</p>
<p>{this.props.postDetail.id}</p>
<p>{this.props.postDetail.username}</p>
<p>{this.props.postDetail.createdAt}</p>
<p>{this.props.postDetail.title}</p>
<p>{this.props.postDetail.text}</p>
<p>{this.props.postDetail.comments.length}</p> */}