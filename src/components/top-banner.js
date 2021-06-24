import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import BannerImage from "../images/banner_image.jpg";

const Banner = styled.div`
    background-image: url(${p => p.backgroundImage});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    box-sizing: border-box;
`;

const BannerContent = styled.div`
    padding: 200px 20px;
    box-sizing: border-box;
    max-width: 1024px;
    margin: 0 auto;
    color: white;
    text-align: center;
`;

const BannerGradient = styled.div`
    background: rgb(0,0,0);
    background: linear-gradient(0deg, rgba(0,0,0,0.80015756302521) 0%, rgba(0,0,0,0.46122198879551823) 100%);
`;

const BannerTitle = styled.h1`
    font-weight: 400;
    margin-bottom: 10px;
`;

const BannerDescription = styled.h2`
    font-weight: 400;
`;

const BannerButton = styled.a`
    background-color: #0056b8;
    padding: 10px 15px;
    border: none;
    color: white;
    border-radius: 5px;
    text-decoration: none;
`;

function TopBanner(){
    return <Banner id="hjem" backgroundImage={BannerImage}>
        <BannerGradient>
        <BannerContent>
            <BannerTitle>Byggassistenten Sjømark</BannerTitle>
            <BannerDescription>Din samarbeidsparter til riktig byggkvalitet</BannerDescription>
            <BannerButton href="#kontakt">
                Ta kontakt
            </BannerButton>
        </BannerContent>
        </BannerGradient>
    </Banner>;
}

export default TopBanner;