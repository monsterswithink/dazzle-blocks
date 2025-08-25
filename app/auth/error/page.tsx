"use client"
import dynamic from 'next/dynamic';
import React from "react";

  const AuthErrorContent = dynamic(() => import('@/resume-blocks/AuthErrorContent'), {
      ssr: false,
});
  export default function AuthErrorPage() {
    return (
      <AuthErrorContent />
      )
  }
