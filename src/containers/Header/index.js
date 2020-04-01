import React, {Component} from "react";
import {WrapperDiv} from './styled'
import {connect} from "react-redux";
import {setLogout, setUser} from '../../actions/Actions'
import {StyledAppBar, WrapperDivLogo, WrapperIcon, WrapperUserData} from './styled'
import RedditIcon from '@material-ui/icons/Reddit';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


class Header extends Component {

    componentDidMount() {
        const existUser = JSON.parse(localStorage.getItem('user'))
        if (existUser !== null) {
            this.props.setUser(existUser)
        }
    }
    render() {
        const userdata = (
            <WrapperUserData>
                <WrapperUserData>
                    <Button variant="outlined"
                        size={'small'}
                        color="primary"
                        onClick={
                            this.props.setLogout
                    }>Logout</Button>
                </WrapperUserData>
                <div>
                    <Typography variant={'subtitle2'}
                        color={'textPrimary'}>User: {
                        this.props.user === null ? "" : this.props.user.username
                    }</Typography>
                    <Typography variant={'subtitle2'}
                        color={'textPrimary'}>Email: {
                        this.props.user === null ? "" : this.props.user.email
                    }</Typography>
                </div>
            </WrapperUserData>
        )
        const logodata = (
            <WrapperDiv>
                <WrapperIcon>
                    <RedditIcon fontSize={'large'}/>
                </WrapperIcon>
                <WrapperDivLogo>
                    <Typography variant={'h5'}
                        color={'textPrimary'}>4eddit</Typography>
                    <Typography variant={'subtitle2'}
                        color={'textPrimary'}>Turma 2 - Sagan</Typography>
                </WrapperDivLogo>
            </WrapperDiv>
        )
        return (
            <StyledAppBar elevation={0}>
                {
                this.props.user.length === 0 ? "" : logodata
            }
                {
                this.props.user.length === 0 ? "" : userdata
            } </StyledAppBar>
        );
    }
}

const mapStateToProps = state => ({user: state.posts.user});


const mapDispatchToProps = (dispatch) => ({
    setLogout: () => dispatch(setLogout()),
    setUser: (data) => dispatch(setUser(data))

})

export default connect(mapStateToProps, mapDispatchToProps)(Header);
