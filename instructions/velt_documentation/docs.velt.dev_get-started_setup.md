Title: 1. Install - Velt

URL Source: https://docs.velt.dev/get-started/setup

Markdown Content:
1. Install - Velt

===============

[Velt home page![Image 2: light logo](https://mintlify.s3.us-west-1.amazonaws.com/velt/velt-logo-big-light.png)![Image 3: dark logo](https://mintlify.s3.us-west-1.amazonaws.com/velt/velt-logo-big.png)](https://docs.velt.dev/)

Search or ask...

Ctrl K Ask AI

*   [Get API Key](https://console.velt.dev/)
*   [Get API Key](https://console.velt.dev/)

Search...

Navigation

Setup

1. Install

[Documentation](https://docs.velt.dev/get-started/overview)[UI Customization](https://docs.velt.dev/ui-customization/overview)[API Reference](https://docs.velt.dev/api-reference/rest-apis/v2/organizations/add-organizations)[Release Notes](https://docs.velt.dev/release-notes/version-4/upgrade-guide)[Examples](https://velt.dev/examples)[DevTools](https://velt.dev/devtools)

##### Get Started

*   [Overview](https://docs.velt.dev/get-started/overview)
*   [Quickstart](https://docs.velt.dev/get-started/quickstart)
*   Setup  
    *   [1. Install](https://docs.velt.dev/get-started/setup/install)
    *   [2. Authenticate](https://docs.velt.dev/get-started/setup/authenticate)
    *   [3. Initialize Document](https://docs.velt.dev/get-started/setup/initialize-document)
    *   [Advanced Setup Options](https://docs.velt.dev/get-started/setup/advanced)

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

React / Next.js with Hooks

React / Next.js

HTML

Angular

Vue.js

Copy

Ask AI

```
'use client' // Add this line for Next.js only

import { VeltProvider } from '@veltdev/react';

export default function App() {

  return (
    <VeltProvider apiKey="YOUR_API_KEY">
      <YourRootComponent/>
    </VeltProvider>
  );
}
```

Setup

1. Install
==========

Copy page

Steps to integrate Velt into an existing app

Copy page

React / Next.js with Hooks

React / Next.js

HTML

Angular

Vue.js

Copy

Ask AI

```
'use client' // Add this line for Next.js only

import { VeltProvider } from '@veltdev/react';

export default function App() {

  return (
    <VeltProvider apiKey="YOUR_API_KEY">
      <YourRootComponent/>
    </VeltProvider>
  );
}
```

*    React / Next.js with Hooks
*    React / Next.js
*    HTML
*    Angular
*    Vue.js

1

Install React package
---------------------

npm:

Copy

Ask AI

```
npm install @veltdev/react
```

yarn:

Copy

Ask AI

```
$ yarn add @veltdev/react
```

2

Install types (optional)
------------------------

If you’re using TypeScript, you can install the types package.

Copy

Ask AI

```
npm install --save-dev @veltdev/types
```

3

Grab your Velt API Key
----------------------

Go to [console.velt.dev](https://console.velt.dev/) and grab your Velt API Key

![Image 4](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/velt-console-api-key.png)

4

Safelist your domain
--------------------

In the Velt console, add the URL where your app is deployed to the list of Managed Domains.

![Image 5](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/velt-console-add-website.png)

5

Add the VeltProvider
--------------------

Add the VeltProvider component to the root of your app.Add your Velt API key.

Copy

Ask AI

```
import { VeltProvider } from '@veltdev/react';
```

Copy

Ask AI

```
<VeltProvider apiKey="YOUR_API_KEY">
  <YourRootComponent/>
</VeltProvider>
```

6

(Next.js only) Add 'use client' to your root component
------------------------------------------------------

Copy

Ask AI

```
'use client'

import { VeltProvider } from '@veltdev/react';

<VeltProvider apiKey="YOUR_API_KEY">
  <YourRootComponent/>
</VeltProvider>
```

Was this page helpful?

Yes No

[Quickstart](https://docs.velt.dev/get-started/quickstart)[2. Authenticate](https://docs.velt.dev/get-started/setup/authenticate)

[twitter](https://twitter.com/veltjs)[linkedin](https://www.linkedin.com/company/veltjs)

[Powered by Mintlify](https://mintlify.com/preview-request?utm_campaign=poweredBy&utm_medium=referral&utm_source=velt)

Assistant

Responses are generated using AI and may contain mistakes.

![Image 6](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/velt-console-api-key.png)

![Image 7](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/velt-console-add-website.png)
