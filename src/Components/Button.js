import styled from 'styled-components';

const Button = ({ text,color,backgroundColor, border }) => {
    // If a color prop is not passed, the default color of the NavLink is #fff

    const returnColor = (val) => {
        const colorTestReg = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
        if (
          (color !== null || color !== undefined) &&
          colorTestReg.test(val)
        ) {
          return val;
        } else {
          return '#fff';
        }
      };

    // If a backgroundColor prop is not passed, the default color of the NavLink is #fff


    const returnBgColor = (val) => {
        const colorTestReg = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
        if (
          (color !== null || color !== undefined) &&
          colorTestReg.test(val)
        ) {
          return val;
        } else {
          return '#fff';
        }
      };

    const Button = styled.div`
        color:${returnColor(color)};
        background: #fff;
        display:flex;
        align-items:center;
        justify-content:center;
        width:142px;
        height:47px;
        border-radius:23.5px;
        background-color:${returnBgColor(backgroundColor)};
        // border: 1px solid #000;
        // ${(border) => border && `
        // border: 1px solid #000;
        // `}
        ${
            border && `border: 1px solid #000;`
        }
        
    `;
    
    return (
        <Button>
            {text}
        </Button>
    );
}

export default Button;
