Title: Cursors - Velt

URL Source: https://docs.velt.dev/ui-customization/features/realtime/cursors

Markdown Content:
Cursors - Velt

===============

[Velt home page![Image 1: light logo](https://mintlify.s3.us-west-1.amazonaws.com/velt/velt-logo-big-light.png)![Image 2: dark logo](https://mintlify.s3.us-west-1.amazonaws.com/velt/velt-logo-big.png)](https://docs.velt.dev/)

Search or ask...

Ctrl K Ask AI

*   [Get API Key](https://console.velt.dev/)
*   [Get API Key](https://console.velt.dev/)

Search...

Navigation

Realtime Collaboration

Cursors

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

*   [VeltCursorPointerWireframe](https://docs.velt.dev/ui-customization/features/realtime/cursors#veltcursorpointerwireframe)
*   [Arrow](https://docs.velt.dev/ui-customization/features/realtime/cursors#arrow)
*   [Avatar](https://docs.velt.dev/ui-customization/features/realtime/cursors#avatar)
*   [Default](https://docs.velt.dev/ui-customization/features/realtime/cursors#default)
*   [Name](https://docs.velt.dev/ui-customization/features/realtime/cursors#name)
*   [Comment](https://docs.velt.dev/ui-customization/features/realtime/cursors#comment)
*   [AudioHuddle](https://docs.velt.dev/ui-customization/features/realtime/cursors#audiohuddle)
*   [Avatar](https://docs.velt.dev/ui-customization/features/realtime/cursors#avatar-2)
*   [Audio](https://docs.velt.dev/ui-customization/features/realtime/cursors#audio)
*   [VideoHuddle](https://docs.velt.dev/ui-customization/features/realtime/cursors#videohuddle)

Realtime Collaboration

Cursors
=======

Copy page

The Cursors component displays the cursors of users in a document.

Copy page

We recommend that you familiarize yourselves with [UI Customization Concepts](https://docs.velt.dev/ui-customization/overview) before attempting to modify any components.

[​](https://docs.velt.dev/ui-customization/features/realtime/cursors#veltcursorpointerwireframe)

VeltCursorPointerWireframe
----------------------------------------------------------------------------------------------------------------------------

*    React / Next.js
*    Other Frameworks

Copy

Ask AI

```
<VeltWireframe>
    <VeltCursorPointerWireframe>
        <VeltCursorPointerWireframe.Arrow />
        <VeltCursorPointerWireframe.Avatar />
        <VeltCursorPointerWireframe.Default />
        <VeltCursorPointerWireframe.AudioHuddle />
        <VeltCursorPointerWireframe.VideoHuddle />
    </VeltCursorPointerWireframe>
</VeltWireframe>
```

### [​](https://docs.velt.dev/ui-customization/features/realtime/cursors#arrow)

Arrow

*    React / Next.js
*    Other Frameworks

Copy

Ask AI

```
<VeltWireframe>
    <VeltCursorPointerWireframe.Arrow />
</VeltWireframe>
```

### [​](https://docs.velt.dev/ui-customization/features/realtime/cursors#avatar)

Avatar

*    React / Next.js
*    Other Frameworks

Copy

Ask AI

```
<VeltWireframe>
    <VeltCursorPointerWireframe.Avatar />
</VeltWireframe>
```

### [​](https://docs.velt.dev/ui-customization/features/realtime/cursors#default)

Default

*    React / Next.js
*    Other Frameworks

Copy

Ask AI

```
<VeltWireframe>
    <VeltCursorPointerWireframe.Default>
        <VeltCursorPointerWireframe.Default.Name />
        <VeltCursorPointerWireframe.Default.Comment />
    </VeltCursorPointerWireframe.Default>
</VeltWireframe>
```

#### [​](https://docs.velt.dev/ui-customization/features/realtime/cursors#name)

Name

*    React / Next.js
*    Other Frameworks

Copy

Ask AI

```
<VeltWireframe>
    <VeltCursorPointerWireframe.Default.Name />
</VeltWireframe>
```

#### [​](https://docs.velt.dev/ui-customization/features/realtime/cursors#comment)

Comment

*    React / Next.js
*    Other Frameworks

Copy

Ask AI

```
<VeltWireframe>
    <VeltCursorPointerWireframe.Default.Comment />
</VeltWireframe>
```

### [​](https://docs.velt.dev/ui-customization/features/realtime/cursors#audiohuddle)

AudioHuddle

*    React / Next.js
*    Other Frameworks

Copy

Ask AI

```
<VeltWireframe>
    <VeltCursorPointerWireframe.AudioHuddle>
        <VeltCursorPointerWireframe.AudioHuddle.Avatar />
        <VeltCursorPointerWireframe.AudioHuddle.Audio />
    </VeltCursorPointerWireframe.AudioHuddle>
</VeltWireframe>
```

#### [​](https://docs.velt.dev/ui-customization/features/realtime/cursors#avatar-2)

Avatar

*    React / Next.js
*    Other Frameworks

Copy

Ask AI

```
<VeltWireframe>
    <VeltCursorPointerWireframe.AudioHuddle.Avatar />
</VeltWireframe>
```

#### [​](https://docs.velt.dev/ui-customization/features/realtime/cursors#audio)

Audio

*    React / Next.js
*    Other Frameworks

Copy

Ask AI

```
<VeltWireframe>
    <VeltCursorPointerWireframe.AudioHuddle.Audio />
</VeltWireframe>
```

### [​](https://docs.velt.dev/ui-customization/features/realtime/cursors#videohuddle)

VideoHuddle

*    React / Next.js
*    Other Frameworks

Copy

Ask AI

```
<VeltWireframe>
    <VeltCursorPointerWireframe.VideoHuddle />
</VeltWireframe>
```

Was this page helpful?

Yes No

[Presence](https://docs.velt.dev/ui-customization/features/realtime/presence)[Single Editor Mode](https://docs.velt.dev/ui-customization/features/realtime/single-editor-mode)

[twitter](https://twitter.com/veltjs)[linkedin](https://www.linkedin.com/company/veltjs)

[Powered by Mintlify](https://mintlify.com/preview-request?utm_campaign=poweredBy&utm_medium=referral&utm_source=velt)

Assistant

Responses are generated using AI and may contain mistakes.
