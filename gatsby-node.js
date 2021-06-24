const Promise = require('bluebird');
const path = require('path');

exports.createPages = ({ graphql, actions }) => {
	const { createPage } = actions;
	return new Promise((resolve, reject) => {
		const tjenesteTemplate = path.resolve('./src/templates/tjeneste/tjeneste.js');

		resolve(
			graphql(
				`
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
                            }
                        }
					}
				`
			).then(result => {
				if (result.errors) {
					console.log(result.errors);
					reject(result.errors);
				}

				const tjenester = result.data.tjenester.nodes || [];
				tjenester.forEach(tjeneste => {
					if (tjeneste.slug)
						createPage({
							path: `/tjenester/${tjeneste.slug}/`,
							component: tjenesteTemplate,
							context: {
								slug: tjeneste.slug
							},
						});
				});
			})
		);
	});
};