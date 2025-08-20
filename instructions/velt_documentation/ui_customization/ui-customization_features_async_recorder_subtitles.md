Title: Subtitles - Velt

URL Source: https://docs.velt.dev/ui-customization/features/async/recorder/subtitles

Markdown Content:
Subtitles - Velt

===============

[Velt home page![Image 6: light logo](https://mintlify.s3.us-west-1.amazonaws.com/velt/velt-logo-big-light.png)![Image 7: dark logo](https://mintlify.s3.us-west-1.amazonaws.com/velt/velt-logo-big.png)](https://docs.velt.dev/)

Search or ask...

Ctrl K Ask AI

*   [Get API Key](https://console.velt.dev/)
*   [Get API Key](https://console.velt.dev/)

Search...

Navigation

Recorder

Subtitles

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
    *   [Control Panel](https://docs.velt.dev/ui-customization/features/async/recorder/control-panel)
    *   [Media Source Settings](https://docs.velt.dev/ui-customization/features/async/recorder/media-source-settings)
    *   [Recorder Player Expanded](https://docs.velt.dev/ui-customization/features/async/recorder/recorder-player-expanded)
    *   [Recorder player](https://docs.velt.dev/ui-customization/features/async/recorder/recorder-player)
    *   [Recorder Tool](https://docs.velt.dev/ui-customization/features/async/recorder/recorder-tool)
    *   [Recording Preview Steps Dialog](https://docs.velt.dev/ui-customization/features/async/recorder/recording-preview-steps-dialog)
    *   [Subtitles](https://docs.velt.dev/ui-customization/features/async/recorder/subtitles)
    *   [Transcription](https://docs.velt.dev/ui-customization/features/async/recorder/transcription)
    *   [Video Editor](https://docs.velt.dev/ui-customization/features/async/recorder/video-editor)

*   [Inline Reactions Section](https://docs.velt.dev/ui-customization/features/async/inline-reactions)
*   Arrows  

##### Realtime Collaboration

*   [Presence](https://docs.velt.dev/ui-customization/features/realtime/presence)
*   [Cursors](https://docs.velt.dev/ui-customization/features/realtime/cursors)
*   [Single Editor Mode](https://docs.velt.dev/ui-customization/features/realtime/single-editor-mode)
*   [Live Selection](https://docs.velt.dev/ui-customization/features/realtime/live-selection)
*   Huddle  

On this page

*   [Overview](https://docs.velt.dev/ui-customization/features/async/recorder/subtitles#overview)
*   [EmbedMode](https://docs.velt.dev/ui-customization/features/async/recorder/subtitles#embedmode)
*   [Text](https://docs.velt.dev/ui-customization/features/async/recorder/subtitles#text)
*   [FloatingMode](https://docs.velt.dev/ui-customization/features/async/recorder/subtitles#floatingmode)
*   [Button](https://docs.velt.dev/ui-customization/features/async/recorder/subtitles#button)
*   [Tooltip](https://docs.velt.dev/ui-customization/features/async/recorder/subtitles#tooltip)
*   [Panel](https://docs.velt.dev/ui-customization/features/async/recorder/subtitles#panel)
*   [CloseButton](https://docs.velt.dev/ui-customization/features/async/recorder/subtitles#closebutton)
*   [Text](https://docs.velt.dev/ui-customization/features/async/recorder/subtitles#text-2)

Recorder

Subtitles
=========

Copy page

Subtitles component.

Copy page

We recommend that you familiarize yourselves with [UI Customization Concepts](https://docs.velt.dev/ui-customization/overview) before attempting to modify any components.

[​](https://docs.velt.dev/ui-customization/features/async/recorder/subtitles#overview)

Overview
------------------------------------------------------------------------------------------------

*    React / Next.js
*    Other Frameworks

Copy

Ask AI

```
<VeltWireframe>
    <VeltSubtitlesWireframe>
        <VeltSubtitlesWireframe.EmbedMode />
        <VeltSubtitlesWireframe.FloatingMode />
    </VeltSubtitlesWireframe>
</VeltWireframe>
```

[​](https://docs.velt.dev/ui-customization/features/async/recorder/subtitles#embedmode)

EmbedMode
--------------------------------------------------------------------------------------------------

![Image 8](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/recorder/subtitles-embed-mode.png)

*    React / Next.js
*    Other Frameworks

Copy

Ask AI

```
<VeltWireframe>
    <VeltSubtitlesWireframe.EmbedMode>
        <VeltSubtitlesWireframe.EmbedMode.Text />
    </VeltSubtitlesWireframe.EmbedMode>
</VeltWireframe>
```

#### [​](https://docs.velt.dev/ui-customization/features/async/recorder/subtitles#text)

Text

*    React / Next.js
*    Other Frameworks

Copy

Ask AI

```
<VeltWireframe>
    <VeltSubtitlesWireframe.EmbedMode.Text />
</VeltWireframe>
```

[​](https://docs.velt.dev/ui-customization/features/async/recorder/subtitles#floatingmode)

FloatingMode
--------------------------------------------------------------------------------------------------------

![Image 9](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/recorder/subtitles-floating-mode.png)

*    React / Next.js
*    Other Frameworks

Copy

Ask AI

```
<VeltWireframe>
    <VeltSubtitlesWireframe.FloatingMode>
        <VeltSubtitlesWireframe.FloatingMode.Button />
        <VeltSubtitlesWireframe.FloatingMode.Tooltip />
        <VeltSubtitlesWireframe.FloatingMode.Panel />
    </VeltSubtitlesWireframe.FloatingMode>
</VeltWireframe>
```

#### [​](https://docs.velt.dev/ui-customization/features/async/recorder/subtitles#button)

Button

![Image 10](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/recorder/subtitles-floating-mode-button.png)

*    React / Next.js
*    Other Frameworks

Copy

Ask AI

```
<VeltWireframe>
    <VeltSubtitlesWireframe.FloatingMode.Button />
</VeltWireframe>
```

#### [​](https://docs.velt.dev/ui-customization/features/async/recorder/subtitles#tooltip)

Tooltip

![Image 11](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/recorder/subtitles-floating-mode-tooltip.png)

*    React / Next.js
*    Other Frameworks

Copy

Ask AI

```
<VeltWireframe>
    <VeltSubtitlesWireframe.FloatingMode.Tooltip />
</VeltWireframe>
```

#### [​](https://docs.velt.dev/ui-customization/features/async/recorder/subtitles#panel)

Panel

![Image 12](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/recorder/subtitles-floating-mode-panel.png)

*    React / Next.js
*    Other Frameworks

Copy

Ask AI

```
<VeltWireframe>
    <VeltSubtitlesWireframe.FloatingMode.Panel>
        <VeltSubtitlesWireframe.FloatingMode.CloseButton />
        <VeltSubtitlesWireframe.FloatingMode.Text />
    </VeltSubtitlesWireframe.FloatingMode.Panel>
</VeltWireframe>
```

#### [​](https://docs.velt.dev/ui-customization/features/async/recorder/subtitles#closebutton)

CloseButton

*    React / Next.js
*    Other Frameworks

Copy

Ask AI

```
<VeltWireframe>
    <VeltSubtitlesWireframe.FloatingMode.CloseButton />
</VeltWireframe>
```

#### [​](https://docs.velt.dev/ui-customization/features/async/recorder/subtitles#text-2)

Text

*    React / Next.js
*    Other Frameworks

Copy

Ask AI

```
<VeltWireframe>
    <VeltSubtitlesWireframe.FloatingMode.Text />
</VeltWireframe>
```

Was this page helpful?

Yes No

[Recording Preview Steps Dialog](https://docs.velt.dev/ui-customization/features/async/recorder/recording-preview-steps-dialog)[Transcription](https://docs.velt.dev/ui-customization/features/async/recorder/transcription)

[twitter](https://twitter.com/veltjs)[linkedin](https://www.linkedin.com/company/veltjs)

[Powered by Mintlify](https://mintlify.com/preview-request?utm_campaign=poweredBy&utm_medium=referral&utm_source=velt)

Assistant

Responses are generated using AI and may contain mistakes.

![Image 13](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/recorder/subtitles-embed-mode.png)

![Image 14](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/recorder/subtitles-floating-mode.png)

![Image 15](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/recorder/subtitles-floating-mode-button.png)

![Image 16](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/recorder/subtitles-floating-mode-tooltip.png)

![Image 17](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/recorder/subtitles-floating-mode-panel.png)
