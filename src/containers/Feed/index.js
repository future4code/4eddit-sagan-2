import React, {Component} from "react";
import {connect} from "react-redux";
import {push} from "connected-react-router";
import {routes} from "../../containers/Router/index";

class Feed extends Component {

    componentDidMount() {
        const token = localStorage.getItem('token')
        if (token === null) {
            this.props.goToLogin()
        }
    }
    render() {
        return (
                <div>
                    feed de posts
                </div>
        );
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    goToLogin: () => dispatch(push(routes.login)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
