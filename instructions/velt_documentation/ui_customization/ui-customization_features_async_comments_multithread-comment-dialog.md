Title: MultiThread Comment Dialog - Velt

URL Source: https://docs.velt.dev/ui-customization/features/async/comments/multithread-comment-dialog

Markdown Content:
MultiThread Comment Dialog - Velt

===============

[Velt home page![Image 10: light logo](https://mintlify.s3.us-west-1.amazonaws.com/velt/velt-logo-big-light.png)![Image 11: dark logo](https://mintlify.s3.us-west-1.amazonaws.com/velt/velt-logo-big.png)](https://docs.velt.dev/)

Search or ask...

Ctrl K Ask AI

*   [Get API Key](https://console.velt.dev/)
*   [Get API Key](https://console.velt.dev/)

Search...

Navigation

Comments

MultiThread Comment Dialog

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

*   [VeltMultiThreadCommentDialogWireframe](https://docs.velt.dev/ui-customization/features/async/comments/multithread-comment-dialog#veltmultithreadcommentdialogwireframe)
*   [CommentCount](https://docs.velt.dev/ui-customization/features/async/comments/multithread-comment-dialog#commentcount)
*   [MinimalFilterDropdown](https://docs.velt.dev/ui-customization/features/async/comments/multithread-comment-dialog#minimalfilterdropdown)
*   [MinimalActionsDropdown](https://docs.velt.dev/ui-customization/features/async/comments/multithread-comment-dialog#minimalactionsdropdown)
*   [NewThreadButton](https://docs.velt.dev/ui-customization/features/async/comments/multithread-comment-dialog#newthreadbutton)
*   [CloseButton](https://docs.velt.dev/ui-customization/features/async/comments/multithread-comment-dialog#closebutton)
*   [List](https://docs.velt.dev/ui-customization/features/async/comments/multithread-comment-dialog#list)
*   [ResetFilterButton](https://docs.velt.dev/ui-customization/features/async/comments/multithread-comment-dialog#resetfilterbutton)
*   [ComposerContainer](https://docs.velt.dev/ui-customization/features/async/comments/multithread-comment-dialog#composercontainer)

Comments

MultiThread Comment Dialog
==========================

Copy page

Copy page

We recommend that you familiarize yourselves with [UI Customization Concepts](https://docs.velt.dev/ui-customization/overview) before attempting to modify any components.

[​](https://docs.velt.dev/ui-customization/features/async/comments/multithread-comment-dialog#veltmultithreadcommentdialogwireframe)

VeltMultiThreadCommentDialogWireframe
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------

![Image 12](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/comments/multi-thread/multi-thread-overview.png)

*    React / Next.js
*    Other Frameworks

Copy

Ask AI

```
<VeltWireframe>
    <VeltMultiThreadCommentDialogWireframe>
        <VeltMultiThreadCommentDialogWireframe.CommentCount />
        <VeltMultiThreadCommentDialogWireframe.MinimalFilterDropdown />
        <VeltMultiThreadCommentDialogWireframe.MinimalActionsDropdown />
        <VeltMultiThreadCommentDialogWireframe.NewThreadButton />
        <VeltMultiThreadCommentDialogWireframe.CloseButton />
        <VeltMultiThreadCommentDialogWireframe.List />
        <VeltMultiThreadCommentDialogWireframe.ResetFilterButton />
        <VeltMultiThreadCommentDialogWireframe.ComposerContainer />
    </VeltMultiThreadCommentDialogWireframe>
</VeltWireframe>
```

[​](https://docs.velt.dev/ui-customization/features/async/comments/multithread-comment-dialog#commentcount)

CommentCount
-------------------------------------------------------------------------------------------------------------------------

![Image 13](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/comments/multi-thread/multi-thread-comments-count.png)

*    React / Next.js
*    Other Frameworks

Copy

Ask AI

```
<VeltWireframe>
    <VeltMultiThreadCommentDialogWireframe.CommentCount />
</VeltWireframe>
```

[​](https://docs.velt.dev/ui-customization/features/async/comments/multithread-comment-dialog#minimalfilterdropdown)

MinimalFilterDropdown
-------------------------------------------------------------------------------------------------------------------------------------------

![Image 14](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/comments/multi-thread/multi-thread-filter-dropdown.png)

*    React / Next.js
*    Other Frameworks

Copy

Ask AI

```
<VeltWireframe>
    <VeltMultiThreadCommentDialogWireframe.MinimalFilterDropdown />
</VeltWireframe>
```

[​](https://docs.velt.dev/ui-customization/features/async/comments/multithread-comment-dialog#minimalactionsdropdown)

MinimalActionsDropdown
---------------------------------------------------------------------------------------------------------------------------------------------

![Image 15](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/comments/multi-thread/multi-thread-actions.png)

*    React / Next.js
*    Other Frameworks

Copy

Ask AI

```
<VeltWireframe>
    <VeltMultiThreadCommentDialogWireframe.MinimalActionsDropdown />
</VeltWireframe>
```

[​](https://docs.velt.dev/ui-customization/features/async/comments/multithread-comment-dialog#newthreadbutton)

NewThreadButton
-------------------------------------------------------------------------------------------------------------------------------

![Image 16](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/comments/multi-thread/multi-thread-new-thread.png)

*    React / Next.js
*    Other Frameworks

Copy

Ask AI

```
<VeltWireframe>
    <VeltMultiThreadCommentDialogWireframe.NewThreadButton />
</VeltWireframe>
```

[​](https://docs.velt.dev/ui-customization/features/async/comments/multithread-comment-dialog#closebutton)

CloseButton
-----------------------------------------------------------------------------------------------------------------------

![Image 17](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/comments/multi-thread/multi-thread-close.png)

*    React / Next.js
*    Other Frameworks

Copy

Ask AI

```
<VeltWireframe>
    <VeltMultiThreadCommentDialogWireframe.CloseButton />
</VeltWireframe>
```

[​](https://docs.velt.dev/ui-customization/features/async/comments/multithread-comment-dialog#list)

List
---------------------------------------------------------------------------------------------------------

![Image 18](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/comments/multi-thread/multi-thread-list.png)

*    React / Next.js
*    Other Frameworks

Copy

Ask AI

```
<VeltWireframe>
    <VeltMultiThreadCommentDialogWireframe.List />
</VeltWireframe>
```

[​](https://docs.velt.dev/ui-customization/features/async/comments/multithread-comment-dialog#resetfilterbutton)

ResetFilterButton
-----------------------------------------------------------------------------------------------------------------------------------

![Image 19](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/comments/multi-thread/multi-thread-reset-filter.png)

*    React / Next.js
*    Other Frameworks

Copy

Ask AI

```
<VeltWireframe>
    <VeltMultiThreadCommentDialogWireframe.ResetFilterButton />
</VeltWireframe>
```

[​](https://docs.velt.dev/ui-customization/features/async/comments/multithread-comment-dialog#composercontainer)

ComposerContainer
-----------------------------------------------------------------------------------------------------------------------------------

![Image 20](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/comments/multi-thread/multi-thread-composer.png)

*    React / Next.js
*    Other Frameworks

Copy

Ask AI

```
<VeltWireframe>
    <VeltMultiThreadCommentDialogWireframe.ComposerContainer />
</VeltWireframe>
```

Was this page helpful?

Yes No

[Confirmation Dialog](https://docs.velt.dev/ui-customization/features/async/comments/confirm-dialog)[Persistent Comment Mode Banner](https://docs.velt.dev/ui-customization/features/async/comments/persistent-comment-mode-banner)

[twitter](https://twitter.com/veltjs)[linkedin](https://www.linkedin.com/company/veltjs)

[Powered by Mintlify](https://mintlify.com/preview-request?utm_campaign=poweredBy&utm_medium=referral&utm_source=velt)

Assistant

Responses are generated using AI and may contain mistakes.

![Image 21](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/comments/multi-thread/multi-thread-overview.png)

![Image 22](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/comments/multi-thread/multi-thread-comments-count.png)

![Image 23](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/comments/multi-thread/multi-thread-filter-dropdown.png)

![Image 24](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/comments/multi-thread/multi-thread-actions.png)

![Image 25](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/comments/multi-thread/multi-thread-new-thread.png)

![Image 26](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/comments/multi-thread/multi-thread-close.png)

![Image 27](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/comments/multi-thread/multi-thread-list.png)

![Image 28](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/comments/multi-thread/multi-thread-reset-filter.png)

![Image 29](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/comments/multi-thread/multi-thread-composer.png)
