import React from 'react';
import styled from 'styled-components';

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
