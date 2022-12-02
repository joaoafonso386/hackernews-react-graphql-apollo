import React from "react";
import Link from "./Link";
import { ILink } from "../interfaces/link.interface";

const LinkList = () => {
  const linksToRender: ILink[] = [
    {
      id: "link-id-1",
      description: "Prisma gives you a powerful database toolkit 😎",
      url: "https://prisma.io",
    },
    {
      id: "link-id-2",
      description: "The best GraphQL client",
      url: "https://www.apollographql.com/docs/react/",
    },
  ];

  return (
    <div>
      {linksToRender.map((link) => (
        <Link key={link.id} link={link} />
      ))}
    </div>
  );
};

export default LinkList;
