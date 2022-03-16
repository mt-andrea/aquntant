import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

const Nav = styled.nav
    `
    background: #0033FF;
    height: 80px;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem calc((100vw-1000px)/2);
    z-index:10;
`;
const NavLink = styled(Link)
    `
    color: #00F2FF;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    padding: 10px 22px;

    &:hover{
        color: #fff;
    }

    &.active{
        color: #0033FF;
        background: #00F2FF;
        border-radius: 50% 50% 0 0;
        padding: 10px 22px;
        border: none;
        outline: none;
    }
`

const NavMenu = styled.div
    `
    display: flex;
    align-items: center;
    margin-right: -24px;
`;
const NavBtn = styled.nav
    `
    display: flex;
    align-items: center;
    margin-right: 24px;
`;
const NavBtnLink = styled(Link)
    `
border-radius: 4px;
padding: 10px 22px;
background:#9740DE;
color:#fff;
border: none;
outline: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;

&:hover{
    transition: all 0.2s ease-in-out;
    background: #4087DE;
    color: #00F2FF;
}
`;
export {Nav, NavLink, NavBtn, NavBtnLink, NavMenu}