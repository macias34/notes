import "server-only";
import { createServerClient } from "@/utils/supabase-server";
import Username from "@/components/UI/Profile/Username/Username";
import { redirect } from "next/navigation";
import Avatar from "@/components/Profile/Avatar/Avatar";

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

  return (
    <div className="flex h-full w-full flex-col items-center gap-7 py-10">
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
  );
};

export default ProfilePage;
