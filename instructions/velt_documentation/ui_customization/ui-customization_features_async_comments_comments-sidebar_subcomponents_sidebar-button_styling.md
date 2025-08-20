Title: Styling - Velt

URL Source: https://docs.velt.dev/ui-customization/features/async/comments/comments-sidebar/subcomponents/sidebar-button/styling

Markdown Content:
Styling - Velt

===============

[Velt home page![Image 2: light logo](https://mintlify.s3.us-west-1.amazonaws.com/velt/velt-logo-big-light.png)![Image 3: dark logo](https://mintlify.s3.us-west-1.amazonaws.com/velt/velt-logo-big.png)](https://docs.velt.dev/)

Search or ask...

Ctrl K Ask AI

*   [Get API Key](https://console.velt.dev/)
*   [Get API Key](https://console.velt.dev/)

Search...

Navigation

Sidebar Button

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
            *   [Empty placeholder](https://docs.velt.dev/ui-customization/features/async/comments/comments-sidebar/subcomponents/empty-placeholder)
            *   Filter  
            *   [Focused thread](https://docs.velt.dev/ui-customization/features/async/comments/comments-sidebar/subcomponents/focused-thread)
            *   Header  
            *   List  
            *   [Page mode composer](https://docs.velt.dev/ui-customization/features/async/comments/comments-sidebar/subcomponents/page-mode-composer)
            *   [Reset filter button](https://docs.velt.dev/ui-customization/features/async/comments/comments-sidebar/subcomponents/reset-filter-button)
            *   Sidebar Button  
                *   [Overview](https://docs.velt.dev/ui-customization/features/async/comments/comments-sidebar/subcomponents/sidebar-button/overview)
                *   [Styling](https://docs.velt.dev/ui-customization/features/async/comments/comments-sidebar/subcomponents/sidebar-button/styling)
                *   Subcomponents  

            *   [Skeleton](https://docs.velt.dev/ui-customization/features/async/comments/comments-sidebar/subcomponents/skeleton)

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

*   [Disable ShadowDOM](https://docs.velt.dev/ui-customization/features/async/comments/comments-sidebar/subcomponents/sidebar-button/styling#disable-shadowdom)
*   [Example](https://docs.velt.dev/ui-customization/features/async/comments/comments-sidebar/subcomponents/sidebar-button/styling#example)
*   [Dark Mode](https://docs.velt.dev/ui-customization/features/async/comments/comments-sidebar/subcomponents/sidebar-button/styling#dark-mode)
*   [Example](https://docs.velt.dev/ui-customization/features/async/comments/comments-sidebar/subcomponents/sidebar-button/styling#example-3)
*   [API methods](https://docs.velt.dev/ui-customization/features/async/comments/comments-sidebar/subcomponents/sidebar-button/styling#api-methods)

Sidebar Button

Styling
=======

Copy page

Copy page

[​](https://docs.velt.dev/ui-customization/features/async/comments/comments-sidebar/subcomponents/sidebar-button/styling#disable-shadowdom)

Disable ShadowDOM
--------------------------------------------------------------------------------------------------------------------------------------------------------------

*   By default, ShadowDOM is used to ensure that your app’s CSS does not interfere with the styling of the SDK components.
*   Disable the shadow dom to apply your custom CSS to the component.

`Default: true`

*    React / Next.js
*    Other Frameworks

### [​](https://docs.velt.dev/ui-customization/features/async/comments/comments-sidebar/subcomponents/sidebar-button/styling#example)

Example

Copy

Ask AI

```
<VeltSidebarButton shadowDom={false} />
```

[​](https://docs.velt.dev/ui-customization/features/async/comments/comments-sidebar/subcomponents/sidebar-button/styling#dark-mode)

Dark Mode
----------------------------------------------------------------------------------------------------------------------------------------------

![Image 4](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/sidebar-button-dark.png)By default, all components are in Light Mode, but there are several properties and methods to enable Dark Mode.`Default: false`To enable Dark Mode for sidebar button:

*    React / Next.js
*    Other Frameworks

### [​](https://docs.velt.dev/ui-customization/features/async/comments/comments-sidebar/subcomponents/sidebar-button/styling#example-3)

Example

Copy

Ask AI

```
<VeltSidebarButton darkMode={true} />
```

### [​](https://docs.velt.dev/ui-customization/features/async/comments/comments-sidebar/subcomponents/sidebar-button/styling#api-methods)

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

[Overview](https://docs.velt.dev/ui-customization/features/async/comments/comments-sidebar/subcomponents/sidebar-button/overview)[Comments count](https://docs.velt.dev/ui-customization/features/async/comments/comments-sidebar/subcomponents/sidebar-button/subcomponents/comments-count)

[twitter](https://twitter.com/veltjs)[linkedin](https://www.linkedin.com/company/veltjs)

[Powered by Mintlify](https://mintlify.com/preview-request?utm_campaign=poweredBy&utm_medium=referral&utm_source=velt)

Assistant

Responses are generated using AI and may contain mistakes.

![Image 5](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/sidebar-button-dark.png)
