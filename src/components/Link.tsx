import { ILink } from "../interfaces/link.interface";

interface ILinkProps {
  link: ILink;
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
