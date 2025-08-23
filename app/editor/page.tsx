"use client";

import dynamic from "next/dynamic";

// Disable SSR for this page
const ResumeEditor = dynamic(
  () => import("@/components/resume-editor/ResumeEditor").then((mod) => mod.ResumeEditor),
  { ssr: false }
);

export default function ResumePage() {
  return <ResumeEditor />;
}
