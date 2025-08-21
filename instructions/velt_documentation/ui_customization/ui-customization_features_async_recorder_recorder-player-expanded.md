Title: Recorder Player Expanded - Velt

URL Source: https://docs.velt.dev/ui-customization/features/async/recorder/recorder-player-expanded

Markdown Content:
Overview
--------

![Image 1](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/recorder/recorder-player-expanded-overview.png)

```
<VeltWireframe>
    <VeltRecorderPlayerExpandedWireframe>
        <VeltRecorderPlayerExpandedWireframe.Panel />
        <VeltRecorderPlayerExpandedWireframe.Transcription />
    </VeltRecorderPlayerExpandedWireframe>
</VeltWireframe>
```

Panel
-----

![Image 2](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/recorder/recorder-player-expanded-panel-overview.png)

```
<VeltWireframe>
    <VeltRecorderPlayerExpandedWireframe.Panel>
        <VeltRecorderPlayerExpandedWireframe.Display />
        <VeltRecorderPlayerExpandedWireframe.CopyLink />
        <VeltRecorderPlayerExpandedWireframe.MinimizeButton />
        <VeltRecorderPlayerExpandedWireframe.Subtitles />
        <VeltRecorderPlayerExpandedWireframe.Controls />
    </VeltRecorderPlayerExpandedWireframe.Panel>
</VeltWireframe>
```

#### Display

![Image 3](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/recorder/recorder-player-expanded-panel-display.png)

```
<VeltWireframe>
    <VeltRecorderPlayerExpandedWireframe.Display />
</VeltWireframe>
```

#### Subtitles

![Image 4](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/recorder/recorder-player-expanded-panel-subtitles.png)

```
<VeltWireframe>
    <VeltRecorderPlayerExpandedWireframe.Subtitles />
</VeltWireframe>
```

#### CopyLink

![Image 5](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/recorder/recorder-player-expanded-panel-copy-link.png)

```
<VeltWireframe>
    <VeltRecorderPlayerExpandedWireframe.CopyLink />
</VeltWireframe>
```

#### MinimizeButton

![Image 6](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/recorder/recorder-player-expanded-panel-minimize.png)

```
<VeltWireframe>
    <VeltRecorderPlayerExpandedWireframe.MinimizeButton />
</VeltWireframe>
```

#### Controls

![Image 7](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/recorder/recorder-player-expanded-panel-controls.png)

```
<VeltWireframe>
    <VeltRecorderPlayerExpandedWireframe.Controls>
        <VeltRecorderPlayerExpandedWireframe.Controls.ProgressBar />
        <VeltRecorderPlayerExpandedWireframe.Controls.ToggleButton />
        <VeltRecorderPlayerExpandedWireframe.Controls.Time />
        <VeltRecorderPlayerExpandedWireframe.Controls.SubtitleButton />
        <VeltRecorderPlayerExpandedWireframe.Controls.TranscriptionButton />
        <VeltRecorderPlayerExpandedWireframe.Controls.VolumeButton />
        <VeltRecorderPlayerExpandedWireframe.Controls.SettingsButton />
        <VeltRecorderPlayerExpandedWireframe.Controls.DeleteButton />
    </VeltRecorderPlayerExpandedWireframe.Controls>
</VeltWireframe>
```

#### ProgressBar

![Image 8](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/recorder/recorder-player-expanded-panel-controls-progress-bar.png)

```
<VeltWireframe>
    <VeltRecorderPlayerExpandedWireframe.Controls.ProgressBar />
</VeltWireframe>
```

#### ToggleButton

![Image 9](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/recorder/recorder-player-expanded-panel-controls-toggle-icon.png)

```
<VeltWireframe>
    <VeltRecorderPlayerExpandedWireframe.Controls.ToggleButton>
        <VeltRecorderPlayerExpandedWireframe.Controls.ToggleButton.Pause />
        <VeltRecorderPlayerExpandedWireframe.Controls.ToggleButton.Play />
    </VeltRecorderPlayerExpandedWireframe.Controls.ToggleButton>
</VeltWireframe>
```

