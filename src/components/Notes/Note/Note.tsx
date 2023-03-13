"use client";

import { FC } from "react";
import { addNote, note } from "@/types/supabase";
import StyledLink from "@/components/UI/StyledLink/StyledLink";
import Button from "@/components/UI/Button/Button";
import { useSupabase } from "@/components/Supabase/SupabaseProvider/SupabaseProvider";

type Props = Omit<note, "created_at">;

const Note: FC<Props> = ({ word, translation, explanation, example, id }) => {
  const { supabase } = useSupabase();
  const handleRemoveNote = async () => {
    const { error: noteUserError } = await supabase
      .from("notes_users")
      .delete()
      .eq("note_id", id);
    const { error } = await supabase.from("notes").delete().eq("id", id);

    if (error || noteUserError) console.log(error || noteUserError);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-5 rounded-lg border-2 border-accent px-20 py-10 text-xl">
        <h1 className="text-3xl font-bold text-accent">
          {word} <span className="dark:text-primary"> - {translation}</span>
        </h1>
        <h2 className="italic">{explanation}</h2>
        <h2 className="font-bold italic">{example}</h2>
      </div>

      <div className="flex gap-5">
        <StyledLink color="yellow" href={`/profile/edit-note/${word}`}>
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
