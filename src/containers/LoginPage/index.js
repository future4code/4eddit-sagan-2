import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from '../../actions/Actions';
import { push } from "connected-react-router";
import { routes } from "../../containers/Router/index";

class LoginPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: 'thales.eduardo@gmail.com',
      password: '12345'
    };
  }

  handleInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleLogin = (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    this.props.login(email, password)
  }

  componentDidUpdate() {
    const token = localStorage.getItem("token")
    if(token !== null) {
    this.props.goToFeed();
    } 
  }


  render() {
    const { email, password } = this.state
    return (
      <div>
        <h1>Faça seu login </h1>
        <form onSubmit={this.handleLogin}>
          <input
            name='email'
            type='email'
            label='Digite seu email'
            required
            value={email}
            onChange={this.handleInput}
          />
          <input
            name='password'
            type='password'
            label='Digite sua senha'
            required
            value={password}
            onChange={this.handleInput}
          />
          <button type="submit">Login</button>
          <p> Ou </p>
          <hr />
        </form>
        <button onClick={this.props.goToRegister}>Cadastre-se</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
user: state.posts.user
})

const mapDispatchToProps = (dispatch) => ({
  login: (email, password) => dispatch(login(email, password)),
  goToRegister: () => dispatch(push(routes.cadastro)),
  goToFeed: () => dispatch(push(routes.root))
  // aqui eu devo criar o dispatch push para enviar o usuário para as paginas necessárias 
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
