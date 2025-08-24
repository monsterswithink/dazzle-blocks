"use client"
import dynamic from 'next/dynamic';

  const HomeContent = dynamic(() => import('@/resume-blocks/HomeContent'), {
      ssr: false,
});
  export function HomePage() {
    return (
      <HomeContent />
      )
  }
