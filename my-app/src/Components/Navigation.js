import React from 'react'
import styled from 'styled-components'
import {NavLink} from 'react-router-dom';
import avatar from '../img/avatar.jpg'


function Navigation() {
    return (
        <NavigationStyled>
            <div className="avatar">
                <img src={avatar} alt=""/>
            </div>
            <ul className="nav-items">
                <li className="nav-item">
                    <NavLink to="/home" activeClassName="active-class">Home</NavLink>
                </li>
            </ul>
        </NavigationStyled>
    )
}

const NavigationStyled = styled.nav`

`;

export default Navigation