import React from "react"
import { graphql } from "gatsby"
import { RichText } from "prismic-reactjs"
import { Flex, Image } from "@theme-ui/components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Styled } from "theme-ui"

export const query = graphql`
  {
    prismic {
      allAbouts {
        edges {
          node {
            content
            image
            title
          }
        }
      }
    }
  }
`

const propsWithUniqueKey = function(props, key) {
  return Object.assign(props || {}, { key })
}

function mySerializer(type, element, content, children, key) {
  var props = {}
  switch (type) {
    case "paragraph":
      return React.createElement(
        Styled.p,
        propsWithUniqueKey(props, key),
        children
      )
    case "strong":
      return React.createElement(
        Styled.strong,
        propsWithUniqueKey(props, key),
        children
      )
    case "hyperlink":
      const targetAttr = element.data.target
        ? { target: element.data.target }
        : {}
      const relAttr = element.data.target ? { rel: "noopener" } : {}
      props = Object.assign(
        {
          href: element.data.url,
        },
        targetAttr,
        relAttr
      )
      return React.createElement(
        Styled.a,
        propsWithUniqueKey(props, key),
        children
      )

    default:
      return null
  }
}

export default ({ data }) => {
  const page = data.prismic.allAbouts.edges.slice(0, 1).pop().node

  return (
    <Layout>
      <SEO title={RichText.asText(page.title)} />
      <Flex>
        <Image src={page.image.url} sx={{ width: "100%" }} />
      </Flex>
      <Flex
        sx={{
          flexDirection: "column",
          maxWidth: "containerSmall",
          mx: "auto",
          py: 7,
        }}
      >
        <RichText render={page.content} htmlSerializer={mySerializer} />
      </Flex>
    </Layout>
  )
}
