import { TLink } from "../types/link.type";

interface ILinkProps {
  link: TLink;
}

const Link = ({ link }: ILinkProps) => {
  return (
    <div>
      <div>
        {link.description} ({link.url})
      </div>
    </div>
  );
};

export default Link;
