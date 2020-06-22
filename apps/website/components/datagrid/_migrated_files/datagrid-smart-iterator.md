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

## Smart iterator

If you want to let us handle all the data processing needed by our various features, you will need to use `*clrDgItems` instead of `*ngFor`. They have the exact syntax and behave the same way, but the former lets us have full control what is actually being displayed. As you can see in the following example it doesn't change anything for our simple case, but it will as soon as we start adding features like sorting, filtering, pagination, ...

User ID

Name

Creation date

Favorite color

42109LuciusNov 30, 2016

65805MarcellaMay 6, 2017

95216GenovevaJan 29, 2016

81953BeverlyMar 4, 2019

85528SheridanNov 12, 2016

38983NelsonJun 6, 2014

15508DebbyJul 29, 2019

8160BeverlyMar 14, 2018

29625BradApr 1, 2016

74921EllenAug 2, 2018

10 users

```html
<-- Inside the full datagrid declaration -->
<clr-dg-row *clrDgItems="let user of users">
  <-- Cells declarations -->
</clr-dg-row>
```

Custom Cell Rendering Binding Properties
