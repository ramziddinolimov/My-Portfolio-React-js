import React,{useState} from 'react';
import {MainLayout, InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import portfolios from '../data/portfolios';

function PortfoliosPage() {
    const [menuItem, setMenuItems] = useState(portfolios);
    return (
        <MainLayout>
            <Title title={'Portfolios'} span={'portfolios'} />
            <InnerLayout>

            </InnerLayout>
        </MainLayout>
    )
}

export default PortfoliosPage;
