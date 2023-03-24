import "server-only";
import { createServerClient } from "@/supabase/supabase-server";
import { redirect } from "next/navigation";
import EditNote from "@/components/Notes/EditNote/EditNote";

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

  if (userID_error) redirect("/profile/notes");

  return {
    user_id: user_id.user_id,
    session_user_id,
    data: data,
  };
};

const EditNotePage = async ({ params }: Props) => {
  const { id } = params;

  const { user_id, session_user_id, data } = await getNote(id);

  if (user_id === session_user_id && data.word)
    return (
      <div className="h-[90vh]">
        <EditNote data={data} />
      </div>
    );
  else redirect("/profile/notes");
};

export default EditNotePage;
