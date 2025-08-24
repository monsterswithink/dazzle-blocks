"use client"
import dynamic from 'next/dynamic';

  const AuthErrorContent = dynamic(() => import('@/resume-blocks/AuthErrorContent'), {
      ssr: false,
});
  export function AuthErrorPage() {
    return (
      <AuthErrorContent />
      )
  }
