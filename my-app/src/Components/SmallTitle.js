import React from 'react';
import styled from 'styled-components';

function SmallTitle({icon, title}) {
    return (
        <SmallTitleStyled>
            <p>{icon}</p>
            <h3>{title}</h3>
        </SmallTitleStyled>
    )
}

const SmallTitleStyled = styled.div`

`;

export default SmallTitle;
