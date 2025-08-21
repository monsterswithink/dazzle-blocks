Title: Notifications Panel - Velt

URL Source: https://docs.velt.dev/ui-customization/features/async/notifications/notifications-panel

Markdown Content:
Overview
--------

![Image 1](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/notification/notification-overview.png)

```
<VeltWireframe>
    <VeltNotificationsPanelWireframe>
        <VeltNotificationsPanelWireframe.Title />
        <VeltNotificationsPanelWireframe.ReadAllButton />
        <VeltNotificationsPanelWireframe.SettingsButton />
        <VeltNotificationsPanelWireframe.Skeleton />
        <VeltNotificationsPanelWireframe.Header />
        <VeltNotificationsPanelWireframe.Content />
        <VeltNotificationsPanelWireframe.Settings />
    </VeltNotificationsPanelWireframe>
</VeltWireframe>
```

Title
-----

![Image 2](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/notification/notification-title.png)

```
<VeltWireframe>
    <VeltNotificationsPanelWireframe.Title />
</VeltWireframe>
```

ReadAllButton
-------------

![Image 3](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/notification/notification-read-all.png)

```
<VeltWireframe>
    <VeltNotificationsPanelWireframe.ReadAllButton />
</VeltWireframe>
```

Skeleton
--------

![Image 4](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/notification/notification-skeleton.png)

```
<VeltWireframe>
    <VeltNotificationsPanelWireframe.Skeleton />
</VeltWireframe>
```

![Image 5](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/notification/notification-header.png)

```
<VeltWireframe>
    <VeltNotificationsPanelWireframe.Header>
        <VeltNotificationsPanelWireframe.Header.TabAll />
        <VeltNotificationsPanelWireframe.Header.TabDocuments />
        <VeltNotificationsPanelWireframe.Header.TabForYou />
        <VeltNotificationsPanelWireframe.Header.TabPeople />
    </VeltNotificationsPanelWireframe.Header>
</VeltWireframe>
```

#### TabAll

![Image 6](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/notification/notification-header-tab-all.png)

```
<VeltWireframe>
    <VeltNotificationsPanelWireframe.Header.TabAll />
</VeltWireframe>
```

#### TabDocuments

![Image 7](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/notification/notification-header-tab-documents.png)

```
<VeltWireframe>
    <VeltNotificationsPanelWireframe.Header.TabDocuments />
</VeltWireframe>
```

#### TabForYou

![Image 8](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/notification/notification-header-tab-for-you.png)

```
<VeltWireframe>
    <VeltNotificationsPanelWireframe.Header.TabForYou />
</VeltWireframe>
```

#### TabPeople

![Image 9](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/notification/notification-header-people.png)

```
<VeltWireframe>
    <VeltNotificationsPanelWireframe.Header.TabPeople />
</VeltWireframe>
```

Content
-------

![Image 10](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/notification/notification-content.png)

```
<VeltWireframe>
    <VeltNotificationsPanelWireframe.Content>
        <VeltNotificationsPanelWireframe.Content.ForYou />
        <VeltNotificationsPanelWireframe.Content.All />
        <VeltNotificationsPanelWireframe.Content.Documents />
        <VeltNotificationsPanelWireframe.Content.People />
    </VeltNotificationsPanelWireframe.Content>
</VeltWireframe>
```

### ForYou

![Image 11](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/notification/notification-content-for-you.png)

```
<VeltWireframe>
    <VeltNotificationsPanelWireframe.Content.ForYou>
        <VeltNotificationsPanelWireframe.Content.List />
        <VeltNotificationsPanelWireframe.Content.LoadMore />
        <VeltNotificationsPanelWireframe.Content.AllReadContainer />
    </VeltNotificationsPanelWireframe.Content.ForYou>
</VeltWireframe>
```

### All

![Image 12](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/notification/notification-content-all.png)

```
<VeltWireframe>
    <VeltNotificationsPanelWireframe.Content.All>
        <VeltNotificationsPanelWireframe.Content.All.List />
        <VeltNotificationsPanelWireframe.Content.AllReadContainer />
    </VeltNotificationsPanelWireframe.Content.All>
</VeltWireframe>
```

