import { FC, RefObject, useEffect, useRef, useState } from "react";

type Props = {
  value: string;
  validLetters: string[];
  centerLetter: string;
  onChange: (key: string) => void;
};

type LetterCategory = "valid" | "invalid" | "center";

function checkLetterCategory(
  letter: string,
  letters: string[],
  centerLetter: string
): LetterCategory {
  letter = letter.toLowerCase();
  if (letter === centerLetter) return "center";
  if (letters.map((letter) => letter.toLowerCase()).includes(letter))
    return "valid";
  return "invalid";
}

const LetterInput: FC<Props> = ({
  value,
  validLetters,
  centerLetter,
  onChange,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    const registerEvent = (event: KeyboardEvent) => {
      onChange(event.key);
    };

    window.addEventListener("keydown", registerEvent);
    return () => {
      window.removeEventListener("keydown", registerEvent);
    };
  }, [onChange]);

  useEffect(() => {
    const handleInFocus = () => setIsFocused(true);
    const handleOutFocus = () => setIsFocused(false);
    window.addEventListener("focus", handleInFocus);
    window.addEventListener("blur", handleOutFocus);
    return () => {
      window.removeEventListener("focus", handleInFocus);
      window.removeEventListener("blur", handleOutFocus);
    };
  }, []);

  return (
    <div className="font-black text-3xl text-center py-3 flex flex-wrap justify-center">
      {value.split("").map((letter, i) => {
        const category = checkLetterCategory(
          letter,
          validLetters,
          centerLetter
        );
        let color = "";
        switch (category) {
          case "center":
            color = "text-yellow-300";
            break;
          case "valid":
            color = "text-black";
            break;
          default:
            color = "text-zinc-300";
        }
        return (
          <span key={i} className={`${color}`}>
            {letter}
          </span>
        );
      })}

      <div
        className={`animate-blink mx-[2px] h-9 w-[2px] bg-yellow-300 ${
          !isFocused && "invisible"
        }`}
      />

      {!isFocused && value.length === 0 && (
        <div className="font-normal text-zinc-300">Type or click...</div>
      )}
    </div>
  );
};

export default LetterInput;
