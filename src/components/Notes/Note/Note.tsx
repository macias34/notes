"use client";

import { FC } from "react";
import { noteForm, note } from "@/types/supabase";
import StyledLink from "@/components/UI/StyledLink/StyledLink";
import Button from "@/components/UI/Button/Button";
import { useSupabase } from "@/components/Supabase/SupabaseProvider/SupabaseProvider";
import { useRouter } from "next/navigation";

export interface NoteProps {
  example: string | null;
  explanation: string | null;
  id: string;
  translation: string | null;
  word: string;
  url?: string;
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
      <div className="flex max-w-xl flex-col items-center justify-center gap-5 rounded-lg border-2 border-accent px-10 py-10 text-xl">
        <h1 className="text-3xl font-bold text-accent">
          {word} <span className="dark:text-primary"> - {translation}</span>
        </h1>
        <h2 className="italic">{explanation}</h2>
        <h2 className="text-center font-bold italic">{example}</h2>
      </div>

      <div className="flex gap-5">
        <StyledLink color="yellow" href={`/profile/edit-note/${id}`}>
          Edit
        </StyledLink>
        <Button onClick={handleRemoveNote} color="red" type="button">
          Remove
        </Button>
      </div>
    </>
  );
};

export default Note;
