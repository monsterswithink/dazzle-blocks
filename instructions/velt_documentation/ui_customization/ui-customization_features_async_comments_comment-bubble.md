Title: Comment Bubble - Velt

URL Source: https://docs.velt.dev/ui-customization/features/async/comments/comment-bubble

Markdown Content:
Comment Bubble - Velt

===============

[Velt home page![Image 4: light logo](https://mintlify.s3.us-west-1.amazonaws.com/velt/velt-logo-big-light.png)![Image 5: dark logo](https://mintlify.s3.us-west-1.amazonaws.com/velt/velt-logo-big.png)](https://docs.velt.dev/)

Search or ask...

Ctrl K Ask AI

*   [Get API Key](https://console.velt.dev/)
*   [Get API Key](https://console.velt.dev/)

Search...

Navigation

Comments

Comment Bubble

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

*   [VeltCommentBubbleWireframe](https://docs.velt.dev/ui-customization/features/async/comments/comment-bubble#veltcommentbubblewireframe)
*   [CommentsCount](https://docs.velt.dev/ui-customization/features/async/comments/comment-bubble#commentscount)
*   [Avatar](https://docs.velt.dev/ui-customization/features/async/comments/comment-bubble#avatar)
*   [Styling](https://docs.velt.dev/ui-customization/features/async/comments/comment-bubble#styling)
*   [Disable ShadowDOM](https://docs.velt.dev/ui-customization/features/async/comments/comment-bubble#disable-shadowdom)
*   [Dark Mode](https://docs.velt.dev/ui-customization/features/async/comments/comment-bubble#dark-mode)

Comments

Comment Bubble
==============

Copy page

This button shows the comment count and the author’s avatar. This is used in Popover comments feature.

Copy page

We recommend that you familiarize yourselves with [UI Customization Concepts](https://docs.velt.dev/ui-customization/overview) before attempting to modify any components.

[​](https://docs.velt.dev/ui-customization/features/async/comments/comment-bubble#veltcommentbubblewireframe)

VeltCommentBubbleWireframe
-----------------------------------------------------------------------------------------------------------------------------------------

![Image 6](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/comments/comment-bubble/comment-bubble-overview.png)

*    React / Next.js
*    Other Frameworks

Copy

Ask AI

```
<VeltWireframe>
    <VeltCommentBubbleWireframe>
        <VeltCommentBubbleWireframe.CommentsCount />
        <VeltCommentBubbleWireframe.Avatar />
    </VeltCommentBubbleWireframe>
</VeltWireframe>
```

[​](https://docs.velt.dev/ui-customization/features/async/comments/comment-bubble#commentscount)

CommentsCount
---------------------------------------------------------------------------------------------------------------

![Image 7](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/comments/comment-bubble/comment-bubble-comments-count.png)

*    React / Next.js
*    Other Frameworks

Copy

Ask AI

```
<VeltWireframe>
    <VeltCommentBubbleWireframe.CommentsCount />
</VeltWireframe>
```

[​](https://docs.velt.dev/ui-customization/features/async/comments/comment-bubble#avatar)

Avatar
-------------------------------------------------------------------------------------------------

![Image 8](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/comments/comment-bubble/comment-bubble-avatar.png)

*    React / Next.js
*    Other Frameworks

Copy

Ask AI

```
<VeltWireframe>
    <VeltCommentBubbleWireframe.Avatar />
</VeltWireframe>
```

[​](https://docs.velt.dev/ui-customization/features/async/comments/comment-bubble#styling)

Styling
---------------------------------------------------------------------------------------------------

### [​](https://docs.velt.dev/ui-customization/features/async/comments/comment-bubble#disable-shadowdom)

Disable ShadowDOM

*   By default, ShadowDOM is used to ensure that your app’s CSS does not interfere with the styling of the SDK components.
*   Disable the shadow dom to apply your custom CSS to the component.

`Default: true`

*    React / Next.js
*    Other Frameworks

Copy

Ask AI

```
<VeltCommentBubble shadowDom={false} />
```

### [​](https://docs.velt.dev/ui-customization/features/async/comments/comment-bubble#dark-mode)

Dark Mode

By default, all components are in Light Mode, but there are several properties and methods to enable Dark Mode.Default: `false`

*    React / Next.js
*    Other Frameworks

**Using Props:**

Copy

Ask AI

```
<VeltCommentBubble darkMode={true} />
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

[Comment Tool](https://docs.velt.dev/ui-customization/features/async/comments/comment-tool)[Comment Player Timeline](https://docs.velt.dev/ui-customization/features/async/comments/comment-player-timeline)

[twitter](https://twitter.com/veltjs)[linkedin](https://www.linkedin.com/company/veltjs)

[Powered by Mintlify](https://mintlify.com/preview-request?utm_campaign=poweredBy&utm_medium=referral&utm_source=velt)

Assistant

Responses are generated using AI and may contain mistakes.

![Image 9](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/comments/comment-bubble/comment-bubble-overview.png)

![Image 10](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/comments/comment-bubble/comment-bubble-comments-count.png)

![Image 11](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/comments/comment-bubble/comment-bubble-avatar.png)
