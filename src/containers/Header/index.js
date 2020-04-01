import React, {Component} from "react";
import {WrapperDiv} from './styled'
import {connect} from "react-redux";
import {setLogout, setUser} from '../../actions/Actions'

class Header extends Component {

    componentDidMount() {
        const existUser = JSON.parse(localStorage.getItem('user'))
        if (existUser !== null) {
            this.props.setUser(existUser)
        }
    }
    render() {
        const logado = (
            <div> {/* <Avatar src="https://picsum.photos/200"/> */}
                <p>User: {
                    this.props.user === null ? "" : this.props.user.username
                }</p>
                <p>Email: {
                    this.props.user === null ? "" : this.props.user.email
                }</p>
                <p>{
                    this.props.user.length
                }</p>
                <button onClick={
                    this.props.setLogout
                }>Logout</button>
            </div>
        )
        const deslogado = (
            <div>
                <p></p>
            </div>
        )
        return (
            <WrapperDiv>
                <div>
                    <h1>Logo</h1>
                </div>
                {
                this.props.user.length === 0 ? deslogado : logado
            } </WrapperDiv>
        );
    }
}

const mapStateToProps = state => ({user: state.posts.user});


const mapDispatchToProps = (dispatch) => ({
    setLogout: () => dispatch(setLogout()),
    setUser: (data) => dispatch(setUser(data))

})

export default connect(mapStateToProps, mapDispatchToProps)(Header);
