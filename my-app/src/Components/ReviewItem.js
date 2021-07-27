import React from 'react'
import styled from 'styled-components';

function ReviewItem({text}) {
    return (
        <RevivewItemStyled>
            <p>{text}</p>
        </RevivewItemStyled>
    )
}

const RevivewItemStyled = styled.div`
    height: 15vh;
    padding: 2rem 1rem;
    border-left: 6px solid var(--border-color);
    background-color: var(--background-dark-grey);
    position: relative;
    &::after{
        content: "";
        position: absolute;
        left: 1rem;
        border-width: .8rem;
        top: 100%;
        border-style: solid;
        border-color: var(--background-dark-grey) transparent transparent var(--background-dark-grey); 
    }
    p{
        padding: 1rem 0;
    }
`;

export default ReviewItem;
