# Datagrid

![HTML5](assets/images/bugs/badge_html5.svg 'HTML5')![CSS3](assets/images/bugs/badge_css3.svg 'CSS3')![Angular](assets/images/bugs/badge_ng.svg 'Angular')

- [Examples & Code](/documentation/datagrid#top)
- [Design Guidelines](/documentation/datagrid#guidelines)

##### Datagrids are for organizing large volumes of data that users can scan, compare, and perform actions on.

We have 21 datagrid demos. Starting with the basics, each demo shows you one or more of the advanced Datagrid features.

- [Basic Structure](/documentation/datagrid/structure)
- [Custom Cell Rendering](/documentation/datagrid/custom-rendering)
- [Smart Iterator](/documentation/datagrid/smart-iterator)
- [Binding Properties](/documentation/datagrid/binding-properties)
- [Custom Sorting](/documentation/datagrid/custom-sorting)
- [Custom Filtering](/documentation/datagrid/custom-filtering)
- [Built-in Filters](/documentation/datagrid/built-in-filters)
- [Pagination](/documentation/datagrid/pagination)
- [Selection](/documentation/datagrid/selection)
- [Single Selection](/documentation/datagrid/selection-single)
- [Batch Action](/documentation/datagrid/batch-action)
- [Single Action](/documentation/datagrid/single-action)
- [Server Driven](/documentation/datagrid/server-driven)
- [Placeholder](/documentation/datagrid/placeholder)
- [Detail Pane](/documentation/datagrid/detail-pane)
- [Expandable Rows](/documentation/datagrid/expandable-rows)
- [Compact](/documentation/datagrid/compact)
- [Hide/Show](/documentation/datagrid/hide-show)
- [Fixed Height](/documentation/datagrid/fixed-height)
- [Full Demo](/documentation/datagrid/full)
- [Usage](/documentation/datagrid/usage)

## Selection batch action

You can allow batch actions to be performed on selected rows in selectable datagrids. You can make the action choices contextual to the selection by showing certain actions only if the selection meets the criteria. Add a `clr-dg-action-bar` inside a `clr-datagrid`. The content inside of it will be projected when one or more items is selected. We recommend that that you use a button bar with small buttons as in the example.

In the following example, we simply display the names of the selected users, but since we have access to the full objects, we could perform any operation we want on them.

Depending on the role of certain batch actions, you can choose to break button bars up into separate button groups. To increase the visibility of the most important batch actions within each button group, we recommend organizing batch actions in priority order from left to right.

Users to be added to group: _No user selected._

User to be edited: _No user selected._

Users to be deleted: _No user selected._

Users to be exported: _No user selected._

Add to groupDelete

Export

User ID

Name

Creation date

Favorite color

34896SheridanMar 20, 2016

8916DorianSep 10, 2015

17280ShenikaJan 16, 2017

36724NelsonSep 19, 2014

80764DorianOct 3, 2017

24015LennyAug 17, 2015

12532LunaJan 30, 2018

98723AlicaDec 18, 2019

85793GeorgiaJul 27, 2018

67151BeverlyJan 7, 2020

10 users

```html
<clr-datagrid [(clrDgSelected)]="selected">
  <clr-dg-action-bar>
    <div class="btn-group">
      <button type="button" class="btn btn-sm btn-secondary" (click)="onAdd()">
        <clr-icon shape="plus"></clr-icon> Add to group
      </button>
      <button type="button" class="btn btn-sm btn-secondary" (click)="onDelete()">
        <clr-icon shape="close"></clr-icon> Delete
      </button>
      <button type="button" class="btn btn-sm btn-secondary" (click)="onEdit()" *ngIf="selected.length == 1">
        <clr-icon shape="pencil"></clr-icon> Edit
      </button>
    </div>
    <div class="btn-group">
      <clr-dropdown>
        <button type="button" class="btn btn-sm btn-secondary" clrDropdownTrigger>
          Export
          <clr-icon shape="caret down"></clr-icon>
        </button>
        <clr-dropdown-menu clrPosition="bottom-left" *clrIfOpen>
          <button type="button" (click)="onExportAll()" clrDropdownItem>Export All</button>
          <button type="button" (click)="onExportSelected()" [disabled]="selected.length === 0" clrDropdownItem>
            Export Selected Items
          </button>
        </clr-dropdown-menu>
      </clr-dropdown>
    </div>
  </clr-dg-action-bar>
  <-- ... -->
  <clr-dg-row *clrDgItems="let user of users" [clrDgItem]="user">
    <-- ... -->
  </clr-dg-row>
  <-- ... -->
</clr-datagrid>

Selected users: <span *ngFor="let user of selected">{{user.name}}</span>
```

Single Selection Single Action
