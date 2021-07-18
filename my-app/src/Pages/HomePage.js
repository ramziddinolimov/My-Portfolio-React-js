import React from 'react'

import styled from 'styled-components';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TelegramIcon from '@material-ui/icons/Telegram';
import GithubIcon from '@material-ui/icons/GitHub';
import LinkedinIcon from '@material-ui/icons/LinkedIn';


function HomePage() {
    return (
        <HomePageStyled>
           <div className="typography">
               <h1>Hi I'm <span>Ramziddin Olimov</span></h1>
               <p>dfhjdsbhjsbfhjds dfjdsfjds djfnjsdbfjsdnji ndjanklasdo  dnnaosm  ndndndo  ednen jnedne ewondnew nede djwe nn wene nn</p>
               <div className="icons">
                   <div className="icon i-facebook">
                       <FacebookIcon />
                   </div>
                   <div className="icon i-instagram">
                       <InstagramIcon />
                   </div>
                   <div className="icon i-telegram">
                       <TelegramIcon />
                   </div>
                   <div className="icon i-github">
                       <GithubIcon />
                   </div>
                   <div className="icon i-linkedin">
                       <LinkedinIcon />
                   </div>
               </div>
           </div>
        </HomePageStyled>
    )
}

const HomePageStyled = styled.header`
    width: auto;
    height: 100vh;

    .typography{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        width: 80%;
    }

    .icons{
        display: flex;
        justify-content: center;
        margin-top: 1rem;
        .icon{
            border: 2px solid var(--border-color);
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            &:hover{
                border: 2px solid var(--primary-color);
                color: var(--primary-color);
            }
            &:not(:last-child){
                margin-right: 2rem;
                cursor: pointer;
            }
            svg{
                margin: .5rem;
            }
        }
    }
`;

export default HomePage;