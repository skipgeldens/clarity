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

## Selection

To allow actions on multiple items at once, we provide the ability for the user to select rows in the datagrid. To make rows selectable in your datagrid, you need to do the following:

- Add a `[clrDgItem]` input on each `<clr-dg-row>` component to tell us what model the user is actually selecting. Most of the time, this will simply be the current data object in the iteration.
- Add a `[(clrDgSelected)]` two-way binding on the datagrid itself, to have access to the list of currently selected items. Note that by adding items to this list yourself, you can dynamically select elements if you need to.

In addition to a checkbox for each row to select individual rows, there will be a checkbox in the header row that will select all of the currently visible rows.

In the following example, we simply display the names of the selected users, but since we have access to the full objects, we could perform any operation we want on them.

Selected users: _No user selected._

User ID

Name

Creation date

Favorite color

4004DebbyOct 30, 2016

34699GrahamJun 22, 2016

62440GrahamJan 21, 2015

94709ShenikaDec 7, 2016

81173ShenikaDec 4, 2018

11773AlicaSep 19, 2018

77072LennyMar 8, 2018

38977DesiraeJun 30, 2014

35512SibylAug 27, 2016

34541AlicaSep 5, 2015

10 users

```html
<clr-datagrid [(clrDgSelected)]="selected">
  <-- ... -->
  <clr-dg-row *clrDgItems="let user of users" [clrDgItem]="user">
    <-- ... -->
  </clr-dg-row>
  <-- ... -->
</clr-datagrid>

Selected users: <span *ngFor="let user of selected">{{user.name}}</span>
```

Depending on the use case, you might want to allow selection when clicking anywhere in the grid row. Note that this is not recommended when the rows contain clickable items. For example, if your cells contain input, buttons, etc. it is best to avoid enabling whole row selection.

For row selection mode add `[(clrDgRowSelection)]` and set it to `true`.

User ID

Name

Creation date

Favorite color

4004DebbyOct 30, 2016

34699GrahamJun 22, 2016

62440GrahamJan 21, 2015

94709ShenikaDec 7, 2016

81173ShenikaDec 4, 2018

11773AlicaSep 19, 2018

77072LennyMar 8, 2018

38977DesiraeJun 30, 2014

35512SibylAug 27, 2016

34541AlicaSep 5, 2015

10 users

```html
<clr-datagrid [(clrDgSelected)]="rowSelected" [clrDgRowSelection]="true">
  <clr-dg-column>User ID</clr-dg-column>
  <-- ... -->
  <clr-dg-row *clrDgItems="let user of users" [clrDgItem]="user">
    <clr-dg-cell>{{user.id}}</clr-dg-cell>
    <-- ... -->
  </clr-dg-row>
  <clr-dg-footer>{{users.length}} users</clr-dg-footer>
</clr-datagrid>
```

Error

`clrDgRowSelection` has been deprecated in 2.0 and will be removed in a future major release. It is impossible to support this functionality properly and also comply with accessibility standards for Clarity, and we no longer can recommend using this pattern. The workaround is to simply use single selection without row selection.

If you need an easier access to the selected state of a row, without having to go through the entire array, we also provide a boolean `[(clrDgSelected)]` two-way binding on the `<clr-dg-row>` itself. For instance, when your model itself tracks if items are selected, you can simply write:

```html
<clr-dg-row *clrDgItems="let item of items" [clrDgItem]="item" [(clrDgSelected)]="item.selected">
  <-- ... -->
</clr-dg-row>
```

If you need to listen to when the selection changes, you can use Angular's [two way binding](https://angular.io/guide/template-syntax) to listen to the `(clrDgSelectedChange)` event:

```html
<clr-datagrid [clrDgSelected]="selected" (clrDgSelectedChange)="selectionChanged($event)">
  <-- ... -->
</clr-datagrid>
```

Mark a row with `clrDgSelectable`, this way the state of the row could not be changed by user interactions. This property works only when using single or multi-selection modes.

```html
<clr-dg-row [clrDgSelectable]="!user.locked" *clrDgItems="let user of users" [clrDgItem]="user">
  <clr-dg-cell>{{user.id}}</clr-dg-cell>
    <-- ... -->
  </clr-dg-row>
</clr-dg-row>
```

Lock RowsUnlock Rows

User ID

Name

Creation date

Favorite color

4004DebbyOct 30, 2016

34699GrahamJun 22, 2016

62440GrahamJan 21, 2015

94709ShenikaDec 7, 2016

81173ShenikaDec 4, 2018

11773AlicaSep 19, 2018

77072LennyMar 8, 2018

38977DesiraeJun 30, 2014

35512SibylAug 27, 2016

34541AlicaSep 5, 2015

10 users

#### Preserving Selection

By default, when a filter is applied to the datagrid the selection is cleared. This is done to ensure that all selected items are always visible in the datagrid. In certain instances, this might not be desireable, therefore we provide the `[clrDgPreserveSelection]` input. Setting this to true will retain the current selection on the datagrid, even if filters are applied and selected items are not visible.

Note: If you do enable `[clrDgPreserveSelection]`, before performing any action on the selected items, a confirmation should be shown to ensure the end-user is aware of which items they are operating on, since the filters may hide some of the selected items from the user causing a discovery issue.

Pagination Single Selection
