"use client"
import dynamic from 'next/dynamic';

  const NotFoundContent = dynamic(() => import('@/resume-blocks/NotFoundContent'), {
      ssr: false,
});
  export function NotFoundPage() {
    return (
      <NotFoundContent />
      )
  }
