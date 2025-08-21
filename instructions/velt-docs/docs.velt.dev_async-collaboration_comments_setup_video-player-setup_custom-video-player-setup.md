Title: Custom Video Player Setup - Velt

URL Source: https://docs.velt.dev/async-collaboration/comments/setup/video-player-setup/custom-video-player-setup

Markdown Content:
Custom Video Player Setup - Velt

===============

[Velt home page![Image 2: light logo](https://mintlify.s3.us-west-1.amazonaws.com/velt/velt-logo-big-light.png)![Image 3: dark logo](https://mintlify.s3.us-west-1.amazonaws.com/velt/velt-logo-big.png)](https://docs.velt.dev/)

Search or ask...

⌘K Ask AI

*   [Get API Key](https://console.velt.dev/)
*   [Get API Key](https://console.velt.dev/)

Search...

Navigation

Video Player Setup

Custom Video Player Setup

[Documentation](https://docs.velt.dev/get-started/overview)[UI Customization](https://docs.velt.dev/ui-customization/overview)[API Reference](https://docs.velt.dev/api-reference/rest-apis/v2/organizations/add-organizations)[Release Notes](https://docs.velt.dev/release-notes/version-4/upgrade-guide)[Examples](https://velt.dev/examples)[DevTools](https://velt.dev/devtools)

##### Get Started

*   [Overview](https://docs.velt.dev/get-started/overview)
*   [Quickstart](https://docs.velt.dev/get-started/quickstart)
*   Setup  

##### Key Concepts

*   [Overview](https://docs.velt.dev/key-concepts/overview)

##### Async Collaboration

*   Comments  
    *   [Overview](https://docs.velt.dev/async-collaboration/comments/overview)
    *   Setup  
        *   [Freestyle Setup](https://docs.velt.dev/async-collaboration/comments/setup/freestyle)
        *   [Page Mode Setup](https://docs.velt.dev/async-collaboration/comments/setup/page)
        *   [Popover Setup](https://docs.velt.dev/async-collaboration/comments/setup/popover)
        *   [Stream Setup](https://docs.velt.dev/async-collaboration/comments/setup/stream)
        *   [Text Setup](https://docs.velt.dev/async-collaboration/comments/setup/text)
        *   [SlateJS Setup](https://docs.velt.dev/async-collaboration/comments/setup/slatejs)
        *   [Tiptap Setup](https://docs.velt.dev/async-collaboration/comments/setup/tiptap)
        *   [Inline Comments Setup](https://docs.velt.dev/async-collaboration/comments/setup/inline-comments)
        *   [Lottie Player Setup](https://docs.velt.dev/async-collaboration/comments/setup/lottie-player-setup)
        *   Video Player Setup  
            *   [Prebuilt Video Player Setup](https://docs.velt.dev/async-collaboration/comments/setup/video-player-setup/video-player-setup)
            *   [Custom Video Player Setup](https://docs.velt.dev/async-collaboration/comments/setup/video-player-setup/custom-video-player-setup)

        *   Chart Comments Setup  
        *   Standalone Components (DIY)  

    *   [Customize Behavior](https://docs.velt.dev/async-collaboration/comments/customize-behavior)
    *   Comments Sidebar  
    *   [Notifications](https://docs.velt.dev/async-collaboration/comments/notifications)

*   In-app Notifications  
*   Inline Reactions  
*   Recorder  
*   View Analytics  
*   Arrows  

##### Realtime Collaboration

*   Presence  
*   Cursors  
*   Follow Me Mode  
*   Huddle  
*   Live Selection  
*   Live State Sync  
*   Single Editor Mode  
*   CRDT (Yjs)  
*   Video Player Sync  

##### Self-Host Data

*   [Overview](https://docs.velt.dev/self-host-data/overview)
*   [Users](https://docs.velt.dev/self-host-data/users)
*   [Comments](https://docs.velt.dev/self-host-data/comments)
*   [Reactions](https://docs.velt.dev/self-host-data/reactions)
*   [Attachments](https://docs.velt.dev/self-host-data/attachments)

##### Model Context Protocol

*   [MCP Servers (Beta)](https://docs.velt.dev/mcp/mcp)

##### Webhooks

*   [Basic Webhooks](https://docs.velt.dev/webhooks/basic)
*   [Advanced Webhooks](https://docs.velt.dev/webhooks/advanced)

##### Security

*   [Content security policy](https://docs.velt.dev/security/content-security-policy)
*   [Generating Auth Tokens](https://docs.velt.dev/security/auth-tokens)
*   [JWT Tokens](https://docs.velt.dev/security/jwt-tokens)
*   [Proxy Server](https://docs.velt.dev/security/proxy-server)
*   [Supported Regions](https://docs.velt.dev/security/supported-regions)

##### Miscellaneous

*   [Migrate from Cord to Velt](https://docs.velt.dev/migration/migrate-from-cord-to-velt)
*   [Migrate from Liveblocks to Velt](https://docs.velt.dev/migration/migrate-from-liveblocks-to-velt)
*   Common Integration Questions  

Video Player Setup

Custom Video Player Setup
=========================

Copy page

Use this guide to add collaboration into your own custom video player.

Copy page

![Image 4](https://mintlify.s3.us-west-1.amazonaws.com/velt/gifs/custom-video-player.gif)

1

Set up Velt Components in your app

You will be using the following components:
*   `Velt Comments`: Renders comments on the DOM.
*   `Velt Comment Tool`: Enables or disables adding comments.
*   `Velt Reaction Tool`: Enables or disables adding reactions.
*   `Velt Comment Player Timeline`: Adds comments bubble over your player seek bar.
*   `Velt Comments Sidebar`: Adds a sidebar that shows all comments. Users can also search, filter & navigate to the comments from here.
*   `Velt Sidebar Button`: Toggles the sidebar on/off.

### [​](https://docs.velt.dev/async-collaboration/comments/setup/video-player-setup/custom-video-player-setup#add-the-velt-comments-component-in-the-root-of-your-app)

Add the `Velt Comments` component in the root of your app

Add the `Velt Comments` component to the root of your app.

*   React / Next.js
*   Other Frameworks

Copy

Ask AI

```
<VeltComments />
```

### [​](https://docs.velt.dev/async-collaboration/comments/setup/video-player-setup/custom-video-player-setup#add-the-velt-comment-tool-component-wherever-you-want-your-render-the-comment-tool)

Add the `Velt Comment Tool` component wherever you want your render the comment tool.

Note you can also provide your own button to this component.

*   React / Next.js
*   Other Frameworks

Copy

Ask AI

```
<VeltCommentTool>
  <button>
    {/* your custom button (optional) */}
  </button>
</VeltCommentTool>
```

### [​](https://docs.velt.dev/async-collaboration/comments/setup/video-player-setup/custom-video-player-setup#add-the-velt-reaction-tool-component-wherever-you-want-your-render-the-reaction-tool)

Add the `Velt Reaction Tool` component wherever you want your render the reaction tool.

*   Provide the video player ID on which you want the reactions to be added.
*   Add an event handler to handle `onReactionToolClick` events.

*   React / Next.js
*   Other Frameworks

Copy

Ask AI

```
<VeltReactionTool videoPlayerId={videoPlayerId}
  onReactionToolClick={() => onReactionToolClick()}>
</VeltReactionTool>
```

### [​](https://docs.velt.dev/async-collaboration/comments/setup/video-player-setup/custom-video-player-setup#place-the-velt-comment-player-timeline-component-as-a-sibling-to-your-video-player)

Place the `Velt Comment Player Timeline` component as a sibling to your video player.

*   To show comment bubbles on your player seek bar, add the `Velt Comment Player Timeline` component as a sibling to your video player component.
*   It will auto adjust to the same width as your video player.

Right now we assume you have a maximum of one `velt comment player timeline` component and one sibling video player component per `documentID`

Ensure that the parent container of `velt comment player timeline` doesnt have CSS position value as ‘static’.

*   React / Next.js
*   Other Frameworks

Copy

Ask AI

```
<div>
  <YourVideoPlayer id="videoPlayerId"/>
  <VeltCommentPlayerTimeline videoPlayerId="videoPlayerId"/>
</div>
```

### [​](https://docs.velt.dev/async-collaboration/comments/setup/video-player-setup/custom-video-player-setup#add-id-to-the-video-player-or-its-parent-element)

Add `id` to the video player or its parent element.

*   If you don’t have access to the raw `<video>` player, you can add an `id` to the parent element of the video player.

*   React / Next.js
*   Other Frameworks

Copy

Ask AI

```
<div id="videoPlayerId">
  <YourVideoPlayer />
  <VeltCommentPlayerTimeline videoPlayerId="videoPlayerId"/>
</div>
```

### [​](https://docs.velt.dev/async-collaboration/comments/setup/video-player-setup/custom-video-player-setup#add-the-velt-comments-sidebar-component)

Add the `Velt Comments Sidebar` component.

(Optional) To embed the sidebar in your existing component, set `embedMode` prop as `true`.

*   React / Next.js
*   Other Frameworks

Copy

Ask AI

```
<VeltCommentsSidebar embedMode={true}/>
```

### [​](https://docs.velt.dev/async-collaboration/comments/setup/video-player-setup/custom-video-player-setup#add-the-velt-sidebar-button-component)

Add the `Velt Sidebar Button` component.

This will open or close the Comment Sidebar.

*   React / Next.js
*   Other Frameworks

Copy

Ask AI

```
<VeltSidebarButton>
</VeltSidebarButton>
```

2

Set the `total media length` on the `Velt Comment Player Timeline`

You can pass an integer to `total media length` using props to represent the total number of frames or seconds in the video:

*   React / Next.js
*   Other Frameworks

Copy

Ask AI

```
<VeltCommentPlayerTimeline videoPlayerId="videoPlayerId" totalMediaLength={120} />
```

Alternatively, you can set this using API method call. This is useful if you first need to grab the total frames from another method before setting it.

*   React / Next.js
*   Other Frameworks

Copy

Ask AI

```
const commentElement = client.getCommentElement();
commentElement.setTotalMediaLength(120);
```

3

Detect Comment Tool Activation and Set Media Location

*   Detect when the user activates the comment tool by adding an event handler to the `onCommentModeChange` event.
*   Pause your player and set a new `Location` in the Velt SDK.
*   This ensures that the comments are tied to that particular media frame or timestamp.
*   You can pass in a key value pair object that represents the current state of your player.

If you are using the `Velt Comment Player Timeline` component, ensure to set the current rounded frame or second in the special key `currentMediaPosition`. 

`currentMediaPosition` is a protected keyword that is used to arrange the comment bubbles on top of the video player timeline in the correct spot

*   React / Next.js
*   Other Frameworks

Copy

Ask AI

```
<VeltCommentTool onCommentModeChange={(mode) => onCommentModeChange(mode)} />

const onCommentModeChange = (mode) => {
    // mode will be `true` if the user has activated the comment tool
    // If the comment tool is active, pause the player and set the "location".
    if (mode) {
        // pause player
        setLocation()
    }
});

const setLocation = (client) => {
    
    // set currentMediaPosition property on a Location object to represent the current frame
    let location = {
      currentMediaPosition : 120,
      videoPlayerId : "videoPlayerId"
    }
    //set the Location using the client
    client.setLocation(location)
    
}
```

4

Detect Reaction Tool Activation and Set Media Location

*   Detect when the user activates the reaction tool by adding an event handler to the `onReactionToolClick` event.
*   Pause your player and set a new `Location` in the Velt SDK.
*   This ensures that the reactions are tied to that particular media frame or timestamp.
*   You can pass in a key value pair object that represents the current state of your player. If you are using the `Velt Comment Player Timeline` component, ensure to set the current rounded frame or second in the special key `currentMediaPosition`.  `currentMediaPosition` is a protected keyword that is used to arrange the comment bubbles on top of the video player timeline in the correct spot  

*   React / Next.js
*   Other Frameworks

Copy

Ask AI

```
<VeltReactionTool videoPlayerId={videoPlayerId}
  onReactionToolClick={() => onReactionToolClick()}>
</VeltReactionTool>

const onReactionToolClick = () => {
    // pause player
    setLocation()
});

const setLocation = () => {
    // set currentMediaPosition property on a Location object to represent the current frame
    let location = {
      currentMediaPosition : 120,
      videoPlayerId : "videoPlayerId"
    }
    //set the Location using the client
    client.setLocation(location)
    
}
```

5

When the player is played, remove Velt `Location` to remove comments from the media.

Call `removeLocation()` when your player starts playing:

*   React / Next.js
*   Other Frameworks

Copy

Ask AI

```
const removeLocation = () => {
    //remove the location, so the video player can play without comments appearing in frames
    client.removeLocation()
}
```

6

Navigate to the comment's location in the player from the Sidebar or Timeline.

Add the `onCommentClick` event handler on the `Velt Comments Sidebar`&`Velt Comment Player Timeline` components you added earlier. The event will give you back the `location` object that you had set on the comment.Use this object to:
*   update your player state
*   update the SDK’s `location` so the comments associated with that `location` are rendered.

### [​](https://docs.velt.dev/async-collaboration/comments/setup/video-player-setup/custom-video-player-setup#handle-click-on-the-velt-comments-sidebar%3A)

Handle click on the `Velt Comments Sidebar`:

*   React / Next.js
*   Other Frameworks

Copy

Ask AI

```
<VeltCommentsSidebar embedMode={true} onCommentClick={(event) => onCommentClick(event)} />

const onCommentClick = (event) => {
    if (event) {
      // Get the location object from the event.
      const { location } = event;
      if (location) {
          // Get the media position where the comment was added.
          const { currentMediaPosition } = location;
          if (currentMediaPosition) {
              // Pause the player.

              // Seek to the given comment media position.

              // Set the Velt Location to the clicked comment location.
              client.setLocation(location);
          }
      }
  }
}
```

### [​](https://docs.velt.dev/async-collaboration/comments/setup/video-player-setup/custom-video-player-setup#handle-click-on-the-velt-comment-player-timeline%3A)

Handle click on the `Velt Comment Player Timeline`:

*   React / Next.js
*   Other Frameworks

Copy

Ask AI

```
<VeltCommentPlayerTimeline videoPlayerId="videoPlayerId" onCommentClick={(event) => onTimelineCommentClick(event)} />

const onTimelineCommentClick = (event) => {
  if (event) {
      // Get the location object from the event.
      const { location } = event;
      if (location) {
          // Get the media position where the comment was added.
          const { currentMediaPosition } = location;
          if (currentMediaPosition) {
              // Pause the player.

              // Seek to the given comment media position.

              // Set the Velt Location to the clicked comment location.
              client.setLocation(location);
          }
      }
  }
}
```

The clicked Comment data will be in the following format:
| property | type | description |
| --- | --- | --- |
| `documentId` | string | The document ID where the comment was added |
| `location` | object | The location where the comment was added |
| `targetElementId` | string | The DOM ID of the target element on which the comment was added |
| `context` | Object | Any context data passed when the comment was added |

Was this page helpful?

Yes No

[Prebuilt Video Player Setup](https://docs.velt.dev/async-collaboration/comments/setup/video-player-setup/video-player-setup)[Highcharts Comments Setup](https://docs.velt.dev/async-collaboration/comments/setup/chart-comments-setup/highcharts)

[twitter](https://twitter.com/veltjs)[linkedin](https://www.linkedin.com/company/veltjs)

[Powered by Mintlify](https://mintlify.com/preview-request?utm_campaign=poweredBy&utm_medium=referral&utm_source=velt)

Assistant

Responses are generated using AI and may contain mistakes.
