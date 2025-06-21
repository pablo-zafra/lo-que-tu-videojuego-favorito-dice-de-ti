import Link from "next/link";

export const notFoundPage = () => {
  return (
    <main className="h-screen w-full flex flex-col justify-center items-center">
      <h1 className="text-9xl font-extrabold text-white tracking-widest">
        404
      </h1>
      <div className="bg-turquesa px-2 text-sm rounded rotate-12 absolute">
        Page Not Found
      </div>
      <button className="mt-8">
        <Link
          className="relative inline-block text-sm text-center font-medium bg-white hover:bg-gray-light text-gray-dark  rounded-full overflow-hidden p-4"
          href="/"
        >
          Go Home
        </Link>
      </button>
    </main>
  );
};

export default notFoundPage;
