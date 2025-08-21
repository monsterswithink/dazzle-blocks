Title: Filter Type - Category - Velt

URL Source: https://docs.velt.dev/ui-customization/features/async/comments/comments-sidebar/subcomponents/filter/subcomponents/category

Markdown Content:
```
<VeltWireframe>
    <VeltCommentsSidebarWireframe.Filter.Category>
        <VeltCommentsSidebarWireframe.Filter.Category.Name />

        {/* Searchable Dropdown: It's not visible by default. You need to add the wireframe to the sidebar. */}
        <VeltCommentsSidebarWireframe.Filter.Category.Search>
            <VeltCommentsSidebarWireframe.Filter.Category.Search.Tags>
                <VeltCommentsSidebarWireframe.Filter.Category.Search.Tags.Item>
                    <VeltCommentsSidebarWireframe.Filter.Category.Search.Tags.Item.Name />
                    <VeltCommentsSidebarWireframe.Filter.Category.Search.Tags.Item.Close />
                </VeltCommentsSidebarWireframe.Filter.Category.Search.Tags.Item>
            </VeltCommentsSidebarWireframe.Filter.Category.Search.Tags>
            <VeltCommentsSidebarWireframe.Filter.Category.Search.HiddenCount />
            <VeltCommentsSidebarWireframe.Filter.Category.Search.Input />
            <VeltCommentsSidebarWireframe.Filter.Category.Search.DropdownIcon />
        </VeltCommentsSidebarWireframe.Filter.Category.Search>

        {/* Checklist: It's visible by default. */}
        <VeltCommentsSidebarWireframe.Filter.Category.Item>
            <VeltCommentsSidebarWireframe.Filter.Category.Item.Checkbox>
                <VeltCommentsSidebarWireframe.Filter.Category.Item.Checkbox.Checked />
                <VeltCommentsSidebarWireframe.Filter.Category.Item.Checkbox.Unchecked />
            </VeltCommentsSidebarWireframe.Filter.Category.Item.Checkbox>
            <VeltCommentsSidebarWireframe.Filter.Category.Item.Name />
            <VeltCommentsSidebarWireframe.Filter.Category.Item.Count />
        </VeltCommentsSidebarWireframe.Filter.Category.Item>
    </VeltCommentsSidebarWireframe.Filter.Category>
</VeltWireframe>
```

Subcomponents

The subcomponent of the Comments Sidebar Filter that represents the Category

```
<VeltWireframe>
    <VeltCommentsSidebarWireframe.Filter.Category>
        <VeltCommentsSidebarWireframe.Filter.Category.Name />

        {/* Searchable Dropdown: It's not visible by default. You need to add the wireframe to the sidebar. */}
        <VeltCommentsSidebarWireframe.Filter.Category.Search>
            <VeltCommentsSidebarWireframe.Filter.Category.Search.Tags>
                <VeltCommentsSidebarWireframe.Filter.Category.Search.Tags.Item>
                    <VeltCommentsSidebarWireframe.Filter.Category.Search.Tags.Item.Name />
                    <VeltCommentsSidebarWireframe.Filter.Category.Search.Tags.Item.Close />
                </VeltCommentsSidebarWireframe.Filter.Category.Search.Tags.Item>
            </VeltCommentsSidebarWireframe.Filter.Category.Search.Tags>
            <VeltCommentsSidebarWireframe.Filter.Category.Search.HiddenCount />
            <VeltCommentsSidebarWireframe.Filter.Category.Search.Input />
            <VeltCommentsSidebarWireframe.Filter.Category.Search.DropdownIcon />
        </VeltCommentsSidebarWireframe.Filter.Category.Search>

        {/* Checklist: It's visible by default. */}
        <VeltCommentsSidebarWireframe.Filter.Category.Item>
            <VeltCommentsSidebarWireframe.Filter.Category.Item.Checkbox>
                <VeltCommentsSidebarWireframe.Filter.Category.Item.Checkbox.Checked />
                <VeltCommentsSidebarWireframe.Filter.Category.Item.Checkbox.Unchecked />
            </VeltCommentsSidebarWireframe.Filter.Category.Item.Checkbox>
            <VeltCommentsSidebarWireframe.Filter.Category.Item.Name />
            <VeltCommentsSidebarWireframe.Filter.Category.Item.Count />
        </VeltCommentsSidebarWireframe.Filter.Category.Item>
    </VeltCommentsSidebarWireframe.Filter.Category>
</VeltWireframe>
```

You can either use this or use the global filter item wireframe to customize all the filter types of filter options at once. [Learn More](https://docs.velt.dev/ui-customization/features/async/comments/comments-sidebar/subcomponents/filter/subcomponents/filter-item)

Default Subcomponent
--------------------

![Image 1](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/filter-category.png)
