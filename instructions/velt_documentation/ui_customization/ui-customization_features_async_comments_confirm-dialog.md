Title: Confirmation Dialog - Velt

URL Source: https://docs.velt.dev/ui-customization/features/async/comments/confirm-dialog

Markdown Content:
Confirmation Dialog - Velt

===============

[Velt home page![Image 6: light logo](https://mintlify.s3.us-west-1.amazonaws.com/velt/velt-logo-big-light.png)![Image 7: dark logo](https://mintlify.s3.us-west-1.amazonaws.com/velt/velt-logo-big.png)](https://docs.velt.dev/)

Search or ask...

Ctrl K Ask AI

*   [Get API Key](https://console.velt.dev/)
*   [Get API Key](https://console.velt.dev/)

Search...

Navigation

Comments

Confirmation Dialog

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

*   [VeltConfirmDialogWireframe](https://docs.velt.dev/ui-customization/features/async/comments/confirm-dialog#veltconfirmdialogwireframe)
*   [Title](https://docs.velt.dev/ui-customization/features/async/comments/confirm-dialog#title)
*   [Message](https://docs.velt.dev/ui-customization/features/async/comments/confirm-dialog#message)
*   [RejectButton](https://docs.velt.dev/ui-customization/features/async/comments/confirm-dialog#rejectbutton)
*   [ApproveButton](https://docs.velt.dev/ui-customization/features/async/comments/confirm-dialog#approvebutton)
*   [Styling](https://docs.velt.dev/ui-customization/features/async/comments/confirm-dialog#styling)
*   [Disable ShadowDOM](https://docs.velt.dev/ui-customization/features/async/comments/confirm-dialog#disable-shadowdom)
*   [Dark Mode](https://docs.velt.dev/ui-customization/features/async/comments/confirm-dialog#dark-mode)

Comments

Confirmation Dialog
===================

Copy page

The Confirmation Dialog that appears when you delete a comment annotation.

Copy page

We recommend that you familiarize yourselves with [UI Customization Concepts](https://docs.velt.dev/ui-customization/overview) before attempting to modify any components.

[​](https://docs.velt.dev/ui-customization/features/async/comments/confirm-dialog#veltconfirmdialogwireframe)

VeltConfirmDialogWireframe
-----------------------------------------------------------------------------------------------------------------------------------------

![Image 8](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/comments/confirmation-dialog/confirm-dialog-overview.png)

*    React / Next.js
*    Other Frameworks

Copy

Ask AI

```
<VeltWireframe>
    <VeltConfirmDialogWireframe>
        <VeltConfirmDialogWireframe.Title />
        <VeltConfirmDialogWireframe.Message />
        <VeltConfirmDialogWireframe.RejectButton />
        <VeltConfirmDialogWireframe.ApproveButton />
    </VeltConfirmDialogWireframe>
</VeltWireframe>
```

[​](https://docs.velt.dev/ui-customization/features/async/comments/confirm-dialog#title)

Title
-----------------------------------------------------------------------------------------------

![Image 9](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/comments/confirmation-dialog/confirm-dialog-title.png)

*    React / Next.js
*    Other Frameworks

Copy

Ask AI

```
<VeltWireframe>
    <VeltConfirmDialogWireframe.Title />
</VeltWireframe>
```

[​](https://docs.velt.dev/ui-customization/features/async/comments/confirm-dialog#message)

Message
---------------------------------------------------------------------------------------------------

![Image 10](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/comments/confirmation-dialog/confirm-dialog-message.png)

*    React / Next.js
*    Other Frameworks

Copy

Ask AI

```
<VeltWireframe>
    <VeltConfirmDialogWireframe.Message />
</VeltWireframe>
```

[​](https://docs.velt.dev/ui-customization/features/async/comments/confirm-dialog#rejectbutton)

RejectButton
-------------------------------------------------------------------------------------------------------------

![Image 11](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/comments/confirmation-dialog/confirm-dialog-reject.png)

*    React / Next.js
*    Other Frameworks

Copy

Ask AI

```
<VeltWireframe>
    <VeltConfirmDialogWireframe.RejectButton />
</VeltWireframe>
```

[​](https://docs.velt.dev/ui-customization/features/async/comments/confirm-dialog#approvebutton)

ApproveButton
---------------------------------------------------------------------------------------------------------------

![Image 12](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/comments/confirmation-dialog/confirm-dialog-approve.png)

*    React / Next.js
*    Other Frameworks

Copy

Ask AI

```
<VeltWireframe>
    <VeltConfirmDialogWireframe.ApproveButton />
</VeltWireframe>
```

[​](https://docs.velt.dev/ui-customization/features/async/comments/confirm-dialog#styling)

Styling
---------------------------------------------------------------------------------------------------

### [​](https://docs.velt.dev/ui-customization/features/async/comments/confirm-dialog#disable-shadowdom)

Disable ShadowDOM

ShadowDOM is not used in this component. You can apply your styling directly to the component.
### [​](https://docs.velt.dev/ui-customization/features/async/comments/confirm-dialog#dark-mode)

Dark Mode

This component takes the dark mode property from the parent feature (eg: comments) where this used. If the parent feature component is in dark mode, this component will also be in dark mode.

Was this page helpful?

Yes No

[Comment Player Timeline](https://docs.velt.dev/ui-customization/features/async/comments/comment-player-timeline)[MultiThread Comment Dialog](https://docs.velt.dev/ui-customization/features/async/comments/multithread-comment-dialog)

[twitter](https://twitter.com/veltjs)[linkedin](https://www.linkedin.com/company/veltjs)

[Powered by Mintlify](https://mintlify.com/preview-request?utm_campaign=poweredBy&utm_medium=referral&utm_source=velt)

Assistant

Responses are generated using AI and may contain mistakes.

![Image 13](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/comments/confirmation-dialog/confirm-dialog-overview.png)

![Image 14](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/comments/confirmation-dialog/confirm-dialog-title.png)

![Image 15](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/comments/confirmation-dialog/confirm-dialog-message.png)

![Image 16](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/comments/confirmation-dialog/confirm-dialog-reject.png)

![Image 17](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/comments/confirmation-dialog/confirm-dialog-approve.png)
