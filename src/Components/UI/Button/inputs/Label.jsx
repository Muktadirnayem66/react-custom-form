import styled from 'styled-components'

const fontSizes = {
    sm:"2rem",
    md:"4rem",
    lg:"6rem"
}

const  lineHeight = {
    sm: 1.3,
    md:1.4,
    lg:1.6
}
const Label = styled.label`
user-select:none;
font-family:"Arial";
font-size: ${(props)=> fontSizes[props.font]?? "1rem"}
color:#222;
line-height:${(props)=> lineHeight[props.line]?? 1.5}
user-select:none;

`
export default Label