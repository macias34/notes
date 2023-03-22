import "server-only";
import { createServerClient } from "@/utils/supabase-server";
import { redirect } from "next/navigation";
import Link from "next/link";
import NotePreview from "@/components/Notes/NotePreview/NotePreview";
import dayjs from "dayjs";
import Test from "@/components/Notes/Test/Test";
import NotesGrid from "@/components/Notes/NotesGrid/NotesGrid";

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
    .from("notes_by_date")
    .select()
    .eq("created_at", date)
    .eq("user_id", user_id);

  if (notes?.length === 0 || !notes || error) redirect("/profile/notes");

  const formattedDate = dayjs(date).format("DD MMMM YYYY");

  return (
    <div className="relative flex flex-col items-center gap-7 p-10">
      <h1 className="text-3xl font-semibold">
        Notes for <span className="text-accent">{formattedDate}</span>
      </h1>
      <NotesGrid notes={notes} />
    </div>
  );
};

export default DayPage;
