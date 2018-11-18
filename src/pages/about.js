import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'

export default ({ data }) => (
  <Layout>
    <div>
      <h1>{data.site.siteMetadata.title}</h1>
      <p>gatsby is so cool</p>
    </div>
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`