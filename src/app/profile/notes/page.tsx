import "server-only";
import { createServerClient } from "@/supabase/supabase-server";
import dayjs from "dayjs";
import { groupBy, sortDateLabels } from "@/helpers/notes/notesHelpers";
import Link from "next/link";
import FoldableNoteList from "@/components/Notes/NoteList/FoldableNoteList/FoldableNoteList";
import { redirect } from "next/navigation";

const getNotes = async () => {
  const supabase = createServerClient();
  const user = await supabase.auth.getUser();

  const user_id = user.data.user?.id;

  const { data: notes, error } = await supabase
    .from("notes_by_user_id")
    .select()
    .eq("user_id", user_id);

  if (error) {
    console.log(error.message);
    redirect("/profile");
  }

  return {
    notes,
  };
};

const NotesPage = async () => {
  const { notes } = await getNotes();

  const filteredNotes = groupBy(notes, ({ created_at }) => {
    const formattedDate = dayjs(created_at).format("YYYY.MM.DD");
    return formattedDate;
  });

  const dateLabels = sortDateLabels(filteredNotes);

  if (notes?.length === 0)
    return (
      <div className="flex h-[90vh] w-full items-center justify-center">
        <h1 className="text-2xl font-semibold">
          You don&apos;t have any notes yet! Try adding one.
        </h1>
      </div>
    );
  if (notes)
    return (
      <div className="mt-10 flex h-full w-full flex-wrap items-start justify-center gap-5 px-10 py-5 lg:gap-20 sm:gap-14">
        {dateLabels.map((date) => {
          const notesByDate = filteredNotes[date];
          const urlDate = date.replaceAll(".", "-");
          return (
            <div
              key={date}
              className="flex w-[10%] flex-col items-center gap-1 sm:w-[30%]"
            >
              <Link href={`/profile/date/${urlDate}`}>
                <span className="text-xl text-gray transition hover:text-secondary dark:hover:text-primary sm:text-lg">
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
