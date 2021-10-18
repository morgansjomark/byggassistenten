import * as React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Magne from "../images/magne.png"

const Wrapper = styled.div`
  max-width: 1024px;
  margin: 40px auto;
  padding: 0 20px;
  box-sizing: border-box;
`;

const Callout = styled.div`
  color: #0056b8;
  font-weight: 500;
  margin-bottom: 1.45rem;
`;

const Banner = styled.div`
  display: flex;
  vertical-align: middle;
  align-items: center;
  margin-bottom: 40px;

  @media (max-width: 768px) {
      flex-wrap: wrap;
  }
`;

const Left = styled.div`
  flex: 0 0 75%;
  padding-right: 80px;
  box-sizing: border-box;
  h1{
    font-size: 32px;
  }
  @media (max-width: 768px) {
      flex: 0 0 100%;
      padding: 0;
  }
`;

const Right = styled.div`
  @media (max-width: 768px) {
      flex: 0 0 100%;
      img{
        max-width: 200px;
        margin: 0 auto;
        display: block;
      }
  }
`;

function OmMeg(){
  return(
  <Layout>
    <Wrapper>
      <SEO title="Om meg" />
      <Banner>
        <Left>
          <h1>Byggassistenten Sjømark</h1>
          <p>
            <b>Byggassistenten er en tjeneste hvor det handler om å være tilstede, assistere og bistå hverandre. Dette gjelder både for private personer, bedrifter, entreprenører, bank, forsikring og det offentlige som har planer om eller skal gjennomføre noe innen byggebransjen.</b>
          </p>
        </Left>
        <Right>
        <img src={Magne} />
        </Right>
      </Banner>
      <p>
      Byggassistenten skal være sin samarbeidspartner slik at vi til sammen kan være med på å skape trygghet, trivsel og seriøsitet i en ellers så omfattende og krevende bransje.
      </p>
      <Callout>«Din samarbeidsparter til riktig byggkvalitet» </Callout>
      <p>omhandler å få levere riktig produkt, gjennomføre riktig kvalitet og ikke minst til riktig lovverk for alle parter.</p>
      <p>En samarbeidspartner i slike tilfeller kan være meg, Magne Sjømark, som har rundt 35 års fartstid i bransjen. Har utdanning som høyskoleingeniør fra 1995 og Svennebrev innen tømrerfaget fra 1985. har i disse årene tilegnet meg en del kunnskap og erfaring både som utførende, prosjekterende og ledelse innen entreprenørbransjen.</p>
      <p>Jeg kan assistere deg og dere innenfor mye av det som skjer i byggebransjen. Det kan være seg planlegging, utførelse, gjennomføring og kontroller av ulike arter…, så med andre enkle ord være</p>
      <Callout>«Din samarbeidspartner til riktig byggkvalitet»</Callout>
      <p>Byggassistenten sin visjon er at både private personer, entreprenører og andre skal få en positiv og fin opplevelse når de først skal gjøre sine store investeringer både i tid og ikke minst penger. Bransjen kan tilby både på utfordringer, men også store gleder og opplevelser.</p>
      <p>nøkkelen til positiv opplevelse er ofte at man må ha kontroll i hele prosessen. Og da bør kanskje mange med byggeplaner hente inn litt ekstern assistanse og bistand.</p>
      <p>Jeg oppfordrer deg til å ta en nærmere kikk på hvilken fagområder jeg kan bistå og assistere deg eller dere i.</p>
      <p>Vi jabbes 😊</p>
    </Wrapper>
  </Layout>
  )
}

export default OmMeg
