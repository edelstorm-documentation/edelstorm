import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import { Button } from '../components/Button'
import { FaApple } from 'react-icons/fa'
import Info from '../components/info'
import Dude from '../components/dude'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    <h1>Hi Dorian</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Dude />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Button primary>Primary</Button>
    <Info />
    <FaApple className="icon fa-lg" />
    <Link to="/images/">Go to images</Link>
    <Link to="/page-2/">Go to page 2</Link>
    <Link to="/product/testing">Go to Testing</Link>
    <Link to="/products/">Go to Products</Link>
  </Layout>
)

export default IndexPage
