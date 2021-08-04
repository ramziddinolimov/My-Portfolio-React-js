import React from 'react';
import styled from 'styled-components';

function Button({filter, button}) {
    return (
        <ButtonsStyled>
            {
                button.map((but, i) =>{
                    return <ButtonStyled key={i} onClick={() => filter(but)}>
                        {but}
                    </ButtonStyled>
                })
            }
            
        </ButtonsStyled>
    )
}

const ButtonStyled = styled.button`
    outline: none;
    border: none;
    background-color: var(--background-light-color-2);
    padding: .5rem 2rem;  
    font-size: inherit;
    color: var(--white-color);
    border-radius: 5px;
    transition: all .4s ease-in-out;
    &:active, &:focus{
        background-color: var(--primary-color);
    } 
    &:hover{
        background-color: var(--primary-color);
    }
    &:not(:last-child){
        margin-right: 1rem;
    }
`;

const ButtonsStyled = styled.div`
    display: flex;  
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 70%;
    margin: 2.4rem auto;
`;

export default Button;
