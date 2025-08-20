Title: Inline Reactions Section - Velt

URL Source: https://docs.velt.dev/ui-customization/features/async/inline-reactions

Markdown Content:
VeltInlineReactionsSectionWireframe
-----------------------------------

![Image 1](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/comments/inline-reactions/inline-reactions-overview.png)

```
<VeltWireframe>
    <VeltInlineReactionsSectionWireframe>
        <VeltInlineReactionsSectionWireframe.Panel />
    </VeltInlineReactionsSectionWireframe>
</VeltWireframe>
```

### Panel

![Image 2](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/comments/inline-reactions/inline-reactions-overview-breakdown.png)

```
<VeltWireframe>
    <VeltInlineReactionsSectionWireframe.Panel>
        <VeltInlineReactionsSectionWireframe.ToolContainer />
        <VeltInlineReactionsSectionWireframe.List />
    </VeltInlineReactionsSectionWireframe.Panel>
</VeltWireframe>
```

#### ToolContainer

![Image 3](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/comments/inline-reactions/inline-reactions-tool-container.png)

```
<VeltWireframe>
    <VeltInlineReactionsSectionWireframe.ToolContainer>
        <VeltReactionToolWireframe />
    </VeltInlineReactionsSectionWireframe.ToolContainer>
</VeltWireframe>
```

##### VeltReactionToolWireframe

```
<VeltWireframe>
    <VeltReactionToolWireframe />
</VeltWireframe>
```

#### List

![Image 4](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/comments/inline-reactions/inline-reactions-list.png)

```
<VeltWireframe>
    <VeltInlineReactionsSectionWireframe.List>
        <VeltReactionPinWireframe />
    </VeltInlineReactionsSectionWireframe.List>
</VeltWireframe>
```

##### VeltReactionPinWireframe

```
<VeltWireframe>
    <VeltReactionPinWireframe />
</VeltWireframe>
```

Styling
-------

### Disable ShadowDOM

*   By default, ShadowDOM is used to ensure that your app’s CSS does not interfere with the styling of the SDK components.
*   Disable the shadow dom to apply your custom CSS to the component.

Default: `true`

```
<VeltInlineReactionsSection shadowDom={false} />
```

### Dark Mode

Default: `false`

**Using Props:**

```
<VeltInlineReactionsSection darkMode={true} />
```

**Using API:**

```
const reactionElement = client.getReactionElement();
reactionElement.enableDarkMode();
reactionElement.disableDarkMode();
```

Variants
--------

### Pre-defined Variants

The Inline Reactions has 1 pre-defined variant:

*   `inline`: This will customize the default components inside the Inline Reactions Component.

You can define your own variants and use them in different places of your app.

```
<VeltWireframe>
    <VeltInlineReactionsSection variant="inline"></VeltInlineReactionsSection>
</VeltWireframe>
```

Was this page helpful?
