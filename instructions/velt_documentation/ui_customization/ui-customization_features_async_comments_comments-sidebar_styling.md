Title: Styling - Velt

URL Source: https://docs.velt.dev/ui-customization/features/async/comments/comments-sidebar/styling

Markdown Content:
Styling - Velt

===============

[Velt home page![Image 3: light logo](https://mintlify.s3.us-west-1.amazonaws.com/velt/velt-logo-big-light.png)![Image 4: dark logo](https://mintlify.s3.us-west-1.amazonaws.com/velt/velt-logo-big.png)](https://docs.velt.dev/)

Search or ask...

Ctrl K Ask AI

*   [Get API Key](https://console.velt.dev/)
*   [Get API Key](https://console.velt.dev/)

Search...

Navigation

Comments Sidebar

Styling

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
    *   Comment Dialog  
    *   Comments Sidebar  
        *   [Overview](https://docs.velt.dev/ui-customization/features/async/comments/comments-sidebar/overview)
        *   [Styling](https://docs.velt.dev/ui-customization/features/async/comments/comments-sidebar/styling)
        *   [Variants](https://docs.velt.dev/ui-customization/features/async/comments/comments-sidebar/variants)
        *   Subcomponents  

    *   Standalone Components (DIY)  
    *   [Inline Comments Section](https://docs.velt.dev/ui-customization/features/async/comments/inline-comments-section)
    *   [Comment Pin](https://docs.velt.dev/ui-customization/features/async/comments/comment-pin)
    *   [Comment Tool](https://docs.velt.dev/ui-customization/features/async/comments/comment-tool)
    *   [Comment Bubble](https://docs.velt.dev/ui-customization/features/async/comments/comment-bubble)
    *   [Comment Player Timeline](https://docs.velt.dev/ui-customization/features/async/comments/comment-player-timeline)
    *   [Confirmation Dialog](https://docs.velt.dev/ui-customization/features/async/comments/confirm-dialog)
    *   [MultiThread Comment Dialog](https://docs.velt.dev/ui-customization/features/async/comments/multithread-comment-dialog)
    *   [Persistent Comment Mode Banner](https://docs.velt.dev/ui-customization/features/async/comments/persistent-comment-mode-banner)
    *   [Text Comment Tool](https://docs.velt.dev/ui-customization/features/async/comments/text-comment-tool)
    *   [Text Comment Toolbar](https://docs.velt.dev/ui-customization/features/async/comments/text-comment-toolbar)
    *   [Velt Video Player](https://docs.velt.dev/ui-customization/features/async/comments/comment-video-player)

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

*   [Disable ShadowDOM](https://docs.velt.dev/ui-customization/features/async/comments/comments-sidebar/styling#disable-shadowdom)
*   [Example](https://docs.velt.dev/ui-customization/features/async/comments/comments-sidebar/styling#example)
*   [API methods](https://docs.velt.dev/ui-customization/features/async/comments/comments-sidebar/styling#api-methods)
*   [Dark Mode](https://docs.velt.dev/ui-customization/features/async/comments/comments-sidebar/styling#dark-mode)
*   [Example](https://docs.velt.dev/ui-customization/features/async/comments/comments-sidebar/styling#example-3)
*   [API methods](https://docs.velt.dev/ui-customization/features/async/comments/comments-sidebar/styling#api-methods-3)

Comments Sidebar

Styling
=======

Copy page

Copy page

[​](https://docs.velt.dev/ui-customization/features/async/comments/comments-sidebar/styling#disable-shadowdom)

Disable ShadowDOM
---------------------------------------------------------------------------------------------------------------------------------

*   By default, ShadowDOM is used to ensure that your app’s CSS does not interfere with the styling of the SDK components.
*   Disable the shadow dom to apply your custom CSS to the component.

`Default: true`

*    React / Next.js
*    Other Frameworks

### [​](https://docs.velt.dev/ui-customization/features/async/comments/comments-sidebar/styling#example)

Example

Copy

Ask AI

```
<VeltCommentsSidebar shadowDom={false} />
```

### [​](https://docs.velt.dev/ui-customization/features/async/comments/comments-sidebar/styling#api-methods)

API methods

Copy

Ask AI

```
const commentElement = client.getCommentElement();
commentElement.enableSidebarShadowDOM();
commentElement.disableSidebarShadowDOM();
```

[​](https://docs.velt.dev/ui-customization/features/async/comments/comments-sidebar/styling#dark-mode)

Dark Mode
-----------------------------------------------------------------------------------------------------------------

![Image 5](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/velt-comment-sidebar-1.png)![Image 6](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/sidebar-breakdown-dark.png) By default, all components are in Light Mode, but there are several properties and methods to enable Dark Mode.`Default: false`To enable Dark Mode for comments sidebar:

*    React / Next.js
*    Other Frameworks

### [​](https://docs.velt.dev/ui-customization/features/async/comments/comments-sidebar/styling#example-3)

Example

Copy

Ask AI

```
<VeltCommentsSidebar darkMode={true} />
```

### [​](https://docs.velt.dev/ui-customization/features/async/comments/comments-sidebar/styling#api-methods-3)

API methods

Copy

Ask AI

```
const commentElement = client.getCommentElement();
commentElement.enableDarkMode();
commentElement.disableDarkMode();
```

Was this page helpful?

Yes No

[Overview](https://docs.velt.dev/ui-customization/features/async/comments/comments-sidebar/overview)[Variants](https://docs.velt.dev/ui-customization/features/async/comments/comments-sidebar/variants)

[twitter](https://twitter.com/veltjs)[linkedin](https://www.linkedin.com/company/veltjs)

[Powered by Mintlify](https://mintlify.com/preview-request?utm_campaign=poweredBy&utm_medium=referral&utm_source=velt)

Assistant

Responses are generated using AI and may contain mistakes.

![Image 7](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/velt-comment-sidebar-1.png)

![Image 8](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/sidebar-breakdown-dark.png)