#### All List

![Image 13](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/notification/notification-content-all-list.png)

```
<VeltWireframe>
    <VeltNotificationsPanelWireframe.Content.All.List>
        <VeltNotificationsPanelWireframe.Content.All.List.Item />
    </VeltNotificationsPanelWireframe.Content.All.List>
</VeltWireframe>
```

#### All List Item

![Image 14](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/notification/notification-content-all-list-item.png)

```
<VeltWireframe>
    <VeltNotificationsPanelWireframe.Content.All.List.Item>
        <VeltNotificationsPanelWireframe.Content.All.List.Item.Label />
        <VeltNotificationsPanelWireframe.Content.All.List.Item.Content />
    </VeltNotificationsPanelWireframe.Content.All.List.Item>
</VeltWireframe>
```

#### All List Item Label

![Image 15](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/notification/notification-content-all-list-item-label.png)

```
<VeltWireframe>
    <VeltNotificationsPanelWireframe.Content.All.List.Item.Label />
</VeltWireframe>
```

#### All List Item Content

![Image 16](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/notification/notification-content-all-list-item-content.png)

```
<VeltWireframe>
    <VeltNotificationsPanelWireframe.Content.All.List.Item.Content>
        <VeltNotificationsPanelWireframe.Content.List />
        <VeltNotificationsPanelWireframe.Content.LoadMore />
    </VeltNotificationsPanelWireframe.Content.All.List.Item.Content>
</VeltWireframe>
```

### Documents

![Image 17](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/notification/notification-content-documents.png)

```
<VeltWireframe>
    <VeltNotificationsPanelWireframe.Content.Documents>
        <VeltNotificationsPanelWireframe.Content.Documents.List />
        <VeltNotificationsPanelWireframe.Content.AllReadContainer />
    </VeltNotificationsPanelWireframe.Content.Documents>
</VeltWireframe>
```

#### Documents List

![Image 18](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/notification/notification-content-documents-list.png)

```
<VeltWireframe>
    <VeltNotificationsPanelWireframe.Content.Documents.List>
        <VeltNotificationsPanelWireframe.Content.Documents.List.Item />
    </VeltNotificationsPanelWireframe.Content.Documents.List>
</VeltWireframe>
```

#### Documents List Item

![Image 19](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/notification/notification-content-documents-list-item.png)

```
<VeltWireframe>
    <VeltNotificationsPanelWireframe.Content.Documents.List.Item>
        <VeltNotificationsPanelWireframe.Content.Documents.List.Item.Unread />
        <VeltNotificationsPanelWireframe.Content.Documents.List.Item.Name />
        <VeltNotificationsPanelWireframe.Content.Documents.List.Item.Count />
        <VeltNotificationsPanelWireframe.Content.Documents.List.Item.Content />
    </VeltNotificationsPanelWireframe.Content.Documents.List.Item>
</VeltWireframe>
```

#### Documents List Item Unread

![Image 20](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/notification/notification-content-documents-list-item-unread.png)

```
<VeltWireframe>
    <VeltNotificationsPanelWireframe.Content.Documents.List.Item.Unread />
</VeltWireframe>
```

#### Documents List Item Name

![Image 21](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/notification/notification-content-documents-list-item-name.png)

```
<VeltWireframe>
    <VeltNotificationsPanelWireframe.Content.Documents.List.Item.Name />
</VeltWireframe>
```

#### Documents List Item Count

![Image 22](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/notification/notification-content-documents-list-item-count.png)

```
<VeltWireframe>
    <VeltNotificationsPanelWireframe.Content.Documents.List.Item.Count />
</VeltWireframe>
```

#### Documents List Item Content

![Image 23](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/notification/notification-content-documents-list-item-content.png)

```
<VeltWireframe>
    <VeltNotificationsPanelWireframe.Content.Documents.List.Item.Content>
        <VeltNotificationsPanelWireframe.Content.List />
        <VeltNotificationsPanelWireframe.Content.LoadMore />
    </VeltNotificationsPanelWireframe.Content.Documents.List.Item.Content>
</VeltWireframe>
```

### People

![Image 24](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/notification/notification-content-people.png)

