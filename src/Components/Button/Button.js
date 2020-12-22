import styled from 'styled-components';

const Button = ({ children,color,backgroundColor, width, border,borderColor, style}) => {
    // If a color prop is not passed, the default color of the Button is #fff

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

    // If a backgroundColor prop is not passed, the default color of the Button is #E5E5E5 which is the color of the body of the insurage page
    const returnBgColor = (val) => {
        const colorTestReg = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
        if (
            (color !== null || color !== undefined) &&
            colorTestReg.test(val)
        ) {
            return val;
        } else {
            return '#E5E5E5';
        }
    };

        // If a borderColor prop is not passed, the default color of the Button is #fff
        const returnBorderColor = (val) => {
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
        background-color: ${returnBgColor(backgroundColor)};
        display:flex;
        justify-content:center;
        align-items:center;
        width:${width}px;
        height:50px;
        border-radius:5px;
        ${
            border && `border: 1px solid ${returnBorderColor(borderColor)};`
        }
    `
    return (
        <Button>
            {children}
        </Button>
    );
}

export default Button;
