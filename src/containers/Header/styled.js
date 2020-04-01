import styled from 'styled-components'
import AppBar from '@material-ui/core/AppBar';


export const WrapperDiv = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
text-align: center;
align-content: center;
align-items: center;
`
export const StyledAppBar = styled(AppBar)`
display: flex;
flex-direction: row;
justify-content: space-between;
background-color: white;

`
export const WrapperIcon = styled.div`
background-color: darkorange;
padding: 10px;
border-radius: 50%;
width: auto;
height: width;
margin: 20px;
`
export const WrapperDivLogo = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
text-align: center;
align-content: center;
align-items: center;
`
export const WrapperUserData = styled.div`
display: flex;
flex-direction: row;
align-items: center;
margin: 5px;
`