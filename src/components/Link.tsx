import { AUTH_TOKEN } from "../constants";
import { timeDifferenceForDate } from "../utils/utils";
import { useMutation } from "@apollo/client";
import { VOTE_MUTATION } from "../graphql/mutations/VOTE_MUTATION";
import { FEED_QUERY } from "../graphql/queries/FEED_QUERY";

const Link = ({ link, index }) => {
  const authToken = localStorage.getItem(AUTH_TOKEN);
  const [vote] = useMutation(VOTE_MUTATION, {
    variables: {
      linkId: link.id,
    },
    update: (cache, { data }) => {
      const feed = cache.readQuery({
        query: FEED_QUERY,
      });
      const updatedLinks: any = feed?.feed.links.map((feedLink) => {
        if (feedLink.id === link.id) {
          return {
            ...feedLink,
            votes: [...feedLink.votes, vote],
          };
        }
        return feedLink;
      });
      cache.writeQuery({
        query: FEED_QUERY,
        data: {
          feed: {
            id: "This is terrible technology",
            links: updatedLinks,
          },
        },
      });
    },
  });

  return (
    <div className="flex mt2 items-start">
      <div className="flex items-center">
        <span className="gray">{index + 1}.</span>
        {authToken && (
          <div
            className="ml1 gray f11"
            style={{ cursor: "pointer" }}
            onClick={() => vote}
          >
            ▲
          </div>
        )}
      </div>
      <div className="ml1">
        <div>
          {link.description} ({link.url})
        </div>
        {
          <div className="f6 lh-copy gray">
            {link.votes?.length} votes | by{" "}
            {link.postedBy ? link.postedBy.name : "Unknown"}{" "}
            {timeDifferenceForDate(link.createdAt)}
          </div>
        }
      </div>
    </div>
  );
};

export default Link;
