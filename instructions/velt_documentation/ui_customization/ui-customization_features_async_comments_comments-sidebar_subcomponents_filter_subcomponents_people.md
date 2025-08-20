Title: Filter Type - Author - Velt

URL Source: https://docs.velt.dev/ui-customization/features/async/comments/comments-sidebar/subcomponents/filter/subcomponents/people

Markdown Content:
```
<VeltWireframe>
    <VeltCommentsSidebarWireframe.Filter.People>
        <VeltCommentsSidebarWireframe.Filter.People.Name />

        {/* Searchable Dropdown: It's not visible by default. You need to add the wireframe to the sidebar. */}
        <VeltCommentsSidebarWireframe.Filter.People.Search>
            <VeltCommentsSidebarWireframe.Filter.People.Search.Tags>
                <VeltCommentsSidebarWireframe.Filter.People.Search.Tags.Item>
                    <VeltCommentsSidebarWireframe.Filter.People.Search.Tags.Item.Name />
                    <VeltCommentsSidebarWireframe.Filter.People.Search.Tags.Item.Close />
                </VeltCommentsSidebarWireframe.Filter.People.Search.Tags.Item>
            </VeltCommentsSidebarWireframe.Filter.People.Search.Tags>
            <VeltCommentsSidebarWireframe.Filter.People.Search.HiddenCount />
            <VeltCommentsSidebarWireframe.Filter.People.Search.Input />
            <VeltCommentsSidebarWireframe.Filter.People.Search.DropdownIcon />
        </VeltCommentsSidebarWireframe.Filter.People.Search>

        {/* Checklist: It's visible by default. */}
        <VeltCommentsSidebarWireframe.Filter.People.Item>
            <VeltCommentsSidebarWireframe.Filter.People.Item.Checkbox>
                <VeltCommentsSidebarWireframe.Filter.People.Item.Checkbox.Checked />
                <VeltCommentsSidebarWireframe.Filter.People.Item.Checkbox.Unchecked />
            </VeltCommentsSidebarWireframe.Filter.People.Item.Checkbox>
            <VeltCommentsSidebarWireframe.Filter.People.Item.Name />
            <VeltCommentsSidebarWireframe.Filter.People.Item.Count />
        </VeltCommentsSidebarWireframe.Filter.People.Item>
    </VeltCommentsSidebarWireframe.Filter.People>
</VeltWireframe>
```

Subcomponents

The subcomponent of the Comments Sidebar Filter that represents the Author filter

```
<VeltWireframe>
    <VeltCommentsSidebarWireframe.Filter.People>
        <VeltCommentsSidebarWireframe.Filter.People.Name />

        {/* Searchable Dropdown: It's not visible by default. You need to add the wireframe to the sidebar. */}
        <VeltCommentsSidebarWireframe.Filter.People.Search>
            <VeltCommentsSidebarWireframe.Filter.People.Search.Tags>
                <VeltCommentsSidebarWireframe.Filter.People.Search.Tags.Item>
                    <VeltCommentsSidebarWireframe.Filter.People.Search.Tags.Item.Name />
                    <VeltCommentsSidebarWireframe.Filter.People.Search.Tags.Item.Close />
                </VeltCommentsSidebarWireframe.Filter.People.Search.Tags.Item>
            </VeltCommentsSidebarWireframe.Filter.People.Search.Tags>
            <VeltCommentsSidebarWireframe.Filter.People.Search.HiddenCount />
            <VeltCommentsSidebarWireframe.Filter.People.Search.Input />
            <VeltCommentsSidebarWireframe.Filter.People.Search.DropdownIcon />
        </VeltCommentsSidebarWireframe.Filter.People.Search>

        {/* Checklist: It's visible by default. */}
        <VeltCommentsSidebarWireframe.Filter.People.Item>
            <VeltCommentsSidebarWireframe.Filter.People.Item.Checkbox>
                <VeltCommentsSidebarWireframe.Filter.People.Item.Checkbox.Checked />
                <VeltCommentsSidebarWireframe.Filter.People.Item.Checkbox.Unchecked />
            </VeltCommentsSidebarWireframe.Filter.People.Item.Checkbox>
            <VeltCommentsSidebarWireframe.Filter.People.Item.Name />
            <VeltCommentsSidebarWireframe.Filter.People.Item.Count />
        </VeltCommentsSidebarWireframe.Filter.People.Item>
    </VeltCommentsSidebarWireframe.Filter.People>
</VeltWireframe>
```

You can either use this or use the global filter item wireframe to customize all the filter types of filter options at once. [Learn More](https://docs.velt.dev/ui-customization/features/async/comments/comments-sidebar/subcomponents/filter/subcomponents/filter-item)

Default Subcomponent
--------------------

![Image 1](https://mintlify.s3.us-west-1.amazonaws.com/velt/images/customization/filter-people.png)
