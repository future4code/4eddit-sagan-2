import styled from "styled-components";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from "@material-ui/core/Typography";
import Paper from '@material-ui/core/Paper';

export const TextFieldRegister = styled(TextField)`
margin:10px;
`

export const ButtonRegister = styled(Button)`
font-size: 100%;
width:14.3vw;
height: 7.5vh;
margin-left: 10px;
margin-bottom: 30px;
margin-top: 10px;
`

export const PaperRegister = styled(Paper)`
display: flex;
flex-direction: column;
justify-content: space-evenly;
justify-items: center;
align-items: center;
text-align:center;
width: 60vw;
height: 60vh;
margin-left: 20vw;
margin-top: 10vh;
`

export const TypographyRegister = styled(Typography)`
margin: o auto;
`