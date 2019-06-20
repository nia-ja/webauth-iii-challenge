import styled from "styled-components";
import { NavLink } from 'react-router-dom';


export const NavComp = styled.nav`
    display: flex;
    background: #335C67;
    padding: 15px 0;
    justify-content: flex-end;
    margin-bottom: 30px;
    img {
        width: 20px;
        height: 20px;
        margin-right: 3%;
        &:hover {
            cursor: pointer;
        }
    }
`;

const activeClassName = 'active-nav-item';

export const NavItem = styled(NavLink).attrs({
    activeClassName
})`
color:  #E09F3E;
text-decoration: none;
margin-right: 2%;
&:hover {
    color: #EBC184;
    text-decoration: underline;
}
&.${activeClassName} {
    color: white;
}
`