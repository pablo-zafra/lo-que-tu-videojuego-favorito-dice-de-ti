"use client";

export const RefreshButton: React.FC = () => {
  return (
    <button
      onClick={() => window.location.reload()}
      className="w-fit rounded-full font-semibold text-white bg-turquesa hover:bg-gray cursor-pointer px-4 py-3 animate-fade-in-up"
    >
      Intentar de nuevo
    </button>
  );
};
