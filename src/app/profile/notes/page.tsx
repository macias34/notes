import "server-only";
import { createServerClient } from "@/utils/supabase-server";

const NotesPage = async () => {
  const supabase = createServerClient();
  const user = await supabase.auth.getUser();

  const user_id = user.data.user?.id;

  // const { data: notes, error } = await supabase
  //   .from("notes_users")
  //   .select(`*, notes:note_id`)
  //   .eq("user_id", user_id);

  console.log(
    await supabase
      .from("notes_users")
      .select(`*, notes:note_id`)
      .eq("user_id", user_id)
  );

  // if (notes)
  //   return (
  //     <div>
  //       {notes.map((note, index) => (
  //         <div key={index}>{note.id}</div>
  //       ))}
  //     </div>
  //   );

  return <>es</>;
};

export default NotesPage;
