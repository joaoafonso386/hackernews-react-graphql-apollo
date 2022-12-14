import { gql } from "../../__generated__";

export const FEED_QUERY = gql(`
query feed{
  feed {
    id
    links {
      id
      createdAt
      url
      description
      postedBy {
        id
        name
      }
      votes {
        id
        user {
          id
        }
      }
    }
  }
}`);
