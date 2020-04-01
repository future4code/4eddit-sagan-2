import React, { Component } from "react"
import { connect } from "react-redux"
import { push } from "connected-react-router";
import { routes } from "../../containers/Router/index";
import { newRegister } from "../../actions/Actions"
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const userRegister = [
  {
    name: 'username',
    label: 'Nome do novo Usuário',
    type: 'text',
    pattern: '[a-zA-Z]{3,}',
    title: 'nome do usuário com no mínimo 3 letras'
  },
  {
    name: 'email',
    label: 'email do novo Usuário',
    type: 'email',
    title: 'email completo do usuário'
  },
  {
    name: 'password',
    label: 'senha do novo Usuário',
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
      <div>
        <form onSubmit={this.handleOnSubmit}>
          {userRegister.map(field => {
            return (
              <div>
                <label>{field.label}</label>
                <TextField
                  variant="outlined"
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
          <Button type="submit" variant="contained">Cadastrar</Button>
        </form>
      </div>
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