import { Link, graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
import Popup from "./popup";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const Wrapper = styled.div`
    background-color: white;
`;

const TjenesterWrapper = styled.div`
    max-width: 1300px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    padding: 40px 0 100px;
    @media (max-width: 1024px) {
        display: block;
        padding: 40px 0;
    }
`;

const Tittel = styled.h2`
    font-weight: 300;
    font-size: 40px;
    text-align: center;
    margin: 100px 0 50px;
    @media (max-width: 1024px) {
       margin: 50px 0;
    }
`;

const Tjeneste = styled.div`
    flex: 0 0 calc(25% - 5px);
    text-align: center;
    margin-bottom: 60px;
    box-sizing: border-box;
    img{
        border-radius: 50%;
        display: block;
        margin: 0 auto;
    }
    a{
        color: #0056b8;
    }
`;

const TjenesteTittel = styled.div`
    font-weight: 500;
    font-size: 20px;
    margin: 10px 0;
`;

const TjenesteBeskrivelse = styled.div`

`;

const TjenesteContent = styled.div`
    padding: 0 20px;
    box-sizing: border-box;
`;

function Tjenester(props){
    const data = useStaticQuery(graphql`
    {
    tjenester: allContentfulTjeneste {
        nodes {
            tittel
            kortBeskrivelse
            bilde {
                file {
                    url
                }
                gatsbyImageData(
                    width: 200
                    height: 200
                    resizingBehavior: FILL
                    cropFocus: CENTER
                    aspectRatio: 1
                )
            }
            slug
            innhold {
                raw
            }
        }
    }
    }
    `);

    const tjenester = data?.tjenester?.nodes || [];

    return <Wrapper id="tjenester">
        <Tittel>Tjenester</Tittel>
        <TjenesterWrapper>
            {tjenester.map((tjeneste)=><Tjeneste><TjenesteContent>
                <GatsbyImage image={tjeneste.bilde.gatsbyImageData} width={200} height={200} />
                <TjenesteTittel>{tjeneste.tittel}</TjenesteTittel>
                <TjenesteBeskrivelse>{tjeneste.kortBeskrivelse} 
                
                <Popup title="Les mer">
                    {documentToReactComponents(JSON.parse(tjeneste.innhold.raw))}
                </Popup>
                </TjenesteBeskrivelse>
                </TjenesteContent>
            </Tjeneste>)}
        </TjenesterWrapper>
    </Wrapper>;
}

export default Tjenester;