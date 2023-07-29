import styled from 'styled-components'


const InputText = styled.input`
width: 90%;
border:${(props)=>props.error ? "1px solid #ff0000": "1px solid #e1e1e1"};
outline: none;
padding: 1rem;
background:trnsparent;
padding:0.25rem 0.5rem;
gap:0.5rem;
color:#333;
font-family:Arial;


&:focus{
    border:1px solid skyblue;
}

`


export default InputText