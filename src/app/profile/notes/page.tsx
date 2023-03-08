import "server-only";
import { createServerClient } from "@/utils/supabase-server";
import { groupByNote, note } from "@/types/supabase";
import SingleNote from "@/components/UI/Profile/Notes/SingleNote/SingleNote";
import { groupBy, chain } from "lodash";

const NotesPage = async () => {
  const supabase = createServerClient();
  const user = await supabase.auth.getUser();

  const user_id = user.data.user?.id;

  const { data: notes, error } = await supabase
    .from("notes_users")
    .select(`note:notes(*)`)
    .eq("user_id", user_id);

  function groupBy<T>(arr: T[], fn: (item: T) => any) {
    return arr.reduce<Record<string, T[]>>((prev, curr) => {
      const groupKey = fn(curr);
      const group = prev[groupKey] || [];
      group.push(curr);
      return { ...prev, [groupKey]: group };
    }, {});
  }

  const filteredNotes = groupBy(
    notes as groupByNote[],
    ({ note }) => note.created_at
  );

  console.log(filteredNotes);

  // if (notes)
  //   return (
  //     <div className="mt-10 flex h-full w-1/6 flex-col items-start justify-center gap-5 px-10">
  //       {notes.map(({ note }, index) => {
  //         // const { note: noteData } = note;
  //         const { word, created_at, id } = note as note;

  //         return (
  //           <SingleNote
  //             key={index}
  //             word={word}
  //             created_at={created_at}
  //             id={id}
  //           />
  //         );
  //       })}
  //     </div>
  //   );

  return "es";
};

export default NotesPage;
