import React from "react"
import { Link, graphql } from "gatsby"
import { RichText } from "prismic-reactjs"
import { Flex, Image, Box, Grid, Heading } from "@theme-ui/components"

import SEO from "../components/seo"
import Layout from "../components/layout"

export default ({ data }) => {
  const projects = data.prismic.allProjects.edges

  return (
    <Layout>
      <SEO title="Projects" />
      <Flex
        sx={{
          mx: "auto",
          py: 7,
        }}
      >
        <Grid gap={4} columns={[1, 2, 3]}>
          {projects.map(({ node: { title, thumbnail, _meta: { uid } } }) => (
            <Link to={`/projects/${uid}`}>
              <Box sx={{ "&:hover h2": { color: "primary" } }}>
                <Image src={thumbnail.url} sx={{ mb: 2 }} />
                <Heading
                  variant="body"
                  sx={{ textAlign: "center", color: "muted" }}
                >
                  {RichText.asText(title)}
                </Heading>
              </Box>
            </Link>
          ))}
        </Grid>
      </Flex>
    </Layout>
  )
}

export const query = graphql`
  {
    prismic {
      allProjects {
        edges {
          node {
            _meta {
              uid
            }
            title
            thumbnail
          }
        }
      }
    }
  }
`
