Title: Filter Type - Tagged - Velt

URL Source: https://docs.velt.dev/ui-customization/features/async/comments/comments-sidebar/subcomponents/filter/subcomponents/tagged

Markdown Content:
```
<VeltWireframe>
    <VeltCommentsSidebarWireframe.Filter.Tagged>
        <VeltCommentsSidebarWireframe.Filter.Tagged.Name />

        {/* Searchable Dropdown: It's not visible by default. You need to add the wireframe to the sidebar. */}
        <VeltCommentsSidebarWireframe.Filter.Tagged.Search>
            <VeltCommentsSidebarWireframe.Filter.Tagged.Search.Tags>
                <VeltCommentsSidebarWireframe.Filter.Tagged.Search.Tags.Item>
                    <VeltCommentsSidebarWireframe.Filter.Tagged.Search.Tags.Item.Name />
                    <VeltCommentsSidebarWireframe.Filter.Tagged.Search.Tags.Item.Close />
                </VeltCommentsSidebarWireframe.Filter.Tagged.Search.Tags.Item>
            </VeltCommentsSidebarWireframe.Filter.Tagged.Search.Tags>
            <VeltCommentsSidebarWireframe.Filter.Tagged.Search.HiddenCount />
            <VeltCommentsSidebarWireframe.Filter.Tagged.Search.Input />
            <VeltCommentsSidebarWireframe.Filter.Tagged.Search.DropdownIcon />
        </VeltCommentsSidebarWireframe.Filter.Tagged.Search>

        {/* Checklist: It's visible by default. */}
        <VeltCommentsSidebarWireframe.Filter.Tagged.Item>
            <VeltCommentsSidebarWireframe.Filter.Tagged.Item.Checkbox>
                <VeltCommentsSidebarWireframe.Filter.Tagged.Item.Checkbox.Checked />
                <VeltCommentsSidebarWireframe.Filter.Tagged.Item.Checkbox.Unchecked />
            </VeltCommentsSidebarWireframe.Filter.Tagged.Item.Checkbox>
            <VeltCommentsSidebarWireframe.Filter.Tagged.Item.Name />
            <VeltCommentsSidebarWireframe.Filter.Tagged.Item.Count />
        </VeltCommentsSidebarWireframe.Filter.Tagged.Item>
    </VeltCommentsSidebarWireframe.Filter.Tagged>
</VeltWireframe>
```

Subcomponents

The subcomponent of the Comments Sidebar Filter that represents the Tagged filter

```
<VeltWireframe>
    <VeltCommentsSidebarWireframe.Filter.Tagged>
        <VeltCommentsSidebarWireframe.Filter.Tagged.Name />

        {/* Searchable Dropdown: It's not visible by default. You need to add the wireframe to the sidebar. */}
        <VeltCommentsSidebarWireframe.Filter.Tagged.Search>
            <VeltCommentsSidebarWireframe.Filter.Tagged.Search.Tags>
                <VeltCommentsSidebarWireframe.Filter.Tagged.Search.Tags.Item>
                    <VeltCommentsSidebarWireframe.Filter.Tagged.Search.Tags.Item.Name />
                    <VeltCommentsSidebarWireframe.Filter.Tagged.Search.Tags.Item.Close />
                </VeltCommentsSidebarWireframe.Filter.Tagged.Search.Tags.Item>
            </VeltCommentsSidebarWireframe.Filter.Tagged.Search.Tags>
            <VeltCommentsSidebarWireframe.Filter.Tagged.Search.HiddenCount />
            <VeltCommentsSidebarWireframe.Filter.Tagged.Search.Input />
            <VeltCommentsSidebarWireframe.Filter.Tagged.Search.DropdownIcon />
        </VeltCommentsSidebarWireframe.Filter.Tagged.Search>

        {/* Checklist: It's visible by default. */}
        <VeltCommentsSidebarWireframe.Filter.Tagged.Item>
            <VeltCommentsSidebarWireframe.Filter.Tagged.Item.Checkbox>
                <VeltCommentsSidebarWireframe.Filter.Tagged.Item.Checkbox.Checked />
                <VeltCommentsSidebarWireframe.Filter.Tagged.Item.Checkbox.Unchecked />
            </VeltCommentsSidebarWireframe.Filter.Tagged.Item.Checkbox>
            <VeltCommentsSidebarWireframe.Filter.Tagged.Item.Name />
            <VeltCommentsSidebarWireframe.Filter.Tagged.Item.Count />
        </VeltCommentsSidebarWireframe.Filter.Tagged.Item>
    </VeltCommentsSidebarWireframe.Filter.Tagged>
</VeltWireframe>
```

You can either use this or use the global filter item wireframe to customize all the filter types of filter options at once. [Learn More](https://docs.velt.dev/ui-customization/features/async/comments/comments-sidebar/subcomponents/filter/subcomponents/filter-item)
