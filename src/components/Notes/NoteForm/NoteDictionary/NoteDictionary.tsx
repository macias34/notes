import {
  NewNoteContext,
  NewNoteFunctions,
} from "@/contexts/NoteFormContext/NoteFormContext";
import { useContext, useEffect, Fragment, useRef, KeyboardEvent } from "react";
import { useQuery } from "react-query";

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
  const { newNoteData, next } = useContext(NewNoteContext) as NewNoteFunctions;
  const containerRef = useRef<HTMLDivElement>(null);
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
  }, [currentWord, refetch]);

  useEffect(() => {
    if (containerRef.current) containerRef.current.focus();
  }, []);

  const isIdle = status === "idle" || currentWord.length === 0;
  const isLoading = status === "loading";
  const isSuccess =
    status === "success" && Array.isArray(data) && currentWord.length > 0;

  const renderFetchResult = () => {
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
          <p className="pb-10 text-[2rem] font-bold text-accent first-letter:capitalize">
            {word}
          </p>
          <div className="flex flex-col gap-5">
            {definitions.map((definition, index) => (
              <div key={index} className="flex max-w-4xl flex-col">
                <p className="text-lg">
                  <span className="font-bold ">
                    {`${index + 1}.`} {definition.definition}{" "}
                  </span>
                  {definition.example ? (
                    <Fragment key={index}>
                      <span className="mx-1">➞</span>
                      <span className="italic">{definition.example}</span>
                    </Fragment>
                  ) : (
                    ""
                  )}
                </p>
              </div>
            ))}
          </div>
        </>
      );
    } else
      return (
        <p className="text-3xl">
          Couldn&apos;t get the definition, we&apos;re sorry 😐.
        </p>
      );
  };

  const handleEnterSubmit = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      next();
    }
  };

  return (
    <div
      ref={containerRef}
      tabIndex={0}
      onKeyDown={handleEnterSubmit}
      className="flex flex-col px-4 py-5 outline-none"
    >
      {renderFetchResult()}
    </div>
  );
};

export default NoteDictionary;
