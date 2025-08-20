Title: Presence - Velt

URL Source: https://docs.velt.dev/ui-customization/features/realtime/presence

Markdown Content:
VeltPresenceWireframe
---------------------

![Image 1: presence-overview.png](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/presence/presence-overview.png)

```
<VeltWireframe>
    <VeltPresenceWireframe>
        <VeltPresenceWireframe.AvatarList />
        <VeltPresenceWireframe.AvatarRemainingCount />
    </VeltPresenceWireframe>
</VeltWireframe>
```

### AvatarList

![Image 2: presence-avatar-list.png](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/presence/presence-avatar-list.png)

```
<VeltWireframe>
    <VeltPresenceWireframe.AvatarList>
        <VeltPresenceWireframe.AvatarList.Item />
    </VeltPresenceWireframe.AvatarList>
</VeltWireframe>
```

#### Item

![Image 3: presence-avatar-list-item.png](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/presence/presence-avatar-list-item.png)

```
<VeltWireframe>
    <VeltPresenceWireframe.AvatarList.Item />
</VeltWireframe>
```

### AvatarRemainingCount

![Image 4: presence-avatar-remaining-count.png](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/presence/presence-avatar-remaining-count.png)

```
<VeltWireframe>
    <VeltPresenceWireframe.AvatarRemainingCount />
</VeltWireframe>
```

VeltPresenceTooltipWireframe
----------------------------

![Image 5: presence-tooltip.png](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/presence/presence-tooltip.png)

```
<VeltWireframe>
    <VeltPresenceTooltipWireframe>
        <VeltPresenceTooltipWireframe.Avatar />
        <VeltPresenceTooltipWireframe.StatusContainer />
    </VeltPresenceTooltipWireframe>
</VeltWireframe>
```

### Avatar

![Image 6: presence-tooltip-avatar.png](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/presence/presence-tooltip-avatar.png)

```
<VeltWireframe>
    <VeltPresenceTooltipWireframe.Avatar />
</VeltWireframe>
```

### StatusContainer

![Image 7: presence-tooltip-avatar-status.png](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/presence/presence-tooltip-avatar-status.png)

```
<VeltWireframe>
    <VeltPresenceTooltipWireframe.StatusContainer>
        <VeltPresenceTooltipWireframe.UserName />
        <VeltPresenceTooltipWireframe.UserActive />
        <VeltPresenceTooltipWireframe.UserInactive />
    </VeltPresenceTooltipWireframe.StatusContainer>
</VeltWireframe>
```

#### UserName

![Image 8: presence-tooltip-username.png](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/presence/presence-tooltip-username.png)

```
<VeltWireframe>
    <VeltPresenceTooltipWireframe.UserName />
</VeltWireframe>
```

#### UserActive

![Image 9: presence-tooltip-user-active.png](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/presence/presence-tooltip-user-active.png)

```
<VeltWireframe>
    <VeltPresenceTooltipWireframe.UserActive />
</VeltWireframe>
```

#### UserInactive

![Image 10: presence-tooltip-user-inactive.png](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/presence/presence-tooltip-user-inactive.png)

```
<VeltWireframe>
    <VeltPresenceTooltipWireframe.UserInactive />
</VeltWireframe>
```

Styling
-------

### Disable ShadowDOM

*   By default, ShadowDOM is used to ensure that your app’s CSS does not interfere with the styling of the SDK components.
*   Disable the shadow dom to apply your custom CSS to the component.

Default: `true`

```
<VeltPresence shadowDom={false} />
```

Was this page helpful?
