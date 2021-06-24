import React from 'react';
import { graphql } from 'gatsby';
import styled from "styled-components";
import Layout from '../../components/layout';
import KontaktMeg from '../../components/contact';

import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const Wrapper = styled.div`
    max-width: 800px;
    margin: 100px auto;
    h1{
        font-weight: 500;
    }
    h2{
        font-weight: 500;
        font-size: 20px;
        line-height: 1.5;
    }
    p{

    }
`;

function TjenesteTemplate({ location, data, pageContext }) {
	const tjeneste = data.tjeneste;
    console.log(tjeneste);

	return (
		<Layout>
			<Wrapper>
                <h1>{tjeneste.tittel}</h1>
                <h2>{tjeneste.kortBeskrivelse}</h2>
                {documentToReactComponents(JSON.parse(tjeneste.innhold.raw))}
            </Wrapper>
            <KontaktMeg />
		</Layout>
	);
}

export default TjenesteTemplate;

export const pageQuery = graphql`
	query TjenesteBySlug($slug: String!) {
		tjeneste: contentfulTjeneste(slug: { eq: $slug }) {
			id
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
            innhold {
                raw
            }
		}
	}
`;