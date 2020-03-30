import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from '../../actions/Actions';
import { push } from "connected-react-router";
import { routes } from "../../containers/Router/index";

class LoginPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
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
        <button onClick={this.props.goToFeed}>Cadastre-se</button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  login: (email, password) => dispatch(login(email, password)),
  goToFeed: () => dispatch(push(routes.root))
  // aqui eu devo criar o dispatch push para enviar o usuário para a pagina de cadastro
})

export default connect(null, mapDispatchToProps)(LoginPage);
