import React, {Component} from "react";
import {connect} from "react-redux";
import {push} from "connected-react-router";
import {routes} from "../../containers/Router/index";
import { getPosts, getPostDetail } from '../../actions/Actions'
import Post from '../../components/Post/index'
import NewPost from '../../containers/NewPost/index'
import {WrapperDiv} from './styled'
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Loading from '../../components/Loading/index'


class Feed extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true
        }
    }
    componentDidMount() {
        const token = localStorage.getItem('token')
        if (token === null) {
            this.props.goToLogin()
        }
        this.props.getPosts()
    }
    componentDidUpdate() {
        if (this.props.postComments !== null) {
            this.props.goToPostDetail()
        }
        const token = localStorage.getItem('token')
        if (token === null) {
            this.props.goToLogin()
        }
    }
    componentWillReceiveProps() {
        this.handleWhitLoading()
    }

    handleWhitSelect = (event) => {
        this.setState({loading: true})
        this.props.getPostDetail(event)
    };

    handleWhitLoading = () => {
        if(this.props.loading === 'desliga') {
            this.setState({loading: false})
        }
    };

    render() {
        return (
                <WrapperDiv>
                    {<Loading 
                    open={this.state.loading}
                    />}
                    <button onClick={() => {this.setState({loading: true})}}>teste</button>
                    {<NewPost />}
                    {
                this.props.posts && this.props.posts.map((item) => (
                    <Post 
                    key={item.id}
                    votesCount={item.votesCount}
                    userVoteDirection={item.userVoteDirection}
                    commentsNumber={item.commentsNumber}
                    id={item.id}
                    username={item.username}
                    text={item.text}
                    createdAt={item.createdAt}
                    title={item.title}
                    selectedId={this.handleWhitSelect}
                    />
                ))
            }
                </WrapperDiv>
        );
    }
}

const mapStateToProps = state => ({posts: state.posts.posts, postComments: state.posts.postComments, user: state.posts.user, loading: state.posts.loading});

const mapDispatchToProps = dispatch => ({
    goToLogin: () => dispatch(push(routes.login)),
    goToPostDetail: () => dispatch(push(routes.postdetails)),
    getPosts: () => dispatch(getPosts()),
    getPostDetail: (id) => dispatch(getPostDetail(id))

});

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
