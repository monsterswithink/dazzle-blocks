Title: Recorder player - Velt

URL Source: https://docs.velt.dev/ui-customization/features/async/recorder/recorder-player

Markdown Content:
Overview
--------

![Image 1](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/recorder/recorder-player-overview.png)

```
<VeltWireframe>
    <VeltRecorderPlayerWireframe>
        <VeltRecorderPlayerWireframe.VideoContainer />
        <VeltRecorderPlayerWireframe.AudioContainer />
    </VeltRecorderPlayerWireframe>
</VeltWireframe>
```

VideoContainer
--------------

![Image 2](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/recorder/recorder-player-video.png)

```
<VeltWireframe>
    <VeltRecorderPlayerWireframe.VideoContainer>
        <VeltRecorderPlayerWireframe.VideoContainer.Video />
        <VeltRecorderPlayerWireframe.VideoContainer.Timeline />
        <VeltRecorderPlayerWireframe.VideoContainer.FullScreenButton />
        <VeltRecorderPlayerWireframe.VideoContainer.Overlay />
        <VeltRecorderPlayerWireframe.VideoContainer.Subtitles />
        <VeltRecorderPlayerWireframe.VideoContainer.Avatar />
        <VeltRecorderPlayerWireframe.VideoContainer.Name />
        <VeltRecorderPlayerWireframe.VideoContainer.SubtitlesButton />
        <VeltRecorderPlayerWireframe.VideoContainer.Transcription />
        <VeltRecorderPlayerWireframe.VideoContainer.EditButton />
        <VeltRecorderPlayerWireframe.VideoContainer.CopyLink />
        <VeltRecorderPlayerWireframe.VideoContainer.Delete />
    </VeltRecorderPlayerWireframe.VideoContainer>
</VeltWireframe>
```

#### Video

![Image 3](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/recorder/recorder-player-video.png)

```
<VeltWireframe>
    <VeltRecorderPlayerWireframe.VideoContainer.Video />
</VeltWireframe>
```

#### Timeline

![Image 4](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/recorder/recorder-player-video-timeline.png)

```
<VeltWireframe>
    <VeltRecorderPlayerWireframe.VideoContainer.Timeline>
        <VeltRecorderPlayerWireframe.VideoContainer.PlayButton />
        <VeltRecorderPlayerWireframe.VideoContainer.Timeline.SeekBar />
    </VeltRecorderPlayerWireframe.VideoContainer.Timeline>
</VeltWireframe>
```

#### PlayButton

![Image 5](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/recorder/recorder-player-video-playbutton.png)

```
<VeltWireframe>
    <VeltRecorderPlayerWireframe.VideoContainer.PlayButton />
</VeltWireframe>
```

#### SeekBar

![Image 6](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/recorder/recorder-player-video-seekbar.png)

```
<VeltWireframe>
    <VeltRecorderPlayerWireframe.VideoContainer.Timeline.SeekBar />
</VeltWireframe>
```

#### FullScreenButton

![Image 7](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/recorder/recorder-player-video-minimize.png)

```
<VeltWireframe>
    <VeltRecorderPlayerWireframe.VideoContainer.FullScreenButton />
</VeltWireframe>
```

#### Overlay

![Image 8](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/recorder/recorder-player-video-overlay.png)

```
<VeltWireframe>
    <VeltRecorderPlayerWireframe.VideoContainer.Overlay>
        <VeltRecorderPlayerWireframe.VideoContainer.PlayButton />
    </VeltRecorderPlayerWireframe.VideoContainer.Overlay>
</VeltWireframe>
```

#### PlayButton

![Image 9](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/recorder/recorder-player-video-playbutton.png)

```
<VeltWireframe>
    <VeltRecorderPlayerWireframe.VideoContainer.PlayButton>
        <VeltRecorderPlayerWireframe.VideoContainer.Time />
    </VeltRecorderPlayerWireframe.VideoContainer.PlayButton>
</VeltWireframe>
```

#### Time

```
<VeltWireframe>
    <VeltRecorderPlayerWireframe.VideoContainer.Time />
</VeltWireframe>
```

#### Subtitles

![Image 10](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/recorder/recorder-player-video-subtitles.png)

```
<VeltWireframe>
    <VeltRecorderPlayerWireframe.VideoContainer.Subtitles />
</VeltWireframe>
```

#### Avatar

![Image 11](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/recorder/recorder-player-video-avatar.png)

```
<VeltWireframe>
    <VeltRecorderPlayerWireframe.VideoContainer.Avatar />
</VeltWireframe>
```

#### Name

![Image 12](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/recorder/recorder-player-video-name.png)

```
<VeltWireframe>
    <VeltRecorderPlayerWireframe.VideoContainer.Name />
</VeltWireframe>
```

#### SubtitlesButton

![Image 13](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/recorder/recorder-player-video-subtitles-button.png)

```
<VeltWireframe>
    <VeltRecorderPlayerWireframe.VideoContainer.SubtitlesButton />
</VeltWireframe>
```

#### Transcription

![Image 14](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/recorder/recorder-player-video-transcript.png)

```
<VeltWireframe>
    <VeltRecorderPlayerWireframe.VideoContainer.Transcription />
</VeltWireframe>
```

#### EditButton

```
<VeltWireframe>
    <VeltRecorderPlayerWireframe.VideoContainer.EditButton />
</VeltWireframe>
```

#### CopyLink

![Image 15](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/recorder/recorder-player-video-copy-link.png)

```
<VeltWireframe>
    <VeltRecorderPlayerWireframe.VideoContainer.CopyLink />
</VeltWireframe>
```

#### Delete

![Image 16](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/recorder/recorder-player-video-delete.png)

```
<VeltWireframe>
    <VeltRecorderPlayerWireframe.VideoContainer.Delete />
</VeltWireframe>
```

AudioContainer
--------------

![Image 17](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/recorder/recorder-player-audio.png)

```
<VeltWireframe>
    <VeltRecorderPlayerWireframe.AudioContainer>
        <VeltRecorderPlayerWireframe.AudioContainer.AudioToggle />
        <VeltRecorderPlayerWireframe.AudioContainer.Time />
        <VeltRecorderPlayerWireframe.AudioContainer.AudioWaveform />
        <VeltRecorderPlayerWireframe.AudioContainer.Avatar />
        <VeltRecorderPlayerWireframe.AudioContainer.Name />
        <VeltRecorderPlayerWireframe.AudioContainer.SubtitlesButton />
        <VeltRecorderPlayerWireframe.AudioContainer.Transcription />
        <VeltRecorderPlayerWireframe.AudioContainer.CopyLink />
        <VeltRecorderPlayerWireframe.AudioContainer.Delete />
        <VeltRecorderPlayerWireframe.AudioContainer.Subtitles />
        <VeltRecorderPlayerWireframe.AudioContainer.Audio />
    </VeltRecorderPlayerWireframe.AudioContainer>
</VeltWireframe>
```

#### AudioToggle

![Image 18](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/recorder/recorder-player-audio-toggle.png)

```
<VeltWireframe>
    <VeltRecorderPlayerWireframe.AudioContainer.AudioToggle>
        <VeltRecorderPlayerWireframe.AudioContainer.AudioToggle.Pause />
        <VeltRecorderPlayerWireframe.AudioContainer.AudioToggle.Play />
    </VeltRecorderPlayerWireframe.AudioContainer.AudioToggle>
</VeltWireframe>
```

#### Pause

```
<VeltWireframe>
    <VeltRecorderPlayerWireframe.AudioContainer.AudioToggle.Pause />
</VeltWireframe>
```

#### Play

```
<VeltWireframe>
    <VeltRecorderPlayerWireframe.AudioContainer.AudioToggle.Play />
</VeltWireframe>
```

#### Time

![Image 19](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/recorder/recorder-player-audio-time.png)

```
<VeltWireframe>
    <VeltRecorderPlayerWireframe.AudioContainer.Time />
</VeltWireframe>
```

#### AudioWaveform

![Image 20](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/recorder/recorder-player-audio-waveform.png)

```
<VeltWireframe>
    <VeltRecorderPlayerWireframe.AudioContainer.AudioWaveform />
</VeltWireframe>
```

#### Subtitles

![Image 21](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/recorder/recorder-player-audio-subtitles.png)

```
<VeltWireframe>
    <VeltRecorderPlayerWireframe.AudioContainer.Subtitles />
</VeltWireframe>
```

#### Avatar

![Image 22](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/recorder/recorder-player-audio-avatar.png)

```
<VeltWireframe>
    <VeltRecorderPlayerWireframe.AudioContainer.Avatar />
</VeltWireframe>
```

#### Name

![Image 23](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/recorder/recorder-player-audio-name.png)

```
<VeltWireframe>
    <VeltRecorderPlayerWireframe.AudioContainer.Name />
</VeltWireframe>
```

#### SubtitlesButton

![Image 24](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/recorder/recorder-player-audio-subtitles-button.png)

```
<VeltWireframe>
    <VeltRecorderPlayerWireframe.AudioContainer.SubtitlesButton />
</VeltWireframe>
```

#### Transcription

![Image 25](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/recorder/recorder-player-audio-transcription.png)

```
<VeltWireframe>
    <VeltRecorderPlayerWireframe.AudioContainer.Transcription />
</VeltWireframe>
```

#### CopyLink

![Image 26](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/recorder/recorder-player-audio-copy-link.png)

```
<VeltWireframe>
    <VeltRecorderPlayerWireframe.AudioContainer.CopyLink />
</VeltWireframe>
```

#### Delete

![Image 27](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/recorder/recorder-player-audio-delete.png)

```
<VeltWireframe>
    <VeltRecorderPlayerWireframe.AudioContainer.Delete />
</VeltWireframe>
```

#### Audio

This tag loads the audio recording and is hidden by default to prevent it from displaying in the UI.

```
<VeltWireframe>
    <VeltRecorderPlayerWireframe.AudioContainer.Audio />
</VeltWireframe>
```

Was this page helpful?
