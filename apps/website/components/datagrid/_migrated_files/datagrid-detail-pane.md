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

## Detail Pane

The Detail Pane is a pattern to show additional details for a record. The Detail Pane condenses the datagrid to show a primary column and a panel to the right to display more details about your record. The Detail Paine allows you to show the full content of the record in a larger scrollable space. The Detail Pane is also fully accessible for keyboard and screen reader users.

The Detail Pane adds a new toggle icon on the left-hand side of the Datagrid. When the pane is open, it takes 2/3 of the width of the Datagrid and hides all columns, except for the first column and any built-in columns that facilitate features like selection and row actions. The pagination also updates to a condensed format that scales well to small sizes. Only one row can be open at a time; selecting another row changes the content to the newly selected row.

The Detail Pane is not compatible with Expandable Rows; when both are enabled, the Detail Pane takes precedence. Hide and show columns are disabled while the Detail Pane is open, but still works properly when closed. The rest of the Datagrid behaviors work as expected, even while the Detail Pane is open.

### Basic use of Detail Pane

To use the Detail Pane, add a new element with the following syntax inside of the Datagrid

```html
<clr-dg-detail *clrIfDetail="let detail">
  <clr-dg-detail-header>{{detail.name}}</clr-dg-detail-header>
  <clr-dg-detail-body>
    <-- ... -->
  </clr-dg-detail-body>
</clr-dg-detail>
```

This is a full example with Selection and the Detail Pane both working together.

User ID

Name

Creation date

Favorite color

Open

55574DarlaMar 4, 2017

Open

58256BrynnMar 10, 2019

Open

74291DorianJan 17, 2019

Open

65169LennyMar 9, 2019

Open

70051SibylJan 5, 2019

Open

27985JohnsonNov 29, 2016

Open

58119RoslynApr 15, 2015

Open

4579JohnsonJan 25, 2019

Open

91287GeorgiaMay 18, 2015

Open

97286OleneFeb 17, 2020

Users per page

102050100

1 - 10 of 103 users

/ 11

```html
<clr-datagrid [(clrDgSelected)]="selected">
  <-- ... -->
  <clr-dg-row *clrDgItems="let user of users" [clrDgItem]="user">
    <-- ... -->
  </clr-dg-row>

  <clr-dg-detail *clrIfDetail="let detail">
    <clr-dg-detail-header>{{detail.name}}</clr-dg-detail-header>
  </clr-dg-detail>
  <-- ... -->
</clr-datagrid>

Selected users: <span *ngFor="let user of selected">{{user.name}}</span>
```

### Reacting to changes in Detail Pane state

It is possible to listen for changes to the Detail Pane state, by desugaring the `*clrIfDetail` directive and listening for the `(clrIfDetailChange)` event. It is important to use a local template variable like `let-detail` to reference the row object.

```html
<ng-template clrIfDetail let-detail (clrIfDetailChange)="onDetailOpen($event)">
  <clr-dg-detail>
    <clr-dg-detail-header>{{detail.name}}</clr-dg-detail-header>
    <clr-dg-detail-body>
      <-- ... -->
    </clr-dg-detail-body>
  </clr-dg-detail>
</ng-template>
```

### Controlling the Detail Pane programatically

In some cases, you might want to programatically control the toggling of the Detail Pane, which you can do by desugaring `*clrIfDetail` directive and using the two way binding syntax. Be sure to include the local template variable like `let-detail` to get access to the row object.

Opened Pane: _No user selected._

Open Row 5 Pane

User ID

Name

Creation date

Favorite color

Open

55574DarlaMar 4, 2017

Open

58256BrynnMar 10, 2019

Open

74291DorianJan 17, 2019

Open

65169LennyMar 9, 2019

Open

70051SibylJan 5, 2019

Open

27985JohnsonNov 29, 2016

Open

58119RoslynApr 15, 2015

Open

4579JohnsonJan 25, 2019

Open

91287GeorgiaMay 18, 2015

Open

97286OleneFeb 17, 2020

Users per page

102050100

1 - 10 of 103 users

/ 11

```html
<ng-template [(clrIfDetail)]="detailState" let-detail>
  <clr-dg-detail>
    <clr-dg-detail-header>{{detail.name}}</clr-dg-detail-header>
    <clr-dg-detail-body>
      <!-- ... -->
    </clr-dg-detail-body>
  </clr-dg-detail>
</ng-template>
```

Placeholder Expandable Rows
