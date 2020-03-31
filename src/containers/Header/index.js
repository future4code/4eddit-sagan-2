import React, { Component } from "react";
import { WrapperDiv } from './styled'
import { connect } from "react-redux";
import { setLogout } from '../../actions/Actions'

class Header extends Component {

    


    render() {
        return (
            <WrapperDiv>
                <div>
                    <h1>Logo</h1>
                </div>
                <div>
                    <p>info logado</p>
                    <button onClick={this.props.setLogout}>Logout</button>
                </div>
            </WrapperDiv>
        );
    }
}

const mapStateToProps = () => ({

})

const mapDispatchToProps = (dispatch) =>({
setLogout: () => dispatch(setLogout())
}) 

export default connect(mapStateToProps, mapDispatchToProps)(Header);
