Title: Overview - Velt

URL Source: https://docs.velt.dev/realtime-collaboration/live-state-sync/overview

Markdown Content:
Overview - Velt

===============

[Velt home page![Image 1: light logo](https://mintlify.s3.us-west-1.amazonaws.com/velt/velt-logo-big-light.png)![Image 2: dark logo](https://mintlify.s3.us-west-1.amazonaws.com/velt/velt-logo-big.png)](https://docs.velt.dev/)

Search or ask...

Ctrl K Ask AI

*   [Get API Key](https://console.velt.dev/)
*   [Get API Key](https://console.velt.dev/)

Search...

Navigation

Live State Sync

Overview

[Documentation](https://docs.velt.dev/get-started/overview)[UI Customization](https://docs.velt.dev/ui-customization/overview)[API Reference](https://docs.velt.dev/api-reference/rest-apis/v2/organizations/add-organizations)[Release Notes](https://docs.velt.dev/release-notes/version-4/upgrade-guide)[Examples](https://velt.dev/examples)[DevTools](https://velt.dev/devtools)

##### Get Started

*   [Overview](https://docs.velt.dev/get-started/overview)
*   [Quickstart](https://docs.velt.dev/get-started/quickstart)
*   Setup  

##### Key Concepts

*   [Overview](https://docs.velt.dev/key-concepts/overview)

##### Async Collaboration

*   Comments  
*   In-app Notifications  
*   Inline Reactions  
*   Recorder  
*   View Analytics  
*   Arrows  

##### Realtime Collaboration

*   Presence  
*   Cursors  
*   Follow Me Mode  
*   Huddle  
*   Live Selection  
*   Live State Sync  
    *   [Overview](https://docs.velt.dev/realtime-collaboration/live-state-sync/overview)
    *   [Setup](https://docs.velt.dev/realtime-collaboration/live-state-sync/setup)
    *   [Redux Middleware](https://docs.velt.dev/realtime-collaboration/live-state-sync/redux-middleware)

*   Single Editor Mode  
*   CRDT (Yjs)  
*   Video Player Sync  

##### Self-Host Data

*   [Overview](https://docs.velt.dev/self-host-data/overview)
*   [Users](https://docs.velt.dev/self-host-data/users)
*   [Comments](https://docs.velt.dev/self-host-data/comments)
*   [Reactions](https://docs.velt.dev/self-host-data/reactions)
*   [Attachments](https://docs.velt.dev/self-host-data/attachments)

##### Model Context Protocol

*   [MCP Servers (Beta)](https://docs.velt.dev/mcp/mcp)

##### Webhooks

*   [Basic Webhooks](https://docs.velt.dev/webhooks/basic)
*   [Advanced Webhooks](https://docs.velt.dev/webhooks/advanced)

##### Security

*   [Content security policy](https://docs.velt.dev/security/content-security-policy)
*   [Generating Auth Tokens](https://docs.velt.dev/security/auth-tokens)
*   [JWT Tokens](https://docs.velt.dev/security/jwt-tokens)
*   [Proxy Server](https://docs.velt.dev/security/proxy-server)
*   [Supported Regions](https://docs.velt.dev/security/supported-regions)

##### Miscellaneous

*   [Migrate from Cord to Velt](https://docs.velt.dev/migration/migrate-from-cord-to-velt)
*   [Migrate from Liveblocks to Velt](https://docs.velt.dev/migration/migrate-from-liveblocks-to-velt)
*   Common Integration Questions  

On this page

*   [Latency](https://docs.velt.dev/realtime-collaboration/live-state-sync/overview#latency)
*   [Offline Support](https://docs.velt.dev/realtime-collaboration/live-state-sync/overview#offline-support)
*   [Conflict Resolution](https://docs.velt.dev/realtime-collaboration/live-state-sync/overview#conflict-resolution)

Live State Sync

Overview
========

Copy page

Sync and broadcast data in real-time across all connected clients.

Copy page

Live State Sync allows you to share and synchronize data in real-time across all connected clients. This feature is useful for building collaborative features like shared forms, whiteboards, or any real-time state that needs to be synced across all users.
[​](https://docs.velt.dev/realtime-collaboration/live-state-sync/overview#latency)

Latency
-------------------------------------------------------------------------------------------

*   Extremely low latency, with typical response times no greater than 10 ms.

[​](https://docs.velt.dev/realtime-collaboration/live-state-sync/overview#offline-support)

Offline Support
-----------------------------------------------------------------------------------------------------------

*   Optimistic local‑first reads and writes.
*   Full offline support with automatic syncing when reconnected.

[​](https://docs.velt.dev/realtime-collaboration/live-state-sync/overview#conflict-resolution)

Conflict Resolution
-------------------------------------------------------------------------------------------------------------------

*   Server timestamp-based last-write-wins strategy for automatic conflict resolution.

[Open in larger window](https://landing-page-demo-velt.vercel.app/?feature=live-state-sync&layout=horizontal)

Was this page helpful?

Yes No

[Customize Behavior](https://docs.velt.dev/realtime-collaboration/live-selection/customize-behavior)[Setup](https://docs.velt.dev/realtime-collaboration/live-state-sync/setup)

[twitter](https://twitter.com/veltjs)[linkedin](https://www.linkedin.com/company/veltjs)

[Powered by Mintlify](https://mintlify.com/preview-request?utm_campaign=poweredBy&utm_medium=referral&utm_source=velt)

Assistant

Responses are generated using AI and may contain mistakes.
