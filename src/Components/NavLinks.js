import styled from 'styled-components';

const Link = styled.a`
    color:${(props => props.color)};
    margin-right:1.5rem;
`;

const NavLinks = ({ navLink, color }) => {

    return (
        <li><Link>{navLink}</Link></li>
    );
}

export default NavLinks;
