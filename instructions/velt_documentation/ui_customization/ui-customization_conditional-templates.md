Title: Conditional Templates - Velt

URL Source: https://docs.velt.dev/ui-customization/conditional-templates

Markdown Content:
*   Conditional Templates let you conditionally show or hide parts of the Velt Component Wireframes.
*   You can add conditions based on the same data models available in [Template Variables](https://docs.velt.dev/ui-customization/template-variables).

There are two ways to use Conditional Templates:

1. Using `Velt If` component
----------------------------

*   Wrap wireframe components and html elements in `Velt If` component.
*   If the condition is not met, the component will not be rendered.
*   Good for targeting groups of components at once.

```
<VeltIf condition="{annotation.status.id} === 'OPEN' && {annotation.comments.length} === 3">
  {/* Content to render if condition is true */}
</VeltIf>
```

2. Using `Velt If` attribute
----------------------------

*   Add `Velt If` attribute to existing wireframe components.
*   If the condition is not met, the component will not be rendered.
*   Good for targeting a single component.

```
<VeltCommentDialogWireframe.Header veltIf="{user.isAdmin} === true" />
```

Syntax
------

The condition is specified as a string that will be evaluated as a JavaScript expression. Here is a sample syntax:Syntax: `{<variable>} <operator> <value>`Example: `{annotation.status.id} === 'OPEN'`

*   Template variables need to be enclosed in curly braces: `{variable.property}`
*   Operators: 
    *   Comparison operators: `===`, `==`, `!==`, `>`, `<`, `>=`, `<=`
    *   Logical operators: `&&`, `||`, `!`

*   Value can be a string, number or boolean.

Examples
--------

```
{/* 1. Show content only for open annotations: */}
<VeltIf condition="{annotation.status.id} === 'OPEN'">
  <p>This annotation is currently open.</p>
</VeltIf>

{/* 2. Display a message for annotations with more than 5 comments: */}
<VeltIf condition="{annotation.comments.length} > 5">
  <p>This is a popular annotation!</p>
</VeltIf>

{/* 3. Combine multiple conditions: */}
<VeltIf condition="{annotation.status.id} === 'OPEN' && {annotation.comments.length} === 0">
  <p>This is a new open annotation without any comments yet.</p>
</VeltIf>
```

Was this page helpful?
