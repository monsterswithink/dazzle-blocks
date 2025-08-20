Title: Close button - Velt

URL Source: https://docs.velt.dev/ui-customization/features/async/comments/comments-sidebar/subcomponents/filter/subcomponents/close-button

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
            *   [Empty placeholder](https://docs.velt.dev/ui-customization/features/async/comments/comments-sidebar/subcomponents/empty-placeholder)
            *   Filter 
                *   [Overview](https://docs.velt.dev/ui-customization/features/async/comments/comments-sidebar/subcomponents/filter/overview)
                *   Subcomponents 
                    *   [Close button](https://docs.velt.dev/ui-customization/features/async/comments/comments-sidebar/subcomponents/filter/subcomponents/close-button)
                    *   [Done button](https://docs.velt.dev/ui-customization/features/async/comments/comments-sidebar/subcomponents/filter/subcomponents/done-button)
                    *   [Filter Type - Document](https://docs.velt.dev/ui-customization/features/async/comments/comments-sidebar/subcomponents/filter/subcomponents/document)
                    *   [Filter item](https://docs.velt.dev/ui-customization/features/async/comments/comments-sidebar/subcomponents/filter/subcomponents/filter-item)
                    *   [Filter Type - Author](https://docs.velt.dev/ui-customization/features/async/comments/comments-sidebar/subcomponents/filter/subcomponents/people)
                    *   [Filter Type - Involved](https://docs.velt.dev/ui-customization/features/async/comments/comments-sidebar/subcomponents/filter/subcomponents/involved)
                    *   [Filter Type - Assigned](https://docs.velt.dev/ui-customization/features/async/comments/comments-sidebar/subcomponents/filter/subcomponents/assigned)
                    *   [Filter Type - Category](https://docs.velt.dev/ui-customization/features/async/comments/comments-sidebar/subcomponents/filter/subcomponents/category)
                    *   [Filter Type - Comment Type](https://docs.velt.dev/ui-customization/features/async/comments/comments-sidebar/subcomponents/filter/subcomponents/comment-type)
                    *   [Filter Type - Location](https://docs.velt.dev/ui-customization/features/async/comments/comments-sidebar/subcomponents/filter/subcomponents/location)
                    *   [Filter Type - Priority](https://docs.velt.dev/ui-customization/features/async/comments/comments-sidebar/subcomponents/filter/subcomponents/priority)
                    *   [Filter Type - Status](https://docs.velt.dev/ui-customization/features/async/comments/comments-sidebar/subcomponents/filter/subcomponents/status)
                    *   [Filter Type - Tagged](https://docs.velt.dev/ui-customization/features/async/comments/comments-sidebar/subcomponents/filter/subcomponents/tagged)
                    *   [Filter Type - Versions](https://docs.velt.dev/ui-customization/features/async/comments/comments-sidebar/subcomponents/filter/subcomponents/versions)
                    *   [Filter Type - Custom](https://docs.velt.dev/ui-customization/features/async/comments/comments-sidebar/subcomponents/filter/subcomponents/custom)
                    *   [Groupby](https://docs.velt.dev/ui-customization/features/async/comments/comments-sidebar/subcomponents/filter/subcomponents/groupby)
                    *   [Reset button](https://docs.velt.dev/ui-customization/features/async/comments/comments-sidebar/subcomponents/filter/subcomponents/reset-button)
                    *   [Title](https://docs.velt.dev/ui-customization/features/async/comments/comments-sidebar/subcomponents/filter/subcomponents/title)

            *   [Focused thread](https://docs.velt.dev/ui-customization/features/async/comments/comments-sidebar/subcomponents/focused-thread)
            *   Header 
            *   List 
            *   [Page mode composer](https://docs.velt.dev/ui-customization/features/async/comments/comments-sidebar/subcomponents/page-mode-composer)
            *   [Reset filter button](https://docs.velt.dev/ui-customization/features/async/comments/comments-sidebar/subcomponents/reset-filter-button)
            *   Sidebar Button 
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

```
<VeltWireframe>
    <VeltCommentsSidebarWireframe.Filter.CloseButton />
</VeltWireframe>
```

Subcomponents

The subcomponent of the Comments Sidebar Filter that represents the Close button

```
<VeltWireframe>
    <VeltCommentsSidebarWireframe.Filter.CloseButton />
</VeltWireframe>
```

Default Subcomponent
--------------------

![Image 1](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/filter-close.png)
