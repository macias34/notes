import {
  NewNoteContext,
  NewNoteFunctions,
} from "@/contexts/NoteFormContext/NoteFormContext";
import { useContext, useEffect } from "react";
import { useQuery } from "react-query";
import { BsArrowRightShort } from "react-icons/bs";

export interface Word {
  word: string;
  phonetics: Phonetic[];
  meanings: Meaning[];
  license: License;
  sourceUrls: string[];
}

export interface License {
  name: string;
  url: string;
}

export interface Meaning {
  partOfSpeech: string;
  definitions: Definition[];
  synonyms: string[];
  antonyms: string[];
}

export interface Definition {
  definition: string;
  synonyms: any[];
  antonyms: any[];
  example?: string;
}

export interface Phonetic {
  audio: string;
  sourceUrl?: string;
  license?: License;
  text?: string;
}

const fetchWord = async (word: string): Promise<Word[]> => {
  const res = await fetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
  );
  return res.json();
};

const NoteDictionary = () => {
  const { newNoteData } = useContext(NewNoteContext) as NewNoteFunctions;
  const currentWord = newNoteData.word;

  const { data, status, refetch } = useQuery(
    `${currentWord}`,
    () => fetchWord(currentWord),
    {
      enabled: currentWord.length > 0,
    }
  );

  useEffect(() => {
    if (currentWord.length > 0) refetch();
  }, [currentWord]);

  const isIdle = status === "idle" || currentWord.length === 0;
  const isLoading = status === "loading";
  const isSuccess =
    status === "success" && Array.isArray(data) && currentWord.length > 0;

  if (isIdle)
    return (
      <p className="text-3xl">
        Type phrase to get definition from dictionary! 😊
      </p>
    );
  if (isLoading) return <p className="text-3xl">Loading definition..</p>;
  if (isSuccess) {
    const { word, meanings } = data[0];
    const [{ definitions }] = meanings;

    return (
      <>
        <div className="flex flex-col px-4 py-5">
          <p className="pb-10 text-[2rem] font-bold text-accent first-letter:capitalize">
            {word}
          </p>
          <div className="flex flex-col gap-5">
            {definitions.map((definition, index) => (
              <div className="flex max-w-4xl flex-col">
                <p className="text-lg">
                  <span className="font-bold ">
                    {`${index + 1}.`} {definition.definition}{" "}
                  </span>
                  {definition.example ? (
                    <>
                      <span className="mx-1">➞</span>
                      <span className="italic">{definition.example}</span>
                    </>
                  ) : (
                    ""
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  } else
    return (
      <p className="text-3xl">Couldn't get the definition, we're sorry 😐.</p>
    );
};

export default NoteDictionary;
