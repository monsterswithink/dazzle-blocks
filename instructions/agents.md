### MIGRATE Liveblocks → Velt SDK — Technical Spec for AI Builder

---

#### CONTEXT

- Current stack: Next.js App Router, TailwindCSS, shadcn/ui, Supabase backend, EnrichLayer API for LinkedIn data enrichment.
- Collaborative editing powered by Liveblocks:  
  - `RoomProvider` wraps resume editor with initial JSON from Supabase (seeded from EnrichLayer).  
  - Liveblocks manages real-time state sync and presence.
- Auth and LinkedIn OAuth remain untouched.
- Resume JSON fetch and save endpoints remain the same.

---

#### OBJECTIVE

Replace Liveblocks real-time collaboration with Velt SDK while preserving all existing routing, backend API usage, data flow, and UI logic except the collaboration layer.

---

#### REQUIREMENTS

1. **Dependency swap**  
   - Remove Liveblocks SDK packages.  
   - Install `@veltdev/sdk` and `@veltdev/react`.

2. **App-level provider**  
   - Replace Liveblocks `<RoomProvider>` with Velt’s `<VeltProvider apiKey={...}>` wrapping the app root (e.g., `providers.tsx` or `layout.tsx`).

3. **Resume editor context**  
   - Replace `RoomProvider` usage in `app/resume/[id]/ResumeViewer.tsx` with Velt’s `useDocument` and `DocumentProvider`.  
   - Initialize Velt document with the existing resume JSON from Supabase (same data source).

4. **State access**  
   - Refactor resume viewer/editor components to use Velt’s `state` object from `useDocument`, instead of Liveblocks hooks.

5. **Persistence**  
   - On document changes, persist to Supabase using existing `ResumeService.saveResume`.  
   - Ensure seamless reload of the Velt document with updated JSON on next session load or manual LinkedIn sync.

6. **API & routing**  
   - Continue fetching profile and enriched data via `/api/profile` and `/api/enrich` as before.  
   - No modifications to API routes or session management.

7. **UI/UX parity**  
   - Maintain toolbar, editing features, syncing, share URLs, and print capabilities unchanged.  
   - All existing toolbar interactions to trigger Velt document updates instead of Liveblocks.

---

#### TECHNICAL NOTES

- Velt’s REST API allows preloading initial document state to match Supabase JSON.  
- Use consistent document IDs like `resume-${resumeId}` for backward compatibility.  
- Auth integration with `@auth/nextjs` and session handling remain stable.  
- Velt supports collaborative presence and cursors similar to Liveblocks.

---

#### DELIVERABLE

- A minimal code diff replacing Liveblocks SDK usage with Velt SDK.  
- Updated React hooks and providers to utilize Velt document state.  
- Verified resume JSON fetched via existing backend endpoints seeds Velt document properly.  
- Save flows post-edit persist data to Supabase unmodified.

---

This spec guides the AI builder to produce an exact, zero-backend-impact Liveblocks → Velt migration within the existing Next.js app architecture.
