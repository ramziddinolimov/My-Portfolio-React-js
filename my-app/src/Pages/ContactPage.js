import React from 'react';
import styled from 'styled-components';
import {MainLayout, InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';

function ContactPage() {
    return (
        <MainLayout>
            <Title title={'Contact'} span={'Contact'} />
            <InnerLayout className={'contact-section'}>
                <div className="left-content">
                    <form className="form">
                        <div className="form-field">
                            <label htmlFor="name">Enter you name*</label>
                            <input type="text" id="name" />
                        </div>

                        <div className="form-field">
                            <label htmlFor="email">Enter you email*</label>
                            <input type="email" id="email" />
                        </div>

                        <div className="form-field">
                            <label htmlFor="subject">Enter you subject*</label>
                            <input type="text" id="subject" />
                        </div>
                        <div className="text-area">
                            <label htmlFor="">Enter your message*</label>
                            <textarea name="textarea" id="textarea" cols="30" rows="10"></textarea>
                        </div>
                    </form>
                </div>
                <div className="right-content"></div>
            </InnerLayout>
        </MainLayout>
    )
}

const ContactPageStyled = styled.section`

`;

export default ContactPage;
