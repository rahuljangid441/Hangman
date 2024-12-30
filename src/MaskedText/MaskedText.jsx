import { getMaskedString } from "./MaskingUtility";

function MaskedText({ text, guessedLetters }) {
  const maskedString = getMaskedString(text, guessedLetters);
  console.log("masked String is", maskedString);

  return (
    <>
      {maskedString.map((letter, index) => {
        return (
          <span key={index} className="mx-1">
            {letter}
          </span>
        );
      })}
    </>
  );
}

export default MaskedText;
