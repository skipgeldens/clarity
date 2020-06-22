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

## Pagination

So far, our examples' data only contained a few entries. The point of a datagrid is to display large amounts of data, and we can't reasonably display it all at the same time on the page. To solve this, our datagrid supports pagination.

To activate pagination on your datagrid, you simply need to add a `<clr-dg-pagination>` component in your datagrid's footer. This component exposes many of properties, most of them bindable, to help you interact with it. You can optionally include a `clr-dg-page-size` component to bind a list of options to display for toggling the number of items per page.

Input/Output

Component property

Effect

\[(clrDgPage)\]

currentPage

Index of the currently displayed page, starting from 1.

\[clrDgPageSize\]

pageSize

Number of items displayed per page. Defaults to 10.

\[clrDgTotalItems\]

totalItems

Total number of items present in the datagrid, after the filters have been applied.

\[clrDgLastPage\]

lastPage

Index of the last page for the current data.

\[clrDgPageInputDisabled\]

disableCurrentPageInput

Disables the current page input.

firstItem

Index of the first item displayed on the current page, starting from 0.

lastItem

Index of the last item displayed on the current page, starting from 0.

Here is an example of how to use pagination, and attach a template reference variable to it to display information on the current page.

User ID

Name

Creation date

Favorite color

24436DebbyOct 6, 2017

42203DebbyAug 9, 2016

52878GenovevaDec 13, 2018

44595LuciusMay 13, 2014

5105ShenikaJun 4, 2017

45554EllenApr 23, 2016

90697BeverlyMar 28, 2019

26402SheridanOct 17, 2017

28927JeanaAug 18, 2019

24904EllenJun 10, 2017

Users per page

102050100

1 - 10 of 103 users

/ 11

```html
<-- Inside the full datagrid declaration -->
<clr-dg-footer>
  <clr-dg-pagination #pagination [clrDgPageSize]="10">
    <clr-dg-page-size [clrPageSizeOptions]="[10,20,50,100]">Users per page</clr-dg-page-size>
    {{pagination.firstItem + 1}} - {{pagination.lastItem + 1}} of {{pagination.totalItems}} users
  </clr-dg-pagination>
</clr-dg-footer>
```

Built-in Filters Selection
