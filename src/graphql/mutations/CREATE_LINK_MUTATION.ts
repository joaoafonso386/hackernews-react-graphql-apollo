import { gql } from "../../__generated__";

export const CREATE_LINK_MUTATION = gql(`
mutation PostMutation($description: String!, $url: String!) {
  post(description: $description, url: $url) {
    id
    createdAt
    url
    description
  }
}
`);
