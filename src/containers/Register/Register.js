import React, { Component } from "react"
import { connect } from "react-redux"
import { push } from "connected-react-router";
import { routes } from "../../containers/Router/index";
import { newRegister } from "../../actions/Actions"
import {TextFieldRegister} from './styled'
import {ButtonRegister} from './styled'
import {PaperRegister} from './styled'
import {TypographyRegister} from './styled'

const userRegister = [
  {
    name: 'username',
    label: 'Digite seu nome',
    type: 'text',
    pattern: '[a-zA-Z]{3,}',
    title: 'nome do usuário com no mínimo 3 letras'
  },
  {
    name: 'email',
    label: 'Digite seu email',
    type: 'email',
    title: 'Digite um email válido'
  },
  {
    name: 'password',
    label: 'Crie sua senha',
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
      <PaperRegister>
        <TypographyRegister variant="h2" component="h3" color='primary'>Cadastre-se</TypographyRegister>
        <form onSubmit={this.handleOnSubmit}>
          {userRegister.map(field => {
            return (
              <div>
                <TextFieldRegister
                  variant="outlined"
                  label={field.label}
                  name={field.name}
                  type={field.type}
                  value={this.state.form[field.name]}
                  required={field.required}
                  onChange={this.handleInputnewUser}
                  title={field.title}
                />
              </div>
            )
          })}
          <ButtonRegister type="submit" variant="contained" color="primary">Cadastrar</ButtonRegister>
        </form>
      </PaperRegister>
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