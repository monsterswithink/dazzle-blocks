Title: Variants - Velt

URL Source: https://docs.velt.dev/ui-customization/features/async/comments/comments-sidebar/variants

Markdown Content:
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

```
<VeltCommentsSidebar
  variant="sidebar1"
  dialogVariant="dialogInSidebar"
  pageModeComposerVariant="pageModeDialogInSidebar"
  focusedThreadDialogVariant="focusedThreadDialogInSidebar"
/>
```

Comments Sidebar

```
<VeltCommentsSidebar
  variant="sidebar1"
  dialogVariant="dialogInSidebar"
  pageModeComposerVariant="pageModeDialogInSidebar"
  focusedThreadDialogVariant="focusedThreadDialogInSidebar"
/>
```

Variants
--------

Here are the variants that you can use in Comments Sidebar:

*   `variant`: This is the variant for the entire Comments Sidebar.
*   `dialogVariant`: This is the variant for the Comment Dialog that appears in the Comments Sidebar.
*   `pageModeComposerVariant`: This is the variant for the Comment Composer that appears in the Comments Sidebar in page mode.
*   `focusedThreadDialogVariant`: This is the variant for the Comment Dialog that appears when a focused thread mode is enabled.
