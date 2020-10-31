import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'

const AboutPage = () =>
{
  return (
    <Layout>
      <Head title="About" />
      <h1>About Us</h1>
      <p>I'm a frontend developer</p>
      <p><Link to="/contact">want to work with me</Link></p>
    </Layout>
  )
}
export default AboutPage