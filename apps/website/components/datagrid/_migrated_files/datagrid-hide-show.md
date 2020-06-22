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

## Hide/Show Columns

Datagrid columns are hideable with the `*clrDgHideableColumn` directive. Because this is a structural directive it cannot be used on the `clr-dg-column` component directly. Instead, you use `*clrDgHideableColumn` on an ng-container inside your `clr-dg-column`. It defaults to showing the column but you can use the hidden property to pre-configure it.

User ID

Name

Creation date

Pokemon

Favorite color

27795RhonaDec 5, 2016Vileplume

29421SibylSep 26, 2015Krabby

93539NidiaDec 12, 2019Bulbasaur

87475AlicaNov 15, 2015Ekans

96350RhonaSep 3, 2017Machamp

21580KaitlinOct 12, 2015Nidoran-m

31050ShenikaOct 14, 2014Rattata

56872GeorgiaJun 15, 2015Sandshrew

74025AlicaJul 11, 2014Kangaskhan

51304SheridanOct 10, 2016Raichu

Show or hide columns

1 - 10 of 10 users

```html
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
```

#### Custom Toggle Strings

Error

Overriding the column toggle text as described below is deprecated as of 2.0 and will be removed in a future major release. Instead, you should use the [internationalization documentation](/documentation/internationalization) to change the language strings.

If you need to customize the hide/show toggle component you can override the defaults by adding a `clr-dg-column-toggle` component at the beginning of the `clr-dg-footer` component:

```html
<clr-dg-column-toggle>
  <clr-dg-column-toggle-title>Column Toggle Title</clr-dg-column-toggle-title>
  <clr-dg-column-toggle-button>Select All Button</clr-dg-column-toggle-button>
</clr-dg-column-toggle>
```

Compact Fixed Height
