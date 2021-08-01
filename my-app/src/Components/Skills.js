import React from 'react';
import styled from 'styled-components';
import { MainLayout, InnerLayout } from '../styles/Layouts';
import Title from '../Components/Title';

function Skills() {
    return (
        <SkillsStyled>
            <MainLayout>
                <Title title={'Resume'} span={'Resume'} />
                <InnerLayout>

                </InnerLayout>
            </MainLayout>
        </SkillsStyled>
    )
}

const SkillsStyled = styled.section`

`;

export default Skills;
