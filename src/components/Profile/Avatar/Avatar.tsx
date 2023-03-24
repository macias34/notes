"use client";
import { useSupabase } from "@/components/Supabase/SupabaseProvider/SupabaseProvider";
import { ChangeEvent, FC, useState } from "react";

interface Props {
  id: string;
  userAvatarUrl: string;
}

const Avatar: FC<Props> = ({ id, userAvatarUrl }) => {
  const supabaseAvatarUrl =
    process.env.NEXT_PUBLIC_SUPABASE_URL + "/storage/v1/object/public/avatars/";

  const defaultAvatarUrl =
    supabaseAvatarUrl + "default_avatar.jpg?t=2023-03-20T09%3A59%3A02.541Z";
  const { supabase } = useSupabase();

  const [avatarUrl, setAvatarUrl] = useState<string>(
    userAvatarUrl ? userAvatarUrl : ""
  );

  const onFileUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const fileInput = e.target;
    if (!fileInput.files || fileInput.files.length === 0) {
      return;
    }

    const avatar = fileInput.files[0];
    const isExtValid = avatar.name.match(/\.(jpg|jpeg|png|gif)$/i);

    if (!isExtValid) {
      alert("This file is unsupported, we're sorry!");
      return;
    }

    const savePath = `${id}/${avatar.name}`;

    const { data, error } = await supabase.storage
      .from("avatars")
      .upload(savePath, avatar);

    if (error) {
      console.log(error.message);
      return;
    }

    if (avatarUrl) {
      const bucketFileUrl = avatarUrl.split("avatars/")[1];
      const { error: removeCurrentAvatarError } = await supabase.storage
        .from("avatars")
        .remove([bucketFileUrl]);

      if (removeCurrentAvatarError) {
        console.log(removeCurrentAvatarError.message);
        return;
      }
    }

    const retrievedAvatarUrl = supabaseAvatarUrl + data?.path;
    setAvatarUrl(retrievedAvatarUrl);

    const { error: updateAvatarUrlError } = await supabase
      .from("users")
      .update({ avatar_url: retrievedAvatarUrl })
      .eq("id", id);

    if (updateAvatarUrlError) {
      console.log(updateAvatarUrlError.message);
      return;
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url(${avatarUrl ? avatarUrl : defaultAvatarUrl})`,
      }}
      className={`relative h-60 w-60 rounded-full border-4 border-secondary bg-cover bg-no-repeat dark:bg-primary sm:h-40 sm:w-40`}
    >
      <input
        type="file"
        accept="image/x-png,image/gif,image/jpeg"
        className="absolute h-full w-full cursor-pointer opacity-0"
        title="Upload avatar"
        onChange={onFileUpload}
      />
    </div>
  );
};

export default Avatar;
