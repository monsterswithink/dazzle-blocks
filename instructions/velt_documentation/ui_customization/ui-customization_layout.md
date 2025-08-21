Title: Layout Customization - Velt

URL Source: https://docs.velt.dev/ui-customization/layout

Markdown Content:
Overview
--------

This lets you modify how components are structured and rendered in your app. You can:

*   Replace default HTML with your own components and HTML structure
*   Remove or reorder components
*   Create multiple variants of the same component

Ways to Customize Layout
------------------------

### Single Component Customization (Targeted)

This lets you customize individual parts of a component without dealing with the entire structure. **We recommend this approach for most use cases**.**Benefits:**

*   Simpler, more maintainable code
*   Focus on just the parts you need to change
*   Greater flexibility for specific UI elements

**Example:** Customizing just the Comment Dialog header:

```
<VeltWireframe>
    <VeltCommentDialogWireframe.Header>
        <div className="custom-header">
            <VeltCommentDialogWireframe.Status />
            <VeltCommentDialogWireframe.Priority />
            <VeltCommentDialogWireframe.Options />
            <VeltCommentDialogWireframe.CopyLink />
            <VeltCommentDialogWireframe.ResolveButton />
        </div>
    </VeltCommentDialogWireframe.Header>
</VeltWireframe>
```

### Full Component Tree Customization (Comprehensive)

Use this pattern when you need to modify the entire component structure or multiple related components.**Benefits:**

*   Complete control over component hierarchy
*   Easier to modify relationships between components
*   Better for large-scale structural changes

**Drawbacks:**

*   Custom CSS required for the entire component tree since adding children components to wireframes removes Velt’s default styles.

**Example:** Customizing the entire Comment Dialog structure:

```
<VeltWireframe>
    <VeltCommentDialogWireframe>
        <VeltCommentDialogWireframe.GhostBanner />
        <VeltCommentDialogWireframe.AssigneeBanner />
        <div className="dialog-content">
            <VeltCommentDialogWireframe.Header />
            <VeltCommentDialogWireframe.Body />
            <VeltCommentDialogWireframe.Composer />
            <VeltCommentDialogWireframe.AllComment />
        </div>
    </VeltCommentDialogWireframe>
</VeltWireframe>
```

Variants
--------

Variants allow you to:

*   Create multiple styled versions of the same component
*   Switch between them dynamically in different parts of your app
*   Maintain consistent behavior while having different looks

### Create Custom Variants

Custom variants let you define your own versions of components. For example: You can have a variant of Comment Sidebar for one page and another for another page.

1

2

### Use Pre-defined Variants

Many components come with built-in variants optimized for specific use cases. For example, the Comment Dialog has two pre-defined variants for different contexts:

```
<VeltWireframe>
    {/* For Pin, Area, and Text comments */}
    <VeltCommentDialogWireframe variant="dialog">
        {/* Custom layout */}
    </VeltCommentDialogWireframe>

    {/* For Sidebar comments */}
    <VeltCommentDialogWireframe variant="sidebar">
        {/* Custom layout */}
    </VeltCommentDialogWireframe>
</VeltWireframe>
```

Common Customization Tasks
--------------------------

### Replace Default Layout

Simply provide your own HTML or components as children of the wireframe component:

```
<VeltWireframe>
    <VeltCommentDialogWireframe.Composer.ActionButton type="attachments">
        <button className="custom-attachment-btn">
            <CustomIcon />
            Add Files
        </button>
    </VeltCommentDialogWireframe.Composer.ActionButton>
</VeltWireframe>
```

### Remove Components

To remove a component, you either:

*   simply omit it from the wireframe template as shown below, or
*   use [Conditional Templates](https://docs.velt.dev/ui-customization/conditional-templates)

```
<VeltWireframe>
    <VeltCommentDialogWireframe.Header>
        {/* Priority and CopyLink buttons removed */}
        <VeltCommentDialogWireframe.Status />
        <VeltCommentDialogWireframe.Options />
        <VeltCommentDialogWireframe.ResolveButton />
    </VeltCommentDialogWireframe.Header>
</VeltWireframe>
```

### Reorder Components

To reorder components, simply rearrange them within the wireframe template.

```
<VeltWireframe>
    <VeltCommentDialogWireframe.Header>
        <VeltCommentDialogWireframe.Priority />
        <VeltCommentDialogWireframe.Status />
        <VeltCommentDialogWireframe.CopyLink />
        <VeltCommentDialogWireframe.ResolveButton />
        <VeltCommentDialogWireframe.Options />
    </VeltCommentDialogWireframe.Header>
</VeltWireframe>
```
