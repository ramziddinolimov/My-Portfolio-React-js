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
                        text={'lorem uefhufnlkee ewv erwnvkerw vklnvirnwifjerwnfs fknrsfinef snfisnf rfkn fipewnfkirfn efewnpi fnwenfnewip fkewnifnrepnfewkfrne ferwnivnewf rknirn rk i'}
                        />

                        <ResumeItem 
                        year={'2015-2020'}
                        title={'Compuer'}
                        subTitle={'hefgwu'}
                        text={'lorem uefhufnlkee ewv erwnvkerw vklnvirnwifjerwnfs fknrsfinef snfisnf rfkn fipewnfkirfn efewnpi fnwenfnewip fkewnifnrepnfewkfrne ferwnivnewf rknirn rk i'}
                        />

                        <ResumeItem 
                        year={'2015-2020'}
                        title={'Compuer'}
                        subTitle={'hefgwu'}
                        text={'lorem uefhufnlkee ewv erwnvkerw vklnvirnwifjerwnfs fknrsfinef snfisnf rfkn fipewnfkirfn efewnpi fnwenfnewip fkewnifnrepnfewkfrne ferwnivnewf rknirn rk i'}
                        />
                    </div>

                    <div className="small-titlee u-small-title-margin">
                    <SmallTitle icon={school} title={'Working Experience'} />
                    </div>

                    <div className="resume-content">
                        <ResumeItem 
                        year={'2015-2020'}
                        title={'Compuer'}
                        subTitle={'hefgwu'}
                        text={'lorem uefhufnlkee ewv erwnvkerw vklnvirnwifjerwnfs fknrsfinef snfisnf rfkn fipewnfkirfn efewnpi fnwenfnewip fkewnifnrepnfewkfrne ferwnivnewf rknirn rk i'}
                        />

                        <ResumeItem 
                        year={'2015-2020'}
                        title={'Compuer'}
                        subTitle={'hefgwu'}
                        text={'lorem uefhufnlkee ewv erwnvkerw vklnvirnwifjerwnfs fknrsfinef snfisnf rfkn fipewnfkirfn efewnpi fnwenfnewip fkewnifnrepnfewkfrne ferwnivnewf rknirn rk i'}
                        />

                        <ResumeItem 
                        year={'2015-2020'}
                        title={'Compuer'}
                        subTitle={'hefgwu'}
                        text={'lorem uefhufnlkee ewv erwnvkerw vklnvirnwifjerwnfs fknrsfinef snfisnf rfkn fipewnfkirfn efewnpi fnwenfnewip fkewnifnrepnfewkfrne ferwnivnewf rknirn rk i'}
                        />
                    </div>
                </InnerLayout>
            </ResumeStyled>
        
    )
}

const ResumeStyled = styled.section`
    .small-titlee{
        padding: 3rem;
    }

    .u-small-title-margin{
        margin-top: 4rem;
    }

    .resume-content{
        border-left: 5px solid var(--border-color);
    }
`;

export default Resume;
