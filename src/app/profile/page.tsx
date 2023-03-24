import "server-only";
import { createServerClient } from "@/supabase/supabase-server";
import Username from "@/components/Profile/Username/Username";
import { redirect } from "next/navigation";
import Avatar from "@/components/Profile/Avatar/Avatar";
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
    .eq("id", id)
    .single();
  const { count: notesCount, error: notesCountError } = await supabase
    .from("notes_users")
    .select("*", { count: "exact", head: true })
    .eq("user_id", id);

  if (userDataError || notesCountError)
    return <p>Error while loading user data.</p>;
  const { username, avatar_url } = userData;

  const { data: count } = await supabase
    .from("days_count_by_user")
    .select("count")
    .eq("user_id", id)
    .single();

  const daysCount = count?.count;

  const outputUsername = username
    ? username
    : "Click here to enter username :)";

  const { data: notes, error: notesError } = await supabase
    .from("notes_by_user_id")
    .select()
    .eq("user_id", id)
    .limit(3)
    .order("created_at", { ascending: false });

  if (notesError) return <p>Error while loading latest notes.</p>;

  return (
    <div className="flex h-[90vh] w-full flex-col items-center justify-center gap-10">
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
            <span className="text-xl font-bold text-accent">
              {daysCount ? daysCount : 0}
            </span>
          </div>
        </div>
      </div>
      {notes && notes.length > 0 ? (
        <div className="flex flex-col items-center gap-7">
          <p className="text-3xl font-semibold">Latest notes</p>
          <div className="flex gap-20">
            {notes.map((note) => {
              const { word, example, explanation, translation, note_id } = note;

              return (
                <Link key={word} href={`/profile/notes/${note_id}`}>
                  <NotePreview
                    word={word}
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
