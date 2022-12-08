import { gql } from "../../__generated__";

export const SIGN_UP_MUTATION = gql(`
  mutation SignupMutation(
    $email: String!
    $password: String!
    $name: String!
  ) {
    signup(
      email: $email
      password: $password
      name: $name
    ) {
      token
    }
  }
`);
