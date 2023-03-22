import "server-only";
import { createServerClient } from "@/utils/supabase-server";
import { groupByNote, note } from "@/types/supabase";
import dayjs from "dayjs";
import { groupBy, sortDateLabels } from "@/helpers/notes/notesHelpers";
import Link from "next/link";
import FoldableNoteList from "@/components/Notes/FoldableNoteList/FoldableNoteList";

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

  if (error) return <p>Unexpected error occured. We're sorry.</p>;

  const filteredNotes = groupBy(notes as groupByNote[], ({ note }) => {
    const formattedDate = dayjs(note.created_at).format("YYYY.MM.DD");
    return formattedDate;
  });

  const dateLabels = sortDateLabels(filteredNotes);

  if (notes?.length === 0)
    return (
      <div className="flex h-[90vh] w-full items-center justify-center">
        <h1 className="text-2xl font-semibold">
          You don't have any notes yet! Try adding one.
        </h1>
      </div>
    );
  if (notes)
    return (
      <div className="flex h-full w-full flex-wrap items-start justify-center gap-5 px-10 py-5">
        {dateLabels.map((date) => {
          const notesByDate = filteredNotes[date];
          const urlDate = date.replaceAll(".", "-");
          return (
            <div
              key={date}
              className="mt-10 flex w-[10%] flex-col items-center gap-1"
            >
              <Link href={`/profile/date/${urlDate}`}>
                <span className="text-xl text-gray transition hover:text-secondary dark:hover:text-primary">
                  {date}
                </span>
              </Link>
              <FoldableNoteList notesByDate={notesByDate} />
            </div>
          );
        })}
      </div>
    );
};

export default NotesPage;
