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
    p{
        padding: 1rem 0;
    }
`;

export default ReviewItem;
