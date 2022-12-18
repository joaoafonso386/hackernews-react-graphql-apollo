import { gql } from "../../__generated__";

export const FEED_QUERY = gql(`
query FeedQuery(
  $take: Int
  $skip: Int
  $orderBy: LinkOrderByInput
) {
  feed(take: $take, skip: $skip, orderBy: $orderBy) {
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
    count
  }
}
`);
