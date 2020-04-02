import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from "@material-ui/core/Typography";
import Paper from '@material-ui/core/Paper';


export const TextFieldLogin = styled(TextField)`

`

export const ButtonLogin = styled(Button)`

`
//esse paper é a div principal onde será posto o display
export const PaperLogin = styled(Paper)`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 60vw;
height: 60vh;
margin-left: 20vw;
`

export const TypographyLogin = styled(Typography)`
margin: o auto;
`