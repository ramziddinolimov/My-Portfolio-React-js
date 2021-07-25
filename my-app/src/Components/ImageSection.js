import React from 'react'
import styled from 'styled-components';
import resume from '../img/img-4.jpg';

function ImageSection() {
    return (
        <ImageSectionStyled>
            <div className="left-content">
                <img src={resume} alt="resume image"/>
            </div>
            <div className="right-content">
                <div className="sub-title">
                    <h4>I am lorem <span>lorem ipsum</span></h4>
                </div>
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
            </div>
        </ImageSectionStyled>
    )
}

const ImageSectionStyled = styled.div`

`;

export default ImageSection;
