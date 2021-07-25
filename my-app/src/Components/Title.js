import React from 'react'
import styled from 'styled-components';

function Title({title, span}) {
    return (
        <TitleStyled>
            <h2>{title} <b><span>{span}</span></b></h2>
        </TitleStyled>
    )
}

const TitleStyled = styled.div`
    position: relative;
    h2{
        color: var(--white-color);
        font-size: 3.8rem;
        font-weight: 600;
        text-transform: uppercase;
        position: relative;
        span{
            font-weight: 900;
            color: rgba(25,29,43, .44);
            font-size: 5rem;
            position: absolute;
            left: 0%;
            top: 10%;
        }
    }
`;

export default Title;
