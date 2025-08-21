Title: Variants - Velt

URL Source: https://docs.velt.dev/ui-customization/features/async/comments/comment-dialog/pre-defined-variants

Markdown Content:
Variants - Velt

===============

[Velt home page![Image 1: light logo](https://mintlify.s3.us-west-1.amazonaws.com/velt/velt-logo-big-light.png)![Image 2: dark logo](https://mintlify.s3.us-west-1.amazonaws.com/velt/velt-logo-big.png)](https://docs.velt.dev/)

Search or ask...

Ctrl K Ask AI

*   [Get API Key](https://console.velt.dev/)
*   [Get API Key](https://console.velt.dev/)

Search...

Navigation

Comment Dialog

Variants

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
        *   [Overview](https://docs.velt.dev/ui-customization/features/async/comments/comment-dialog/overview)
        *   [Styling](https://docs.velt.dev/ui-customization/features/async/comments/comment-dialog/styling)
        *   [Variants](https://docs.velt.dev/ui-customization/features/async/comments/comment-dialog/pre-defined-variants)
        *   Subcomponents  

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

React / Next.js

HTML

Copy

Ask AI

```
<VeltWireframe>
    {/* This pre-defined variant will change the appearance of the Comment Dialog within Pin, Area, and Text comments only */}
    <VeltCommentDialogWireframe variant="dialog">
        ...
    </VeltCommentDialogWireframe>

    {/* This pre-defined variant will change the appearance of the Comment Dialog within the Sidebar only */}
    <VeltCommentDialogWireframe variant="sidebar">
        ...
    </VeltCommentDialogWireframe>

    {/* If you dont use any variants, then customization will be applied to the Comment Dialog globally */}
    <VeltCommentDialogWireframe>
        ...
    </VeltCommentDialogWireframe>
</VeltWireframe>
```

Comment Dialog

Variants
========

Copy page

Copy page

React / Next.js

HTML

Copy

Ask AI

```
<VeltWireframe>
    {/* This pre-defined variant will change the appearance of the Comment Dialog within Pin, Area, and Text comments only */}
    <VeltCommentDialogWireframe variant="dialog">
        ...
    </VeltCommentDialogWireframe>

    {/* This pre-defined variant will change the appearance of the Comment Dialog within the Sidebar only */}
    <VeltCommentDialogWireframe variant="sidebar">
        ...
    </VeltCommentDialogWireframe>

    {/* If you dont use any variants, then customization will be applied to the Comment Dialog globally */}
    <VeltCommentDialogWireframe>
        ...
    </VeltCommentDialogWireframe>
</VeltWireframe>
```

[​](https://docs.velt.dev/ui-customization/features/async/comments/comment-dialog/pre-defined-variants#pre-defined-variants)

Pre-defined Variants
--------------------------------------------------------------------------------------------------------------------------------------------------

The Comment Dialog has 2 pre-defined variants:
*   `dialog`: this will customize the Comment Dialog only within Pin, Area, and Text Comments
*   `sidebar`: this will customize the Comment Dialog only within Sidebar comments

To use them, set the `variant` name in the wireframe template equal to one of the pre-defined variants. You do not need to add it to the actual Velt component.

Was this page helpful?

Yes No

[Styling](https://docs.velt.dev/ui-customization/features/async/comments/comment-dialog/styling)[All comments](https://docs.velt.dev/ui-customization/features/async/comments/comment-dialog/subcomponents/all-comments)

[twitter](https://twitter.com/veltjs)[linkedin](https://www.linkedin.com/company/veltjs)

[Powered by Mintlify](https://mintlify.com/preview-request?utm_campaign=poweredBy&utm_medium=referral&utm_source=velt)

Assistant

Responses are generated using AI and may contain mistakes.
