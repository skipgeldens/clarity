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

## Binding model properties to columns

For an easy setup of datagrid column features, you can simply specify the property to bind it to in your model. When you do, the column will benefit from all built-in features for this case: sorting based on the natural comparison, filtering using either of the built-in filters, and anything else we might add in the future. You can bind to as deep a property as you want in your model, using a standard dot-separated syntax: `[clrDgField]="'my.deep.property'"`

You can also see in the following example how every feature we offer is always opt-in: we did not declare any binding on the "User ID" column, which means it is not sortable or filterable.

By default, bound columns are assumed to contain string-like contents and the user is presented with the normal string filter. If you know that the contents of the column will be numeric, you can instead use the built-in numeric range filter by adding `[clrDgColType]="'number'"`. You can see an example of this in the "Wins" column.

User ID

Name

Creation date

Pokemon

Favorite color

Wins

31459SibylAug 17, 2017Voltorb95

27899GrahamFeb 20, 2018Scyther10

37121LetishaJan 26, 2017Sandshrew4

73580DorianMar 29, 2018Gengar97

13696SheridanOct 28, 2018Rattata97

45834KaitlinJul 17, 2014Doduo42

2528LottieAug 5, 2016Alakazam70

80486NelsonJul 9, 2018Chansey31

17589LetishaDec 30, 2016Mr. Mime62

35595OleneAug 15, 2014Slowpoke29

10 users

```html
<clr-datagrid>
  <clr-dg-column>User ID</clr-dg-column>
  <clr-dg-column [clrDgField]="'name'">Name</clr-dg-column>
  <clr-dg-column [clrDgField]="'creation'">Creation date</clr-dg-column>
  <clr-dg-column [clrDgField]="'pokemon.name'">Pokemon</clr-dg-column>
  <clr-dg-column [clrDgField]="'color'">Favorite color</clr-dg-column>
  <clr-dg-column [clrDgField]="'wins'" [clrDgColType]="'number'">Wins</clr-dg-column>

  <clr-dg-row *clrDgItems="let user of users">
    <clr-dg-cell>{{user.id}}</clr-dg-cell>
    <clr-dg-cell>{{user.name}}</clr-dg-cell>
    <clr-dg-cell>{{user.creation | date}}</clr-dg-cell>
    <clr-dg-cell>{{user.pokemon.name}}</clr-dg-cell>
    <clr-dg-cell>
      <span class="color-square" [style.backgroundColor]="user.color"></span>
    </clr-dg-cell>
    <clr-dg-cell>{{user.wins}}</clr-dg-cell>
  </clr-dg-row>

  <clr-dg-footer>{{users.length}} users</clr-dg-footer>
</clr-datagrid>
```

In this example, the `[clrDgField]` input is a hard-coded string, so it needs to be quoted twice: `[clrDgField]="'name'"`.  
Another way to write this would be `clrDgField="name"`, without having the extra quotes, but we do not recommend this. In particular, this leaves a potentially unwanted attribute on the element, whereas the previous syntax only adds a property to the corresponding Javascript object.

Smart Iterator Custom Sorting
