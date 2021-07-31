import React from 'react';  
import styled from 'styled-components';

function ContactItem({icon, title, cont1, cont2}) {
    return (
        <ContactItemStyled>
            <div className="left-content">
            
                    {icon}
                
            </div>
            <div className="right-content">
                <h6>{title}</h6>
                <p>{cont1}</p>
                <p>{cont2}</p>

            </div>
        </ContactItemStyled>
    )
}

const ContactItemStyled = styled.div`
    padding: 1.5rem 2rem;
    background-color: var(--background-dark-grey);
`;

export default ContactItem;
