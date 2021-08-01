import React from 'react';
import styled from 'styled-components';
import {MainLayout, InnarLayout, InnerLayout} from '../styles/Layouts'
import Title from '../Components/Title'
import SmallTitle from '../Components/SmallTitle';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SchoolIcon from '@material-ui/icons/School';

function Resume() {
    const briefcase = <BusinessCenterIcon />
    const school = <SchoolIcon />
    return (
        
            <ResumeStyled>
                <Title title={'Resume'} span={'resume'} />
                <InnerLayout>
                    <SmallTitle icon={briefcase} title={'Working Experience'} />
                    <div className="resume-content"></div>
                </InnerLayout>
            </ResumeStyled>
        
    )
}

const ResumeStyled = styled.section`

`;

export default Resume;
