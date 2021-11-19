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
               <p>I am Full Stack Developer Node.js, React.js, JavaScript, and SQL Server</p>
               <div className="icons">
                   <a href="https://codepen.io/pen/" className="icon i-facebook">
                       <FacebookIcon />
                   </a>
                   <a href="https://codepen.io/pen/" className="icon i-instagram">
                       <InstagramIcon />
                   </a>
                   <a href="https://codepen.io/pen/" className="icon i-telegram">
                       <TelegramIcon />
                   </a>
                   <a href="https://codepen.io/pen/" className="icon i-github">
                       <GithubIcon />
                   </a>
                   <a href="https://codepen.io/pen/" className="icon i-linkedin">
                       <LinkedinIcon />
                   </a>
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
            transition: all .4s ease-in-out;
            cursor: pointer;
            &:hover{
                border: 2px solid var(--primary-color);
                color: var(--primary-color);
            }
            &:not(:last-child){
                margin-right: 2rem;
                
            }
            svg{
                margin: .5rem;
            }
        }
        .i-facebook{
            &:hover{
                border: 2px solid blue;
                color: blue;
            }
        }
        
        .i-github{
            &:hover{
                border: 2px solid #5f4687;
                color: #5f4687;
            }
        }
    }
`;

export default HomePage;