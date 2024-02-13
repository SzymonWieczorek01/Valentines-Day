import { useState } from "react";
import "./App.css";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "Nie",
      "Na pewno?",
      "Na pewno pewno?",
      "Przemyśl to!",
      "Ostatnia szansa!",
      "Zdecydowanie nie??",
      "Będziesz żałować!",
      "Zastanów się!",
      "Jesteś absolutnie pewna?",
      "To może być błąd!",
      "Miej serce!",
      "Nie bądź cham!",
      "Może jednak?",
      "Zmienisz zdanie?",
      "To twoja ostateczna odpowiedź ziemniaczku?",
      "Łamiesz mi serduszko :c",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="centered-container">      
      <div className="valentine-container">
        {yesPressed ? (
          <>
            <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
            <div className="text-container">Supcio widzimy sie o 11 :3</div>
          </>
        ) : (
          <>
            <img
              className="h-[200px]"
              style={{ width: "400x", height: "240px" }}
              src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
            />
            <h1 className="text-container">Bedziesz moja Gabi-walentynka?</h1>
            <div>
              <button
                className={"yes-button"}
                style={{ fontSize: yesButtonSize }}
                onClick={() => setYesPressed(true)}
              >
                Tak!
              </button>

              <button onClick={handleNoClick} className="no-button">
                {noCount === 0 ? "No" : getNoButtonText()}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
