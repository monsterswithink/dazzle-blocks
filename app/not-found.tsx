"use client";

import React from "react";
import dynamic from "next/dynamic";

const NotFoundContent = dynamic(
  () => import("@/resume-blocks/NotFoundContent"),
  {
    ssr: false,
  }
);
export default function NotFoundPage() {
  return <NotFoundContent />;
}
