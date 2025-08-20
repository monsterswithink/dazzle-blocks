Title: Recorder Tool - Velt

URL Source: https://docs.velt.dev/ui-customization/features/async/recorder/recorder-tool

Markdown Content:
Recorder Tool - Velt

===============

[Velt home page![Image 9: light logo](https://mintlify.s3.us-west-1.amazonaws.com/velt/velt-logo-big-light.png)![Image 10: dark logo](https://mintlify.s3.us-west-1.amazonaws.com/velt/velt-logo-big.png)](https://docs.velt.dev/)

Search or ask...

Ctrl K Ask AI

*   [Get API Key](https://console.velt.dev/)
*   [Get API Key](https://console.velt.dev/)

Search...

Navigation

Recorder

Recorder Tool

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

*   [VeltRecorderAllToolWireframe](https://docs.velt.dev/ui-customization/features/async/recorder/recorder-tool#veltrecorderalltoolwireframe)
*   [VeltRecorderAllToolMenuWireframe](https://docs.velt.dev/ui-customization/features/async/recorder/recorder-tool#veltrecorderalltoolmenuwireframe)
*   [Audio](https://docs.velt.dev/ui-customization/features/async/recorder/recorder-tool#audio)
*   [Video](https://docs.velt.dev/ui-customization/features/async/recorder/recorder-tool#video)
*   [Screen](https://docs.velt.dev/ui-customization/features/async/recorder/recorder-tool#screen)
*   [VeltRecorderAudioToolWireframe](https://docs.velt.dev/ui-customization/features/async/recorder/recorder-tool#veltrecorderaudiotoolwireframe)
*   [VeltRecorderVideoToolWireframe](https://docs.velt.dev/ui-customization/features/async/recorder/recorder-tool#veltrecordervideotoolwireframe)
*   [VeltRecorderScreenToolWireframe](https://docs.velt.dev/ui-customization/features/async/recorder/recorder-tool#veltrecorderscreentoolwireframe)
*   [Styling](https://docs.velt.dev/ui-customization/features/async/recorder/recorder-tool#styling)
*   [Disable ShadowDOM](https://docs.velt.dev/ui-customization/features/async/recorder/recorder-tool#disable-shadowdom)
*   [Dark Mode](https://docs.velt.dev/ui-customization/features/async/recorder/recorder-tool#dark-mode)

Recorder

Recorder Tool
=============

Copy page

The button to add new recordings.

Copy page

We recommend that you familiarize yourselves with [UI Customization Concepts](https://docs.velt.dev/ui-customization/overview) before attempting to modify any components.

[​](https://docs.velt.dev/ui-customization/features/async/recorder/recorder-tool#veltrecorderalltoolwireframe)

VeltRecorderAllToolWireframe
--------------------------------------------------------------------------------------------------------------------------------------------

![Image 11](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/recorder/recorder-tool-all-overview.png)

*    React / Next.js
*    Other Frameworks

Copy

Ask AI

```
<VeltWireframe>
    <VeltRecorderAllToolWireframe>
        {/* ... Add your content here */}
    </VeltRecorderAllToolWireframe>
</VeltWireframe>
```

### [​](https://docs.velt.dev/ui-customization/features/async/recorder/recorder-tool#veltrecorderalltoolmenuwireframe)

VeltRecorderAllToolMenuWireframe

![Image 12](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/recorder/recorder-tool-all.png)

*    React / Next.js
*    Other Frameworks

Copy

Ask AI

```
<VeltWireframe>
    <VeltRecorderAllToolMenuWireframe>
        <VeltRecorderAllToolMenuWireframe.Audio>
            {/* ... Add your content here */}
        </VeltRecorderAllToolMenuWireframe.Audio>
        <VeltRecorderAllToolMenuWireframe.Video>
            {/* ... Add your content here */}
        </VeltRecorderAllToolMenuWireframe.Video>
        <VeltRecorderAllToolMenuWireframe.Screen>
            {/* ... Add your content here */}
        </VeltRecorderAllToolMenuWireframe.Screen>
    </VeltRecorderAllToolMenuWireframe>
</VeltWireframe>
```

#### [​](https://docs.velt.dev/ui-customization/features/async/recorder/recorder-tool#audio)

Audio

![Image 13](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/recorder/recorder-tool-audio.png)

*    React / Next.js
*    Other Frameworks

Copy

Ask AI

```
<VeltWireframe>
    <VeltRecorderAllToolMenuWireframe.Audio>
        {/* ... Add your content here */}
    </VeltRecorderAllToolMenuWireframe.Audio>
</VeltWireframe>
```

#### [​](https://docs.velt.dev/ui-customization/features/async/recorder/recorder-tool#video)

Video

![Image 14](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/recorder/recorder-tool-video.png)

*    React / Next.js
*    Other Frameworks

Copy

Ask AI

```
<VeltWireframe>
    <VeltRecorderAllToolMenuWireframe.Video>
        {/* ... Add your content here */}
    </VeltRecorderAllToolMenuWireframe.Video>
</VeltWireframe>
```

#### [​](https://docs.velt.dev/ui-customization/features/async/recorder/recorder-tool#screen)

Screen

![Image 15](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/recorder/recorder-tool-screen.png)

*    React / Next.js
*    Other Frameworks

Copy

Ask AI

```
<VeltWireframe>
    <VeltRecorderAllToolMenuWireframe.Screen>
        {/* ... Add your content here */}
    </VeltRecorderAllToolMenuWireframe.Screen>
</VeltWireframe>
```

[​](https://docs.velt.dev/ui-customization/features/async/recorder/recorder-tool#veltrecorderaudiotoolwireframe)

VeltRecorderAudioToolWireframe
------------------------------------------------------------------------------------------------------------------------------------------------

![Image 16](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/recorder/recorder-tool-audio-tool.png)

*    React / Next.js
*    Other Frameworks

Copy

Ask AI

```
<VeltWireframe>
    <VeltRecorderAudioToolWireframe>
        {/* ... Add your content here */}
    </VeltRecorderAudioToolWireframe>
</VeltWireframe>
```

[​](https://docs.velt.dev/ui-customization/features/async/recorder/recorder-tool#veltrecordervideotoolwireframe)

VeltRecorderVideoToolWireframe
------------------------------------------------------------------------------------------------------------------------------------------------

![Image 17](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/recorder/recorder-tool-video-tool.png)

*    React / Next.js
*    Other Frameworks

Copy

Ask AI

```
<VeltWireframe>
    <VeltRecorderVideoToolWireframe>
        {/* ... Add your content here */}
    </VeltRecorderVideoToolWireframe>
</VeltWireframe>
```

[​](https://docs.velt.dev/ui-customization/features/async/recorder/recorder-tool#veltrecorderscreentoolwireframe)

VeltRecorderScreenToolWireframe
--------------------------------------------------------------------------------------------------------------------------------------------------

![Image 18](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/recorder/recorder-tool-screen-tool.png)

*    React / Next.js
*    Other Frameworks

Copy

Ask AI

```
<VeltWireframe>
    <VeltRecorderScreenToolWireframe>
        {/* ... Add your content here */}
    </VeltRecorderScreenToolWireframe>
</VeltWireframe>
```

[​](https://docs.velt.dev/ui-customization/features/async/recorder/recorder-tool#styling)

Styling
==================================================================================================

[​](https://docs.velt.dev/ui-customization/features/async/recorder/recorder-tool#disable-shadowdom)

Disable ShadowDOM
----------------------------------------------------------------------------------------------------------------------

*   By default, ShadowDOM is used to ensure that your app’s CSS does not interfere with the styling of the SDK components.
*   Disable the shadow dom to apply your custom CSS to the component.

`Default: true`

*    React / Next.js
*    Other Frameworks

Copy

Ask AI

```
<VeltRecorderTool shadowDom={false} />
```

[​](https://docs.velt.dev/ui-customization/features/async/recorder/recorder-tool#dark-mode)

Dark Mode
------------------------------------------------------------------------------------------------------

`Default: false`

*    React / Next.js
*    Other Frameworks

Copy

Ask AI

```
<VeltRecorderTool darkMode={true} />
```

Was this page helpful?

Yes No

[Recorder player](https://docs.velt.dev/ui-customization/features/async/recorder/recorder-player)[Recording Preview Steps Dialog](https://docs.velt.dev/ui-customization/features/async/recorder/recording-preview-steps-dialog)

[twitter](https://twitter.com/veltjs)[linkedin](https://www.linkedin.com/company/veltjs)

[Powered by Mintlify](https://mintlify.com/preview-request?utm_campaign=poweredBy&utm_medium=referral&utm_source=velt)

Assistant

Responses are generated using AI and may contain mistakes.

![Image 19](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/recorder/recorder-tool-all-overview.png)

![Image 20](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/recorder/recorder-tool-all.png)

![Image 21](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/recorder/recorder-tool-audio.png)

![Image 22](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/recorder/recorder-tool-video.png)

![Image 23](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/recorder/recorder-tool-screen.png)

![Image 24](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/recorder/recorder-tool-audio-tool.png)

![Image 25](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/recorder/recorder-tool-video-tool.png)

![Image 26](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/recorder/recorder-tool-screen-tool.png)
