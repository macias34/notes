import "server-only";

import NotePreview from "@/components/Notes/NotePreview/NotePreview";
import dayjs from "dayjs";
import { groupBy, sortDateLabels } from "@/helpers/notes/notesHelpers";
import SingleNote from "@/components/Notes/NoteList/SingleNote/SingleNote";
import { dummySingleNotes, dummyNotes } from "@/constants/home";
import Link from "next/link";

export default function Home() {
  const filteredNotes = groupBy(dummySingleNotes, (note) => {
    const formattedDate = dayjs(note.created_at).format("YYYY-MM-DD");
    return formattedDate;
  });
  const dateLabels = sortDateLabels(filteredNotes);
  return (
    <div className="flex flex-col items-center justify-start gap-10 py-10 lg:p-10 sm:px-5">
      <h1 className="text-[3rem] font-bold sm:text-[2.5rem]">
        <span className="text-yellow">Rapid</span>
        <span className="text-accent"> Notes</span>
      </h1>

      <p className="text-center text-[2.5rem] font-bold sm:text-[2rem]">
        Create your <span className="text-accent">word notes</span> with{" "}
        <span className="text-accent">no effort</span>.
      </p>
      <Link
        href="/auth"
        className="rounded-full border-4 border-secondary px-10 py-4 text-[2rem] font-bold transition hover:bg-secondary hover:text-primary dark:border-primary dark:hover:bg-primary dark:hover:text-secondary sm:text-2xl  "
      >
        Start using <span className="text-accent">for free</span>.
      </Link>

      <div className="flex w-full justify-around lg:flex-col lg:gap-10 sm:flex-col sm:gap-10 ">
        <div className="flex flex-col items-center gap-10">
          <p className="text-center text-3xl font-bold sm:text-2xl">
            Learn <span className="text-accent">10 words</span> daily and{" "}
            <span className="text-accent">actually</span> remember them.
          </p>

          <div className="flex gap-10 lg:gap-5 sm:gap-5">
            {dateLabels.map((date, index) => {
              const notesByDate = filteredNotes[date];
              return (
                <div
                  key={index}
                  className="flex flex-col items-center gap-5 sm:last:hidden"
                >
                  <span className="text-xl text-gray sm:text-lg">{date}</span>
                  <div className="flex flex-col items-center gap-5">
                    {notesByDate.map(({ word, created_at }, id) => {
                      return (
                        <SingleNote
                          id={word}
                          home={true}
                          key={id}
                          word={word}
                          created_at={created_at}
                        />
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col items-center gap-10">
          <p className="text-3xl font-bold sm:text-2xl">
            Example
            <span className="text-accent"> notes</span>
          </p>
          {dummyNotes.map((note, id) => {
            const { word, translation, explanation, example } = note;

            return (
              <NotePreview
                key={id}
                word={word}
                translation={translation}
                explanation={explanation}
                example={example}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
