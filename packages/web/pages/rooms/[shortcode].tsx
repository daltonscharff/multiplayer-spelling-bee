import type { NextPage } from "next";
import { useRouter } from "next/router";
import Hive from "../../components/Hive";
import { useEffect, useState } from "react";
import LetterInput from "../../components/LetterInput";
import Button from "../../components/Button";
import ShuffleButton from "../../components/ShuffleButton";
import FoundWords from "../../components/FoundWords";
import ProgressBar from "../../components/ProgressBar";
import Layout from "../../components/Layout";
import Header from "../../components/Header";
import Loader from "../../components/Loader";
import useSWR from "swr";
import shuffle from "../../utils/shuffle";
import fetcher from "../../utils/fetcher";
import type {
  Puzzle,
  Record,
} from "@daltonscharff/spelling-bee-shared/lib/interfaces";
import {
  addLetterToInput,
  deleteLetterFromInput,
  handleLetterInput,
  submitInput,
} from "../../utils/letterInput";

const Room: NextPage = () => {
  const router = useRouter();
  const shortcode = router.query.shortcode;
  const username = "";

  const [puzzle, setPuzzle] = useState<Puzzle>();
  const [records, setRecords] = useState<Record[]>([]);
  const [shuffledLetters, setShuffledLetters] = useState([] as string[]);
  const [inputLetters, setInputLetters] = useState("");
  const [score, setScore] = useState(0);

  const { data: puzzleData, error: puzzleError } = useSWR<Puzzle[]>(
    "/api/puzzles",
    fetcher
  );

  const { data: recordData } = useSWR<Record[]>(
    shortcode ? `/api/records/${shortcode}` : null,
    fetcher
  );

  useEffect(() => {
    if (puzzleData) {
      setPuzzle(puzzleData[0]);
      setShuffledLetters(puzzleData[0].outerLetters);
    }
  }, [puzzleData]);

  useEffect(() => {
    if (recordData) {
      setRecords(recordData);
    }
  }, [recordData]);

  useEffect(() => {
    if (records) {
      setScore(
        records.reduce((total, record) => total + record.word!.pointValue, 0)
      );
    }
  }, [records]);

  // console.log({ recordData, recordError });
  // console.log({ puzzleData, puzzleError, shuffledLetters, puzzle, shortcode });

  // if (puzzleError) {
  //   throw Error(puzzleError);
  // }
  if (!puzzle || !shortcode || records === undefined) {
    return <h1>Loading</h1>;
  }

  return (
    <Layout className="font-Roboto min-w-[260px]">
      <Header date={puzzle.date} username={username} />
      <div className="flex flex-col gap-4 sm:gap-8 sm:flex-row-reverse">
        <div className="flex flex-grow flex-col gap-4">
          <ProgressBar currentScore={score} maxScore={puzzle.maxScore} />
          <div className="hidden sm:block h-full">
            <FoundWords records={records} />
          </div>
          <div className="sm:hidden">
            <FoundWords records={records} collapsible />
          </div>
        </div>
        <div className="flex flex-col gap-4 justify-center">
          <LetterInput
            value={inputLetters}
            outerLetters={puzzle.outerLetters}
            centerLetter={puzzle.centerLetter}
            onChange={(value) =>
              handleLetterInput(value, inputLetters, setInputLetters)
            }
          />
          <Hive
            outerLetters={shuffledLetters}
            centerLetter={puzzle.centerLetter}
            onClick={(letter) =>
              addLetterToInput(letter, inputLetters, setInputLetters)
            }
          />
          <div className="flex flex-col xs:flex-row gap-4 justify-center my-6">
            <Button
              onClick={() =>
                deleteLetterFromInput(inputLetters, setInputLetters)
              }
            >
              Delete
            </Button>
            <ShuffleButton
              onClick={() => {
                setShuffledLetters(shuffle(shuffledLetters));
              }}
            />
            <Button onClick={() => submitInput(setInputLetters)}>Enter</Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Room;
