import React from 'react';
import styled from 'styled-components';
import {MainLayout, InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';

function ContactPage() {
    return (
        <MainLayout>
            <Title title={'Contact'} span={'Contact'} />
            <InnerLayout>
                
            </InnerLayout>
        </MainLayout>
    )
}

const ContactPageStyled = styled.section`

`;

export default ContactPage;
