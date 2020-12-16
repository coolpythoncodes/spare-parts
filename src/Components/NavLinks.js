import styled from 'styled-components';

const NavLinks = ({ navLink, color }) => {
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

    const Link = styled.a`
        color:${returnColor(color)};
        margin-right:1.5rem;
    `;

    return (
        <li><Link>{navLink}</Link></li>
    );
}

export default NavLinks;
