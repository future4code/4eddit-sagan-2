import React, { Component } from "react"
import { connect } from "react-redux"
import { push } from "connected-react-router";
import { routes } from "../../containers/Router/index";

const userRegister = [
  {
    name:'nome', 
    label:'Nome do novo Usuário',
    type:'text', 
    required,
    pattern:'[a-zA-Z]{3,}', 
    title:'nome do usuário com no mínimo 3 letras'
  },
  {
    name:'email', 
    label:'email do novo Usuário',
    type:'email', 
    required, 
    title:'email completo do usuário'
  },
  {
    name:'senha', 
    label:'senha do novo Usuário',
    type:'password', 
    required,
    pattern:'{5,}', 
    title:'nova senha com no mínimo 5 digitos'
  }
]

class Register extends Component{
  constructor(props){
    super(props)
    this.state={
      form:{}
    }
  }

  handleInputnewUser = event => {
    const {name, value} = event.target;
    this.setState({
      form:{
        ...this.state.form, 
        [name]:value
      }
    })
  }

  handleOnSubmit = event => {
    event.preventDefault();
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleOnSubmit}>
          {userRegister.map(field =>{
            return(
              <div>
                <label>{field.label}</label>
                <input
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
          <button>Cadastrar</button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    goToFeed: () => dispatch(push(routes.feed))
  }
}
export default connect(null, mapDispatchToProps)(Register)