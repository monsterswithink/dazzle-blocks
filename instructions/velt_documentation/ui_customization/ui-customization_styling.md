Title: CSS Customization - Velt

URL Source: https://docs.velt.dev/ui-customization/styling

Markdown Content:
Velt components can be styled in two main ways:

1.   **Themes**
2.   **Custom CSS**

Themes
------

You can use the [Theme Playground](https://playground.velt.dev/themes) to customize and preview the themes fast.

### CSS Variables

*   You can customize: 
    *   Border radius
    *   Spacing
    *   Typography
    *   Colors for light and dark modes
    *   Z-Index

*   Set CSS variables on your `<body>` tag to customize all Velt components:

**Example:**

```
body {
  /* Colors */
  --velt-light-mode-accent: #0BA528;
  /* Border Radius */
  --velt-border-radius-sm: 4px;
  /* Spacing */
  --velt-spacing-sm: 8px;
}
```

**Available Theme Variables:**

```
--velt-border-radius-2xs: 0.125rem; // 2px
--velt-border-radius-xs: 0.25rem;   // 4px
--velt-border-radius-sm: 0.5rem;    // 8px
--velt-border-radius-md: 0.75rem;   // 12px
--velt-border-radius-lg: 1rem;      // 16px
--velt-border-radius-xl: 1.25rem;   // 20px
--velt-border-radius-2xl: 1.5rem;   // 24px
--velt-border-radius-3xl: 2rem;     // 32px
--velt-border-radius-full: 5rem;    // 80px
```

### Dark Mode

*   Enable dark mode globally or per component.
*   Most components accept a `darkMode` prop (`dark-mode="true"` for non-React).
*   Some components that are not directly injected by you like dialogs and pins use specific props (e.g. `dialogDarkMode`, `pinDarkMode`). You can add these props to the root component responsible for injecting them.
*   Check each component’s UI customization documentation for its dark mode props.

```
// Global
const client = useVeltClient();
client.setDarkMode(true);

// Per component example
<VeltComments 
  darkMode={true}
  dialogDarkMode={true}
  pinDarkMode={true}
/>
```

Custom CSS or libraries
-----------------------

### Custom CSS

You can use your own CSS or libraries like Tailwind CSS to style the Velt components. You will need to disable the Shadow DOM to apply your styles.

1.   **Using CSS on rendered components.**

*   Inspect the DOM using browser dev tools to find the class names and selectors of the target Velt components.
*   Override the styles using your CSS.
*   Make sure to [disable the Shadow DOM](https://docs.velt.dev/ui-customization/styling#disable-shadow-dom) to apply your styles.

```
.velt-composer--input-button {
  background-color: red;
  border-radius: 0;
}
```

1.   **Using CSS on Wireframes.**

*   Add the relevant wireframe component.
*   Add class or inline styles to the wireframe component like you would on a normal HTML element.
*   When the actual component is rendered, the styles will be applied to that component.
*   Make sure to [disable the Shadow DOM](https://docs.velt.dev/ui-customization/styling#disable-shadow-dom) to apply your styles.

```
<VeltWireframe>
  <VeltCommentsSidebarWireframe.Header>
    {/* Use CSS classes */}
    <div className="bg-white shadow-lg p-4">
    <VeltCommentsSidebarWireframe.Search />
    <VeltCommentsSidebarWireframe.FilterButton />
  </div>
  
  {/* Or inline styles */}
    <VeltCommentsSidebarWireframe.Status style={{backgroundColor: 'red'}} />
  </VeltCommentsSidebarWireframe.Header>
</VeltWireframe>
```

#### Disable Shadow DOM

*   By default, Velt components use Shadow DOM to isolate their styles from your application’s CSS. This ensures that styles don’t conflict with each other.
*   If you want your application’s CSS to affect the styling of Velt components, you can disable the Shadow DOM.
*   Most components accept a `shadowDom` prop (`shadow-dom="false"` for non-React).
*   Some components that are not directly injected by you like dialogs and pins use specific props (e.g. `dialogShadowDom`, `pinShadowDom`).
*   Check each component’s UI customization documentation for its shadow DOM props.

```
<VeltComments shadowDom={false} />
```

### Conditional Classes

Apply classes conditionally based available [template variables](https://docs.velt.dev/ui-customization/template-variables).**Syntax:**

```
<SomeVeltWireframe veltClass="<evaluation-string>" />
```

`<evaluation-string>: 'class-name': {velt-template-variable} <operator> 'value'`

*   **class-name:** The class name to apply. This should be within single quotes `'`.
*   **template-variable:** The template variable to evaluate. This should be within curly braces `{}`.
*   **operator:** The operator to use for the comparison. This should be one of the following: `===`, `!==`, `>`, `>=`, `<`, `<=`. You can also use `&&` and `||` to combine multiple conditions.
*   **value:** The value to compare the template variable to. This should be within single quotes `'`.

**Example:**

```
<VeltWireframe>
  <VeltCommentDialogWireframe.Header  veltClass="'bg-yellow-500': {annotation.status.id} === 'IN_PROGRESS'" />
</VeltWireframe>
```
