import React from 'react'
import { Link } from 'gatsby'
import Button from '@material-ui/core/Button'

import Layout from '../components/layout'
import Image from '../components/image'

const IndexPage = () => (
  <Layout>
    <h1>Hi,</h1>
    <p>My name is Luke Camelo.</p>
    <p>I like to build cool shit.</p>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div>
    <Link to="/about/" style={{ textDecoration: 'none' }}>
      <Button variant="contained" color="primary">
        let me tell you about myself
      </Button>
    </Link>
  </Layout>
)

export default IndexPage
