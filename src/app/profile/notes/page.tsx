import "server-only";
import { createServerClient } from "@/utils/supabase-server";
import { groupByNote, note } from "@/types/supabase";
import dayjs from "dayjs";
import NoteList from "@/components/Notes/NoteList/NoteList";
import { groupBy } from "@/helpers/notes/notesHelpers";

const NotesPage = async () => {
  const supabase = createServerClient();
  const user = await supabase.auth.getUser();

  const user_id = user.data.user?.id;

  const { data: notes, error } = await supabase
    .from("notes_users")
    .select(`note:notes(*)`)
    .eq("user_id", user_id);

  const filteredNotes = groupBy(notes as groupByNote[], ({ note }) => {
    const formattedDate = dayjs(note.created_at).format("DD.MM.YYYY");
    return formattedDate;
  });

  const dateLabels = Object.keys(filteredNotes);

  if (filteredNotes)
    return (
      <div className="mt-10 flex h-full w-full items-start justify-center gap-10 px-10">
        {dateLabels.map((date) => {
          const notesByDate = filteredNotes[date];
          console.log(date);
          return (
            <div className="flex w-[10%] flex-col items-center gap-5">
              <span className="text-xl text-gray">{date}</span>
              <NoteList notes={notesByDate} />
            </div>
          );
        })}
      </div>
    );
};

export default NotesPage;
