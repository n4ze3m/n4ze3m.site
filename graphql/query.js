import {
    gql
} from "@apollo/client";

export const GET_PROJECTS = gql`
query {
    project{
      id
      title
      description
      imageUrl
      demoUrl
      githubUrl
      tags
      createdAt
    }
  }
`