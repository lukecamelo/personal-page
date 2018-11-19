import React from 'react'
import Layout from '../components/layout'
import { graphql, Link } from 'gatsby'
import Button from '@material-ui/core/Button'

export default ({ data }) => (
  <Layout>
    <div>
      <h1>{data.site.siteMetadata.title}</h1>
      <p>gatsby is so cool</p>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <Button variant="contained" color="primary">
          Home
        </Button>
      </Link>
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
