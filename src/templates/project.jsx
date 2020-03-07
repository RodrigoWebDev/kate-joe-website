import React from "react"
import { graphql } from "gatsby"
import { RichText } from "prismic-reactjs"
import { Heading } from "@theme-ui/components"

import SEO from "../components/seo"
import Layout from "../components/layout"

export default ({ data }) => {
  const project = data.prismic.allProjects.edges.slice(0, 1).pop().node

  return (
    <Layout>
      <SEO title={RichText.asText(project.title)} />
      <Heading as="h1" variant="h4" sx={{ textAlign: "center" }}>
        {RichText.asText(project.title)}
      </Heading>
    </Layout>
  )
}

export const projectQuery = graphql`
  query ProjectBySlug($uid: String!) {
    prismic {
      allProjects(uid: $uid) {
        edges {
          node {
            thumbnail
            description
            title
            body {
              ... on PRISMIC_ProjectBodySingle_column_image {
                type
                label
                primary {
                  wide_image
                }
              }
            }
          }
        }
      }
    }
  }
`
