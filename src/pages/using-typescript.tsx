// If you don't want to use TypeScript you can delete this file!
import React from "react"
import { PageProps } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

type DataProps = {
  site: {
    buildTime: string
  }
}

const UsingTypescript: React.FC<PageProps<DataProps>> = ({ data, path }) => (
  <Layout>
    <SEO title="Using TypeScript" />
    <h1>Gatsby supports TypeScript by default!</h1>
  </Layout>
)

export default UsingTypescript

