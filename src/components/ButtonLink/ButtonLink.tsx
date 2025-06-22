import Link from "next/link";

interface ButtonLinkProps {
  text: string;
  href: string;
}

export const ButtonLink: React.FC<ButtonLinkProps> = ({ text, href }) => {
  return (
    <Link
      href={href}
      className="w-fit rounded-full font-semibold text-white bg-turquesa hover:bg-gray px-4 py-3"
    >
      {text}
    </Link>
  );
};