```
<VeltWireframe>
    <VeltNotificationsPanelWireframe.Content.People>
        <VeltNotificationsPanelWireframe.Content.People.List />
        <VeltNotificationsPanelWireframe.Content.AllReadContainer />
    </VeltNotificationsPanelWireframe.Content.People>
</VeltWireframe>
```

#### People List

![Image 25](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/notification/notification-content-people-list.png)

```
<VeltWireframe>
    <VeltNotificationsPanelWireframe.Content.People.List>
        <VeltNotificationsPanelWireframe.Content.People.List.Item />
    </VeltNotificationsPanelWireframe.Content.People.List>
</VeltWireframe>
```

#### People List Item

![Image 26](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/notification/notification-content-people-list-item.png)

```
<VeltWireframe>
    <VeltNotificationsPanelWireframe.Content.People.List.Item>
        <VeltNotificationsPanelWireframe.Content.People.List.Item.Avatar />
        <VeltNotificationsPanelWireframe.Content.People.List.Item.Name />
        <VeltNotificationsPanelWireframe.Content.People.List.Item.Count />
        <VeltNotificationsPanelWireframe.Content.People.List.Item.Content />
    </VeltNotificationsPanelWireframe.Content.People.List.Item>
</VeltWireframe>
```

#### People List Item Avatar

![Image 27](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/notification/notification-content-people-list-item-unread.png)

```
<VeltWireframe>
    <VeltNotificationsPanelWireframe.Content.People.List.Item.Avatar />
</VeltWireframe>
```

#### People List Item Name

![Image 28](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/notification/notification-content-people-list-item-name.png)

```
<VeltWireframe>
    <VeltNotificationsPanelWireframe.Content.People.List.Item.Name />
</VeltWireframe>
```

#### People List Item Count

![Image 29](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/notification/notification-content-people-list-item-count.png)

```
<VeltWireframe>
    <VeltNotificationsPanelWireframe.Content.People.List.Item.Count />
</VeltWireframe>
```

#### People List Item Content

![Image 30](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/notification/notification-content-people-list-item-content.png)

```
<VeltWireframe>
    <VeltNotificationsPanelWireframe.Content.People.List.Item.Content>
        <VeltNotificationsPanelWireframe.Content.List />
        <VeltNotificationsPanelWireframe.Content.LoadMore />
    </VeltNotificationsPanelWireframe.Content.People.List.Item.Content>
</VeltWireframe>
```

Settings
--------

![Image 31](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/notification/notification-settings.png)

```
<VeltWireframe>
    <VeltNotificationsPanelWireframe.Settings>
        <VeltNotificationsPanelWireframe.Settings.Header />
        <VeltNotificationsPanelWireframe.Settings.Title />
        <VeltNotificationsPanelWireframe.Settings.Description />
        <VeltNotificationsPanelWireframe.Settings.List />
        <VeltNotificationsPanelWireframe.Settings.Footer />
    </VeltNotificationsPanelWireframe.Settings>
</VeltWireframe>
```

![Image 32](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/notification/notification-settings-header.png)

```
<VeltWireframe>
    <VeltNotificationsPanelWireframe.Settings.Header>
        <VeltNotificationsPanelWireframe.Settings.BackButton />
        <VeltNotificationsPanelWireframe.Settings.Header.Title />
    </VeltNotificationsPanelWireframe.Settings.Header>
</VeltWireframe>
```

![Image 33](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/notification/notification-settings-header-back-button.png)

```
<VeltWireframe>
    <VeltNotificationsPanelWireframe.Settings.BackButton />
</VeltWireframe>
```

![Image 34](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/notification/notification-settings-header-title.png)

```
<VeltWireframe>
    <VeltNotificationsPanelWireframe.Settings.Header.Title />
</VeltWireframe>
```

### Settings Title

![Image 35](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/notification/notification-settings-title.png)

```
<VeltWireframe>
    <VeltNotificationsPanelWireframe.Settings.Title />
</VeltWireframe>
```

### Settings Description

![Image 36](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/notification/notification-settings-description.png)

```
<VeltWireframe>
    <VeltNotificationsPanelWireframe.Settings.Description />
</VeltWireframe>
```

