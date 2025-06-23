import { ButtonLink } from "@/components/ButtonLink/ButtonLink";

export const notFoundPage = () => {
  return (
    <>
      <div className="relative">
        <h1 className="text-9xl font-extrabold text-white tracking-widest">
          404
        </h1>
        <div className="bg-turquesa px-2 text-sm rounded rotate-12 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap">
          Page no encontrada
        </div>
      </div>
      <button className="mt-8">
        <ButtonLink href="./" text="Volver" />
      </button>
    </>
  );
};

export default notFoundPage;
