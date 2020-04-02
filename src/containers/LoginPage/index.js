import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from '../../actions/Actions';
import { push } from "connected-react-router";
import { routes } from "../../containers/Router/index";
import {TextFieldLogin} from './styled'
import {ButtonLogin} from './styled'
import {PaperLogin} from './styled'
import {TypographyLogin} from './styled' 

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
      <PaperLogin elevation={2}>
        <TypographyLogin variant="h2" component="h3" color='primary'>Faça seu login </TypographyLogin>
        <form onSubmit={this.handleLogin}>
          <TextFieldLogin
            variant="outlined"
            name='email'
            type='email'
            label='Digite seu email'
            required
            value={email}
            onChange={this.handleInput}
          />
          <TextFieldLogin
            variant="outlined"
            name='password'
            type='password'
            label='Digite sua senha'
            required
            value={password}
            onChange={this.handleInput}
          />
          <ButtonLogin type="submit" variant="contained" color='secondary'>Login</ButtonLogin>
          <TypographyLogin variant="h5" component="h3"> Ou </TypographyLogin>
          <hr />
        </form>
        <ButtonLogin onClick={this.props.goToRegister} variant="contained" color='secondary'>Cadastre-se</ButtonLogin>
      </PaperLogin>
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