##### Pause

```
<VeltWireframe>
    <VeltRecorderPlayerExpandedWireframe.Controls.ToggleButton.Pause />
</VeltWireframe>
```

##### Play

```
<VeltWireframe>
    <VeltRecorderPlayerExpandedWireframe.Controls.ToggleButton.Play />
</VeltWireframe>
```

#### Time

![Image 10](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/recorder/recorder-player-expanded-panel-controls-time.png)

```
<VeltWireframe>
    <VeltRecorderPlayerExpandedWireframe.Controls.Time>
        <VeltRecorderPlayerExpandedWireframe.Controls.CurrentTime />
				<!-- Add custom divider by adding any tag like <p> / <p> -->
        <VeltRecorderPlayerExpandedWireframe.Controls.TotalTime />
    </VeltRecorderPlayerExpandedWireframe.Controls.Time>
</VeltWireframe>
```

##### CurrentTime

```
<VeltWireframe>
    <VeltRecorderPlayerExpandedWireframe.Controls.CurrentTime />
</VeltWireframe>
```

##### TotalTime

```
<VeltWireframe>
    <VeltRecorderPlayerExpandedWireframe.Controls.TotalTime />
</VeltWireframe>
```

#### SubtitleButton

![Image 11](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/recorder/recorder-player-expanded-panel-controls-subtitles.png)

```
<VeltWireframe>
    <VeltRecorderPlayerExpandedWireframe.Controls.SubtitleButton>
        <VeltRecorderPlayerExpandedWireframe.Controls.SubtitleButton.Icon />
        <VeltRecorderPlayerExpandedWireframe.Controls.SubtitleButton.Tooltip />
    </VeltRecorderPlayerExpandedWireframe.Controls.SubtitleButton>
</VeltWireframe>
```

##### Icon

```
<VeltWireframe>
    <VeltRecorderPlayerExpandedWireframe.Controls.SubtitleButton.Icon />
</VeltWireframe>
```

##### Tooltip

```
<VeltWireframe>
    <VeltRecorderPlayerExpandedWireframe.Controls.SubtitleButton.Tooltip />
</VeltWireframe>
```

#### TranscriptionButton

![Image 12](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/recorder/recorder-player-expanded-panel-controls-transcription.png)

```
<VeltWireframe>
    <VeltRecorderPlayerExpandedWireframe.Controls.TranscriptionButton>
        <VeltRecorderPlayerExpandedWireframe.Controls.TranscriptionButton.Icon />
        <VeltRecorderPlayerExpandedWireframe.Controls.TranscriptionButton.Tooltip />
    </VeltRecorderPlayerExpandedWireframe.Controls.TranscriptionButton>
</VeltWireframe>
```

##### Icon

```
<VeltWireframe>
    <VeltRecorderPlayerExpandedWireframe.Controls.TranscriptionButton.Icon />
</VeltWireframe>
```

##### Tooltip

```
<VeltWireframe>
    <VeltRecorderPlayerExpandedWireframe.Controls.TranscriptionButton.Tooltip />
</VeltWireframe>
```

#### VolumeButton

![Image 13](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/recorder/recorder-player-expanded-panel-controls-volume.png)

```
<VeltWireframe>
    <VeltRecorderPlayerExpandedWireframe.Controls.VolumeButton />
</VeltWireframe>
```

#### SettingsButton

![Image 14](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/recorder/recorder-player-expanded-panel-controls-settings.png)

```
<VeltWireframe>
    <VeltRecorderPlayerExpandedWireframe.Controls.SettingsButton />
</VeltWireframe>
```

#### DeleteButton

![Image 15](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/recorder/recorder-player-expanded-panel-controls-delete.png)

```
<VeltWireframe>
    <VeltRecorderPlayerExpandedWireframe.Controls.DeleteButton />
</VeltWireframe>
```

Transcription
-------------

![Image 16](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/recorder/recorder-player-expanded-transcription.png)

```
<VeltWireframe>
    <VeltRecorderPlayerExpandedWireframe.Transcription />
</VeltWireframe>
```

Was this page helpful?
