Title: Notifications Tool - Velt

URL Source: https://docs.velt.dev/ui-customization/features/async/notifications/notifications-tool

Markdown Content:
Notifications Tool - Velt

===============

[Velt home page![Image 2: light logo](https://mintlify.s3.us-west-1.amazonaws.com/velt/velt-logo-big-light.png)![Image 3: dark logo](https://mintlify.s3.us-west-1.amazonaws.com/velt/velt-logo-big.png)](https://docs.velt.dev/)

Search or ask...

Ctrl K Ask AI

*   [Get API Key](https://console.velt.dev/)
*   [Get API Key](https://console.velt.dev/)

Search...

Navigation

In-app Notifications

Notifications Tool

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
*   In-app Notifications  
    *   [Notifications Tool](https://docs.velt.dev/ui-customization/features/async/notifications/notifications-tool)
    *   [Notifications Panel](https://docs.velt.dev/ui-customization/features/async/notifications/notifications-panel)

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

*   [VeltNotificationsToolWireframe](https://docs.velt.dev/ui-customization/features/async/notifications/notifications-tool#veltnotificationstoolwireframe)
*   [Styling](https://docs.velt.dev/ui-customization/features/async/notifications/notifications-tool#styling)
*   [Disable ShadowDOM](https://docs.velt.dev/ui-customization/features/async/notifications/notifications-tool#disable-shadowdom)
*   [Dark Mode](https://docs.velt.dev/ui-customization/features/async/notifications/notifications-tool#dark-mode)
*   [Variant](https://docs.velt.dev/ui-customization/features/async/notifications/notifications-tool#variant)

In-app Notifications

Notifications Tool
==================

Copy page

The button that opens or closes the notification panel.

Copy page

We recommend that you familiarize yourselves with [UI Customization Concepts](https://docs.velt.dev/ui-customization/overview) before attempting to modify any components.

[​](https://docs.velt.dev/ui-customization/features/async/notifications/notifications-tool#veltnotificationstoolwireframe)

VeltNotificationsToolWireframe
----------------------------------------------------------------------------------------------------------------------------------------------------------

![Image 4](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/notification/notification-tool.png)

*    React / Next.js
*    Other Frameworks

Copy

Ask AI

```
<VeltWireframe>
    <VeltNotificationsToolWireframe>
        <VeltNotificationsToolWireframe.Icon />
        <VeltNotificationsToolWireframe.UnreadIcon />
        <VeltNotificationsToolWireframe.UnreadCount />
        <VeltNotificationsToolWireframe.Label />
    </VeltNotificationsToolWireframe>
</VeltWireframe>
```

[​](https://docs.velt.dev/ui-customization/features/async/notifications/notifications-tool#styling)

Styling
------------------------------------------------------------------------------------------------------------

### [​](https://docs.velt.dev/ui-customization/features/async/notifications/notifications-tool#disable-shadowdom)

Disable ShadowDOM

*   By default, ShadowDOM is used to ensure that your app’s CSS does not interfere with the styling of the SDK components.
*   Disable the shadow dom to apply your custom CSS to the component.

`Default: true`**Example**

*    React / Next.js
*    Other Frameworks

Copy

Ask AI

```
<VeltNotificationsTool shadowDom={false} panelShadowDom={false} />
```

### [​](https://docs.velt.dev/ui-customization/features/async/notifications/notifications-tool#dark-mode)

Dark Mode

`Default: false`

*    React / Next.js
*    Other Frameworks

Copy

Ask AI

```
<VeltNotificationsTool darkMode={true} />
```

[​](https://docs.velt.dev/ui-customization/features/async/notifications/notifications-tool#variant)

Variant
------------------------------------------------------------------------------------------------------------

You can define and use [variants](https://docs.velt.dev/ui-customization/layout#variants) for the Notification Tool or the Notification Panel.
1.   `variant`: For the Notification Tool.
2.   `panelVariant`: For the Notification Panel.

*    React / Next.js
*    Other Frameworks

Copy

Ask AI

```
<VeltNotificationsTool variant='tool1' panelVariant='panel1'/>
```

Was this page helpful?

Yes No

[Velt Video Player](https://docs.velt.dev/ui-customization/features/async/comments/comment-video-player)[Notifications Panel](https://docs.velt.dev/ui-customization/features/async/notifications/notifications-panel)

[twitter](https://twitter.com/veltjs)[linkedin](https://www.linkedin.com/company/veltjs)

[Powered by Mintlify](https://mintlify.com/preview-request?utm_campaign=poweredBy&utm_medium=referral&utm_source=velt)

Assistant

Responses are generated using AI and may contain mistakes.

![Image 5](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/notification/notification-tool.png)
