import styled from 'styled-components';

const Button = styled.div`
  color:${props => props.color};
  background: #fff;
  display:flex;
  align-items:center;
  justify-content:center;
  width:142px;
  height:47px;
  border-radius:23.5px;
  margin-right:1.5rem;
  background-color:${props => props.backgroundColor};
  ${
    props => props.border && `border: 1px solid #000;`
  }
`;
const NavBarButton = ({ text,color,backgroundColor, border }) => {
    
    return (
        <Button 
          backgroundColor={backgroundColor} 
          border={border} 
          color={color}
        >
            {text}
        </Button>
    );
}

export default NavBarButton;
