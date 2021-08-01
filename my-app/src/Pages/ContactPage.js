import React from 'react';
import styled from 'styled-components';
import {MainLayout, InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import PrimaryButton from '../Components/PrimaryButton';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ContactItem from '../Components/ContactItem';

function ContactPage() {
    const phone = <PhoneIcon />
    const email = <EmailIcon />
    const location = <LocationOnIcon />
    return (
        <MainLayout>
            <Title title={'Contact'} span={'Contact'} />
            <ContactPageStyled>
            <InnerLayout className={'contact-section'}>
                <div className="left-content">
                    <div className="contact-title">
                        <h4>Get In Touch</h4>
                    </div>
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
                        <div className="form-field">
                            <label htmlFor="">Enter your message*</label>
                            <textarea name="textarea" id="textarea" cols="30" rows="10"></textarea>
                        </div>
                        <div className="form-field">
                            <PrimaryButton title={'Send email'} />
                        </div>
                    </form>
                </div>
                <div className="right-content">
                    <ContactItem title={'Phone'} icon={phone} cont1={'+43487232'} cont2={'+43487232'} />
                    <ContactItem title={'Email'} icon={email} cont1={'+43487232'} cont2={'+43487232'} />
                    <ContactItem title={'Address'} icon={location} cont1={'+43487232'} cont2={'+43487232'} />
                </div>
            </InnerLayout>
            </ContactPageStyled>
        </MainLayout>
    )
}

const ContactPageStyled = styled.section`
    .contact-section{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 2rem;
        .right-content{
            display: flex;
            flex-direction: column;
        }
        .contact-title{
            h4{
                color: var(--white-color);
                padding: 1rem 0;
                font-size: 1.8rem;
            }
        }
        .form{
            width: 100%;
            .form-field{
                margin-top: 2rem;
                position: relative;
                width: 100%;
                label{
                    position: absolute;
                    left: 20px;
                    top: -25px;
                    display: inline-block;
                    background-color: var(--background-dark-color);
                
                    color: inherit;
                }
                input{
                    border: 1px solid var(--border-color);
                    outline: none;
                    background: transparent;
                    height: 60px;
                    padding: 0 15px;
                    width: 100%;
                    color: inherit;
                }
                textarea{
                    background-color: transparent;
                    border: 1px solid var(--border-color);
                    outline: none;
                    color: inherit;
                    width: 100%;
                    padding: .8rem 1rem;
                }
            }
        }
    }
`;

export default ContactPage;
