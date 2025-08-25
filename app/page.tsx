"use client"
import dynamic from 'next/dynamic';
import React from 'react';

  const HomeContent = dynamic(() => import('@/resume-blocks/HomeContent'), {
      ssr: false,
});
  export default function HomePage() {
    return <HomeContent />;
  }
