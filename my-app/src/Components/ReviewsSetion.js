import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import ReviewItem from '../Components/ReviewItem';

function ReviewsSetion() {
    return (
        <InnerLayout>
            <ReviewsStyled>
                <Title title={'Reviews'} span={'Reviews'} />
                <InnerLayout>
                    <div className="reviews">
                        <ReviewItem text={'fewfwe fewfwe fwefw fwef wefwefw efwef wefwefwe fwe fwe'} />
                    </div>
                </InnerLayout>
            </ReviewsStyled>
        </InnerLayout>
    )
}

const ReviewsStyled = styled.section`

`;

export default ReviewsSetion;
