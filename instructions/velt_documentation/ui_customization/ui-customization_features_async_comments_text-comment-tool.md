Title: Text Comment Tool - Velt

URL Source: https://docs.velt.dev/ui-customization/features/async/comments/text-comment-tool

Markdown Content:
Text Comment Tool - Velt

===============

[Velt home page![Image 2: light logo](https://mintlify.s3.us-west-1.amazonaws.com/velt/velt-logo-big-light.png)![Image 3: dark logo](https://mintlify.s3.us-west-1.amazonaws.com/velt/velt-logo-big.png)](https://docs.velt.dev/)

Search or ask...

Ctrl K Ask AI

*   [Get API Key](https://console.velt.dev/)
*   [Get API Key](https://console.velt.dev/)

Search...

Navigation

Comments

Text Comment Tool

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

*   [VeltTextCommentToolWireframe](https://docs.velt.dev/ui-customization/features/async/comments/text-comment-tool#velttextcommenttoolwireframe)
*   [Styling](https://docs.velt.dev/ui-customization/features/async/comments/text-comment-tool#styling)
*   [Disable ShadowDOM](https://docs.velt.dev/ui-customization/features/async/comments/text-comment-tool#disable-shadowdom)
*   [Dark Mode](https://docs.velt.dev/ui-customization/features/async/comments/text-comment-tool#dark-mode)

Comments

Text Comment Tool
=================

Copy page

The Comment Tool that appears when you highlight some text.

Copy page

We recommend that you familiarize yourselves with [UI Customization Concepts](https://docs.velt.dev/ui-customization/overview) before attempting to modify any components.

[​](https://docs.velt.dev/ui-customization/features/async/comments/text-comment-tool#velttextcommenttoolwireframe)

VeltTextCommentToolWireframe
------------------------------------------------------------------------------------------------------------------------------------------------

![Image 4](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/comments/text-comment-tool/comment-text-tool.png)

*    React / Next.js
*    Other Frameworks

Copy

Ask AI

```
<VeltWireframe>
    <VeltTextCommentToolWireframe>
        {/* Your custom element */}
    </VeltTextCommentToolWireframe>
</VeltWireframe>
```

[​](https://docs.velt.dev/ui-customization/features/async/comments/text-comment-tool#styling)

Styling
------------------------------------------------------------------------------------------------------

### [​](https://docs.velt.dev/ui-customization/features/async/comments/text-comment-tool#disable-shadowdom)

Disable ShadowDOM

*   By default, ShadowDOM is used to ensure that your app’s CSS does not interfere with the styling of the SDK components.
*   Disable the shadow dom to apply your custom CSS to the component.

Default: `true`

*    React / Next.js
*    Other Frameworks

Copy

Ask AI

```
<VeltComments shadowDom={false} textCommentToolShadowDom={false} />
```

### [​](https://docs.velt.dev/ui-customization/features/async/comments/text-comment-tool#dark-mode)

Dark Mode

By default, all components are in Light Mode, but there are several properties and methods to enable Dark Mode.Default: `false`Below are the examples to enable Dark Mode for text comment tool.

*    React / Next.js
*    Other Frameworks

**Using Props:**

Copy

Ask AI

```
<VeltComments textCommentToolDarkMode={true} />
```

**Using API:**

Copy

Ask AI

```
const commentElement = client.getCommentElement();
commentElement.enableDarkMode();
commentElement.disableDarkMode();
```

Was this page helpful?

Yes No

[Persistent Comment Mode Banner](https://docs.velt.dev/ui-customization/features/async/comments/persistent-comment-mode-banner)[Text Comment Toolbar](https://docs.velt.dev/ui-customization/features/async/comments/text-comment-toolbar)

[twitter](https://twitter.com/veltjs)[linkedin](https://www.linkedin.com/company/veltjs)

[Powered by Mintlify](https://mintlify.com/preview-request?utm_campaign=poweredBy&utm_medium=referral&utm_source=velt)

Assistant

Responses are generated using AI and may contain mistakes.

![Image 5](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/comments/text-comment-tool/comment-text-tool.png)
