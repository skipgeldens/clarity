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

## Custom cell rendering

Because we use a declarative API, simply projecting your HTML inside our components' templates, you have complete control over what we display. The contents of datagrid cells or column headers can be as complex as you need them to be, with nested components and interpolation.

User ID

Name

Creation date

Favorite color

99258BradJan 19, 2017

8933GenovevaJan 18, 2015

74203EllenApr 22, 2014

86469BrynnJan 16, 2018

54798ShenikaSep 29, 2018

20986JohnsonAug 4, 2018

92441EllenMar 18, 2016

94188JohnsonDec 21, 2017

76012DesiraeOct 26, 2015

53728GeorgiaFeb 23, 2018

10 users

```html
<-- Inside the full datagrid declaration -->
<clr-dg-row *ngFor="let user of users">
  <clr-dg-cell>{{user.id}}</clr-dg-cell>
  <clr-dg-cell>{{user.name}}</clr-dg-cell>
  <clr-dg-cell>{{user.creation | date}}</clr-dg-cell>
  <clr-dg-cell>
    <span class="color-square" [style.backgroundColor]="user.color"></span>
  </clr-dg-cell>
</clr-dg-row>
```

Basic Structure Smart Iterator
