import { ILink } from "../interfaces/Link.link.interface";
import React from "react";

interface ILinkProps {
  link: ILink;
}

const Link = ({ link }: ILinkProps) => {
  const { description } = link;

  return (
    <div>
      <div>
        {description} ({link.url})
      </div>
    </div>
  );
};

export default Link;
