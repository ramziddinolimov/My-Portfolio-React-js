import React,{useState} from 'react';
import {MainLayout, InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import portfolios from '../data/portfolios';
import Menu from '../Components/Menu';

function PortfoliosPage() {
    const [menuItem, setMenuItems] = useState(portfolios);
    return (
        <MainLayout>
            <Title title={'Portfolios'} span={'portfolios'} />
            <InnerLayout>
                <Menu menuItem={menuItem} />
            </InnerLayout>
        </MainLayout>
    )
}

export default PortfoliosPage;
