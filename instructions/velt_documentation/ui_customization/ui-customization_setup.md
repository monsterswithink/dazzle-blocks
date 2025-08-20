Title: Setup Wireframes - Velt

URL Source: https://docs.velt.dev/ui-customization/setup

Markdown Content:
Concepts

Understanding Wireframes
------------------------

Wireframes are templates that define how Velt components should render in your app:

*   Act as global templates. Changes apply everywhere the component is used.
*   Allow full customization of layout and styling.
*   Wireframes themselves don’t render in the DOM.

Adding any children to a wireframe template removes most of its default styling. This gives you full control over the layout. However, you will still need to use a combination of CSS overrides on any remaining styles and your own components to achieve the desired styling.

Step-by-Step Setup
------------------

1

Add the root Wireframe Container

```
import { VeltWireframe, VeltProvider } from '@veltdev/react'

<VeltProvider>
    <VeltWireframe>
        {/* Your customization templates */}
    </VeltWireframe>
</VeltProvider>
```

2

Add Component Wireframes

Copy the wireframe template of the component you want to customize. You can find the wireframe templates in the component’s UI Customization documentation.

```
<VeltWireframe>
    {/* Example: Customizing Comment Dialog Header */}
    <VeltCommentDialogWireframe.Header>
        <div className="flex items-center gap-2">
            <VeltCommentDialogWireframe.Status />
            <VeltCommentDialogWireframe.Priority />
            <div className="flex-grow" />
            <VeltCommentDialogWireframe.Options />
            <VeltCommentDialogWireframe.ResolveButton />
        </div>
    </VeltCommentDialogWireframe.Header>
</VeltWireframe>
```

3

Customize the Template

You can customize using the options like:

*   [Layout](https://docs.velt.dev/ui-customization/layout): Customize the layout of the component
*   [Styling](https://docs.velt.dev/ui-customization/styling): Apply custom CSS and [themes](https://playground.velt.dev/themes)
*   [Template Variables](https://docs.velt.dev/ui-customization/template-variables): Add dynamic content to your templates
*   [Conditional Templates](https://docs.velt.dev/ui-customization/conditional-templates): Add conditional rendering logic
*   [Custom Actions](https://docs.velt.dev/ui-customization/custom-action-component): Add custom interactivity

**Example:**

```
<VeltWireframe>
    <VeltCommentDialogWireframe.Header>
        <div>
            Custom HTML
        </div>
        <VeltCommentDialogWireframe.Status />
        <VeltCommentDialogWireframe.Priority />
        <VeltCommentDialogWireframe.Options />
        <VeltCommentDialogWireframe.CopyLink />
        <VeltCommentDialogWireframe.ResolveButton />
    </VeltCommentDialogWireframe.Header>
</VeltWireframe>
```

4

Add the Feature Components

*   After defining templates, use the actual feature components in your app as normal.
*   The wireframe components are not meant to be rendered directly in your application. They merely serve as template definitions.

```
function MyApp() {
  return (
    <div className="my-app">
      <VeltComments /> {/* Will use your custom template */}
    </div>
  )
}
```
