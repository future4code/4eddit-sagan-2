import axios from 'axios'
import {push} from 'connected-react-router'
import {routes} from '../containers/Router'

const baseUrl = "https://us-central1-missao-newton.cloudfunctions.net/fourEddit/login"

export const login = (email, password) => async (dispatch) => {
  const loginData = {
    email,
    password
  }
  try {
    const response = await axios.post(`${baseUrl}`, loginData);
    const token = response.data.token
    localStorage.setItem("token", token)
    // dispatch(push(routes.root))  vou deixar comentado porque quando o login der certo ele tem que ir para a pagina do edu
  } catch (error) {
    window.alert("Desculpe, o login de deu errado, tente novamente", error)
  }
}