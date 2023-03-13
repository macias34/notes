import "server-only";
import { createServerClient } from "@/utils/supabase-server";
import { note } from "@/types/supabase";
import { redirect } from "next/navigation";
import EditNote from "@/components/Notes/EditNote/EditNote";

interface Props {
  params: {
    note: string;
  };
}

const getNote = async (noteWord: string) => {
  const supabase = createServerClient();
  const user = await supabase.auth.getUser();

  const { id: session_user_id } = user.data.user || {};

  const { data, error } = await supabase
    .from("notes")
    .select()
    .eq("word", noteWord);

  if (data?.length === 0) redirect("/profile/notes");

  const { id: note_id } = (data as note[])[0];
  const { data: user_id } = await supabase
    .from("notes_users")
    .select("user_id")
    .eq("note_id", note_id);

  return {
    user_id: (user_id as any[])[0].user_id,
    session_user_id,
    data: (data as note[])[0],
  };
};

const EditNotePage = async ({ params }: Props) => {
  const { note: noteWord } = params;

  const { user_id, session_user_id, data } = await getNote(noteWord);

  const formikConfig = {};

  if (user_id === session_user_id && data.word) return <EditNote data={data} />;
  else redirect("/profile/notes");
};

export default EditNotePage;
