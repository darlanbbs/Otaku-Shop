import styled from 'styled-components';
import * as C from 'reactstrap'


export const Container = styled(C.Container)`
width: 100%;
display:flex;
justify-content: center;
align-items: center;
flex-direction: column;
margin-top:30px;
`

export const Title = styled.h1`
color:#2A2F4F;
font-size: 40px;
border-bottom: solid 3px #2A2F4F;
font-weight: 700;
`

export const Text = styled.p`
font-size: 20px;
color:#000;
text-align: center;
font-weight: 500;
`