import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TopBanner from "../components/top-banner"
import Tjenester from "../components/tjenester"
import KontaktMeg from "../components/contact"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <TopBanner />
    <Tjenester />
    <KontaktMeg />
  </Layout>
)

export default IndexPage
