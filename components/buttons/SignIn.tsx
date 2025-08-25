"use client";

import { Button } from "@/ui/button";
import { Linkedin, Loader2 } from "lucide-react";
import { signIn, useSession } from "next-auth/react";
import { useState } from "react";

export default function SignIn() {
  const { status } = useSession();
  const [isLoading, setIsLoading] = useState(false);

  const handleSignIn = async () => {
    setIsLoading(true);
    await signIn("linkedin", { callbackUrl: "/profile", redirect: true });
    setIsLoading(false);
  };

  return (
    <Button
      onClick={handleSignIn}
      disabled={status === "loading" || isLoading}
      size="lg"
      className="w-full"
    >
      {status === "loading" || isLoading ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Signing in...
        </>
      ) : (
        <>
          <Linkedin className="mr-2 h-4 w-4" />
          Sign in with LinkedIn
        </>
      )}
    </Button>
  );
}
