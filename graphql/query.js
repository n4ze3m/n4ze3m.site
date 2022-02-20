import {
    gql
} from "@apollo/client";

export const GET_PROJECTS = gql`
query {
    project(orderBy:createdAt_DESC){
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