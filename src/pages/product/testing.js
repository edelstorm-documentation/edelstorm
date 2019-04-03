import React from 'react'
import { Link } from 'gatsby'
import Layout from '../../components/layout'

export default function testing() {
  return (
    <Layout>
      <h1>Hello from Testing</h1>
      <Link to="/">Go to Homepage</Link>
    </Layout>
  )
}
