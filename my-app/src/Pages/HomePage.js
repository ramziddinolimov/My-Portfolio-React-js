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
                   <div className="i-facebook"></div>
                   <div className="i-instagram"></div>
                   <div className="i-telegram"></div>
                   <div className="i-github"></div>
                   <div className="i-linkedin"></div>
               </div>
           </div>
        </HomePageStyled>
    )
}

const HomePageStyled = styled.header`
    width: auto;
    height: 100vh;
`;

export default HomePage;