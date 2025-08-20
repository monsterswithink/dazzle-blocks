Title: Localisation - Velt

URL Source: https://docs.velt.dev/ui-customization/localisation

Markdown Content:
Localisation - Velt

===============

[Velt home page![Image 1: light logo](https://mintlify.s3.us-west-1.amazonaws.com/velt/velt-logo-big-light.png)![Image 2: dark logo](https://mintlify.s3.us-west-1.amazonaws.com/velt/velt-logo-big.png)](https://docs.velt.dev/)

Search or ask...

Ctrl K Ask AI

*   [Get API Key](https://console.velt.dev/)
*   [Get API Key](https://console.velt.dev/)

Search...

Navigation

Concepts

Localisation

[Documentation](https://docs.velt.dev/get-started/overview)[UI Customization](https://docs.velt.dev/ui-customization/overview)[API Reference](https://docs.velt.dev/api-reference/rest-apis/v2/organizations/add-organizations)[Release Notes](https://docs.velt.dev/release-notes/version-4/upgrade-guide)[Examples](https://velt.dev/examples)[DevTools](https://velt.dev/devtools)

##### Concepts

*   [Overview](https://docs.velt.dev/ui-customization/overview)
*   [Setup Wireframes](https://docs.velt.dev/ui-customization/setup)
*   [Layout Customization](https://docs.velt.dev/ui-customization/layout)
*   [CSS Customization](https://docs.velt.dev/ui-customization/styling)
*   [Template Variables](https://docs.velt.dev/ui-customization/template-variables)
*   [Conditional Templates](https://docs.velt.dev/ui-customization/conditional-templates)
*   [Action Components](https://docs.velt.dev/ui-customization/custom-action-component)
*   [Localisation](https://docs.velt.dev/ui-customization/localisation)

##### Async Collaboration

*   Comments  
*   In-app Notifications  
*   Recorder  
*   [Inline Reactions Section](https://docs.velt.dev/ui-customization/features/async/inline-reactions)
*   Arrows  

##### Realtime Collaboration

*   [Presence](https://docs.velt.dev/ui-customization/features/realtime/presence)
*   [Cursors](https://docs.velt.dev/ui-customization/features/realtime/cursors)
*   [Single Editor Mode](https://docs.velt.dev/ui-customization/features/realtime/single-editor-mode)
*   [Live Selection](https://docs.velt.dev/ui-customization/features/realtime/live-selection)
*   Huddle  

On this page

*   [Steps](https://docs.velt.dev/ui-customization/localisation#steps)
*   [Example](https://docs.velt.dev/ui-customization/localisation#example)

Concepts

Localisation
============

Copy page

Copy page

Localize all static strings visible in the SDK Components.

If you notice any missing strings, please reach out to us.

[​](https://docs.velt.dev/ui-customization/localisation#steps)

Steps
---------------------------------------------------------------------

1

Download the list of static strings

Get the complete list of strings that can be localized [here](https://firebasestorage.googleapis.com/v0/b/snippyly.appspot.com/o/external%2Flocalization-strings-map.json?alt=media&token=0cdd2b52-10ed-4033-a08a-5c2b622ce7df).

2

Translate the strings and create the translations object

*   Translate the strings in the languages you want to support.
*   Create an object with the translations for the languages you want to support in the following format:

Copy

Ask AI

```
{
  "language-code-1": {
    "original string 1": "translated string 1",
    "original string 2": "translated string 2",
    ...
  },
  "language-code-2": {
    "original string 1": "translated string 1",
    "original string 2": "translated string 2",
    ...
  },
  ...
}
```

3

Provide the translations object to the SDK

Call the `setTranslations` method with the translations object you created in the previous step.

Copy

Ask AI

```
client.setTranslations(translationsObject);
```

4

Set the language

Set the language you want to use for the SDK. The language code should be the same as the language code you used in the translations object.

Copy

Ask AI

```
client.setLanguage('en');
```

[​](https://docs.velt.dev/ui-customization/localisation#example)

Example
-------------------------------------------------------------------------

*    React / Next.js
*    Other Frameworks

Copy

Ask AI

```
// Provide the localization object for the languages you want to support.
client.setTranslations({
  'en': {
    'All comments': 'All comments',
  },
  'fr': {
    'All comments': 'Tous les commentaires',
  },
  // Add more languages as needed.
});

// Set one of the languages you've provided the translations for.
client.setLanguage('en');
```

Was this page helpful?

Yes No

[Action Components](https://docs.velt.dev/ui-customization/custom-action-component)[Overview](https://docs.velt.dev/ui-customization/features/async/comments/comment-dialog/overview)

[twitter](https://twitter.com/veltjs)[linkedin](https://www.linkedin.com/company/veltjs)

[Powered by Mintlify](https://mintlify.com/preview-request?utm_campaign=poweredBy&utm_medium=referral&utm_source=velt)

Assistant

Responses are generated using AI and may contain mistakes.
