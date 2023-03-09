import "server-only";
import { createServerClient } from "@/utils/supabase-server";
import { note } from "@/types/supabase";
import { redirect } from "next/navigation";
import Note from "@/components/Notes/Note/Note";
import Button from "@/components/UI/Button/Button";

interface Props {
  params: {
    id: string;
  };
}

const SingleNotePage = async ({ params }: Props) => {
  const supabase = createServerClient();
  const user = await supabase.auth.getUser();

  const { id: session_user_id } = user.data.user || {};
  const { id: note_id } = params;

  const { data, error } = await supabase
    .from("notes")
    .select()
    .eq("id", note_id);

  const { word, translation, example, explanation } = (data as note[])[0];

  const { data: user_data } = await supabase
    .from("notes_users")
    .select("user_id")
    .eq("note_id", note_id);

  const { user_id } = (user_data as any)[0];

  console.log(user_id === session_user_id);
  if (user_id === session_user_id)
    return (
      <div className="flex h-full w-full flex-col items-center justify-center gap-10">
        <Note
          word={word}
          translation={translation}
          example={example}
          explanation={explanation}
        />
        <div className="flex gap-5">
          <Button color="yellow" type="button">
            Edit
          </Button>
          <Button color="red" type="button">
            Remove
          </Button>
        </div>
      </div>
    );
  else redirect("/");
};

export default SingleNotePage;
