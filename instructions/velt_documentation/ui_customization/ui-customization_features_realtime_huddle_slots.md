Title: Slots - Velt

URL Source: https://docs.velt.dev/ui-customization/features/realtime/huddle/slots

Markdown Content:
Slots - Velt

===============

[Velt home page![Image 1: light logo](https://mintlify.s3.us-west-1.amazonaws.com/velt/velt-logo-big-light.png)![Image 2: dark logo](https://mintlify.s3.us-west-1.amazonaws.com/velt/velt-logo-big.png)](https://docs.velt.dev/)

Search or ask...

Ctrl K Ask AI

*   [Get API Key](https://console.velt.dev/)
*   [Get API Key](https://console.velt.dev/)

Search...

Navigation

Huddle

Slots

[Documentation](https://docs.velt.dev/get-started/overview)[UI Customization](https://docs.velt.dev/ui-customization/overview)[API Reference](https://docs.velt.dev/api-reference/rest-apis/v2/organizations/add-organizations)[Release Notes](https://docs.velt.dev/release-notes/version-4/upgrade-guide)[Examples](https://velt.dev/examples)[DevTools](https://velt.dev/devtools)

##### Concepts

*   [Overview](https://docs.velt.dev/ui-customization/overview)
*   [Setup Wireframes](https://docs.velt.dev/ui-customization/setup)
*   [Layout Customization](https://docs.velt.dev/ui-customization/layout)
*   [CSS Customization](https://docs.velt.dev/ui-customization/styling)
*   [Template Variables](https://docs.velt.dev/ui-customization/template-variables)
*   [Conditional Templates](https://docs.velt.dev/ui-customization/conditional-templates)
*   [Action Components](https://docs.velt.dev/ui-customization/custom-action-component)
*   [Localisation](https://docs.velt.dev/ui-customization/localisation)

##### Async Collaboration

*   Comments  
*   In-app Notifications  
*   Recorder  
*   [Inline Reactions Section](https://docs.velt.dev/ui-customization/features/async/inline-reactions)
*   Arrows  

##### Realtime Collaboration

*   [Presence](https://docs.velt.dev/ui-customization/features/realtime/presence)
*   [Cursors](https://docs.velt.dev/ui-customization/features/realtime/cursors)
*   [Single Editor Mode](https://docs.velt.dev/ui-customization/features/realtime/single-editor-mode)
*   [Live Selection](https://docs.velt.dev/ui-customization/features/realtime/live-selection)
*   Huddle  
    *   [Parts](https://docs.velt.dev/ui-customization/features/realtime/huddle/parts)
    *   [Slots](https://docs.velt.dev/ui-customization/features/realtime/huddle/slots)
    *   [Variables](https://docs.velt.dev/ui-customization/features/realtime/huddle/variables)

React / Next.js

HTML

Copy

Ask AI

```
import {
  VeltHuddleTool
} from '@veltdev/react';

export default function App() {

  return (
    <>

      <VeltHuddleTool>
        <button slot="button">Huddle</button>
      </VeltHuddleTool>

    </>
  );
}
```

Huddle

Slots
=====

Copy page

Copy page

React / Next.js

HTML

Copy

Ask AI

```
import {
  VeltHuddleTool
} from '@veltdev/react';

export default function App() {

  return (
    <>

      <VeltHuddleTool>
        <button slot="button">Huddle</button>
      </VeltHuddleTool>

    </>
  );
}
```

*    React / Next.js
*    Other Frameworks

1

Replace the Huddle Tool

Provide a template for the Huddle Tool.Target the `button` slot with your own custom template.

Copy

Ask AI

```
<VeltHuddleTool>
  <button slot="button">Huddle</button>
</VeltCommentTool>
```

Was this page helpful?

Yes No

[Parts](https://docs.velt.dev/ui-customization/features/realtime/huddle/parts)[Variables](https://docs.velt.dev/ui-customization/features/realtime/huddle/variables)

[twitter](https://twitter.com/veltjs)[linkedin](https://www.linkedin.com/company/veltjs)

[Powered by Mintlify](https://mintlify.com/preview-request?utm_campaign=poweredBy&utm_medium=referral&utm_source=velt)

Assistant

Responses are generated using AI and may contain mistakes.
