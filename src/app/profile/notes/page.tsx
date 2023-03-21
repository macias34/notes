import "server-only";
import { createServerClient } from "@/utils/supabase-server";
import { groupByNote, note } from "@/types/supabase";
import dayjs from "dayjs";
import NoteList from "@/components/Notes/NoteList/NoteList";
import { groupBy, sortDateLabels } from "@/helpers/notes/notesHelpers";

const getNotes = async () => {
  const supabase = createServerClient();
  const user = await supabase.auth.getUser();

  const user_id = user.data.user?.id;

  const { data: notes, error } = await supabase
    .from("notes_users")
    .select(`note:notes(*)`)
    .eq("user_id", user_id);

  return {
    notes,
    error,
  };
};

const NotesPage = async () => {
  const { notes, error } = await getNotes();

  const filteredNotes = groupBy(notes as groupByNote[], ({ note }) => {
    const formattedDate = dayjs(note.created_at).format("YYYY.MM.DD");
    return formattedDate;
  });

  const dateLabels = sortDateLabels(filteredNotes);

  if (notes?.length === 0)
    return (
      <div className="flex h-full w-full items-center justify-center">
        <h1 className="text-2xl font-semibold">
          You don't have any notes yet! Try adding one.
        </h1>
      </div>
    );
  if (notes)
    return (
      <div className="flex h-full w-full items-start justify-center gap-10 px-10">
        {dateLabels.map((date) => {
          const notesByDate = filteredNotes[date];
          return (
            <div
              key={date}
              className="mt-10 flex w-[10%] flex-col items-center gap-5"
            >
              <div className="flex flex-col items-center gap-1 text-xl">
                <span className="text-gray">{date}</span>
                <span
                  className={`${
                    notesByDate.length >= 10 ? "text-accent" : ""
                  } font-semibold`}
                >
                  {notesByDate.length} / 10
                </span>
              </div>
              <NoteList notes={notesByDate} />
            </div>
          );
        })}
      </div>
    );
};

export default NotesPage;
