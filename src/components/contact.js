import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
import ContactForm from "./contact-form";
import Magne from "../images/magne.png";

const Wrapper = styled.div`
    background-color: #f7f7f7;
    padding: 0 20px;
`;

const InnerWrapper = styled.div`
    background-color: #f7f7f7;
    padding: 100px 0;
    max-width: 1024px;
    margin: 0 auto;
    @media (max-width: 768px) {
        padding: 50px 0;
    }
`;

const ContactWrapper = styled.div`
`;

const ContactLeft = styled.div`
    flex: 0 0 50%;
    img{
        max-width: 150px;
        @media (max-width: 768px) {
            display: block;
            width: 100%;
        }
    }
    .contactinfo{
        display: flex;
        @media (max-width: 768px) {
            display: block;
            
        }
        .info{
            padding: 0 20px;
            @media (max-width: 768px) {
                padding: 0;
            }
        }
        label{
            font-weight: 500;
            display: block;
        }
        span{
            display: block;
            margin-bottom: 10px;
        }
    }
`;

const ContactRight = styled.div`
    form{
        margin-top: 20px;
        input{
            display: block;
        }
    }
`;

function KontaktMeg(){
    return <Wrapper id="kontakt">
        <InnerWrapper>
            <h2>Ta gjerne kontakt</h2>
            <ContactWrapper>
                <ContactLeft>
                    <p>Nedenfor finner du kontaktinfoen min.</p>
                    <div className="contactinfo">
                        <img src={Magne} />
                        <div className="info">
                            <label>Navn:</label>
                            <span>Magne Sjømark</span>
                            <label>E-post:</label>
                            <span><a href="mailto:magne@sjomark.no">magne@sjomark.no</a></span>
                            <label>Mobil:</label>
                            <span><a href="tel:99244732">99 24 47 32</a></span>
                        </div>
                    </div>
                </ContactLeft>
                <ContactRight>
                    <p>Du kan også bruke skjemaet, så tar jeg kontakt!</p>
                    <ContactForm />
                </ContactRight>
            </ContactWrapper>
        </InnerWrapper>
    </Wrapper>;
}

export default KontaktMeg;