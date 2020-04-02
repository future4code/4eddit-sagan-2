import React, { Component } from "react"
import { connect } from "react-redux"
import { push } from "connected-react-router";
import { routes } from "../../containers/Router/index";
import { newRegister } from "../../actions/Actions"
import { TextFieldLogin } from './styled'
import { ButtonLogin } from './styled'
import { PaperLogin as WrapperDiv } from './styled'
import { TypographyLogin } from './styled'
import { WrapperIcon } from './styled'
import RedditIcon from '@material-ui/icons/Reddit';
import { WrapperInputs } from './styled'
import Divider from '@material-ui/core/Divider'


const userRegister = [
  {
    name: 'username',
    label: 'Digite seu Nome',
    type: 'text',
    pattern: '[a-zA-Z]{3,}',
    title: 'nome do usuário com no mínimo 3 letras'
  },
  {
    name: 'email',
    label: 'Digite seu email',
    type: 'email',
    title: 'email completo do usuário'
  },
  {
    name: 'password',
    label: 'Crie uma senha',
    type: 'password',
    pattern: '{5,}',
    title: 'nova senha com no mínimo 5 digitos'
  }
]

class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      form: {}
    }
  }


  handleInputnewUser = event => {
    const { name, value } = event.target;
    this.setState({
      form: {
        ...this.state.form,
        [name]: value
      }
    })
  }

  componentDidUpdate() {
    const token = localStorage.getItem("token")
    if (token !== null) {
      this.props.goToFeed();
    }
  }


  handleOnSubmit = event => {
    event.preventDefault();
    this.props.newRegister(this.state.form);
  }

  render() {
    return (
      <WrapperDiv>
        <WrapperIcon>
          <RedditIcon fontSize={'large'} />
        </WrapperIcon>
        <TypographyLogin variant="h3" color='primary'>Bem vindo ao 4eddit</TypographyLogin>
        <form onSubmit={this.handleOnSubmit}>
          {userRegister.map(field => {
            return (
              <WrapperInputs>
                <TextFieldLogin
                  variant="outlined"
                  label={field.label}
                  name={field.name}
                  type={field.type}
                  value={this.state.form[field.name]}
                  required={field.required}
                  onChange={this.handleInputnewUser}
                  title={field.title}
                />
              </WrapperInputs>
            )
          })}
          <WrapperInputs>
            <ButtonLogin type="submit" variant="contained" color="primary">Cadastrar</ButtonLogin>
          </WrapperInputs>
        </form>
      </WrapperDiv>
    )
  }
}

const mapStateToProps = (state) => ({
  user: state.posts.user
})

const mapDispatchToProps = (dispatch) => ({
  goToFeed: () => dispatch(push(routes.root)),
  newRegister: (form) => dispatch(newRegister(form))
})
export default connect(mapStateToProps, mapDispatchToProps)(Register)