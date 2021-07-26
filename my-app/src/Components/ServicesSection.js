import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title'

function ServicesSection() {
    return (
        <InnerLayout>
            <ServicesSectionStyled>
                <Title title={'Services'} span={'services'} />
            </ServicesSectionStyled>
        </InnerLayout>
    )
}


const ServicesSectionStyled = styled.section`

`;
export default ServicesSection;
