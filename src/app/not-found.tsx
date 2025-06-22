import { ButtonLink } from "@/components/ButtonLink/ButtonLink";

export const notFoundPage = () => {
  return (
    <main className="h-screen w-full flex flex-col justify-center items-center">
      <h1 className="text-9xl font-extrabold text-white tracking-widest">
        404
      </h1>
      <div className="bg-turquesa px-2 text-sm rounded rotate-12 absolute">
        Page no encontrada
      </div>
      <button className="mt-8">
        <ButtonLink href="./" text="Volver" />
      </button>
    </main>
  );
};

export default notFoundPage;
