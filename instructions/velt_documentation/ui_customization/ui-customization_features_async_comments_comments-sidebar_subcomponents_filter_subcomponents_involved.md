Title: Filter Type - Involved - Velt

URL Source: https://docs.velt.dev/ui-customization/features/async/comments/comments-sidebar/subcomponents/filter/subcomponents/involved

Markdown Content:
```
<VeltWireframe>
    <VeltCommentsSidebarWireframe.Filter.Involved>
        <VeltCommentsSidebarWireframe.Filter.Involved.Name />

        {/* Searchable Dropdown: It's not visible by default. You need to add the wireframe to the sidebar. */}
        <VeltCommentsSidebarWireframe.Filter.Involved.Search>
            <VeltCommentsSidebarWireframe.Filter.Involved.Search.Tags>
                <VeltCommentsSidebarWireframe.Filter.Involved.Search.Tags.Item>
                    <VeltCommentsSidebarWireframe.Filter.Involved.Search.Tags.Item.Name />
                    <VeltCommentsSidebarWireframe.Filter.Involved.Search.Tags.Item.Close />
                </VeltCommentsSidebarWireframe.Filter.Involved.Search.Tags.Item>
            </VeltCommentsSidebarWireframe.Filter.Involved.Search.Tags>
            <VeltCommentsSidebarWireframe.Filter.Involved.Search.HiddenCount />
            <VeltCommentsSidebarWireframe.Filter.Involved.Search.Input />
            <VeltCommentsSidebarWireframe.Filter.Involved.Search.DropdownIcon />
        </VeltCommentsSidebarWireframe.Filter.Involved.Search>

        {/* Checklist: It's visible by default. */}
        <VeltCommentsSidebarWireframe.Filter.Involved.Item>
            <VeltCommentsSidebarWireframe.Filter.Involved.Item.Checkbox>
                <VeltCommentsSidebarWireframe.Filter.Involved.Item.Checkbox.Checked />
                <VeltCommentsSidebarWireframe.Filter.Involved.Item.Checkbox.Unchecked />
            </VeltCommentsSidebarWireframe.Filter.Involved.Item.Checkbox>
            <VeltCommentsSidebarWireframe.Filter.Involved.Item.Name />
            <VeltCommentsSidebarWireframe.Filter.Involved.Item.Count />
        </VeltCommentsSidebarWireframe.Filter.Involved.Item>
    </VeltCommentsSidebarWireframe.Filter.Involved>
</VeltWireframe>
```

Subcomponents

The subcomponent of the Comments Sidebar Filter that represents the Involved filter

```
<VeltWireframe>
    <VeltCommentsSidebarWireframe.Filter.Involved>
        <VeltCommentsSidebarWireframe.Filter.Involved.Name />

        {/* Searchable Dropdown: It's not visible by default. You need to add the wireframe to the sidebar. */}
        <VeltCommentsSidebarWireframe.Filter.Involved.Search>
            <VeltCommentsSidebarWireframe.Filter.Involved.Search.Tags>
                <VeltCommentsSidebarWireframe.Filter.Involved.Search.Tags.Item>
                    <VeltCommentsSidebarWireframe.Filter.Involved.Search.Tags.Item.Name />
                    <VeltCommentsSidebarWireframe.Filter.Involved.Search.Tags.Item.Close />
                </VeltCommentsSidebarWireframe.Filter.Involved.Search.Tags.Item>
            </VeltCommentsSidebarWireframe.Filter.Involved.Search.Tags>
            <VeltCommentsSidebarWireframe.Filter.Involved.Search.HiddenCount />
            <VeltCommentsSidebarWireframe.Filter.Involved.Search.Input />
            <VeltCommentsSidebarWireframe.Filter.Involved.Search.DropdownIcon />
        </VeltCommentsSidebarWireframe.Filter.Involved.Search>

        {/* Checklist: It's visible by default. */}
        <VeltCommentsSidebarWireframe.Filter.Involved.Item>
            <VeltCommentsSidebarWireframe.Filter.Involved.Item.Checkbox>
                <VeltCommentsSidebarWireframe.Filter.Involved.Item.Checkbox.Checked />
                <VeltCommentsSidebarWireframe.Filter.Involved.Item.Checkbox.Unchecked />
            </VeltCommentsSidebarWireframe.Filter.Involved.Item.Checkbox>
            <VeltCommentsSidebarWireframe.Filter.Involved.Item.Name />
            <VeltCommentsSidebarWireframe.Filter.Involved.Item.Count />
        </VeltCommentsSidebarWireframe.Filter.Involved.Item>
    </VeltCommentsSidebarWireframe.Filter.Involved>
</VeltWireframe>
```

You can either use this or use the global filter item wireframe to customize all the filter types of filter options at once. [Learn More](https://docs.velt.dev/ui-customization/features/async/comments/comments-sidebar/subcomponents/filter/subcomponents/filter-item)
