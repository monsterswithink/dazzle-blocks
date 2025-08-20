Title: Single Editor Mode - Velt

URL Source: https://docs.velt.dev/ui-customization/features/realtime/single-editor-mode

Markdown Content:
VeltSingleEditorModePanelWireframe
----------------------------------

![Image 1](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/single-editor/single-editor-overview.png)

```
<VeltWireframe>
    <VeltSingleEditorModePanelWireframe>
        <VeltSingleEditorModePanelWireframe.ViewerText />
        <VeltSingleEditorModePanelWireframe.EditorText />
        <VeltSingleEditorModePanelWireframe.Countdown />
        
        {/* Editor sees this button when they try to edit in a different tab */}
        <VeltSingleEditorModePanelWireframe.EditHere />
        
        {/* Editor sees these buttons when Viewer requests access */}
        <VeltSingleEditorModePanelWireframe.AcceptRequest />
        <VeltSingleEditorModePanelWireframe.RejectRequest />
        
        {/* Viewer sees this button by default */}
        <VeltSingleEditorModePanelWireframe.RequestAccess />

        {/* Viewer sees this button when they have already requested access */}
        <VeltSingleEditorModePanelWireframe.CancelRequest />
    </VeltSingleEditorModePanelWireframe>
</VeltWireframe>
```

### ViewerText

![Image 2](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/single-editor/single-editor-viewer-text.png)

```
<VeltWireframe>
    <VeltSingleEditorModePanelWireframe.ViewerText />
</VeltWireframe>
```

### EditorText

![Image 3](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/single-editor/single-editor-active-editor-text.png)

```
<VeltWireframe>
    <VeltSingleEditorModePanelWireframe.EditorText />
</VeltWireframe>
```

### Countdown

![Image 4](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/single-editor/single-editor-countdown.png)

```
<VeltWireframe>
    <VeltSingleEditorModePanelWireframe.Countdown />
</VeltWireframe>
```

### EditHere

![Image 5](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/single-editor/single-editor-edit-here.png)

```
<VeltWireframe>
    <VeltSingleEditorModePanelWireframe.EditHere />
</VeltWireframe>
```

### AcceptRequest

![Image 6](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/single-editor/single-editor-accept-request.png)

```
<VeltWireframe>
    <VeltSingleEditorModePanelWireframe.AcceptRequest />
</VeltWireframe>
```

### RejectRequest

![Image 7](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/single-editor/single-editor-reject-request.png)

```
<VeltWireframe>
    <VeltSingleEditorModePanelWireframe.RejectRequest />
</VeltWireframe>
```

### RequestAccess

![Image 8](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/single-editor/single-editor-request-access.png)

```
<VeltWireframe>
    <VeltSingleEditorModePanelWireframe.RequestAccess />
</VeltWireframe>
```

### CancelRequest

![Image 9](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/single-editor/single-editor-cancel-request.png)

```
<VeltWireframe>
    <VeltSingleEditorModePanelWireframe.CancelRequest />
</VeltWireframe>
```

Styling
-------

### Disable ShadowDOM

*   By default, Shadow DOM is used to ensure that your app’s CSS does not interfere with the styling of the SDK components.
*   Disable the shadow dom to apply your custom CSS to the component.

Default: `true`

```
<VeltSingleEditorModePanel shadowDom={false} />
```

### Dark Mode

By default, all components are in Light Mode. Use this prop to enable Dark Mode.Default: `false`

```
<VeltSingleEditorModePanel darkMode={true} />
```

### Variants

You can apply variants like you do for other components. You need to define variants using Wireframes. Read more here [here](https://docs.velt.dev/ui-customization/layout#create-custom-variants).

```
<VeltSingleEditorModePanel variant="variant-name" />
```

Was this page helpful?
