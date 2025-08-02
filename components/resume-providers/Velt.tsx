"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useSession } from "@auth/nextjs";

interface VeltContextType {
  isInitialized: boolean;
  setDocumentId: (documentId: string) => void;
  toggleComments: (enabled: boolean) => void;
  startRecording: () => void;
  toggleFollowMode: (enabled: boolean) => void;
}

const VeltContext = createContext<VeltContextType | undefined>(undefined);

interface VeltProviderProps {
  children: React.ReactNode;
}

export function VeltProvider({ children }: VeltProviderProps) {
  const [isInitialized, setIsInitialized] = useState(false);
  const [currentDocumentId, setCurrentDocumentId] = useState<string | null>(null);
  const { data: session } = useSession();

  useEffect(() => {
    console.log("VeltProvider session:", session);
    setIsInitialized(true);
  }, [session]);

  const contextValue: VeltContextType = {
    isInitialized,
    setDocumentId: (documentId: string) => {
      setCurrentDocumentId(documentId);
    },
    toggleComments: (enabled: boolean) => {
      console.log("Toggle comments:", enabled);
    },
    startRecording: () => {
      console.log("Start recording");
    },
    toggleFollowMode: (enabled: boolean) => {
      console.log("Toggle follow mode:", enabled);
    },
  };

  return <VeltContext.Provider value={contextValue}>{children}</VeltContext.Provider>;
}

export function useVelt() {
  const context = useContext(VeltContext);
  if (context === undefined) {
    throw new Error("useVelt must be used within a VeltProvider");
  }
  return context;
}
