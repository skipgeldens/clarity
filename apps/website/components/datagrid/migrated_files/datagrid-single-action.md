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

## Single row action

You can allow actions on an item in a single row, in the cases where batch operation is not applicable. You can use this pattern in both selectable and non-selectable datagrids. Add a `clr-dg-action-overflow` inside a `clr-dg-row`. The content inside of it will be projected as an action menu which will toggle when the user clicks on the ellipsis icon as shown below. We recommend that the menu items be buttons with a class `.action-item` as in the example.

In the following example, we simply display the names of the selected users, but since we have access to the full objects, we could perform any operation we want on them.

User to be edited: _No user selected._

User to be deleted: _No user selected._

User ID

Name

Creation date

Favorite color

Available actions

90342JohnsonSep 8, 2016

Available actions

52060BradSep 5, 2015

Available actions

56575DesiraeJan 5, 2016

Available actions

11887BrynnSep 8, 2018

Available actions

73604DarlaNov 2, 2016

Available actions

94578BeverlyJul 21, 2017

Available actions

2582JeanaSep 5, 2019

Available actions

46739RhonaDec 15, 2016

Available actions

25835SheridanAug 6, 2019

Available actions

5499RoslynJul 16, 2017

10 users

```html
<clr-datagrid>
  <-- ... -->
  <clr-dg-row *clrDgItems="let user of users" [clrDgItem]="user">
    <clr-dg-action-overflow>
      <button class="action-item" (click)="onEdit(user)">Edit</button>
      <button class="action-item" (click)="onDelete(user)">Delete</button>
    </clr-dg-action-overflow>
    <-- ... -->
  </clr-dg-row>
  <-- ... -->
</clr-datagrid>

Selected users: <span *ngFor="let user of selected">{{user.name}}</span>
```

Batch Action Server Driven
