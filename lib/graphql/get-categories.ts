import { gql } from '@apollo/client'

const GET_CATEGORIES = gql`
  query AllCategories {
  allCategories {
    nodes {
      id
      name
      nodeId
      slug
    }
  }
}
`

export default GET_CATEGORIES

