Title: Overview - Velt

URL Source: https://docs.velt.dev/ui-customization/

Markdown Content:
Velt Components can be customized in 5 key ways:

1.   [**Layout**](https://docs.velt.dev/ui-customization/#1-layout): For structure and organization of components
2.   [**Styling**](https://docs.velt.dev/ui-customization/#2-styling): For visual design using CSS, themes, or your CSS framework
3.   [**Template Variables**](https://docs.velt.dev/ui-customization/#3-template-variables): For rendering dynamic content
4.   [**Conditional Templates**](https://docs.velt.dev/ui-customization/#4-conditional-templates): For custom rendering logic
5.   [**Action Components**](https://docs.velt.dev/ui-customization/#5-action-components): For interactivity and custom behaviors

1. Layout
---------

### Understanding Wireframes

Think of Wireframes like blueprints - they’re templates that let you customize how Velt components render in your app. They are not functional components. Define them once, and Velt will swap in your custom template wherever a component renders, overriding the default. When you create a wireframe:

*   It acts as a global template
*   Changes apply everywhere that component is used
*   You can use your own components and HTML structure

**What you can do:**

*   ✅ Use your own Components/HTML
*   ✅ Apply your styling
*   ✅ Nest regular HTML elements
*   ✅ Use other Velt wireframe components

**Limitations with Wireframes:**

*   ❌ Cannot nest regular Velt components inside wireframes
*   ❌ Host App’s dynamic variables: Won’t work directly inside wireframes.
*   ❌ Host App’s JavaScript: Custom scripts won’t run natively inside wireframes.

**How Velt solves these:**

*   **Host App’s dynamic variables:** Use [UI State](https://docs.velt.dev/ui-customization/template-variables#2-injecting-your-own-data) to inject your app’s dynamic variables into Velt components seamlessly. This is available across all Velt Wireframes.
*   **Host App’s JavaScript:** Wrap your component in [`VeltButtonWireframe`](https://docs.velt.dev/ui-customization/custom-action-component). It exposes a callback. Listen for it to trigger your custom JS logic.

### a. Replace Layout

Replace Velt’s default HTML with your own structure. [Learn more](https://docs.velt.dev/ui-customization/layout#replace-default-layout)

### b. Remove Components

Remove specific parts of a Velt component you don’t need. [Learn more](https://docs.velt.dev/ui-customization/layout#remove-components)

### c. Reorder Components

Change the order of elements within a Velt component. [Learn more](https://docs.velt.dev/ui-customization/layout#reorder-components)

### d. Use Variants

Need different versions of the same component? Use variants to:

*   Create multiple styled versions
*   Switch between them dynamically
*   Maintain consistent behavior with different looks

[Learn more about variants](https://docs.velt.dev/ui-customization/layout#variants)

2. Styling
----------

Velt components can be styled in two main ways:

### a. Themes

1.   **CSS Variables:** Quickest way to match your design system using CSS variables. This gets applied to all components globally. [Learn more](https://docs.velt.dev/ui-customization/styling#themes)
2.   **Dark Mode:** Built in support for light and dark modes. [Learn more](https://docs.velt.dev/ui-customization/styling#dark-mode)

### b. Custom CSS or libraries

1.   **Custom CSS or frameworks:** Gives you full control over the styling of Velt components using your own CSS or frameworks. This requires disabling Shadow DOM. [Learn more](https://docs.velt.dev/ui-customization/styling#custom-css-or-libraries)
2.   **Conditional Classes:** Apply classes conditionally based available template variables. [Learn more](https://docs.velt.dev/ui-customization/styling#conditional-classes)

3. Template Variables
---------------------

Template Variables let you work with dynamic data in two ways:a. **Use Existing Velt Component Data**

*   Access and render data that’s already present inside Velt components.
*   eg: Customer metadata set on comment threads.

b. **Inject Your App’s Data**

*   Inject and render custom dynamic data from your application into Velt components.

[Learn more](https://docs.velt.dev/ui-customization/template-variables)

4. Conditional Templates
------------------------

Add logic to show/hide components based on the template variables. [Learn more](https://docs.velt.dev/ui-customization/conditional-templates)

5. Action Components
--------------------

*   Extend the functionality of any Velt component.
*   Clicking an action button provides a callback where you can write your own custom code. [Learn more](https://docs.velt.dev/ui-customization/custom-action-component)
