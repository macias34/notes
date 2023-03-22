"use client";

import { FC } from "react";
import { noteForm, note } from "@/supabase/supabase-types";
import StyledLink from "@/components/UI/StyledLink/StyledLink";
import Button from "@/components/UI/Button/Button";
import { useSupabase } from "@/components/Supabase/SupabaseProvider/SupabaseProvider";
import { useRouter } from "next/navigation";
import Link from "next/link";

export interface NoteProps {
  example: string | null;
  explanation: string | null;
  id: string;
  translation: string | null;
  word: string;
  url?: string;
  className?: string;
}

const Note: FC<NoteProps> = ({
  word,
  translation,
  explanation,
  example,
  id,
  url,
}) => {
  const { supabase } = useSupabase();
  const router = useRouter();

  const handleRemoveNote = async () => {
    const { error: noteUserError } = await supabase
      .from("notes_users")
      .delete()
      .eq("note_id", id);
    const { error } = await supabase.from("notes").delete().eq("id", id);

    if (error || noteUserError) {
      console.log(error || noteUserError);
      return;
    }

    router.replace("/profile/notes");
  };

  return (
    <>
      <div className="flex min-w-[25rem] max-w-xl flex-col items-center justify-center gap-7 rounded-lg border-2 border-accent px-10 py-10 text-xl">
        <h1 className="text-3xl font-bold text-accent">{word}</h1>
        <span>means</span>
        <h2 className="text-2xl font-bold dark:text-primary">{translation}</h2>
        <div className="flex flex-col items-center gap-2">
          <span className="italic">{explanation}</span>
          <span className="text-center font-bold italic">{example}</span>
        </div>
      </div>

      <div className="flex gap-5">
        <Link className="btn btn__yellow" href={`/profile/edit-note/${id}`}>
          Edit
        </Link>
        <Button onClick={handleRemoveNote} color="red" type="button">
          Remove
        </Button>
      </div>
    </>
  );
};

export default Note;
