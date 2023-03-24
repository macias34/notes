"use client";
import { NoteNoteID } from "@/supabase/supabase-types";
import { FC, useState } from "react";
import NoteList from "../NoteList";
import { motion, AnimatePresence } from "framer-motion";
interface Props {
  notesByDate: NoteNoteID[];
}

const FoldableNoteList: FC<Props> = ({ notesByDate }) => {
  const [unfolded, setUnfolded] = useState<boolean>(false);
  const toggleFold = () => setUnfolded((prevState) => !prevState);

  return (
    <>
      <span
        title={unfolded ? "Hide notes" : "Show notes"}
        onClick={toggleFold}
        className={`${
          notesByDate.length >= 10 ? "text-accent" : ""
        } mb-4 cursor-pointer text-xl font-semibold`}
      >
        {notesByDate.length} / 10
      </span>
      <AnimatePresence>
        {unfolded ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <NoteList notes={notesByDate} />
          </motion.div>
        ) : (
          ""
        )}
      </AnimatePresence>
    </>
  );
};

export default FoldableNoteList;
