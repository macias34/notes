import "server-only";

import Navbar from "@/components/UI/Navbar/Navbar";
import NotePreview from "@/components/Notes/NotePreview/NotePreview";
import dayjs from "dayjs";
import { groupBy, sortDateLabels } from "@/helpers/notes/notesHelpers";
import SingleNote from "@/components/UI/Profile/Notes/SingleNote/SingleNote";
import { dummySingleNotes, dummyNotes } from "@/constants/home";
import Link from "next/link";

export default function Home() {
  const filteredNotes = groupBy(dummySingleNotes, (note) => {
    const formattedDate = dayjs(note.created_at).format("DD.MM.YYYY");
    return formattedDate;
  });
  const dateLabels = sortDateLabels(filteredNotes);
  return (
    <div className="flex flex-col items-center justify-start gap-10 py-10">
      {/* <Navbar /> */}
      <p className="text-[3rem] font-bold">
        Create your <span className="text-accent">word notes</span> with{" "}
        <span className="text-accent">no effort</span>.
      </p>
      <Link
        href="/auth"
        className="rounded-full border-4 border-secondary px-10 py-4 text-[2rem] font-bold hover:bg-secondary hover:text-primary dark:border-primary dark:hover:bg-primary dark:hover:text-secondary  "
      >
        Start using <span className="text-accent">for free</span>.
      </Link>

      <div className="flex w-full justify-around">
        <div className="flex flex-col items-center gap-10">
          <p className="text-3xl font-bold">
            Learn <span className="text-accent">10 words</span> daily and{" "}
            <span className="text-accent">actually</span> remember them.
          </p>

          <div className="flex gap-10">
            {dateLabels.map((date, index) => {
              const notesByDate = filteredNotes[date];
              return (
                <div key={index} className="flex flex-col items-center gap-5">
                  <span className="text-xl text-gray">{date}</span>
                  <div className="flex flex-col items-center gap-5">
                    {notesByDate.map(({ word, created_at }, id) => {
                      return (
                        <SingleNote
                          id={id}
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
        <div className="flex flex-col items-center gap-10 ">
          <p className="text-3xl font-bold">
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
