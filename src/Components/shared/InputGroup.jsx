import React from 'react';
import styled from 'styled-components'
import Label from '../UI/Button/inputs/Label';
import InputText from '../UI/Button/inputs/InputText';

const Container = styled.div`
width: 100%;
display:flex;
outline: none;
flex-direction:column;
font-size:0.9rem;
border:1px solid #e1e1e1;
gap:0.5rem;
`
const ErrorMessage = styled.div`
font-size:0.8rem;
color:red;
`

const InputGroup = ({name, label, placeholder, value,
    error,onChange, onFocus, onBlur}) => {
    return (
        <Container>
            <Label>{label}</Label>
            <InputText name={name} id={name} placeholder={placeholder??""}
            onChange={onChange} onFocus={onFocus} onBlur={onBlur} value={value} error={error}/>
            {error && <ErrorMessage>{error}</ErrorMessage>}
        </Container>
    );
};

export default InputGroup;