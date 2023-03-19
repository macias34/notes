import "server-only";
import { createServerClient } from "@/utils/supabase-server";
import { UserDay } from "@/types/supabase";
import dayjs from "dayjs";

const ProfilePage = async () => {
  const supabase = createServerClient();
  const serverUser = await supabase.auth.getUser();
  const id = serverUser.data.user?.id;

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
  const { username } = userData[0];

  const {
    data: daysData,
    count: daysCount,
    error: userDatesError,
  } = await supabase
    .from("user_days")
    .select("*", { count: "exact" })
    .eq("user_id", id);

  return (
    <div className="flex h-full w-full flex-col items-center gap-10 py-10">
      <div className="flex flex-col items-center justify-center gap-5">
        <div className="h-60 w-60 rounded-full bg-secondary dark:bg-primary"></div>
        <span className="text-xl font-bold">{username}</span>
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
