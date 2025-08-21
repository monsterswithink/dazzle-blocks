Title: Quickstart - Velt

URL Source: https://docs.velt.dev/get-started/quickstart

Markdown Content:
```
import { VeltProvider, VeltComments, VeltPresence } from '@veltdev/react';
import YourAuthComponent from './YourAuthComponent';
import YourDocument from './YourDocument';

export default function App() {

  return (
    <VeltProvider apiKey="YOUR_API_KEY">
      <VeltComments/>
      <VeltPresence/>
      <YourAuthComponent/>
      <YourDocument/>
    </VeltProvider>
  );
}
```

Get Started

Quickstart for React. For other frameworks like `vue`, `angular`, `svelte`, `vanilla js` etc. check out the setup guide.

```
import { VeltProvider, VeltComments, VeltPresence } from '@veltdev/react';
import YourAuthComponent from './YourAuthComponent';
import YourDocument from './YourDocument';

export default function App() {

  return (
    <VeltProvider apiKey="YOUR_API_KEY">
      <VeltComments/>
      <VeltPresence/>
      <YourAuthComponent/>
      <YourDocument/>
    </VeltProvider>
  );
}
```

1

2

Install the Velt React package onto your app
--------------------------------------------

Terminal

```
cd my-app && npm install @veltdev/react
```

3

Install types (optional)
------------------------

If you’re using TypeScript, you can install the types package.

Terminal

```
npm install --save-dev @veltdev/types
```

4

5

Safelist your domain
--------------------

In the Velt console, add the URL where your app is deployed to the list of Managed Domains.

![Image 1](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/velt-console-add-website.png)

6

Configure the VeltProvider
--------------------------

In **App.js**, add the `VeltProvider` component to the root of your app with your Velt API Key.

App.js

```
<VeltProvider apiKey="YOUR_API_KEY">
  <YourAuthComponent/>
  <YourDocument/>
</VeltProvider>
```

7

Identify your user
------------------

In **YourAuthComponent.js**, use the `useIdentify()` hook from the Velt SDK to identify your user.

YourAuthComponent.js

```
import { useIdentify } from '@veltdev/react';

useIdentify(user)
```

Make sure to call `useIdentify()` within a child component of the Velt Provider. Otherwise, it will not work.

8

Set the Document ID
-------------------

In **YourDocument.js**, use the `useSetDocumentId()` hook from the Velt SDK to set the Document ID.

YourDocument.js

```
import { useSetDocumentId } from '@veltdev/react';

useSetDocumentId("my-document-id")
```

9

Add the VeltComments, VeltCommentTool and VeltPresence components
-----------------------------------------------------------------

In **App.js**, add `VeltComments` to enable the `Comments` functionality.

App.js

```
<VeltProvider apiKey="YOUR_API_KEY">
  <VeltComments/>
  <YourAuthComponent/>
  <YourDocument/>
</VeltProvider>
```

In **YourDocument.js**, add the `VeltCommentTool` and `VeltPresence` components to test out the `Comments` and `Presence` functionality.

YourDocument.js

```
<div>
  <VeltPresence/>
  <VeltCommentTool/>
</div>
```

10

Test out the Presence and Comments functionality
------------------------------------------------

### Comments

*   Click the `VeltCommentTool` button, then hover over any element on the page to leave a comment.
*   Click the `VeltCommentTool` button, then try to draw a box on the page to leave a comment.
*   You can also highlight any text to leave a comment.

### Presence

*   Open two browser tabs side by side with one in Incognito mode. You should see a bubble showing the other browser’s profile avatar pop up.

11
