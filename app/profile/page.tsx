"use client"
import dynamic from 'next/dynamic';

  const ProfileContent = dynamic(() => import('@/resume-blocks/ProfileContent'), {
      ssr: false,
});
  export function ProfilePage() {
    return (
      <ProfileContent />
      )
  }
