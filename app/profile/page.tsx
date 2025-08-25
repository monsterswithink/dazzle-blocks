"use client";
import dynamic from "next/dynamic";
import React from "react";

const ProfileContent = dynamic(() => import("@/blocks/ProfileContent"), {
  ssr: false,
});
export default function ProfilePage() {
  return <ProfileContent />;
}
