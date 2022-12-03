import React from "react";
import Link from "./Link";
import { useQuery } from "@apollo/client";
import { FEED_QUERY } from "../queries/FEED_QUERY";

const LinkList = () => {
  const { data } = useQuery(FEED_QUERY);

  return (
    <div>
      {data.feed.links.map((link) => (
        <Link key={link.id} link={link} />
      ))}
    </div>
  );
};

export default LinkList;
