import React from 'react';
import styled from 'styled-components';
import { MainLayout, InnerLayout } from '../styles/Layouts';
import Title from '../Components/Title';
import ProgressBar from './ProgressBar';

function Skills() {
    return (
        <SkillsStyled>
            <MainLayout>
                <Title title={'My Skills'} span={'my Skills'} />
                <InnerLayout>
                    <div className="skills">
                        <ProgressBar
                            title={"Html"}
                            width={'80%'}
                            text={'80%'}
                        />

                        <ProgressBar
                            title={"Css"}
                            width={'70%'}
                            text={'70%'}
                        />

                        <ProgressBar
                            title={"Bootstrap"}
                            width={'85%'}
                            text={'85%'}
                        />

                        <ProgressBar
                            title={"Sass"}
                            width={'90%'}
                            text={'90%'}
                        />

                        <ProgressBar
                            title={"JavaScript"}
                            width={'70%'}
                            text={'70%'}
                        />

                        <ProgressBar
                            title={"React Js"}
                            width={'60%'}
                            text={'60%'}
                        />

                        <ProgressBar
                            title={"Node Js"}
                            width={'80%'}
                            text={'80%'}
                        />
                    </div>
                </InnerLayout>
            </MainLayout>
        </SkillsStyled>
    )
}

const SkillsStyled = styled.section`
    .skills{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 2rem;
        grid-column-gap: 3rem;
    }
`;

export default Skills;
