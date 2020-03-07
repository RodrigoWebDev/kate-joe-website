import React from "react"
import PropTypes from "prop-types"
import { Styled } from "theme-ui"

import { Flex, Box, Heading, Link } from "@theme-ui/components"

import GlobalStyles from "../../global"

const Layout = ({ children }) => {
  const Header = () => (
    <Flex
      as="header"
      sx={{ alignItems: "center", pt: 10, pb: 7, flexDirection: "column" }}
    >
      <Heading variant="h7" sx={{ mb: 2 }}>
        KATERINA MARKOVA
      </Heading>
      <Heading as="h3" variant="body" sx={{ mb: 7 }}>
        brand consultant & digital media creative
      </Heading>
      <Flex>
        <Link
          variant="nav"
          href="/"
          sx={{ mr: 4 }}
          activeStyle={{ color: "red" }}
        >
          Overview
        </Link>
        <Link variant="nav" href="/projects" sx={{ mr: 4 }}>
          Projects
        </Link>
        <Link variant="nav" href="/about">
          About
        </Link>
      </Flex>
    </Flex>
  )

  return (
    <Styled.root>
      <GlobalStyles />
      <Box sx={{ maxWidth: "container", mx: "auto", px: 4 }}>
        <Header />
        <main>{children}</main>
      </Box>
    </Styled.root>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
