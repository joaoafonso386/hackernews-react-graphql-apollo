import { gql } from "../__generated__";

export const FEED_QUERY = gql(`
query FeedQuery{
  feed {
    id
    links {
      id
      createdAt   
      url
      description
    }
  }
} `);
