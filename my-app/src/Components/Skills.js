import React from 'react';
import styled from 'styled-components';
import { MainLayout, InnerLayout } from '../styles/Layouts';
import Title from '../Components/Title';
import ProgressBar from './ProgressBar';

function Skills() {
    return (
        <SkillsStyled>
            <MainLayout>
                <Title title={'Resume'} span={'Resume'} />
                <InnerLayout>
                    <div className="skills">
                        <ProgressBar
                            title={"HTML5"}
                            width={'70%'}
                            text={'70%'}
                        />
                    </div>
                </InnerLayout>
            </MainLayout>
        </SkillsStyled>
    )
}

const SkillsStyled = styled.section`

`;

export default Skills;
