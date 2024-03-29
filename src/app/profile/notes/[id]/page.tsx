import "server-only";
import { createServerClient } from "@/supabase/supabase-server";
import { redirect } from "next/navigation";
import Note from "@/components/Notes/Note/Note";
import Link from "next/link";
import dayjs from "dayjs";

interface Props {
  params: {
    id: string;
  };
}

const getNote = async (id: string) => {
  const supabase = createServerClient();
  const user = await supabase.auth.getUser();

  const { id: session_user_id } = user.data.user || {};

  const { data, error } = await supabase
    .from("notes")
    .select()
    .eq("id", id)
    .single();

  if (error || !data) redirect("/profile/notes");

  const { data: user_id, error: userID_error } = await supabase
    .from("notes_users")
    .select("user_id")
    .eq("note_id", id)
    .single();

  if (userID_error || !user_id) redirect("/profile/notes");

  return {
    user_id: user_id.user_id,
    session_user_id,
    data,
  };
};

const SingleNotePage = async ({ params }: Props) => {
  const { id } = params;

  const { user_id, session_user_id, data } = await getNote(id);
  const { word, translation, example, explanation, created_at } = data;

  const urlDate = dayjs(created_at).format("YYYY-MM-DD");
  const formattedDate = dayjs(created_at).format("DD MMMM YYYY");

  if (user_id === session_user_id && data.word)
    return (
      <div className="flex h-[90vh] w-full flex-col items-center justify-center gap-10">
        <Link
          className="text-3xl font-semibold text-accent"
          href={`/profile/date/${urlDate}`}
        >
          {formattedDate}
        </Link>
        <Note
          created_at={created_at}
          word={word}
          translation={translation}
          example={example}
          explanation={explanation}
          id={id}
        />
      </div>
    );
  else redirect("/profile/notes");
};

export default SingleNotePage;