### Settings List

![Image 37](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/notification/notification-settings-list.png)

```
<VeltWireframe>
    <VeltNotificationsPanelWireframe.Settings.List>
        <VeltNotificationsPanelWireframe.Settings.List.Accordion />
    </VeltNotificationsPanelWireframe.Settings.List>
</VeltWireframe>
```

#### Settings List Accordion

![Image 38](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/notification/notification-settings-list-accordion.png)

```
<VeltWireframe>
    <VeltNotificationsPanelWireframe.Settings.List.Accordion>
        <VeltNotificationsPanelWireframe.Settings.List.Accordion.Trigger />
        <VeltNotificationsPanelWireframe.Settings.List.Accordion.Content />
    </VeltNotificationsPanelWireframe.Settings.List.Accordion>
</VeltWireframe>
```

#### Accordion Trigger

![Image 39](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/notification/notification-settings-accordion-trigger.png)

```
<VeltWireframe>
    <VeltNotificationsPanelWireframe.Settings.List.Accordion.Trigger>
        <VeltNotificationsPanelWireframe.Settings.List.Accordion.Trigger.Label />
        <VeltNotificationsPanelWireframe.Settings.List.Accordion.Trigger.SelectedValue />
        <VeltNotificationsPanelWireframe.Settings.List.Accordion.Trigger.Icon />
    </VeltNotificationsPanelWireframe.Settings.List.Accordion.Trigger>
</VeltWireframe>
```

#### Accordion Trigger Label

![Image 40](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/notification/notification-settings-accordion-trigger-label.png)

```
<VeltWireframe>
    <VeltNotificationsPanelWireframe.Settings.List.Accordion.Trigger.Label />
</VeltWireframe>
```

#### Accordion Trigger SelectedValue

![Image 41](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/notification/notification-settings-accordion-trigger-selected-value.png)

```
<VeltWireframe>
    <VeltNotificationsPanelWireframe.Settings.List.Accordion.Trigger.SelectedValue />
</VeltWireframe>
```

#### Accordion Trigger Icon

![Image 42](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/notification/notification-settings-accordion-trigger-icon.png)

```
<VeltWireframe>
    <VeltNotificationsPanelWireframe.Settings.List.Accordion.Trigger.Icon />
</VeltWireframe>
```

#### Accordion Content

![Image 43](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/notification/notification-settings-accordion-content.png)

```
<VeltWireframe>
    <VeltNotificationsPanelWireframe.Settings.List.Accordion.Content>
        <VeltNotificationsPanelWireframe.Settings.List.Accordion.Content.Item />
    </VeltNotificationsPanelWireframe.Settings.List.Accordion.Content>
</VeltWireframe>
```

#### Accordion Content Item

![Image 44](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/notification/notification-settings-accordion-content-item.png)

```
<VeltWireframe>
    <VeltNotificationsPanelWireframe.Settings.List.Accordion.Content.Item>
        <VeltNotificationsPanelWireframe.Settings.List.Accordion.Content.Item.Icon />
        <VeltNotificationsPanelWireframe.Settings.List.Accordion.Content.Item.Label />
    </VeltNotificationsPanelWireframe.Settings.List.Accordion.Content.Item>
</VeltWireframe>
```

#### Accordion Content Item Icon

![Image 45](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/notification/notification-settings-accordion-content-item-icon.png)

```
<VeltWireframe>
    <VeltNotificationsPanelWireframe.Settings.List.Accordion.Content.Item.Icon />
</VeltWireframe>
```

#### Accordion Content Item Label

![Image 46](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/notification/notification-settings-accordion-content-item-label.png)

```
<VeltWireframe>
    <VeltNotificationsPanelWireframe.Settings.List.Accordion.Content.Item.Label />
</VeltWireframe>
```

![Image 47](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/notification/notification-settings-footer.png)

```
<VeltWireframe>
    <VeltNotificationsPanelWireframe.Settings.Footer>
        <VeltNotificationsPanelWireframe.Settings.MuteAllTitle />
        <VeltNotificationsPanelWireframe.Settings.MuteAllDescription />
        <VeltNotificationsPanelWireframe.Settings.MuteAllToggle />
    </VeltNotificationsPanelWireframe.Settings.Footer>
</VeltWireframe>
```

