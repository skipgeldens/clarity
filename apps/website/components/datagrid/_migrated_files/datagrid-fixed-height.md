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

## Fixed Height

From version 0.8.10 datagrids can now scroll easily if you set their height. The header and footer stay fixed, only the body containing the rows scrolls. It's as simple as setting the height of the `clr-datagrid` element to a specific value, or making it 100% to fill its container:

User ID

Name

Creation date

Pokemon

Favorite color

35164LetishaNov 2, 2018Exeggcute

96539OleneJun 9, 2015Beedrill

70314KeenanApr 13, 2015Dewgong

86418KaitlinNov 26, 2016Krabby

46533LennyOct 5, 2015Tentacruel

57889LennySep 16, 2019Poliwhirl

20177KeenanApr 5, 2014Machop

50829KaitlinApr 7, 2017Tentacool

75359DebbyMar 8, 2014Cubone

80787KeenanJan 6, 2016Kangaskhan

Show or hide columns

1 - 10 of 10 users

```html
<div class="limit-height">
  <clr-datagrid>
    <clr-dg-column>
      <ng-container *clrDgHideableColumn="{hidden: false}">
        User ID
      </ng-container>
    </clr-dg-column>
    <clr-dg-column>
      <ng-container *clrDgHideableColumn="{hidden: false}">
        Name
      </ng-container>
    </clr-dg-column>
    ...

    <clr-dg-row *clrDgItems="let user of users" [clrDgItem]="user">
      <clr-dg-cell>{{user.id}}</clr-dg-cell>
      <clr-dg-cell>{{user.name}}</clr-dg-cell>
      ...
    </clr-dg-row>

    <clr-dg-footer>
      {{pagination.firstItem + 1}} - {{pagination.lastItem + 1}} of {{pagination.totalItems}} users
      <clr-dg-pagination #pagination [clrDgPageSize]="currentPageSize"></clr-dg-pagination>
    </clr-dg-footer>
  </clr-datagrid>
</div>
```

```css
.limit-height clr-datagrid {
  height: 286px;
}
```

Specifying a header's width in any way, including through CSS with a simple class, locks the corresponding column size and makes it non-flexible. No need to duplicate that information on the cells, just the header is enough.

In cases where there is not enough data to display the datagrid will fill the container until it reach 100% of the height

User ID

Name

Creation date

Pokemon

Favorite color

35164LetishaNov 2, 2018Exeggcute

96539OleneJun 9, 2015Beedrill

Show or hide columns

1 - 10 of 10 users

Hide/Show Full Demo
