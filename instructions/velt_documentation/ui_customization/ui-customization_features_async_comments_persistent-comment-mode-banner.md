Title: Persistent Comment Mode Banner - Velt

URL Source: https://docs.velt.dev/ui-customization/features/async/comments/persistent-comment-mode-banner

Markdown Content:
Persistent Comment Mode Banner - Velt

===============

[Velt home page![Image 5: light logo](https://mintlify.s3.us-west-1.amazonaws.com/velt/velt-logo-big-light.png)![Image 6: dark logo](https://mintlify.s3.us-west-1.amazonaws.com/velt/velt-logo-big.png)](https://docs.velt.dev/)

Search or ask...

Ctrl K Ask AI

*   [Get API Key](https://console.velt.dev/)
*   [Get API Key](https://console.velt.dev/)

Search...

Navigation

Comments

Persistent Comment Mode Banner

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

*   [VeltPersistentCommentModeWireframe](https://docs.velt.dev/ui-customization/features/async/comments/persistent-comment-mode-banner#veltpersistentcommentmodewireframe)
*   [CloseButton](https://docs.velt.dev/ui-customization/features/async/comments/persistent-comment-mode-banner#closebutton)
*   [Label](https://docs.velt.dev/ui-customization/features/async/comments/persistent-comment-mode-banner#label)
*   [Label.Public](https://docs.velt.dev/ui-customization/features/async/comments/persistent-comment-mode-banner#label-public)
*   [Label.Private](https://docs.velt.dev/ui-customization/features/async/comments/persistent-comment-mode-banner#label-private)
*   [Styling](https://docs.velt.dev/ui-customization/features/async/comments/persistent-comment-mode-banner#styling)
*   [Disable ShadowDOM](https://docs.velt.dev/ui-customization/features/async/comments/persistent-comment-mode-banner#disable-shadowdom)

Comments

Persistent Comment Mode Banner
==============================

Copy page

The persistent comment mode banner that appears when persistent mode is enabled and user is adding a comment.

Copy page

We recommend that you familiarize yourselves with [UI Customization Concepts](https://docs.velt.dev/ui-customization/overview) before attempting to modify any components.

[​](https://docs.velt.dev/ui-customization/features/async/comments/persistent-comment-mode-banner#veltpersistentcommentmodewireframe)

VeltPersistentCommentModeWireframe
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------

![Image 7](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/comments/persistent-banner/persistent-banner-overview.png)

*    React / Next.js
*    Other Frameworks

Copy

Ask AI

```
<VeltWireframe>
    <VeltPersistentCommentModeWireframe>
        <VeltPersistentCommentModeWireframe.CloseButton />
        <VeltPersistentCommentModeWireframe.Label />
    </VeltPersistentCommentModeWireframe>
</VeltWireframe>
```

[​](https://docs.velt.dev/ui-customization/features/async/comments/persistent-comment-mode-banner#closebutton)

CloseButton
---------------------------------------------------------------------------------------------------------------------------

![Image 8](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/comments/persistent-banner/persistent-banner-close.png)

*    React / Next.js
*    Other Frameworks

Copy

Ask AI

```
<VeltWireframe>
    <VeltPersistentCommentModeWireframe.CloseButton />
</VeltWireframe>
```

[​](https://docs.velt.dev/ui-customization/features/async/comments/persistent-comment-mode-banner#label)

Label
---------------------------------------------------------------------------------------------------------------

*    React / Next.js
*    Other Frameworks

Copy

Ask AI

```
<VeltWireframe>
    <VeltPersistentCommentModeWireframe.Label>
        <VeltPersistentCommentModeWireframe.Label.Public />
        <VeltPersistentCommentModeWireframe.Label.Private />
    </VeltPersistentCommentModeWireframe.Label>
</VeltWireframe>
```

### [​](https://docs.velt.dev/ui-customization/features/async/comments/persistent-comment-mode-banner#label-public)

Label.Public

![Image 9](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/comments/persistent-banner/persistent-banner-label-public.png)

*    React / Next.js
*    Other Frameworks

Copy

Ask AI

```
<VeltWireframe>
    <VeltPersistentCommentModeWireframe.Label.Public />
</VeltWireframe>
```

### [​](https://docs.velt.dev/ui-customization/features/async/comments/persistent-comment-mode-banner#label-private)

Label.Private

![Image 10](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/comments/persistent-banner/persistent-banner-label-private.png)

*    React / Next.js
*    Other Frameworks

Copy

Ask AI

```
<VeltWireframe>
    <VeltPersistentCommentModeWireframe.Label.Private />
</VeltWireframe>
```

[​](https://docs.velt.dev/ui-customization/features/async/comments/persistent-comment-mode-banner#styling)

Styling
-------------------------------------------------------------------------------------------------------------------

### [​](https://docs.velt.dev/ui-customization/features/async/comments/persistent-comment-mode-banner#disable-shadowdom)

Disable ShadowDOM

*   By default, ShadowDOM is used to ensure that your app’s CSS does not interfere with the styling of the SDK components.
*   Disable the shadow dom to apply your custom CSS to the component.

Default: `true`

*    React / Next.js
*    Other Frameworks

Copy

Ask AI

```
<VeltComments persistentCommentShadowDom={false}/>
```

Was this page helpful?

Yes No

[MultiThread Comment Dialog](https://docs.velt.dev/ui-customization/features/async/comments/multithread-comment-dialog)[Text Comment Tool](https://docs.velt.dev/ui-customization/features/async/comments/text-comment-tool)

[twitter](https://twitter.com/veltjs)[linkedin](https://www.linkedin.com/company/veltjs)

[Powered by Mintlify](https://mintlify.com/preview-request?utm_campaign=poweredBy&utm_medium=referral&utm_source=velt)

Assistant

Responses are generated using AI and may contain mistakes.

![Image 11](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/comments/persistent-banner/persistent-banner-overview.png)

![Image 12](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/comments/persistent-banner/persistent-banner-close.png)

![Image 13](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/comments/persistent-banner/persistent-banner-label-public.png)

![Image 14](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/comments/persistent-banner/persistent-banner-label-private.png)
