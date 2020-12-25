import styled from 'styled-components';

// ${
//     border && `border: 1px solid ${returnBorderColor(borderColor)};`
// }

const Wrapper = styled.div`
    color:${props => props.color};
    background-color: ${props => props.backgroundColor};
    display:flex;
    justify-content:center;
    align-items:center;
    width:${props => props.width}px;
    height:50px;
    border-radius:5px;
    box-shadow: 0px 0px 10px 0px rgba(112, 144, 176, 0.2);
    ${
        props => props.border && `border: 1px solid ${props.borderColor};`
    }
   
`

const Button = ({ children,color,backgroundColor, width, border,borderColor }) => {
    
    return (
        <Wrapper 
            width={width}
            color={color}
            backgroundColor={backgroundColor}
            border={border}
            borderColor={borderColor}
        >
            {children}
        </Wrapper>
    );
}

export default Button;
