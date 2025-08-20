Title: Filter Type - Versions - Velt

URL Source: https://docs.velt.dev/ui-customization/features/async/comments/comments-sidebar/subcomponents/filter/subcomponents/versions

Markdown Content:
```
<VeltWireframe>
    <VeltCommentsSidebarWireframe.Filter.Versions>
        <VeltCommentsSidebarWireframe.Filter.Versions.Name />

        {/* Searchable Dropdown: It's not visible by default. You need to add the wireframe to the sidebar. */}
        <VeltCommentsSidebarWireframe.Filter.Versions.Search>
            <VeltCommentsSidebarWireframe.Filter.Versions.Search.Tags>
                <VeltCommentsSidebarWireframe.Filter.Versions.Search.Tags.Item>
                    <VeltCommentsSidebarWireframe.Filter.Versions.Search.Tags.Item.Name />
                    <VeltCommentsSidebarWireframe.Filter.Versions.Search.Tags.Item.Close />
                </VeltCommentsSidebarWireframe.Filter.Versions.Search.Tags.Item>
            </VeltCommentsSidebarWireframe.Filter.Versions.Search.Tags>
            <VeltCommentsSidebarWireframe.Filter.Versions.Search.HiddenCount />
            <VeltCommentsSidebarWireframe.Filter.Versions.Search.Input />
            <VeltCommentsSidebarWireframe.Filter.Versions.Search.DropdownIcon />
        </VeltCommentsSidebarWireframe.Filter.Versions.Search>

        {/* Checklist: It's visible by default. */}
        <VeltCommentsSidebarWireframe.Filter.Versions.Item>
            <VeltCommentsSidebarWireframe.Filter.Versions.Item.Checkbox>
                <VeltCommentsSidebarWireframe.Filter.Versions.Item.Checkbox.Checked />
                <VeltCommentsSidebarWireframe.Filter.Versions.Item.Checkbox.Unchecked />
            </VeltCommentsSidebarWireframe.Filter.Versions.Item.Checkbox>
            <VeltCommentsSidebarWireframe.Filter.Versions.Item.Name />
            <VeltCommentsSidebarWireframe.Filter.Versions.Item.Count />
        </VeltCommentsSidebarWireframe.Filter.Versions.Item>
    </VeltCommentsSidebarWireframe.Filter.Versions>
</VeltWireframe>
```

Subcomponents

The subcomponent of the Comments Sidebar Filter that represents the Version filter

```
<VeltWireframe>
    <VeltCommentsSidebarWireframe.Filter.Versions>
        <VeltCommentsSidebarWireframe.Filter.Versions.Name />

        {/* Searchable Dropdown: It's not visible by default. You need to add the wireframe to the sidebar. */}
        <VeltCommentsSidebarWireframe.Filter.Versions.Search>
            <VeltCommentsSidebarWireframe.Filter.Versions.Search.Tags>
                <VeltCommentsSidebarWireframe.Filter.Versions.Search.Tags.Item>
                    <VeltCommentsSidebarWireframe.Filter.Versions.Search.Tags.Item.Name />
                    <VeltCommentsSidebarWireframe.Filter.Versions.Search.Tags.Item.Close />
                </VeltCommentsSidebarWireframe.Filter.Versions.Search.Tags.Item>
            </VeltCommentsSidebarWireframe.Filter.Versions.Search.Tags>
            <VeltCommentsSidebarWireframe.Filter.Versions.Search.HiddenCount />
            <VeltCommentsSidebarWireframe.Filter.Versions.Search.Input />
            <VeltCommentsSidebarWireframe.Filter.Versions.Search.DropdownIcon />
        </VeltCommentsSidebarWireframe.Filter.Versions.Search>

        {/* Checklist: It's visible by default. */}
        <VeltCommentsSidebarWireframe.Filter.Versions.Item>
            <VeltCommentsSidebarWireframe.Filter.Versions.Item.Checkbox>
                <VeltCommentsSidebarWireframe.Filter.Versions.Item.Checkbox.Checked />
                <VeltCommentsSidebarWireframe.Filter.Versions.Item.Checkbox.Unchecked />
            </VeltCommentsSidebarWireframe.Filter.Versions.Item.Checkbox>
            <VeltCommentsSidebarWireframe.Filter.Versions.Item.Name />
            <VeltCommentsSidebarWireframe.Filter.Versions.Item.Count />
        </VeltCommentsSidebarWireframe.Filter.Versions.Item>
    </VeltCommentsSidebarWireframe.Filter.Versions>
</VeltWireframe>
```

You can either use this or use the global filter item wireframe to customize all the filter types of filter options at once. [Learn More](https://docs.velt.dev/ui-customization/features/async/comments/comments-sidebar/subcomponents/filter/subcomponents/filter-item)

Default Subcomponent
--------------------

![Image 1](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/filter-versions.png)
