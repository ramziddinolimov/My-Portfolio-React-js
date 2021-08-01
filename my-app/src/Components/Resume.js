import React from 'react';
import styled from 'styled-components';
import {MainLayout, InnarLayout, InnerLayout} from '../styles/Layouts'
import Title from '../Components/Title'

function Resume() {
    return (
        
            <ResumeStyled>
                <Title title={'Resume'} span={'resume'} />
                <InnerLayout>

                </InnerLayout>
            </ResumeStyled>
        
    )
}

const ResumeStyled = styled.section`

`;

export default Resume;
