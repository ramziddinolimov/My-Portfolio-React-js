import React from 'react';
import styled from 'styled-components';
import GitHub from '@material-ui/icons/GitHub';
import Pinterest from '@material-ui/icons/Pinterest';

function Menu({menuItem}) {
    return (
        <MenuItemStyled>
            {
                menuItem.map((item)=>{
                    return <div className="grid-item" key={item.id}>
                        <div className="portfolio-content">
                            <div className="portfolio-image">
                                <img src={item.image} alt="" />
                            </div>
                            <ul>
                                <li>
                                    <a href={item.link1}> <GitHub /></a>
                                </li>

                                <li>
                                    <a href={item.link2}> <Pinterest /></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                })
            }
        </MenuItemStyled>
    )
}

const MenuItemStyled = styled.div`

`;

export default Menu;
