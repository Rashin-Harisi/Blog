import { gql } from "@apollo/client";

const GET_BLOGS_INFO = gql`
query{
    posts {
        title
        slug
        id
        coverPhoto {
          url
        }
        author {
          ... on Author {
            name
            avatar {
              url
            }
          }
        }
      } 
}`

const GET_AUTHORS_INFO = gql`
query{
  authors {
    id
    name
    field
    avatar {
      url
    }
    sug
  }
}`

const GET_AUTHOR_INFO = gql`
query getAuthorInfo($sug: String!){
  author(where: {sug: $sug}) {
    avatar {
      url
    }
    field
    name
    description {
      html
    }
    posts {
      coverPhoto {
        url
      }
      id
      slug
      title
    }
  }
}`

const GET_POST_INFO= gql `
query getPostInfo($slug:String!){
  post(where: {slug: $slug}) {
    author {
      ... on Author {
        name
        avatar {
          url
        }
        field
      }
    }
    content {
      html
    }
    coverPhoto {
      url
    }
    title
  }

} `
const GET_POST_COMMENTS= gql`
query getPostComments($slug: String!){
  comments(where:{post: {slug: $slug}}){
    id
    name
    text
  }

}`


export {GET_BLOGS_INFO, GET_AUTHORS_INFO,GET_AUTHOR_INFO,GET_POST_INFO,GET_POST_COMMENTS}