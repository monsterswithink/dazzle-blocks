Title: Filter Type - Assigned - Velt

URL Source: https://docs.velt.dev/ui-customization/features/async/comments/comments-sidebar/subcomponents/filter/subcomponents/assigned

Markdown Content:
```
<VeltWireframe>
    <VeltCommentsSidebarWireframe.Filter.Assigned>
        <VeltCommentsSidebarWireframe.Filter.Assigned.Name />

        {/* Searchable Dropdown: It's not visible by default. You need to add the wireframe to the sidebar. */}
        <VeltCommentsSidebarWireframe.Filter.Assigned.Search>
            <VeltCommentsSidebarWireframe.Filter.Assigned.Search.Tags>
                <VeltCommentsSidebarWireframe.Filter.Assigned.Search.Tags.Item>
                    <VeltCommentsSidebarWireframe.Filter.Assigned.Search.Tags.Item.Name />
                    <VeltCommentsSidebarWireframe.Filter.Assigned.Search.Tags.Item.Close />
                </VeltCommentsSidebarWireframe.Filter.Assigned.Search.Tags.Item>
            </VeltCommentsSidebarWireframe.Filter.Assigned.Search.Tags>
            <VeltCommentsSidebarWireframe.Filter.Assigned.Search.HiddenCount />
            <VeltCommentsSidebarWireframe.Filter.Assigned.Search.Input />
            <VeltCommentsSidebarWireframe.Filter.Assigned.Search.DropdownIcon />
        </VeltCommentsSidebarWireframe.Filter.Assigned.Search>

        {/* Checklist: It's visible by default. */}
        <VeltCommentsSidebarWireframe.Filter.Assigned.Item>
            <VeltCommentsSidebarWireframe.Filter.Assigned.Item.Checkbox>
                <VeltCommentsSidebarWireframe.Filter.Assigned.Item.Checkbox.Checked />
                <VeltCommentsSidebarWireframe.Filter.Assigned.Item.Checkbox.Unchecked />
            </VeltCommentsSidebarWireframe.Filter.Assigned.Item.Checkbox>
            <VeltCommentsSidebarWireframe.Filter.Assigned.Item.Name />
            <VeltCommentsSidebarWireframe.Filter.Assigned.Item.Count />
        </VeltCommentsSidebarWireframe.Filter.Assigned.Item>
    </VeltCommentsSidebarWireframe.Filter.Assigned>
</VeltWireframe>
```

Subcomponents

The subcomponent of the Comments Sidebar Filter that represents the Assigned filter

```
<VeltWireframe>
    <VeltCommentsSidebarWireframe.Filter.Assigned>
        <VeltCommentsSidebarWireframe.Filter.Assigned.Name />

        {/* Searchable Dropdown: It's not visible by default. You need to add the wireframe to the sidebar. */}
        <VeltCommentsSidebarWireframe.Filter.Assigned.Search>
            <VeltCommentsSidebarWireframe.Filter.Assigned.Search.Tags>
                <VeltCommentsSidebarWireframe.Filter.Assigned.Search.Tags.Item>
                    <VeltCommentsSidebarWireframe.Filter.Assigned.Search.Tags.Item.Name />
                    <VeltCommentsSidebarWireframe.Filter.Assigned.Search.Tags.Item.Close />
                </VeltCommentsSidebarWireframe.Filter.Assigned.Search.Tags.Item>
            </VeltCommentsSidebarWireframe.Filter.Assigned.Search.Tags>
            <VeltCommentsSidebarWireframe.Filter.Assigned.Search.HiddenCount />
            <VeltCommentsSidebarWireframe.Filter.Assigned.Search.Input />
            <VeltCommentsSidebarWireframe.Filter.Assigned.Search.DropdownIcon />
        </VeltCommentsSidebarWireframe.Filter.Assigned.Search>

        {/* Checklist: It's visible by default. */}
        <VeltCommentsSidebarWireframe.Filter.Assigned.Item>
            <VeltCommentsSidebarWireframe.Filter.Assigned.Item.Checkbox>
                <VeltCommentsSidebarWireframe.Filter.Assigned.Item.Checkbox.Checked />
                <VeltCommentsSidebarWireframe.Filter.Assigned.Item.Checkbox.Unchecked />
            </VeltCommentsSidebarWireframe.Filter.Assigned.Item.Checkbox>
            <VeltCommentsSidebarWireframe.Filter.Assigned.Item.Name />
            <VeltCommentsSidebarWireframe.Filter.Assigned.Item.Count />
        </VeltCommentsSidebarWireframe.Filter.Assigned.Item>
    </VeltCommentsSidebarWireframe.Filter.Assigned>
</VeltWireframe>
```

You can either use this or use the global filter item wireframe to customize all the filter types of filter options at once. [Learn More](https://docs.velt.dev/ui-customization/features/async/comments/comments-sidebar/subcomponents/filter/subcomponents/filter-item)
