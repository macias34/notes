import "server-only";
import { createServerClient } from "@/utils/supabase-server";

const ProfilePage = async () => {
  const supabase = createServerClient();
  const user = await supabase.auth.getUser();

  return <div>{user.data.user?.email}</div>;
};

export default ProfilePage;
