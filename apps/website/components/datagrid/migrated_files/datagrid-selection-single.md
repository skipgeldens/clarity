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

## Selection (Single)

Depending on the use case, you might want to restrict the user to only allow single selection in a datagrid. If you haven't done so, please read the previous section on general selection first.

- For single select, instead of `[(clrDgSelected)]`, add a `[(clrDgSingleSelected)]` two-way binding on the datagrid itself, to have access to the currently selected item. Note that by setting this value yourself, you can dynamically select an element if you need to.

In the following example, we simply display the name of the selected user, but since we have access to the full objects, we could perform any operation we want on it.

Selected user: _No user selected._

User ID

Name

Creation date

Favorite color

30033DarlaAug 26, 2017

28966ShenikaOct 29, 2017

69088NidiaMay 29, 2019

90424SheridanApr 4, 2017

20217DorianDec 31, 2014

16156ShenikaDec 30, 2019

70076AlicaJan 15, 2018

91479BradJan 1, 2017

58215DesiraeFeb 19, 2018

41591OleneDec 9, 2017

10 users

```html
<clr-datagrid [(clrDgSingleSelected)]="selectedUser">
  <-- ... -->
  <clr-dg-row *clrDgItems="let user of users" [clrDgItem]="user">
    <-- ... -->
  </clr-dg-row>
  <-- ... -->
</clr-datagrid>

Selected user: <span class="username" *ngIf="selectedUser">{{selectedUser.name}}</span>
```

Error

`clrDgRowSelection` has been deprecated in 2.0 and will be removed in a future major release. It is impossible to support this functionality properly and also comply with accessibility standards for Clarity, and we no longer can recommend using this pattern. The workaround is to simply use single selection without row selection.

We also offer an `[clrDgRowSelection]` input to allow users to click anywhere on a row to select it. We however recommend against using this feature unless you have a very specific use case that requires it, due to the various accessibility concerns it raises (table rows cannot be actionable elements at the same time). We are considering deprecating this feature in the future if it continues to hinder accessibility.

Warning

Do not use `[clrDgRowSelection]` if your row contains any type of clickable elements (buttons, links, inputs, expand caret, single-row actions, etc.). Doing so would produce invalid HTML in the form of nested buttons, which will break in various unpredictable ways depending on the browser.

Selected user: _No user selected._

User ID

Name

Creation date

Favorite color

30033DarlaAug 26, 2017

28966ShenikaOct 29, 2017

69088NidiaMay 29, 2019

90424SheridanApr 4, 2017

20217DorianDec 31, 2014

16156ShenikaDec 30, 2019

70076AlicaJan 15, 2018

91479BradJan 1, 2017

58215DesiraeFeb 19, 2018

41591OleneDec 9, 2017

10 users

```html
<clr-datagrid [(clrDgSingleSelected)]="selectedUser" [clrDgRowSelection]="true">
  <-- ... -->
  <clr-dg-row *clrDgItems="let user of users" [clrDgItem]="user">
    <-- ... -->
  </clr-dg-row>
  <-- ... -->
</clr-datagrid>

Selected user: <span class="username" *ngIf="selectedUser">{{selectedUser.name}}</span>
```

If you need to listen to when the selection changes, you can use Angular's [two way binding](https://angular.io/guide/template-syntax) to listen to the `(clrDgSingleSelectedChange)` event:

```html
<clr-datagrid [clrDgSingleSelected]="selected" (clrDgSingleSelectedChange)="selectionChanged($event)">
  <-- ... -->
</clr-datagrid>
```

In order to conditionally disable selection on a row, use the `clrDgSelectable` input to disable selection state changes. This has to be done on each row you wish to disable, and works with single and multi selection.

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

30033DarlaAug 26, 2017

28966ShenikaOct 29, 2017

69088NidiaMay 29, 2019

90424SheridanApr 4, 2017

20217DorianDec 31, 2014

16156ShenikaDec 30, 2019

70076AlicaJan 15, 2018

91479BradJan 1, 2017

58215DesiraeFeb 19, 2018

41591OleneDec 9, 2017

10 users

Selection Batch Action
