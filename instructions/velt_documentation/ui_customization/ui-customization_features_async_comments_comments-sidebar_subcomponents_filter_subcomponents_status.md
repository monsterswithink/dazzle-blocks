Title: Filter Type - Status - Velt

URL Source: https://docs.velt.dev/ui-customization/features/async/comments/comments-sidebar/subcomponents/filter/subcomponents/status

Markdown Content:
```
<VeltWireframe>
    <VeltCommentsSidebarWireframe.Filter.Status>
        <VeltCommentsSidebarWireframe.Filter.Status.Name />

        {/* Searchable Dropdown: It's not visible by default. You need to add the wireframe to the sidebar. */}
        <VeltCommentsSidebarWireframe.Filter.Status.Search>
            <VeltCommentsSidebarWireframe.Filter.Status.Search.Tags>
                <VeltCommentsSidebarWireframe.Filter.Status.Search.Tags.Item>
                    <VeltCommentsSidebarWireframe.Filter.Status.Search.Tags.Item.Name />
                    <VeltCommentsSidebarWireframe.Filter.Status.Search.Tags.Item.Close />
                </VeltCommentsSidebarWireframe.Filter.Status.Search.Tags.Item>
            </VeltCommentsSidebarWireframe.Filter.Status.Search.Tags>
            <VeltCommentsSidebarWireframe.Filter.Status.Search.HiddenCount />
            <VeltCommentsSidebarWireframe.Filter.Status.Search.Input />
            <VeltCommentsSidebarWireframe.Filter.Status.Search.DropdownIcon />
        </VeltCommentsSidebarWireframe.Filter.Status.Search>

        {/* Checklist: It's visible by default. */}
        <VeltCommentsSidebarWireframe.Filter.Status.Item>
            <VeltCommentsSidebarWireframe.Filter.Status.Item.Checkbox>
                <VeltCommentsSidebarWireframe.Filter.Status.Item.Checkbox.Checked />
                <VeltCommentsSidebarWireframe.Filter.Status.Item.Checkbox.Unchecked />
            </VeltCommentsSidebarWireframe.Filter.Status.Item.Checkbox>
            <VeltCommentsSidebarWireframe.Filter.Status.Item.Name />
            <VeltCommentsSidebarWireframe.Filter.Status.Item.Count />
        </VeltCommentsSidebarWireframe.Filter.Status.Item>
    </VeltCommentsSidebarWireframe.Filter.Status>
</VeltWireframe>
```

Subcomponents

The subcomponent of the Comments Sidebar Filter that represents the Status filter

```
<VeltWireframe>
    <VeltCommentsSidebarWireframe.Filter.Status>
        <VeltCommentsSidebarWireframe.Filter.Status.Name />

        {/* Searchable Dropdown: It's not visible by default. You need to add the wireframe to the sidebar. */}
        <VeltCommentsSidebarWireframe.Filter.Status.Search>
            <VeltCommentsSidebarWireframe.Filter.Status.Search.Tags>
                <VeltCommentsSidebarWireframe.Filter.Status.Search.Tags.Item>
                    <VeltCommentsSidebarWireframe.Filter.Status.Search.Tags.Item.Name />
                    <VeltCommentsSidebarWireframe.Filter.Status.Search.Tags.Item.Close />
                </VeltCommentsSidebarWireframe.Filter.Status.Search.Tags.Item>
            </VeltCommentsSidebarWireframe.Filter.Status.Search.Tags>
            <VeltCommentsSidebarWireframe.Filter.Status.Search.HiddenCount />
            <VeltCommentsSidebarWireframe.Filter.Status.Search.Input />
            <VeltCommentsSidebarWireframe.Filter.Status.Search.DropdownIcon />
        </VeltCommentsSidebarWireframe.Filter.Status.Search>

        {/* Checklist: It's visible by default. */}
        <VeltCommentsSidebarWireframe.Filter.Status.Item>
            <VeltCommentsSidebarWireframe.Filter.Status.Item.Checkbox>
                <VeltCommentsSidebarWireframe.Filter.Status.Item.Checkbox.Checked />
                <VeltCommentsSidebarWireframe.Filter.Status.Item.Checkbox.Unchecked />
            </VeltCommentsSidebarWireframe.Filter.Status.Item.Checkbox>
            <VeltCommentsSidebarWireframe.Filter.Status.Item.Name />
            <VeltCommentsSidebarWireframe.Filter.Status.Item.Count />
        </VeltCommentsSidebarWireframe.Filter.Status.Item>
    </VeltCommentsSidebarWireframe.Filter.Status>
</VeltWireframe>
```

You can either use this or use the global filter item wireframe to customize all the filter types of filter options at once. [Learn More](https://docs.velt.dev/ui-customization/features/async/comments/comments-sidebar/subcomponents/filter/subcomponents/filter-item)
