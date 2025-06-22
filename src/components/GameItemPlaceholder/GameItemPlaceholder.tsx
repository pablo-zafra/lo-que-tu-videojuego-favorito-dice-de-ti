export const GameItemPlaceholder: React.FC = () => {
  return (
    <div className="flex flex-col items-star bg-gray-dark-XX rounded-2xl overflow-hidden">
      <div className="flex items-center justify-center w-full aspect-3/4 bg-gray overflow-hidden animate-pulse"></div>
      <div className="w-full flex flex-col gap-2 bg-gray-dark p-4">
        <div className="w-full h-6 bg-gray rounded-full animate-pulse"></div>
        <div className="w-4/5 h-6 bg-gray rounded-full animate-pulse"></div>
      </div>
    </div>
  );
};
