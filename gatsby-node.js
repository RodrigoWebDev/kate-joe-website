const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const projects = await graphql(`
    {
      prismic {
        allProjects {
          edges {
            node {
              _meta {
                uid
              }
              title
              description
              thumbnail
            }
          }
        }
      }
    }
  `)

  const template = path.resolve("src/templates/project.jsx")
  projects.data.prismic.allProjects.edges.forEach(edge => {
    createPage({
      path: `/projects/${edge.node._meta.uid}`,
      component: template,
      context: {
        uid: edge.node._meta.uid,
        title: edge.node.title,
        description: edge.node.description
      },
    })
  })
}