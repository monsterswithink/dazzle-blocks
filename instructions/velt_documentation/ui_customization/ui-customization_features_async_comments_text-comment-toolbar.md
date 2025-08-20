Title: Text Comment Toolbar - Velt

URL Source: https://docs.velt.dev/ui-customization/features/async/comments/text-comment-toolbar

Markdown Content:
Text Comment Toolbar - Velt

===============

[Velt home page![Image 6: light logo](https://mintlify.s3.us-west-1.amazonaws.com/velt/velt-logo-big-light.png)![Image 7: dark logo](https://mintlify.s3.us-west-1.amazonaws.com/velt/velt-logo-big.png)](https://docs.velt.dev/)

Search or ask...

Ctrl K Ask AI

*   [Get API Key](https://console.velt.dev/)
*   [Get API Key](https://console.velt.dev/)

Search...

Navigation

Comments

Text Comment Toolbar

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

*   [VeltTextCommentToolbarWireframe](https://docs.velt.dev/ui-customization/features/async/comments/text-comment-toolbar#velttextcommenttoolbarwireframe)
*   [CommentAnnotation](https://docs.velt.dev/ui-customization/features/async/comments/text-comment-toolbar#commentannotation)
*   [Divider](https://docs.velt.dev/ui-customization/features/async/comments/text-comment-toolbar#divider)
*   [Copywriter](https://docs.velt.dev/ui-customization/features/async/comments/text-comment-toolbar#copywriter)
*   [Generic](https://docs.velt.dev/ui-customization/features/async/comments/text-comment-toolbar#generic)
*   [Dark Mode](https://docs.velt.dev/ui-customization/features/async/comments/text-comment-toolbar#dark-mode)

Comments

Text Comment Toolbar
====================

Copy page

The Toolbar that appears when you highlight some text

Copy page

We recommend that you familiarize yourselves with [UI Customization Concepts](https://docs.velt.dev/ui-customization/overview) before attempting to modify any components.

[​](https://docs.velt.dev/ui-customization/features/async/comments/text-comment-toolbar#velttextcommenttoolbarwireframe)

VeltTextCommentToolbarWireframe
---------------------------------------------------------------------------------------------------------------------------------------------------------

![Image 8](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/comments/text-comment-toolbar/comment-text-toolbar-overview.png)

*    React / Next.js
*    Other Frameworks

Copy

Ask AI

```
<VeltWireframe>
    <VeltTextCommentToolbarWireframe>
        <VeltTextCommentToolbarWireframe.CommentAnnotation />
        <VeltTextCommentToolbarWireframe.Divider />
        <VeltTextCommentToolbarWireframe.Copywriter />
        <VeltTextCommentToolbarWireframe.Generic />
    </VeltTextCommentToolbarWireframe>
</VeltWireframe>
```

[​](https://docs.velt.dev/ui-customization/features/async/comments/text-comment-toolbar#commentannotation)

CommentAnnotation
-----------------------------------------------------------------------------------------------------------------------------

![Image 9](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/comments/text-comment-toolbar/comment-text-toolbar-comment-tool.png)

*    React / Next.js
*    Other Frameworks

Copy

Ask AI

```
<VeltWireframe>
    <VeltTextCommentToolbarWireframe.CommentAnnotation />
</VeltWireframe>
```

[​](https://docs.velt.dev/ui-customization/features/async/comments/text-comment-toolbar#divider)

Divider
---------------------------------------------------------------------------------------------------------

![Image 10](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/comments/text-comment-toolbar/comment-text-toolbar-divider.png)

*    React / Next.js
*    Other Frameworks

Copy

Ask AI

```
<VeltWireframe>
    <VeltTextCommentToolbarWireframe.Divider />
</VeltWireframe>
```

[​](https://docs.velt.dev/ui-customization/features/async/comments/text-comment-toolbar#copywriter)

Copywriter
---------------------------------------------------------------------------------------------------------------

![Image 11](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/comments/text-comment-toolbar/comment-text-toolbar-copywriter.png)

*    React / Next.js
*    Other Frameworks

Copy

Ask AI

```
<VeltWireframe>
    <VeltTextCommentToolbarWireframe.Copywriter />
</VeltWireframe>
```

[​](https://docs.velt.dev/ui-customization/features/async/comments/text-comment-toolbar#generic)

Generic
---------------------------------------------------------------------------------------------------------

![Image 12](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/comments/text-comment-toolbar/comment-text-toolbar-generic.png)

*    React / Next.js
*    Other Frameworks
*    Other Frameworks

Copy

Ask AI

```
<VeltWireframe>
    <VeltTextCommentToolbarWireframe.Generic />
</VeltWireframe>
```

### [​](https://docs.velt.dev/ui-customization/features/async/comments/text-comment-toolbar#dark-mode)

Dark Mode

By default, all components are in Light Mode, but there are several properties and methods to enable Dark Mode.Default: `false`

*    React / Next.js
*    Other Frameworks

**Using Props:**

Copy

Ask AI

```
<VeltComments textCommentToolbarDarkMode={true} />
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

[Text Comment Tool](https://docs.velt.dev/ui-customization/features/async/comments/text-comment-tool)[Velt Video Player](https://docs.velt.dev/ui-customization/features/async/comments/comment-video-player)

[twitter](https://twitter.com/veltjs)[linkedin](https://www.linkedin.com/company/veltjs)

[Powered by Mintlify](https://mintlify.com/preview-request?utm_campaign=poweredBy&utm_medium=referral&utm_source=velt)

Assistant

Responses are generated using AI and may contain mistakes.

![Image 13](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/comments/text-comment-toolbar/comment-text-toolbar-overview.png)

![Image 14](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/comments/text-comment-toolbar/comment-text-toolbar-comment-tool.png)

![Image 15](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/comments/text-comment-toolbar/comment-text-toolbar-divider.png)

![Image 16](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/comments/text-comment-toolbar/comment-text-toolbar-copywriter.png)

![Image 17](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/comments/text-comment-toolbar/comment-text-toolbar-generic.png)
