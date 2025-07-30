import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

interface QuoteProps {
  quote: string;
}

export const Quote: React.FC<QuoteProps> = ({ quote }) => {
  return (
    <div className="max-w-156 flex flex-col items-center gap-6 animate-fade-in-up">
      <h1 className="text-lg font-light! text-left w-full">
        Lo que tu juego favorito dice de ti:
      </h1>
      <p className="text-3xl md:text-4xl font-semibold leading-snug">{quote}</p>
      <p className="w-full text-right text-xs font-light! align-baseline">
        Frase generada con IA <AutoAwesomeIcon className="align-bottom" />
      </p>
    </div>
  );
};
