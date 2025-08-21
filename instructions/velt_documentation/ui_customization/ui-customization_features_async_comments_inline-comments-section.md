Title: Inline Comments Section - Velt

URL Source: https://docs.velt.dev/ui-customization/features/async/comments/inline-comments-section

Markdown Content:
![Image 1](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/comments/inline-comments/inline-comments-overview.png)

```
<VeltWireframe>
    <VeltInlineCommentsSectionWireframe>
        <VeltInlineCommentsSectionWireframe.Skeleton />
        <VeltInlineCommentsSectionWireframe.Panel />
    </VeltInlineCommentsSectionWireframe>
</VeltWireframe>
```

### Skeleton

![Image 2](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/comments/inline-comments/inline-comments-skeleton.png)

```
<VeltWireframe>
    <VeltInlineCommentsSectionWireframe.Skeleton />
</VeltWireframe>
```

### Panel

![Image 3](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/comments/inline-comments/inline-comments-panel.png)

```
<VeltWireframe>
    <VeltInlineCommentsSectionWireframe.Panel>
        <VeltInlineCommentsSectionWireframe.ComposerContainer />
        <VeltInlineCommentsSectionWireframe.SortingDropdown />
        <VeltInlineCommentsSectionWireframe.CommentCount />
        <VeltInlineCommentsSectionWireframe.List />
    </VeltInlineCommentsSectionWireframe.Panel>
</VeltWireframe>
```

#### ComposerContainer

![Image 4](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/comments/inline-comments/inline-comments-panel-composer.png)

```
<VeltWireframe>
    <VeltInlineCommentsSectionWireframe.ComposerContainer>
        <VeltCommentDialogWireframe.Composer />
    </VeltInlineCommentsSectionWireframe.ComposerContainer>
</VeltWireframe>
```

##### **VeltCommentDialogWireframe.Composer**

You can find the wireframe for the `Comment Dialog Composer`[here](https://docs.velt.dev/ui-customization/features/async/comments/comment-dialog/subcomponents/composer/overview).

#### SortingDropdown

![Image 5](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/comments/inline-comments/inline-comments-panel-sorting-dropdown.png)

```
<VeltWireframe>
    <VeltInlineCommentsSectionWireframe.SortingDropdown>
        <VeltInlineCommentsSectionWireframe.SortingDropdown.Trigger />
        <VeltInlineCommentsSectionWireframe.SortingDropdown.Content />
    </VeltInlineCommentsSectionWireframe.SortingDropdown>
</VeltWireframe>
```

##### **Trigger**

![Image 6](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/comments/inline-comments/inline-comments-panel-sorting-trigger.png)

```
<VeltWireframe>
    <VeltInlineCommentsSectionWireframe.SortingDropdown.Trigger>
        <VeltInlineCommentsSectionWireframe.SortingDropdown.Trigger.Name />
        <VeltInlineCommentsSectionWireframe.SortingDropdown.Trigger.Icon />
    </VeltInlineCommentsSectionWireframe.SortingDropdown.Trigger>
</VeltWireframe>
```

##### **Name**

![Image 7](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/comments/inline-comments/inline-comments-panel-sorting-trigger-name.png)

```
<VeltWireframe>
    <VeltInlineCommentsSectionWireframe.SortingDropdown.Trigger.Name />
</VeltWireframe>
```

##### **Icon**

![Image 8](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/comments/inline-comments/inline-comments-panel-sorting-trigger-icon.png)

```
<VeltWireframe>
    <VeltInlineCommentsSectionWireframe.SortingDropdown.Trigger.Icon />
</VeltWireframe>
```

##### **Content**

![Image 9](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/comments/inline-comments/inline-comments-panel-trigger-dropdown-content.png)

```
<VeltWireframe>
    <VeltInlineCommentsSectionWireframe.SortingDropdown.Content>
        <VeltInlineCommentsSectionWireframe.SortingDropdown.Content.Item />
    </VeltInlineCommentsSectionWireframe.SortingDropdown.Content>
</VeltWireframe>
```

##### **Item**

![Image 10](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/comments/inline-comments/inline-comments-panel-trigger-dropdown-content-item.png)

```
<VeltWireframe>
    <VeltInlineCommentsSectionWireframe.SortingDropdown.Content.Item>
        <VeltInlineCommentsSectionWireframe.SortingDropdown.Content.Item.Icon />
        <VeltInlineCommentsSectionWireframe.SortingDropdown.Content.Item.Tick />
        <VeltInlineCommentsSectionWireframe.SortingDropdown.Content.Item.Name />
    </VeltInlineCommentsSectionWireframe.SortingDropdown.Content.Item>
</VeltWireframe>
```

![Image 11](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/comments/inline-comments/inline-comments-panel-comment-count.png)

```
<VeltWireframe>
    <VeltInlineCommentsSectionWireframe.CommentCount />
</VeltWireframe>
```

#### List

![Image 12](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/comments/inline-comments/inline-comments-panel-list.png)

```
<VeltWireframe>
    <VeltInlineCommentsSectionWireframe.List>
        <VeltCommentDialogWireframe />
    </VeltInlineCommentsSectionWireframe.List>
</VeltWireframe>
```

##### **VeltCommentDialogWireframe**

You can find the wireframe for the `Comment Dialog`[here](https://docs.velt.dev/ui-customization/features/async/comments/comment-dialog/overview).

Pre-defined Variants
--------------------

Here are the pre-deinfed variants:

1.   `dialog-variant`: Use this to customize the `Comment Dialog` that appears within the `Inline Comments Section` component.
2.   `variant`: Use this to customize the entire `Inline Comments Section` component itself.
3.   `composer-variant`: Use this to customize the main Composer that appears within the `Inline Comments Section` component.

React / Next.js

```
<VeltInlineCommentsSection
	dialogVariant="dialog-variant-name"
    variant="inline-comment-section-variant-name"
    composerVariant="inline"
/>
```
