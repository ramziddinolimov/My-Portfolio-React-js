import React from 'react'
import styled from 'styled-components';
import resume from '../img/img-4.jpg';
import PrimaButton from './PrimaButton';

function ImageSection() {
    return (
        <ImageSectionStyled>
            <div className="left-content">
                <img src={resume} alt=""/>
            </div>
            <div className="right-content">
                    <h4>I am lorem <span>lorem ipsum</span></h4>
                <p className="paragraphy">fjgnvdjfndrdn jvnonv vfdnvonfdov dfvnfdvn fv vndfvndf vf vnfdv dfnvjdsfvd svndsv sd vds vsdnvdsnv sd vsd vjds vds vsdv  djv jsd vjds vjdf vjd vjdfs vds vjds </p>
                <div className="about-info">
                    <div className="info-title">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Languages</p>
                        <p>Location</p>
                        <p>Service</p>
                    </div>

                    <div className="info">
                        <p>: Lorem ipsum</p>
                        <p>: 36</p>
                        <p>: Spanish </p>
                        <p>: Spanish, French, English </p>
                        <p>: London, United Kingdom</p>
                        <p>: Freelance</p>
                    </div>
                </div>
                <PrimaButton title={'Download Cv'} />
            </div>
        </ImageSectionStyled>
    )
}

const ImageSectionStyled = styled.div`
    margin-top: 5rem;
    display: flex;
    .left-content{
        width: 100%;
        
        img{
            width: 90%;
            object-fit: cover;
            
        }
    }
    .right-content{
        
        h4{
            font-size: 2rem;
            color: varx(--white-color);
            span{
                font-size: 2rem;
            }
        }

        .paragraphy{
            padding: 1rem 0;
        }
        .about-info{
            display: flex;
            padding-bottom: 1.4rem;
            .info-title{
                padding-right: 3rem;
                p{
                    font-weight: 600;
                }
            }
            .info-title, .info{
                p{
                    padding: .3rem 0;
                }
            }
        }
    }
`;

export default ImageSection;
