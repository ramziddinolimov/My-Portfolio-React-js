import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';

function ReviewsSetion() {
    return (
        <InnerLayout>
            <ReviewsStyled>
                <Title title={'Reviews'} span={'Reviews'} />
                <InnerLayout>
                    
                </InnerLayout>
            </ReviewsStyled>
        </InnerLayout>
    )
}

const ReviewsStyled = styled.section`

`;

export default ReviewsSetion;
