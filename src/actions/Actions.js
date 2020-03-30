import axios from 'axios'
import {push} from 'connected-react-router'
import {routes} from '../containers/Router'

const baseUrl = "https://us-central1-missao-newton.cloudfunctions.net/fourEddit"

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

export const getPosts = () => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.get(`${baseUrl}/posts`, {
        headers: {
            auth: token
        }
    })
    console.log(response.data)
    dispatch(setPosts(response.data))

  } catch (error) {
    alert('erro ao logar. contate o suporte', error)
    console.log(error)
  }
}

const setPosts = (posts) => ({type: 'SET_POSTS', payload: {
  posts
}})