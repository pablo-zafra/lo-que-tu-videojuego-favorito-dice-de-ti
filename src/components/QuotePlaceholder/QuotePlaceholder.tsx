import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

export const QuotePlaceholder: React.FC = () => {
  return (
    <div className="w-full max-w-156 flex flex-col items-start gap-6 animate-fade-in-up">
      <h1 className="text-lg font-light! text-left w-full">
        Lo que tu juego favorito dice de tí:
      </h1>
      <div className="w-full h-6 bg-gray rounded-full animate-pulse"></div>
      <div className="w-full h-6 bg-gray rounded-full animate-pulse"></div>
      <div className="w-full h-6 bg-gray rounded-full animate-pulse"></div>
      <div className="w-3/5 h-6 bg-gray rounded-full animate-pulse"></div>
      <p className="w-full text-right text-xs font-light! align-baseline">
        La IA dice que esperes un momento...{" "}
        <AutoAwesomeIcon className="align-bottom" />
      </p>
    </div>
  );
};
