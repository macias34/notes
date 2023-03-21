import "server-only";
import { createServerClient } from "@/utils/supabase-server";
import Username from "@/components/UI/Profile/Username/Username";
import { redirect } from "next/navigation";
import Avatar from "@/components/Profile/Avatar/Avatar";
import { note } from "@/types/supabase";
import NotePreview from "@/components/Notes/NotePreview/NotePreview";
import Link from "next/link";

const ProfilePage = async () => {
  const supabase = createServerClient();
  const serverUser = await supabase.auth.getUser();
  const id = serverUser.data.user?.id;

  if (!id) return redirect("/");

  const { data: userData, error: userDataError } = await supabase
    .from("users")
    .select()
    .eq("id", id);
  const { count: notesCount, error: notesCountError } = await supabase
    .from("notes_users")
    .select("*", { count: "exact", head: true })
    .eq("user_id", id);

  if (userDataError || notesCountError)
    return <p>Error while loading user data.</p>;
  const { username, avatar_url } = userData[0];

  const { count: daysCount, error: userDatesError } = await supabase
    .from("user_days")
    .select("*", { count: "exact", head: true })
    .eq("user_id", id);

  const outputUsername = username
    ? username
    : "Click here to enter username :)";

  const { data: notes, error } = await supabase
    .from("notes_users")
    .select(`note:notes(*)`)
    .eq("user_id", id)
    .order("id", { ascending: false })
    .limit(3);

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-10">
      <div className="flex flex-col gap-7">
        <div className="flex flex-col items-center justify-center gap-5">
          <Avatar userAvatarUrl={avatar_url!} id={id} />
          <Username id={id} username={outputUsername} />
        </div>
        <div className="flex items-center justify-center gap-10">
          <div className="flex flex-col items-center gap-3">
            <span className="text-xl font-semibold">Words learned</span>
            <span className="text-xl font-bold text-accent">{notesCount}</span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <span className="text-xl font-semibold">Days completed</span>
            <span className="text-xl font-bold text-accent">{daysCount}</span>
          </div>
        </div>
      </div>
      {notes ? (
        <div className="flex flex-col items-center gap-7">
          <p className="text-3xl font-semibold">Latest notes</p>
          <div className="flex gap-20">
            {notes.map(({ note }) => {
              const { word, example, explanation, translation, id } =
                note as note;

              return (
                <Link href={`/profile/notes/${id}`}>
                  <NotePreview
                    key={word}
                    word={word!}
                    example={example}
                    explanation={explanation}
                    translation={translation}
                  />
                </Link>
              );
            })}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default ProfilePage;
