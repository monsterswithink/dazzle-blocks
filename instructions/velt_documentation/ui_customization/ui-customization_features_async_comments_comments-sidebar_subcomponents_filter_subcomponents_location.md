Title: Filter Type - Location - Velt

URL Source: https://docs.velt.dev/ui-customization/features/async/comments/comments-sidebar/subcomponents/filter/subcomponents/location

Markdown Content:
```
<VeltWireframe>
    <VeltCommentsSidebarWireframe.Filter.Location>
        <VeltCommentsSidebarWireframe.Filter.Location.Name />

        {/* Searchable Dropdown: It's not visible by default. You need to add the wireframe to the sidebar. */}
        <VeltCommentsSidebarWireframe.Filter.Location.Search>
            <VeltCommentsSidebarWireframe.Filter.Location.Search.Tags>
                <VeltCommentsSidebarWireframe.Filter.Location.Search.Tags.Item>
                    <VeltCommentsSidebarWireframe.Filter.Location.Search.Tags.Item.Name />
                    <VeltCommentsSidebarWireframe.Filter.Location.Search.Tags.Item.Close />
                </VeltCommentsSidebarWireframe.Filter.Location.Search.Tags.Item>
            </VeltCommentsSidebarWireframe.Filter.Location.Search.Tags>
            <VeltCommentsSidebarWireframe.Filter.Location.Search.HiddenCount />
            <VeltCommentsSidebarWireframe.Filter.Location.Search.Input />
            <VeltCommentsSidebarWireframe.Filter.Location.Search.DropdownIcon />
        </VeltCommentsSidebarWireframe.Filter.Location.Search>

        {/* Checklist: It's visible by default. */}
        <VeltCommentsSidebarWireframe.Filter.Location.Item>
            <VeltCommentsSidebarWireframe.Filter.Location.Item.Checkbox>
                <VeltCommentsSidebarWireframe.Filter.Location.Item.Checkbox.Checked />
                <VeltCommentsSidebarWireframe.Filter.Location.Item.Checkbox.Unchecked />
            </VeltCommentsSidebarWireframe.Filter.Location.Item.Checkbox>
            <VeltCommentsSidebarWireframe.Filter.Location.Item.Name />
            <VeltCommentsSidebarWireframe.Filter.Location.Item.Count />
        </VeltCommentsSidebarWireframe.Filter.Location.Item>

        <VeltCommentsSidebarWireframe.Filter.Location.ViewAll />
    </VeltCommentsSidebarWireframe.Filter.Location>
</VeltWireframe>
```

Subcomponents

The subcomponent of the Comments Sidebar Filter that represents the Location filter

```
<VeltWireframe>
    <VeltCommentsSidebarWireframe.Filter.Location>
        <VeltCommentsSidebarWireframe.Filter.Location.Name />

        {/* Searchable Dropdown: It's not visible by default. You need to add the wireframe to the sidebar. */}
        <VeltCommentsSidebarWireframe.Filter.Location.Search>
            <VeltCommentsSidebarWireframe.Filter.Location.Search.Tags>
                <VeltCommentsSidebarWireframe.Filter.Location.Search.Tags.Item>
                    <VeltCommentsSidebarWireframe.Filter.Location.Search.Tags.Item.Name />
                    <VeltCommentsSidebarWireframe.Filter.Location.Search.Tags.Item.Close />
                </VeltCommentsSidebarWireframe.Filter.Location.Search.Tags.Item>
            </VeltCommentsSidebarWireframe.Filter.Location.Search.Tags>
            <VeltCommentsSidebarWireframe.Filter.Location.Search.HiddenCount />
            <VeltCommentsSidebarWireframe.Filter.Location.Search.Input />
            <VeltCommentsSidebarWireframe.Filter.Location.Search.DropdownIcon />
        </VeltCommentsSidebarWireframe.Filter.Location.Search>

        {/* Checklist: It's visible by default. */}
        <VeltCommentsSidebarWireframe.Filter.Location.Item>
            <VeltCommentsSidebarWireframe.Filter.Location.Item.Checkbox>
                <VeltCommentsSidebarWireframe.Filter.Location.Item.Checkbox.Checked />
                <VeltCommentsSidebarWireframe.Filter.Location.Item.Checkbox.Unchecked />
            </VeltCommentsSidebarWireframe.Filter.Location.Item.Checkbox>
            <VeltCommentsSidebarWireframe.Filter.Location.Item.Name />
            <VeltCommentsSidebarWireframe.Filter.Location.Item.Count />
        </VeltCommentsSidebarWireframe.Filter.Location.Item>

        <VeltCommentsSidebarWireframe.Filter.Location.ViewAll />
    </VeltCommentsSidebarWireframe.Filter.Location>
</VeltWireframe>
```

You can either use this or use the global filter item wireframe to customize all the filter types of filter options at once. [Learn More](https://docs.velt.dev/ui-customization/features/async/comments/comments-sidebar/subcomponents/filter/subcomponents/filter-item)

Default Subcomponent
--------------------

![Image 1](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/filter-location.png)
