import styled from 'styled-components';

export const Form = styled.form`
padding: 20px;
display: flex;
gap: 20px;
`
export const Input = styled.input`
height: 20px;
border-radius: 4px
`
export const Button = styled.button`
width: 75px;
height: 25px;
border:none;
outline: none;
border-radius: 4px;
background-color: orange;
color: black;
cursor: pointer;
transition: all 250ms linear;
&:hover {
background-color: black;
color: orange;
}
`