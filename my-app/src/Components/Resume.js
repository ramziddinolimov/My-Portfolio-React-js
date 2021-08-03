import React from 'react';
import styled from 'styled-components';
import {MainLayout, InnarLayout, InnerLayout} from '../styles/Layouts'
import Title from '../Components/Title'
import SmallTitle from '../Components/SmallTitle';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SchoolIcon from '@material-ui/icons/School';
import ResumeItem from '../Components/ResumeItem';

function Resume() {
    const briefcase = <BusinessCenterIcon />
    const school = <SchoolIcon />
    return (
        
            <ResumeStyled>
                <Title title={'Resume'} span={'resume'} />
                <InnerLayout>
                    <div className="small-titlee">
                    <SmallTitle icon={briefcase} title={'Working Experience'} />
                    </div>
                    <div className="resume-content">
                        <ResumeItem 
                        year={'2015-2020'}
                        title={'Compuer'}
                        subTitle={'hefgwu'}
                        text={'wehjfbwe'}
                        />
                    </div>
                </InnerLayout>
            </ResumeStyled>
        
    )
}

const ResumeStyled = styled.section`
    
`;

export default Resume;
