import "server-only";
import { FC } from "react";
import { createServerClient } from "@/utils/supabase-server";
import { redirect } from "next/navigation";
import Link from "next/link";
import NotePreview from "@/components/Notes/NotePreview/NotePreview";

interface Params {
  params: {
    date: string;
  };
}

const DayPage = async ({ params }: Params) => {
  const { date } = params;
  const supabase = createServerClient();
  const user = await supabase.auth.getUser();
  const user_id = user.data.user?.id;

  const { data: notes, error } = await supabase
    .from("notes_by_day")
    .select()
    .eq("created_at", date)
    .eq("user_id", user_id);

  return (
    <div className="flex h-full w-full flex-wrap items-start justify-center p-10">
      {notes?.map((note) => {
        const { word, example, explanation, translation, note_id } = note;

        return (
          <Link
            className="scale-75"
            href={`/profile/notes/${note_id}`}
            key={note_id}
          >
            <NotePreview
              word={word!}
              example={example}
              explanation={explanation}
              translation={translation}
              className=""
            />
          </Link>
        );
      })}
    </div>
  );
};

export default DayPage;
