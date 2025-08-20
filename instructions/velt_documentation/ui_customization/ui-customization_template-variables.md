Title: Template Variables - Velt

URL Source: https://docs.velt.dev/ui-customization/template-variables

Markdown Content:
Template variables allow you to:

*   Display dynamic data within Velt components.
*   Use the dynamic data to apply conditional templates or CSS classes.

There are two main ways to use them:

1.   Using built-in Velt data
2.   Injecting your own application data

1. Using Built-in Velt Data
---------------------------

Velt provides access to various data objects that you can display in your components using the `VeltData` component.

### Basic Usage

```
// Display user name
<VeltData field="user.name" />

// Access nested properties
<VeltData field="userContact.organizationName" />
```

### Available Data Objects

#### Global Variables

These are available across all Velt components:

| Variable | Description | Data Fields |
| --- | --- | --- |
| `user` | Current logged-in user | You can find all the fields [here](https://docs.velt.dev/api-reference/sdk/models/data-models#user) |
| `unreadCommentAnnotationCount` | Number of unread annotations | - |
| `unreadCommentCount` | Total unread comments | - |

#### Context-Specific Variables

These are only available within relevant components they are used in:

| Variable | Available In | Description |
| --- | --- | --- |
| `userContact` | Autocomplete components | You can find all the fields [here](https://docs.velt.dev/api-reference/sdk/models/data-models#user) |
| `commentAnnotation` | Comment components | You can find all the fields [here](https://docs.velt.dev/api-reference/sdk/models/data-models#commentannotation) |
| `comment` | Comment thread components | You can find all the fields [here](https://docs.velt.dev/api-reference/sdk/models/data-models#comment) |
| `notification` | Notification components | You can find all the fields [here](https://docs.velt.dev/api-reference/sdk/models/data-models#notification) |
| `filteredCommentAnnotationsCount` | Comments Sidebar | Number of visible comments in sidebar when system filters are applied |

### Example: Building a Custom User Card

```
<VeltAutocompleteOptionWireframe>
  <div className="user-card">
    <h3><VeltData field="userContact.name" /></h3>
    <p><VeltData field="userContact.email" /></p>
    <span className="org"><VeltData field="userContact.organizationName" /></span>
  </div>
</VeltAutocompleteOptionWireframe>
```

2. Injecting Your Own Data
--------------------------

*   You can inject custom data from your application to use within Velt components.
*   This data is available in all Velt Wireframes, Velt If and Velt Data components.

### Setting Custom Data

```
// Set custom data
client.setUiState({
  projectName: 'Dashboard 2.0',
  teamSize: 5,
  customFlag: true
});

// Read custom data
client.getUiState().subscribe((data) => {
  console.log('Custom Data:', data);
});
```

### Using Custom Data in Components

```
<VeltCommentDialogWireframe.Header>
  <div className="header">
    <h2><VeltData field="projectName" /></h2>
    <span>Team Size: <VeltData field="teamSize" /></span>
  </div>
</VeltCommentDialogWireframe.Header>
```
