"use client";
import SendIcon from "@mui/icons-material/Send";

interface ShareButtonProps {
  text: string;
}

export const ShareButton: React.FC<ShareButtonProps> = ({ text }) => {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          text:
            text ??
            "Lo que tu videojuego favorito dice de ti" +
              ". " +
              window.location.href,
          url: window.location.href,
        });
        console.log("Contenido compartido con éxito");
      } catch (error) {
        console.error("Error al compartir:", error);
        // Si el usuario cancela o hay un error, podemos ofrecer la opción de copiar
        // showCopyOption(textToShare);
      }
    } else {
      // 2. Si Web Share API no está disponible, ofrecer copiar al portapapeles
      showCopyOption(text);
    }
  };

  const showCopyOption = (text: string) => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard
        .writeText(text)
        .then(() => {
          alert(
            "El texto ha sido copiado al portapapeles. ¡Ahora puedes pegarlo donde quieras!"
          );
        })
        .catch((err) => {
          console.error("Error al copiar al portapapeles:", err);
          alert(
            "Tu navegador no soporta la función de compartir. Por favor, cópialo manualmente: \n\n" +
              (text ?? "Lo que tu videojuego favorito dice de ti") +
              ". " +
              window.location.href
          );
        });
    } else {
      // Fallback para navegadores muy antiguos sin Clipboard API
      prompt(
        "Tu navegador no soporta la función de compartir. Copia el siguiente texto manualmente (Ctrl+C o Cmd+C):",
        (text ?? "Lo que tu videojuego favorito dice de ti") +
          ". " +
          window.location.href
      );
    }
  };

  return (
    <button
      onClick={handleShare}
      className="w-fit rounded-full font-semibold text-white bg-turquesa hover:bg-gray cursor-pointer px-4 py-3 animate-fade-in-up"
    >
      Compartir <SendIcon />
    </button>
  );
};
