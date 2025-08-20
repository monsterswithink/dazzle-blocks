Title: Overview - Velt

URL Source: https://docs.velt.dev/ui-customization/features/async/comments/comments-sidebar/overview

Markdown Content:
Overview - Velt

===============

[Velt home page![Image 1: light logo](https://mintlify.s3.us-west-1.amazonaws.com/velt/velt-logo-big-light.png)![Image 2: dark logo](https://mintlify.s3.us-west-1.amazonaws.com/velt/velt-logo-big.png)](https://docs.velt.dev/)

Search or ask...

Ctrl K Ask AI

*   [Get API Key](https://console.velt.dev/)
*   [Get API Key](https://console.velt.dev/)

Search...

Navigation

Comments Sidebar

Overview

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

React / Next.js

HTML

Copy

Ask AI

```
<VeltWireframe>
    <VeltCommentsSidebarWireframe>
        {/* Skeleton */}
        <VeltCommentsSidebarWireframe.Skeleton />
        <VeltCommentsSidebarWireframe.Panel>
            {/* Header - Contains search, status filters, close button etc */}
            <VeltCommentsSidebarWireframe.Header />
            {/* Custom Action Button - Use to define custom filter, sorting, grouping */}
            <VeltCommentsSidebarWireframe.ActionButton id="all" type="toggle" />
            {/* Filter - The filter panel that contains the default system filters */}
            <VeltCommentsSidebarWireframe.Filter />
            {/* List - The list of comments that appear in the sidebar */}
            <VeltCommentsSidebarWireframe.List />
            {/* Empty Placeholder - The placeholder that appears when there are no comments */}
            <VeltCommentsSidebarWireframe.EmptyPlaceholder />
            {/* Reset Filter Button - Not included in default component */}
            <VeltCommentsSidebarWireframe.ResetFilterButton />
            {/* Page Mode Composer - The composer that appears when the page mode is enabled */}
            <VeltCommentsSidebarWireframe.PageModeComposer />
        </VeltCommentsSidebarWireframe.Panel>
        {/* Focused Thread - This only appears when focused thread mode is enabled */}
        <VeltCommentsSidebarWireframe.FocusedThread />
    </VeltCommentsSidebarWireframe>
</VeltWireframe>
```

Comments Sidebar

Overview
========

Copy page

Copy page

React / Next.js

HTML

Copy

Ask AI

```
<VeltWireframe>
    <VeltCommentsSidebarWireframe>
        {/* Skeleton */}
        <VeltCommentsSidebarWireframe.Skeleton />
        <VeltCommentsSidebarWireframe.Panel>
            {/* Header - Contains search, status filters, close button etc */}
            <VeltCommentsSidebarWireframe.Header />
            {/* Custom Action Button - Use to define custom filter, sorting, grouping */}
            <VeltCommentsSidebarWireframe.ActionButton id="all" type="toggle" />
            {/* Filter - The filter panel that contains the default system filters */}
            <VeltCommentsSidebarWireframe.Filter />
            {/* List - The list of comments that appear in the sidebar */}
            <VeltCommentsSidebarWireframe.List />
            {/* Empty Placeholder - The placeholder that appears when there are no comments */}
            <VeltCommentsSidebarWireframe.EmptyPlaceholder />
            {/* Reset Filter Button - Not included in default component */}
            <VeltCommentsSidebarWireframe.ResetFilterButton />
            {/* Page Mode Composer - The composer that appears when the page mode is enabled */}
            <VeltCommentsSidebarWireframe.PageModeComposer />
        </VeltCommentsSidebarWireframe.Panel>
        {/* Focused Thread - This only appears when focused thread mode is enabled */}
        <VeltCommentsSidebarWireframe.FocusedThread />
    </VeltCommentsSidebarWireframe>
</VeltWireframe>
```

We recommend that you familiarize yourselves with [Customization Concepts](https://docs.velt.dev/ui-customization/overview) before attempting to modify any components.

[​](https://docs.velt.dev/ui-customization/features/async/comments/comments-sidebar/overview#default-component)

Default Component
----------------------------------------------------------------------------------------------------------------------------------

Here’s how the default comments sidebar component looks like:![Image 3](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/sidebar-light.png)![Image 4](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/sidebar-breakdown-light.png)

Was this page helpful?

Yes No

[Upgrade](https://docs.velt.dev/ui-customization/features/async/comments/comment-dialog/subcomponents/upgrade)[Styling](https://docs.velt.dev/ui-customization/features/async/comments/comments-sidebar/styling)

[twitter](https://twitter.com/veltjs)[linkedin](https://www.linkedin.com/company/veltjs)

[Powered by Mintlify](https://mintlify.com/preview-request?utm_campaign=poweredBy&utm_medium=referral&utm_source=velt)

Assistant

Responses are generated using AI and may contain mistakes.

![Image 5](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/sidebar-light.png)

![Image 6](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/sidebar-breakdown-light.png)
