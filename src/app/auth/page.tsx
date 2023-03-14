"use client";

import { Auth, ThemeSupa } from "@supabase/auth-ui-react";
import { useSupabase } from "@/components/Supabase/SupabaseProvider/SupabaseProvider";
export const revalidate = 0;

const AuthPage = () => {
  const { supabase } = useSupabase();
  return (
    <div className="absolute bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2">
      <Auth
        supabaseClient={supabase}
        appearance={{
          theme: ThemeSupa,
          variables: {
            default: {
              fonts: {
                bodyFontFamily: "inherit",
                labelFontFamily: "inherit",
                inputFontFamily: "inherit",
                buttonFontFamily: "inherit",
              },
              colors: {
                messageText: "#43C6AC",
                messageTextDanger: "#d22e2e",
              },
            },
          },

          className: {
            input: "input",
            button: "button",
            label: "label",
            anchor: "anchor",
            container: "container",
            message: "message",
          },
        }}
      />
    </div>
  );
};

export default AuthPage;
