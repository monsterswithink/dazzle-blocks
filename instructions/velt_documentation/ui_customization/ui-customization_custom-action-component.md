Title: Action Components - Velt

URL Source: https://docs.velt.dev/ui-customization/custom-action-component

Markdown Content:
*   A customizable button component that can be used to add custom actions and extend the functionality of any Velt component. Some examples include: 
    *   Add custom filtering, sorting and grouping to the Comment Sidebar
    *   Add custom actions to each item in the Notifications panel.
    *   Add custom actions to the Comment Dialog.

*   In the [callback event](https://docs.velt.dev/ui-customization/custom-action-component#callback-event), in addition to returning the button context, it also returns the key component data that it sits within Eg: `CommentAnnotation`, `Comment`, `Notification`, `CommentSidebarData` etc.

Types
-----

*   `button`: Basic clickable button
*   `button-toggle`: Toggleable button that maintains state
*   `single-select`: Single select (radio button) group
*   `multi-select`: Multi select (checkbox) group

Component Props
---------------

| Property | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | string | Yes | Unique identifier for the button. This can be a static id or a dynamic id using a template variable. |
| `type` | string | No | Button type: ‘button’ (default), ‘button-toggle’, ‘multi-select’, or ‘single-select’ |
| `disabled` | boolean | No | Whether the button is disabled |
| `active` | boolean | No | Whether the button is in active/selected state. Use this if you want to add a default state to the button. Applies to ‘button-toggle’, ‘multi-select’, or ‘single-select’ buttons. |
| `group` | string | No | Group identifier for single-select/multi-select buttons |

Usage
-----

### Button

```
<VeltWireframe>
  <VeltCommentsSidebarWireframe.Header>
    <VeltCommentsSidebarWireframe.Search />
    <VeltCommentsSidebarWireframe.FilterButton />

    <VeltButtonWireframe id="close-sidebar" type="button">
        <div className="custom-button">Close Sidebar</div>
    </VeltButtonWireframe>

  </VeltCommentsSidebarWireframe.Header>
</VeltWireframe>
```

**Handle the button click event:**

```
// Hook
const veltButtonClickEventData = useVeltEventCallback('veltButtonClick');
useEffect(() => {
  if (veltButtonClickEventData) {
    if (veltButtonClickEventData.buttonContext.clickedButtonId === 'close-sidebar') {
      // Close sidebar
    }
  }
}, [veltButtonClickEventData]);

// API Method
client.on('veltButtonClick').subscribe(veltButtonClickEventData => {
  if (veltButtonClickEventData) {
    if (veltButtonClickEventData.buttonContext.clickedButtonId === 'close-sidebar') {
      // Close sidebar
    }
  }
});
```

### Button Toggle

```
<VeltWireframe>
  <VeltCommentsSidebarWireframe.Header>
    <VeltCommentsSidebarWireframe.Search />
    <VeltCommentsSidebarWireframe.FilterButton />
    {/* Optional: Set the active prop to true if you want to add a default state to the button */}
    <VeltButtonWireframe id="toggleCommentPins" type="button-toggle" active={true}>
        <div className="custom-button">Toggle Comment Pins</div>
    </VeltButtonWireframe>

  </VeltCommentsSidebarWireframe.Header>
</VeltWireframe>
```

**Handle the button click event:**

```
// Hook
const veltButtonClickEventData = useVeltEventCallback('veltButtonClick');
useEffect(() => {
  if (veltButtonClickEventData) {
    if (veltButtonClickEventData.buttonContext?.clickedButtonId === 'toggleCommentPins') {
      if (veltButtonClickEventData.buttonContext?.selections?.ungrouped['toggleCommentPins']) {
        commentElement.showCommentsOnDom();
      } else {
        commentElement.hideCommentsOnDom(); 
      }
    }
  }
}, [veltButtonClickEventData]);

// API Method
client.on('veltButtonClick').subscribe(veltButtonClickEventData => {
  if (veltButtonClickEventData) {
    if (veltButtonClickEventData.buttonContext?.clickedButtonId === 'toggleCommentPins') {
      if (veltButtonClickEventData.buttonContext?.selections?.ungrouped['toggleCommentPins']) {
        commentElement.showCommentsOnDom();
      } else {
        commentElement.hideCommentsOnDom(); 
      }
    }
  }
});
```

### Single Select Button Group

```
<VeltWireframe>
  <VeltCommentsSidebarWireframe.Panel>
      <VeltCommentsSidebarWireframe.Header />
      <div className="custom-filter-chip-container">

          <VeltButtonWireframe id="unread" type="single-select" group="custom-filter">
              <div className="custom-filter-chip-button">Unread</div>
          </VeltButtonWireframe>

          <VeltButtonWireframe id="mentions" type="single-select" group="custom-filter">
              <div className="custom-filter-chip-button">Mentions</div>
          </VeltButtonWireframe>

      </div>
  </VeltCommentsSidebarWireframe.Panel>
</VeltWireframe>
```

**Handle the button click event:**

```
// Hook
const veltButtonClickEventData = useVeltEventCallback('veltButtonClick');
useEffect(() => {
  if (veltButtonClickEventData) {
    if (veltButtonClickEventData.buttonContext?.groupId === 'custom-filter') {
      const selectedFilter = veltButtonClickEventData.buttonContext?.selections?.['custom-filter'];
      if (selectedFilter?.unread) {
        // show unread comments
      } else if (selectedFilter?.mentions) {
        // show comments with mentions
      }
    }
  }
}, [veltButtonClickEventData]);

// API Method
client.on('veltButtonClick').subscribe(veltButtonClickEventData => {
  if (veltButtonClickEventData) {
    if (veltButtonClickEventData.buttonContext?.groupId === 'custom-filter') {
      const selectedFilter = veltButtonClickEventData.buttonContext?.selections?.['custom-filter'];
      if (selectedFilter?.unread) {
        // show unread comments
      } else if (selectedFilter?.mentions) {
        // show comments with mentions
      }
    }
  }
});
```

### Multi Select Button Group

```
<VeltWireframe>
  <VeltCommentsSidebarWireframe.Panel>
      <VeltCommentsSidebarWireframe.Header />
      <div className="custom-filter-chip-container">

          <VeltButtonWireframe id="unread" type="multi-select" group="custom-filter">
              <div className="custom-filter-chip-button">Unread</div>
          </VeltButtonWireframe>

          <VeltButtonWireframe id="mentions" type="multi-select" group="custom-filter">
              <div className="custom-filter-chip-button">Mentions</div>
          </VeltButtonWireframe>

      </div>
  </VeltCommentsSidebarWireframe.Panel>
</VeltWireframe>
```

**Handle the button click event:**

```
// Hook
const veltButtonClickEventData = useVeltEventCallback('veltButtonClick');
useEffect(() => {
  if (veltButtonClickEventData) {
    if (veltButtonClickEventData.buttonContext?.groupId === 'custom-filter') {
      const selections = veltButtonClickEventData.buttonContext?.selections?.['custom-filter'];
      if (selections?.unread) {
        // show unread comments
      }
      if (selections?.mentions) {
        // show comments with mentions
      }
    }
  }
}, [veltButtonClickEventData]);

// API Method
client.on('veltButtonClick').subscribe(veltButtonClickEventData => {
  if (veltButtonClickEventData) {
    if (veltButtonClickEventData.buttonContext?.groupId === 'custom-filter') {
      const selections = veltButtonClickEventData.buttonContext?.selections?.['custom-filter'];
      if (selections?.unread) {
        // show unread comments
      }
      if (selections?.mentions) {
        // show comments with mentions
      }
    }
  }
});
```

### Callback Event

The Velt Button Wireframe emits events when users interact with it. You can listen to these events to implement custom behaviors.

*   Returns: [VeltButtonClickEvent](https://docs.velt.dev/api-reference/sdk/models/data-models#veltbuttonclickevent)

```
// Hook
const veltButtonClickEventData = useVeltEventCallback('veltButtonClick');
useEffect(() => {
  if (veltButtonClickEventData) {
    // Handle button click event response
  }
}, [veltButtonClickEventData]);

// API Method
client.on('veltButtonClick').subscribe((veltButtonClickEventData) => {
    // Handle button click event response
});
```

### Set Dynamic ID to Velt Button

*   You can use template variables to set the id.

```
<VeltButtonWireframe id="{annotation.annotationId}" type="button-toggle" />
```

### Reset Velt Button State

*   Reset the state of Velt Button components programmatically.
*   Params: (optional) [VeltResetButtonStateConfig](https://docs.velt.dev/api-reference/sdk/models/data-models#veltresetbuttonstateconfig)

```
// Reset state for a specific button in a given group
  client.resetVeltButtonState({id: 'openSidebar', group: 'multi'});

  // Reset state for all buttons in a given group
  client.resetVeltButtonState({group: 'multi'});

  // Reset state for a specific button in all groups
  client.resetVeltButtonState({id: 'openSidebar'});

  // Reset state for all buttons
  client.resetVeltButtonState();
```
