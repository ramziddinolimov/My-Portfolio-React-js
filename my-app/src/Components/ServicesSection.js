import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title'
import ServiceCard from '../Components/ServiceCard';
import design from '../img/design.svg';
import intelligence from '../img/artificial.svg';
import gamedev from '../img/game.svg';

function ServicesSection() {
    return (
        <InnerLayout>
            <ServicesSectionStyled>
                <Title title={'Services'} span={'services'} />
                <div className="services">
                    <ServiceCard 
                    image={design}
                    title={'Web Design'}
                    paragraph={'jfhuisfj  f fe fje fje fje fjenfjd fkd fjdsfjdsfjk dsfkj dsjfndjskfnjkds fjd '}/>

                   <div className="mid-card">
                    <ServiceCard 
                        image={intelligence}
                        title={'Artificial Intelligence'}
                        paragraph={'jfhuisfj  f fe fje fje fje fjenfjd fkd fjdsfjdsfjk dsfkj dsjfndjskfnjkds fjd '}/>

                   </div>
                    <ServiceCard 
                    image={gamedev}
                    title={'Game Development'}
                    paragraph={'jfhuisfj  f fe fje fje fje fjenfjd fkd fjdsfjdsfjk dsfkj dsjfndjskfnjkds fjd '}/>
                </div>
            </ServicesSectionStyled>
        </InnerLayout>
    )
}


const ServicesSectionStyled = styled.section`
    .services{
        margin-top: 5rem;
        display: flex;
        justify-content: space-between;
        .mid-card{
            margin: 0 1.2rem;
        }
    }
`;
export default ServicesSection;
