import React from 'react'
import Layout from '../components/layout'
import { Link, graphql, useStaticQuery } from 'gatsby'
import blogStyles from './blog.module.scss'
import Head from '../components/head'

const BlogPage = () =>
{
  const data = useStaticQuery(graphql`
  query {
    allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
      edges {
        node {
          title
          slug
          publishedDate(formatString: "MMMM Do, YYYY")
        }
      }
    }
  }
  
  `)
  return (
    <Layout>
      <Head title="Blog" />
      {console.log(data) }
      <ol className={ blogStyles.posts }>
        { data.allContentfulBlogPost.edges.map((edge, i) =>
        {
          return (
            <li key={ i } className={ blogStyles.post }>
              <Link to={ `/blog/${ edge.node.slug }` }>
                <h2>{ edge.node.title }</h2>
                <p>{ edge.node.publishedDate }</p>
              </Link>
            </li>
          )
        }) }
      </ol>
      <h1>Blog</h1>
      <p>Post will show up here</p>
    </Layout>
  )
}

export default BlogPage
