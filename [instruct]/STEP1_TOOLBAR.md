1.	[CLONE REPO]
→ https://github.com/monsterswithink/dazzle-blocks/tree/main
	2.	[CODE BASELINE]
	•	Frameworks: Next.js (App Router), Tailwind CSS v4, shadcn/ui, no './src' alias
	•	Collab: Liveblocks + Tiptap (✖️ replace w/ Velt → https://docs.velt.dev/get-started/quickstart)
	•	Auth: NextAuth via @auth/core (authjs.dev) ✅ — do not modify
	•	Data Layer: Supabase (for enriched profile storage)
	•	Session pulls vanityUrl → used to call EnrichLayer API (scrapes LinkedIn)
	•	JSON from EnrichLayer is persisted in Supabase, parsed via types from ./types/resume.ts, and injected as Liveblocks blocks into the resume editor.
	3.	[TASK SCOPE]
🎯 DO NOT TOUCH any logic or routing involving session, auth, r_basicprofile, LinkedIn OAuth, or EnrichLayer scraping flow.
✅ You are only finishing the Resume Toolbar UX.
	4.	[TOOLBAR: CANDIDATE VIEW]
	•	A floating fixed-position toolbar (like Vercel’s) above the resume editor.
	•	Icon-only buttons, clean & minimal.
Features:
	•	🎨 Theme selector dropdown — open up or drop-up menu
	•	Themes styled by job type:
product, developer, industrial, data, manager, creative, etc
	•	Theme changes: apply fonts, colors, layout — no reload
	•	⚡ “Super Dazzle” toggle (top toolbar)
	•	Triggers pricing modal ($9.95 upgrade)
	•	Once active, adds button: animated loader (⚡ in center)
	•	Calls ML matching → candidate-to-role suggestions
	•	✏️ Edit Mode Toggle
	•	Also triggers pricing modal
	•	Enables in-place content editing on all fields
	•	🔄 Sync from LinkedIn button
	•	Hard limit: 3 syncs/day (after that, show upgrade modal)
	•	Button shows counter (3/3) style
	•	🔗 Share — generates:
	•	short permalink URL
	•	QR snapshot preview
	•	🖨️ Print resume — clean printable layout
	5.	[TOOLBAR: RECRUITER VIEW]
	•	Read-only
	•	Shareable + printable
	•	Collapsible experience blocks
	•	Faded gradient masks over truncated content
	•	Skills & highlights rendered as beautiful data visuals (charts, graphs)
	•	First-glance scan UX over traditional list layout
	6.	[DATA FORMAT]
All resume/profile data conforms to the flat EnrichLayer → Supabase schema:
(📦 Already typed in ./types/resume.ts)
Here’s the minified JSON baseline:
