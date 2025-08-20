Title: Recording Preview Steps Dialog - Velt

URL Source: https://docs.velt.dev/ui-customization/features/async/recorder/recording-preview-steps-dialog

Markdown Content:
Overview
--------

![Image 1](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/recorder/recorder-player-expanded-transcription.png)

```
<VeltWireframe>
    <VeltRecordingPreviewStepsDialogWireframe>
        <VeltRecordingPreviewStepsDialogWireframe.Audio />
        <VeltRecordingPreviewStepsDialogWireframe.Video />
    </VeltRecordingPreviewStepsDialogWireframe>
</VeltWireframe>
```

### Audio

This component is used for audio recording preview.![Image 2](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/recorder/preview-breakdown-audio.png)

```
<VeltRecordingPreviewStepsDialogWireframe.Audio>
    <VeltRecordingPreviewStepsDialogWireframe.Audio.CloseButton />
    <VeltRecordingPreviewStepsDialogWireframe.Audio.Timer />
    <VeltRecordingPreviewStepsDialogWireframe.Audio.Waveform />
    <VeltRecordingPreviewStepsDialogWireframe.Audio.SettingsPanel />
    <VeltRecordingPreviewStepsDialogWireframe.Audio.ButtonPanel />
    <VeltRecordingPreviewStepsDialogWireframe.Audio.BottomPanel />
</VeltRecordingPreviewStepsDialogWireframe.Audio>
```

#### Audio Bottom Panel

Bottom panel of the audio recording preview dialog.![Image 3](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/recorder/preview-audio-bottom-panel.png)

```
<VeltRecordingPreviewStepsDialogWireframe.Audio.BottomPanel>
    <VeltRecordingPreviewStepsDialogWireframe.Audio.BottomPanel.Icon />
    <VeltRecordingPreviewStepsDialogWireframe.Audio.BottomPanel.Countdown />
    <VeltRecordingPreviewStepsDialogWireframe.Audio.BottomPanel.Close />
</VeltRecordingPreviewStepsDialogWireframe.Audio.BottomPanel>
```

##### Icon

![Image 4](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/recorder/preview-audio-bottom-panel-icon.png)

```
<VeltRecordingPreviewStepsDialogWireframe.Audio.BottomPanel.Icon />
```

##### Countdown

![Image 5](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/recorder/preview-audio-bottom-panel-timer.png)

```
<VeltRecordingPreviewStepsDialogWireframe.Audio.BottomPanel.Countdown />
```

##### Close

![Image 6](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/recorder/preview-audio-bottom-panel-close.png)

```
<VeltRecordingPreviewStepsDialogWireframe.Audio.BottomPanel.Close />
```

#### Audio Button Panel

Button panel of the audio recording preview dialog.![Image 7](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/recorder/preview-audio-button-panel.png)

```
<VeltRecordingPreviewStepsDialogWireframe.Audio.ButtonPanel>
    <VeltRecordingPreviewStepsDialogWireframe.Audio.StartRecording />
    <VeltRecordingPreviewStepsDialogWireframe.Audio.MicButton>
        <VeltRecordingPreviewStepsDialogWireframe.Audio.MicButton.On />
        <VeltRecordingPreviewStepsDialogWireframe.Audio.MicButton.Off />
    </VeltRecordingPreviewStepsDialogWireframe.Audio.MicButton>
    <VeltRecordingPreviewStepsDialogWireframe.Audio.Settings />
</VeltRecordingPreviewStepsDialogWireframe.Audio.ButtonPanel>
```

##### Start Recording

![Image 8](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/recorder/preview-audio-button-panel-start.png)

```
<VeltRecordingPreviewStepsDialogWireframe.Audio.StartRecording />
```

##### Mic Button

![Image 9](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/recorder/preview-audio-button-panel-mic.png)

```
<VeltRecordingPreviewStepsDialogWireframe.Audio.MicButton>
    <VeltRecordingPreviewStepsDialogWireframe.Audio.MicButton.On />
    <VeltRecordingPreviewStepsDialogWireframe.Audio.MicButton.Off />
</VeltRecordingPreviewStepsDialogWireframe.Audio.MicButton>
```

###### On

![Image 10](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/recorder/preview-audio-button-panel-mic-on.png)

```
<VeltRecordingPreviewStepsDialogWireframe.Audio.MicButton.On />
```

###### Off

![Image 11](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/recorder/preview-audio-button-panel-mic-off.png)

```
<VeltRecordingPreviewStepsDialogWireframe.Audio.MicButton.Off />
```

##### Settings

![Image 12](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/recorder/preview-audio-button-panel-settings.png)

```
<VeltRecordingPreviewStepsDialogWireframe.Audio.Settings />
```

#### Audio Timer

Timer of the audio recording preview dialog.![Image 13](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/recorder/preview-timer.png)

```
<VeltRecordingPreviewStepsDialogWireframe.Audio.Timer>
    <VeltRecordingPreviewStepsDialogWireframe.Audio.Timer.Countdown />
    <VeltRecordingPreviewStepsDialogWireframe.Audio.Timer.Cancel />
</VeltRecordingPreviewStepsDialogWireframe.Audio.Timer>
```

##### Countdown

```
<VeltRecordingPreviewStepsDialogWireframe.Audio.Timer.Countdown />
```

##### Cancel

```
<VeltRecordingPreviewStepsDialogWireframe.Audio.Timer.Cancel />
```

#### Close Button

![Image 14](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/recorder/preview-close.png)

```
<VeltRecordingPreviewStepsDialogWireframe.Audio.CloseButton />
```

#### Waveform

![Image 15](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/recorder/preview-audio-waveform.png)

```
<VeltRecordingPreviewStepsDialogWireframe.Audio.Waveform />
```

#### Settings Panel

![Image 16](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/recorder/preview-audio-button-panel-settings-panel.png)

```
<VeltRecordingPreviewStepsDialogWireframe.Audio.SettingsPanel />
```

### Video

This component is used for both video and screen recording previews.![Image 17](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/recorder/preview-breakdown-video.png)

```
<VeltRecordingPreviewStepsDialogWireframe.Video>
    <VeltRecordingPreviewStepsDialogWireframe.Video.Waveform />
    <VeltRecordingPreviewStepsDialogWireframe.Video.CloseButton />
    <VeltRecordingPreviewStepsDialogWireframe.Video.Timer />
    <VeltRecordingPreviewStepsDialogWireframe.Video.CameraOffMessage />
    <VeltRecordingPreviewStepsDialogWireframe.Video.SettingsPanel />
    <VeltRecordingPreviewStepsDialogWireframe.Video.ButtonPanel />
    <VeltRecordingPreviewStepsDialogWireframe.Video.BottomPanel />
    <VeltRecordingPreviewStepsDialogWireframe.Video.VideoPlayer />
</VeltRecordingPreviewStepsDialogWireframe.Video>
```

#### Video Bottom Panel

Bottom panel of the video recording preview dialog.![Image 18](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/recorder/preview-video-bottom-panel.png)

```
<VeltRecordingPreviewStepsDialogWireframe.Video.BottomPanel>
    <VeltRecordingPreviewStepsDialogWireframe.Video.BottomPanel.Icon />
    <VeltRecordingPreviewStepsDialogWireframe.Video.BottomPanel.Countdown />
    <VeltRecordingPreviewStepsDialogWireframe.Video.BottomPanel.Close />
</VeltRecordingPreviewStepsDialogWireframe.Video.BottomPanel>

// If you want to customize the Icon for individual media types, you can use the following:

<VeltRecordingPreviewStepsDialogWireframe.Video.BottomPanel.Icon type="audio">
    {/* Your custom icon here */}
</VeltRecordingPreviewStepsDialogWireframe.Video.BottomPanel.Icon>

<VeltRecordingPreviewStepsDialogWireframe.Video.BottomPanel.Icon type="video">
    {/* Your custom icon here */}
</VeltRecordingPreviewStepsDialogWireframe.Video.BottomPanel.Icon>

<VeltRecordingPreviewStepsDialogWireframe.Video.BottomPanel.Icon type="screen">
    {/* Your custom icon here */}
</VeltRecordingPreviewStepsDialogWireframe.Video.BottomPanel.Icon>
```

##### Icon

![Image 19](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/recorder/preview-video-bottom-panel-icon.png)

```
<VeltRecordingPreviewStepsDialogWireframe.Video.BottomPanel.Icon />

// To customize for a specific media type:
<VeltRecordingPreviewStepsDialogWireframe.Video.BottomPanel.Icon type="audio">{/* audio icon */}</VeltRecordingPreviewStepsDialogWireframe.Video.BottomPanel.Icon>
<VeltRecordingPreviewStepsDialogWireframe.Video.BottomPanel.Icon type="video">{/* video icon */}</VeltRecordingPreviewStepsDialogWireframe.Video.BottomPanel.Icon>
<VeltRecordingPreviewStepsDialogWireframe.Video.BottomPanel.Icon type="screen">{/* screen icon */}</VeltRecordingPreviewStepsDialogWireframe.Video.BottomPanel.Icon>
```

##### Countdown

![Image 20](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/recorder/preview-video-bottom-panel-timer.png)

```
<VeltRecordingPreviewStepsDialogWireframe.Video.BottomPanel.Countdown />
```

##### Close

![Image 21](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/recorder/preview-video-bottom-panel-close.png)

```
<VeltRecordingPreviewStepsDialogWireframe.Video.BottomPanel.Close />
```

#### Video Button Panel

Button panel of the video recording preview dialog.![Image 22](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/recorder/preview-video-button-panel.png)

```
<VeltRecordingPreviewStepsDialogWireframe.Video.ButtonPanel>
    <VeltRecordingPreviewStepsDialogWireframe.Video.StartRecording />
    <VeltRecordingPreviewStepsDialogWireframe.Video.MicButton>
        <VeltRecordingPreviewStepsDialogWireframe.Video.MicButton.On />
        <VeltRecordingPreviewStepsDialogWireframe.Video.MicButton.Off />
    </VeltRecordingPreviewStepsDialogWireframe.Video.MicButton>
    <VeltRecordingPreviewStepsDialogWireframe.Video.CameraButton>
        <VeltRecordingPreviewStepsDialogWireframe.Video.CameraButton.On />
        <VeltRecordingPreviewStepsDialogWireframe.Video.CameraButton.Off />
    </VeltRecordingPreviewStepsDialogWireframe.Video.CameraButton>
    <VeltRecordingPreviewStepsDialogWireframe.Video.Settings />
</VeltRecordingPreviewStepsDialogWireframe.Video.ButtonPanel>
```

##### Start Recording

![Image 23](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/recorder/preview-video-button-panel-start.png)

```
<VeltRecordingPreviewStepsDialogWireframe.Video.StartRecording />
```

##### Mic Button

![Image 24](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/recorder/preview-video-button-panel-mic.png)

```
<VeltRecordingPreviewStepsDialogWireframe.Video.MicButton>
    <VeltRecordingPreviewStepsDialogWireframe.Video.MicButton.On />
    <VeltRecordingPreviewStepsDialogWireframe.Video.MicButton.Off />
</VeltRecordingPreviewStepsDialogWireframe.Video.MicButton>
```

###### On

![Image 25](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/recorder/preview-video-button-panel-mic-on.png)

```
<VeltRecordingPreviewStepsDialogWireframe.Video.MicButton.On />
```

###### Off

![Image 26](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/recorder/preview-video-button-panel-mic-off.png)

```
<VeltRecordingPreviewStepsDialogWireframe.Video.MicButton.Off />
```

##### Camera Button

![Image 27](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/recorder/preview-video-button-panel-camera.png)

```
<VeltRecordingPreviewStepsDialogWireframe.Video.CameraButton>
    <VeltRecordingPreviewStepsDialogWireframe.Video.CameraButton.On />
    <VeltRecordingPreviewStepsDialogWireframe.Video.CameraButton.Off />
</VeltRecordingPreviewStepsDialogWireframe.Video.CameraButton>
```

###### On

![Image 28](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/recorder/preview-video-button-panel-camera-on.png)

```
<VeltRecordingPreviewStepsDialogWireframe.Video.CameraButton.On />
```

###### Off

![Image 29](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/recorder/preview-video-button-panel-camera-off.png)

```
<VeltRecordingPreviewStepsDialogWireframe.Video.CameraButton.Off />
```

##### Settings

![Image 30](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/recorder/preview-video-button-panel-settings.png)

```
<VeltRecordingPreviewStepsDialogWireframe.Video.Settings />
```

#### Video Timer

Timer of the video recording preview dialog.![Image 31](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/recorder/preview-timer.png)

```
<VeltRecordingPreviewStepsDialogWireframe.Video.Timer>
    <VeltRecordingPreviewStepsDialogWireframe.Video.Timer.Countdown />
    <VeltRecordingPreviewStepsDialogWireframe.Video.Timer.Cancel />
</VeltRecordingPreviewStepsDialogWireframe.Video.Timer>
```

##### Countdown

```
<VeltRecordingPreviewStepsDialogWireframe.Video.Timer.Countdown />
```

##### Cancel

```
<VeltRecordingPreviewStepsDialogWireframe.Video.Timer.Cancel />
```

#### Waveform

![Image 32](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/recorder/preview-video-waveform.png)

```
<VeltRecordingPreviewStepsDialogWireframe.Video.Waveform />
```

#### Close Button

![Image 33](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/recorder/preview-close.png)

```
<VeltRecordingPreviewStepsDialogWireframe.Video.CloseButton />
```

#### Camera Off Message

![Image 34](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/recorder/preview-camera-off.png)

```
<VeltRecordingPreviewStepsDialogWireframe.Video.CameraOffMessage />
```

#### Settings Panel

![Image 35](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/recorder/preview-video-button-panel-settings-panel.png)

```
<VeltRecordingPreviewStepsDialogWireframe.Video.SettingsPanel />
```

#### Video Player

![Image 36](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/recorder/preview-video-player.png)

```
<VeltRecordingPreviewStepsDialogWireframe.Video.VideoPlayer />
```
