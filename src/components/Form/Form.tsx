"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect } from "react";

interface SearchFormInputs {
  gameName: string;
}

export const Form = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const q = searchParams.get("q");

  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
  } = useForm<SearchFormInputs>();

  const onSubmit = (data: SearchFormInputs) => {
    // Aquí es donde cambiamos la lógica
    const query = data.gameName;
    if (query) {
      router.push(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  useEffect(() => {
    if (q) {
      // console.log(q);
      setValue("gameName", q.toString());
    }
  }, [q, setValue]);

  return (
    <div className="w-full flex flex-col items-start gap-4">
      <form className="relative w-full" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          id="gameName"
          placeholder="Escribe el título..."
          aria-label="gameName"
          className="w-full text-xl bg-white py-4 px-6 rounded-full placeholder:text-gray-light text-black focus:outline-none"
          {...register("gameName", {
            required: "Escribe el título del juego",
            minLength: {
              value: 3,
              message: "Debes escribir al menos 3 caracteres",
            },
            maxLength: {
              value: 50,
              message: "Prueba a escribir algo más corto",
            },
          })}
        />
        <div className="absolute top-0 right-0 h-full flex justify-end p-1.5 w-2">
          <button className="relative h-full aspect-square text-white bg-turquesa hover:bg-gray rounded-full cursor-pointer">
            <SearchIcon className="text-3xl!" />
          </button>
        </div>
      </form>
      <p className="text-red-500 ml-6 h-6">
        {errors.gameName?.message?.toString()}
      </p>
    </div>
  );
};
