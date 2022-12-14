import Link from "./Link";
import { useQuery } from "@apollo/client";
import { FEED_QUERY } from "../graphql/queries/FEED_QUERY";

const LinkList = () => {
  const { data } = useQuery(FEED_QUERY);

  return (
    <div>
      {data?.feed.links.map((link, index) => (
        <Link key={link.id} link={link} index={index} />
      ))}
    </div>
  );
};

export default LinkList;
