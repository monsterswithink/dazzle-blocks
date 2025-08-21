Title: Filter Type - Priority - Velt

URL Source: https://docs.velt.dev/ui-customization/features/async/comments/comments-sidebar/subcomponents/filter/subcomponents/priority

Markdown Content:
```
<VeltWireframe>
    <VeltCommentsSidebarWireframe.Filter.Priority>
        <VeltCommentsSidebarWireframe.Filter.Priority.Name />

        {/* Searchable Dropdown: It's not visible by default. You need to add the wireframe to the sidebar. */}
        <VeltCommentsSidebarWireframe.Filter.Priority.Search>
            <VeltCommentsSidebarWireframe.Filter.Priority.Search.Tags>
                <VeltCommentsSidebarWireframe.Filter.Priority.Search.Tags.Item>
                    <VeltCommentsSidebarWireframe.Filter.Priority.Search.Tags.Item.Name />
                    <VeltCommentsSidebarWireframe.Filter.Priority.Search.Tags.Item.Close />
                </VeltCommentsSidebarWireframe.Filter.Priority.Search.Tags.Item>
            </VeltCommentsSidebarWireframe.Filter.Priority.Search.Tags>
            <VeltCommentsSidebarWireframe.Filter.Priority.Search.HiddenCount />
            <VeltCommentsSidebarWireframe.Filter.Priority.Search.Input />
            <VeltCommentsSidebarWireframe.Filter.Priority.Search.DropdownIcon />
        </VeltCommentsSidebarWireframe.Filter.Priority.Search>

        {/* Checklist: It's visible by default. */}
        <VeltCommentsSidebarWireframe.Filter.Priority.Item>
            <VeltCommentsSidebarWireframe.Filter.Priority.Item.Checkbox>
                <VeltCommentsSidebarWireframe.Filter.Priority.Item.Checkbox.Checked />
                <VeltCommentsSidebarWireframe.Filter.Priority.Item.Checkbox.Unchecked />
            </VeltCommentsSidebarWireframe.Filter.Priority.Item.Checkbox>
            <VeltCommentsSidebarWireframe.Filter.Priority.Item.Name />
            <VeltCommentsSidebarWireframe.Filter.Priority.Item.Count />
        </VeltCommentsSidebarWireframe.Filter.Priority.Item>
    </VeltCommentsSidebarWireframe.Filter.Priority>
</VeltWireframe>
```

Subcomponents

The subcomponent of the Comments Sidebar Filter that represents the Priority filter

```
<VeltWireframe>
    <VeltCommentsSidebarWireframe.Filter.Priority>
        <VeltCommentsSidebarWireframe.Filter.Priority.Name />

        {/* Searchable Dropdown: It's not visible by default. You need to add the wireframe to the sidebar. */}
        <VeltCommentsSidebarWireframe.Filter.Priority.Search>
            <VeltCommentsSidebarWireframe.Filter.Priority.Search.Tags>
                <VeltCommentsSidebarWireframe.Filter.Priority.Search.Tags.Item>
                    <VeltCommentsSidebarWireframe.Filter.Priority.Search.Tags.Item.Name />
                    <VeltCommentsSidebarWireframe.Filter.Priority.Search.Tags.Item.Close />
                </VeltCommentsSidebarWireframe.Filter.Priority.Search.Tags.Item>
            </VeltCommentsSidebarWireframe.Filter.Priority.Search.Tags>
            <VeltCommentsSidebarWireframe.Filter.Priority.Search.HiddenCount />
            <VeltCommentsSidebarWireframe.Filter.Priority.Search.Input />
            <VeltCommentsSidebarWireframe.Filter.Priority.Search.DropdownIcon />
        </VeltCommentsSidebarWireframe.Filter.Priority.Search>

        {/* Checklist: It's visible by default. */}
        <VeltCommentsSidebarWireframe.Filter.Priority.Item>
            <VeltCommentsSidebarWireframe.Filter.Priority.Item.Checkbox>
                <VeltCommentsSidebarWireframe.Filter.Priority.Item.Checkbox.Checked />
                <VeltCommentsSidebarWireframe.Filter.Priority.Item.Checkbox.Unchecked />
            </VeltCommentsSidebarWireframe.Filter.Priority.Item.Checkbox>
            <VeltCommentsSidebarWireframe.Filter.Priority.Item.Name />
            <VeltCommentsSidebarWireframe.Filter.Priority.Item.Count />
        </VeltCommentsSidebarWireframe.Filter.Priority.Item>
    </VeltCommentsSidebarWireframe.Filter.Priority>
</VeltWireframe>
```

You can either use this or use the global filter item wireframe to customize all the filter types of filter options at once. [Learn More](https://docs.velt.dev/ui-customization/features/async/comments/comments-sidebar/subcomponents/filter/subcomponents/filter-item)

Default Subcomponent
--------------------

![Image 1](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/filter-priority.png)
