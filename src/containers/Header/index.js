import React, { Component } from "react";
import { WrapperDiv } from './styled'

class Header extends Component {

    


    render() {
        return (
            <WrapperDiv>
                <div>
                    <h1>Logo</h1>
                </div>
                <div>
                    <p>info logado</p>
                    <button onClick={this.setLogout}>Logout</button>
                </div>
            </WrapperDiv>
        );
    }
}

export default Header;
