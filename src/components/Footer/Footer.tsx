import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="w-full text-md text-center animate-fade-in-up">
      <p className="">
        Diseñado y desarrollado por{" "}
        <Link
          href="https://pablozafra.dev"
          target="_blank"
          className="text-turquesa hover:underline"
        >
          Pablo Zafra
        </Link>
      </p>
    </footer>
  );
};