#### MuteAllTitle

![Image 48](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/notification/notification-settings-footer-mute-all-title.png)

```
<VeltWireframe>
    <VeltNotificationsPanelWireframe.Settings.MuteAllTitle />
</VeltWireframe>
```

#### MuteAllDescription

![Image 49](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/notification/notification-settings-footer-mute-all-description.png)

```
<VeltWireframe>
    <VeltNotificationsPanelWireframe.Settings.MuteAllDescription />
</VeltWireframe>
```

#### MuteAllToggle

![Image 50](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/notification/notification-settings-footer-mute-all-toggle.png)

```
<VeltWireframe>
    <VeltNotificationsPanelWireframe.Settings.MuteAllToggle />
</VeltWireframe>
```

### Content List

![Image 51](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/notification/common-content-list.png)

```
<VeltWireframe>
    <VeltNotificationsPanelWireframe.Content.List>
        <VeltNotificationsPanelWireframe.Content.List.Item />
    </VeltNotificationsPanelWireframe.Content.List>
</VeltWireframe>
```

### Content List Item

![Image 52](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/notification/common-content-list-item.png)

```
<VeltWireframe>
    <VeltNotificationsPanelWireframe.Content.List.Item>
        <VeltNotificationsPanelWireframe.Content.List.Item.Avatar />
        <VeltNotificationsPanelWireframe.Content.List.Item.Unread />
        <VeltNotificationsPanelWireframe.Content.List.Item.Headline />
        <VeltNotificationsPanelWireframe.Content.List.Item.Body />
        <VeltNotificationsPanelWireframe.Content.List.Item.FileName />
        <VeltNotificationsPanelWireframe.Content.List.Item.Time />
    </VeltNotificationsPanelWireframe.Content.List.Item>
</VeltWireframe>
```

#### Content List Item Avatar

![Image 53](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/notification/common-content-list-item-avatar.png)

```
<VeltWireframe>
    <VeltNotificationsPanelWireframe.Content.List.Item.Avatar />
</VeltWireframe>
```

#### Content List Item Unread

![Image 54](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/notification/common-content-list-item-unread.png)

```
<VeltWireframe>
    <VeltNotificationsPanelWireframe.Content.List.Item.Unread />
</VeltWireframe>
```

#### Content List Item Headline

![Image 55](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/notification/common-content-list-item-headline.png)

```
<VeltWireframe>
    <VeltNotificationsPanelWireframe.Content.List.Item.Headline />
</VeltWireframe>
```

#### Content List Item Body

![Image 56](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/notification/common-content-list-item-body.png)

```
<VeltWireframe>
    <VeltNotificationsPanelWireframe.Content.List.Item.Body />
</VeltWireframe>
```

#### Content List Item FileName

![Image 57](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/notification/common-content-list-item-file-name.png)

```
<VeltWireframe>
    <VeltNotificationsPanelWireframe.Content.List.Item.FileName />
</VeltWireframe>
```

#### Content List Item Time

![Image 58](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/notification/common-content-list-item-time.png)

```
<VeltWireframe>
    <VeltNotificationsPanelWireframe.Content.List.Item.Time />
</VeltWireframe>
```

### LoadMore

![Image 59](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/notification/common-content-load-more.png)

```
<VeltWireframe>
    <VeltNotificationsPanelWireframe.Content.LoadMore />
</VeltWireframe>
```

### AllReadContainer

![Image 60](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/notification/common-content-all-read-container.png)

```
<VeltWireframe>
    <VeltNotificationsPanelWireframe.Content.AllReadContainer />
</VeltWireframe>
```

Styling
-------

### Disable ShadowDOM

*   By default, ShadowDOM is used to ensure that your app’s CSS does not interfere with the styling of the SDK components.
*   Disable the shadow dom to apply your custom CSS to the component.

`Default: true`

```
<VeltNotificationsPanel shadowDom={false} />
```

### Dark Mode

`Default: false`

```
<VeltNotificationsPanel darkMode={true} />
```
