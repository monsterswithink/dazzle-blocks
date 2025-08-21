Title: Live Selection - Velt

URL Source: https://docs.velt.dev/ui-customization/features/realtime/live-selection

Markdown Content:
Live Selection - Velt

===============

[Velt home page![Image 1: light logo](https://mintlify.s3.us-west-1.amazonaws.com/velt/velt-logo-big-light.png)![Image 2: dark logo](https://mintlify.s3.us-west-1.amazonaws.com/velt/velt-logo-big.png)](https://docs.velt.dev/)

Search or ask...

Ctrl K Ask AI

*   [Get API Key](https://console.velt.dev/)
*   [Get API Key](https://console.velt.dev/)

Search...

Navigation

Realtime Collaboration

Live Selection

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

On this page

*   [1. Enable/Disable Default Styling](https://docs.velt.dev/ui-customization/features/realtime/live-selection#1-enable%2Fdisable-default-styling)

Realtime Collaboration

Live Selection
==============

Copy page

Copy page

[​](https://docs.velt.dev/ui-customization/features/realtime/live-selection#1-enable%2Fdisable-default-styling)

1. Enable/Disable Default Styling
--------------------------------------------------------------------------------------------------------------------------------------------------

*   When enabled, the SDK will apply default styling to the selected elements.
*   When disabled, the SDK will not apply any styling to the selected elements. You can use these classes to style the selected elements: 
    *   `.velt-live-selection-on-element`: This dynamic class will be added to the selected element only when there is a user on that element.
    *   `.velt-live-selection-on-text`: This dynamic class will be added to the text node only when a user has selected that text.

*   Default: `Enabled`.

*    React / Next.js
*    Other Frameworks

Copy

Ask AI

```
const selectionElement = client.getSelectionElement();

selectionElement.enableDefaultStyling();
selectionElement.disableDefaultStyling();
```

**Custom Styling:**

Copy

Ask AI

```
.velt-live-selection-on-element {
  outline: 2px solid var(--velt-color);
  outline-offset: -2px;
}
```

Was this page helpful?

Yes No

[Single Editor Mode](https://docs.velt.dev/ui-customization/features/realtime/single-editor-mode)[Parts](https://docs.velt.dev/ui-customization/features/realtime/huddle/parts)

[twitter](https://twitter.com/veltjs)[linkedin](https://www.linkedin.com/company/veltjs)

[Powered by Mintlify](https://mintlify.com/preview-request?utm_campaign=poweredBy&utm_medium=referral&utm_source=velt)

Assistant

Responses are generated using AI and may contain mistakes.
