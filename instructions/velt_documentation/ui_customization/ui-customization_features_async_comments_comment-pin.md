Title: Comment Pin - Velt

URL Source: https://docs.velt.dev/ui-customization/features/async/comments/comment-pin

Markdown Content:
Comment Pin - Velt

===============

[Velt home page![Image 9: light logo](https://mintlify.s3.us-west-1.amazonaws.com/velt/velt-logo-big-light.png)![Image 10: dark logo](https://mintlify.s3.us-west-1.amazonaws.com/velt/velt-logo-big.png)](https://docs.velt.dev/)

Search or ask...

Ctrl K Ask AI

*   [Get API Key](https://console.velt.dev/)
*   [Get API Key](https://console.velt.dev/)

Search...

Navigation

Standalone Components (DIY)

Comment Pin

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
        *   [Comment Composer](https://docs.velt.dev/ui-customization/features/async/comments/standalone-components/comment-composer)
        *   [Comment Thread](https://docs.velt.dev/ui-customization/features/async/comments/standalone-components/comment-thread)
        *   [Comment Pin](https://docs.velt.dev/ui-customization/features/async/comments/comment-pin)

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

*   [VeltCommentPinWireframe](https://docs.velt.dev/ui-customization/features/async/comments/comment-pin#veltcommentpinwireframe)
*   [GhostCommentIndicator](https://docs.velt.dev/ui-customization/features/async/comments/comment-pin#ghostcommentindicator)
*   [Index](https://docs.velt.dev/ui-customization/features/async/comments/comment-pin#index)
*   [PrivateCommentIndicator](https://docs.velt.dev/ui-customization/features/async/comments/comment-pin#privatecommentindicator)
*   [Triangle](https://docs.velt.dev/ui-customization/features/async/comments/comment-pin#triangle)
*   [UnreadCommentIndicator](https://docs.velt.dev/ui-customization/features/async/comments/comment-pin#unreadcommentindicator)
*   [Styling](https://docs.velt.dev/ui-customization/features/async/comments/comment-pin#styling)
*   [Disable ShadowDOM](https://docs.velt.dev/ui-customization/features/async/comments/comment-pin#disable-shadowdom)
*   [Dark Mode](https://docs.velt.dev/ui-customization/features/async/comments/comment-pin#dark-mode)
*   [Variants](https://docs.velt.dev/ui-customization/features/async/comments/comment-pin#variants)

Standalone Components (DIY)

Comment Pin
===========

Copy page

The Pin that appears on the DOM when you place a Comment.

Copy page

We recommend that you familiarize yourselves with [UI Customization Concepts](https://docs.velt.dev/ui-customization/overview) before attempting to modify any components.

[​](https://docs.velt.dev/ui-customization/features/async/comments/comment-pin#veltcommentpinwireframe)

VeltCommentPinWireframe
--------------------------------------------------------------------------------------------------------------------------------

![Image 11](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/comments/comment-pin/comment-pin-overview.png)

*    React / Next.js
*    Other Frameworks

Copy

Ask AI

```
<VeltWireframe>
    <VeltCommentPinWireframe>
        <VeltCommentPinWireframe.GhostCommentIndicator />
        <VeltCommentPinWireframe.Index />
        <VeltCommentPinWireframe.PrivateCommentIndicator />
        <VeltCommentPinWireframe.Triangle />
        <VeltCommentPinWireframe.UnreadCommentIndicator />
    </VeltCommentPinWireframe>
</VeltWireframe>
```

[​](https://docs.velt.dev/ui-customization/features/async/comments/comment-pin#ghostcommentindicator)

GhostCommentIndicator
----------------------------------------------------------------------------------------------------------------------------

![Image 12](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/comments/comment-pin/comment-pin-ghost.png)

*    React / Next.js
*    Other Frameworks

Copy

Ask AI

```
<VeltWireframe>
    <VeltCommentPinWireframe.GhostCommentIndicator />
</VeltWireframe>
```

[​](https://docs.velt.dev/ui-customization/features/async/comments/comment-pin#index)

Index
--------------------------------------------------------------------------------------------

![Image 13](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/comments/comment-pin/comment-pin-index.png)

*    React / Next.js
*    Other Frameworks

Copy

Ask AI

```
<VeltWireframe>
    <VeltCommentPinWireframe.Index />
</VeltWireframe>
```

[​](https://docs.velt.dev/ui-customization/features/async/comments/comment-pin#privatecommentindicator)

PrivateCommentIndicator
--------------------------------------------------------------------------------------------------------------------------------

![Image 14](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/comments/comment-pin/comment-pin-private.png)

*    React / Next.js
*    Other Frameworks

Copy

Ask AI

```
<VeltWireframe>
    <VeltCommentPinWireframe.PrivateCommentIndicator />
</VeltWireframe>
```

[​](https://docs.velt.dev/ui-customization/features/async/comments/comment-pin#triangle)

Triangle
--------------------------------------------------------------------------------------------------

![Image 15](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/comments/comment-pin/comment-pin-triangle.png)

*    React / Next.js
*    Other Frameworks

Copy

Ask AI

```
<VeltWireframe>
    <VeltCommentPinWireframe.Triangle />
</VeltWireframe>
```

[​](https://docs.velt.dev/ui-customization/features/async/comments/comment-pin#unreadcommentindicator)

UnreadCommentIndicator
------------------------------------------------------------------------------------------------------------------------------

![Image 16](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/comments/comment-pin/comment-pin-unread.png)

*    React / Next.js
*    Other Frameworks

Copy

Ask AI

```
<VeltWireframe>
    <VeltCommentPinWireframe.UnreadCommentIndicator />
</VeltWireframe>
```

[​](https://docs.velt.dev/ui-customization/features/async/comments/comment-pin#styling)

Styling
------------------------------------------------------------------------------------------------

### [​](https://docs.velt.dev/ui-customization/features/async/comments/comment-pin#disable-shadowdom)

Disable ShadowDOM

*   By default, ShadowDOM is used to ensure that your app’s CSS does not interfere with the styling of the SDK components.
*   Disable the shadow dom to apply your custom CSS to the component.

Default: `true`

*    React / Next.js
*    Other Frameworks

**Using Props:**

Copy

Ask AI

```
<VeltComments pinShadowDOM={false} />
```

**Using API:**

Copy

Ask AI

```
const commentElement = client.getCommentElement();
commentElement.enablePinShadowDOM();
commentElement.disablePinShadowDOM();
```

### [​](https://docs.velt.dev/ui-customization/features/async/comments/comment-pin#dark-mode)

Dark Mode

![Image 17](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/velt-comment-pin-1.png)![Image 18](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/velt-comment-pin-2.png) By default, all components are in Light Mode, but there are several properties and methods to enable Dark Mode.`Default: false`

*    React / Next.js
*    Other Frameworks

**Using Props:**

Copy

Ask AI

```
<VeltComments pinDarkMode={true}/>
```

**Using API:**

Copy

Ask AI

```
const commentElement = client.getCommentElement();
commentElement.enableDarkMode();
commentElement.disableDarkMode();
```

### [​](https://docs.velt.dev/ui-customization/features/async/comments/comment-pin#variants)

Variants

*   Define variants for the `Velt Comment Pin` component. This is useful for customizing how the pin looks on different elements like charts, tables, etc.
*   Learn more about how to define and use variants [here](https://docs.velt.dev/ui-customization/layout#variants).

*    React / Next.js
*    Other Frameworks

Copy

Ask AI

```
<VeltCommentPin variant="CUSTOM_VARIANT" />
```

Was this page helpful?

Yes No

[Comment Thread](https://docs.velt.dev/ui-customization/features/async/comments/standalone-components/comment-thread)[Inline Comments Section](https://docs.velt.dev/ui-customization/features/async/comments/inline-comments-section)

[twitter](https://twitter.com/veltjs)[linkedin](https://www.linkedin.com/company/veltjs)

[Powered by Mintlify](https://mintlify.com/preview-request?utm_campaign=poweredBy&utm_medium=referral&utm_source=velt)

Assistant

Responses are generated using AI and may contain mistakes.

![Image 19](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/comments/comment-pin/comment-pin-overview.png)

![Image 20](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/comments/comment-pin/comment-pin-ghost.png)

![Image 21](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/comments/comment-pin/comment-pin-index.png)

![Image 22](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/comments/comment-pin/comment-pin-private.png)

![Image 23](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/comments/comment-pin/comment-pin-triangle.png)

![Image 24](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/comments/comment-pin/comment-pin-unread.png)

![Image 25](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/velt-comment-pin-1.png)

![Image 26](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/velt-comment-pin-2.png)
