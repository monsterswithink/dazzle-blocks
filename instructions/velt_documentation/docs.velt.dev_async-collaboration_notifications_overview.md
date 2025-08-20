Title: In-app Notifications - Velt

URL Source: https://docs.velt.dev/async-collaboration/notifications/overview

Markdown Content:
In-app Notifications - Velt

===============

[Velt home page![Image 1: light logo](https://mintlify.s3.us-west-1.amazonaws.com/velt/velt-logo-big-light.png)![Image 2: dark logo](https://mintlify.s3.us-west-1.amazonaws.com/velt/velt-logo-big.png)](https://docs.velt.dev/)

Search or ask...

Ctrl K Ask AI

*   [Get API Key](https://console.velt.dev/)
*   [Get API Key](https://console.velt.dev/)

Search...

Navigation

In-app Notifications

In-app Notifications

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
    *   [Overview](https://docs.velt.dev/async-collaboration/notifications/overview)
    *   [Setup](https://docs.velt.dev/async-collaboration/notifications/setup)
    *   [Customize Behavior](https://docs.velt.dev/async-collaboration/notifications/customize-behavior)

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

In-app Notifications

In-app Notifications
====================

Copy page

Copy page

There are two components associated with In-app Notifications feature:
*   `Velt Notifications Tool`: This opens the Notifications Panel.
*   `Velt Notifications Panel`: This shows all the `Notifications` grouped in categories.

Default config:
*   Max count: 
    *   “For You” tab: By default only the latest 50 notifications are fetched. This is done to reduce clutter and noise.
    *   “Document” / “All” tabs: By default only the latest 15 notifications for each document where the user has access to are fetched. This is done to reduce clutter and noise.

*   Max days: By default, notifications older than 15 days will not be fetched. This is configurable.

[Open in larger window](https://landing-page-demo-velt.vercel.app/?feature=notifications)

Was this page helpful?

Yes No

[Notifications](https://docs.velt.dev/async-collaboration/comments/notifications)[Setup](https://docs.velt.dev/async-collaboration/notifications/setup)

[twitter](https://twitter.com/veltjs)[linkedin](https://www.linkedin.com/company/veltjs)

[Powered by Mintlify](https://mintlify.com/preview-request?utm_campaign=poweredBy&utm_medium=referral&utm_source=velt)

Assistant

Responses are generated using AI and may contain mistakes.
