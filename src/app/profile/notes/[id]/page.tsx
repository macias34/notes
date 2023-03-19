import "server-only";
import { createServerClient } from "@/utils/supabase-server";
import { note } from "@/types/supabase";
import { redirect } from "next/navigation";
import Note from "@/components/Notes/Note/Note";

interface Props {
  params: {
    id: string;
  };
}

const getNote = async (id: string) => {
  const supabase = createServerClient();
  const user = await supabase.auth.getUser();

  const { id: session_user_id } = user.data.user || {};

  const { data, error } = await supabase.from("notes").select().eq("id", id);

  if (data?.length === 0) redirect("/profile/notes");

  const { data: user_id } = await supabase
    .from("notes_users")
    .select("user_id")
    .eq("note_id", id);

  return {
    user_id: (user_id as any[])[0].user_id,
    session_user_id,
    data: (data as note[])[0],
  };
};

const SingleNotePage = async ({ params }: Props) => {
  const { id } = params;

  const { user_id, session_user_id, data } = await getNote(id);
  const { word, translation, example, explanation } = data;

  if (user_id === session_user_id && data.word)
    return (
      <div className="flex h-full w-full flex-col items-center justify-center gap-10">
        <Note
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
