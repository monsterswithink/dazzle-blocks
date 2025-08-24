"use client"
import dynamic from 'next/dynamic';

  const ResumeEditor = dynamic(() => import('@/resume-blocks/ResumeEditor'), {
      ssr: false,
});
  export function ResumePage() {
    return (
      <ResumeEditor />
      )
  }
