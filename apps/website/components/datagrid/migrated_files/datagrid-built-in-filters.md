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

## Built-in filters

Before reading this, you should make sure you read the previous section on custom filters. Done? Then you might be a bit overwhelmed by the complexity of custom filters, understandably. What if you want _just a bit more_ than default string value filters, but phenomenal cosmic filter power turns out to be slightly overkill? This is where our built-in custom filters come handy. They let you customize specific parts of the filter like the filter matching function, without having to rewrite the whole thing yourself from two-way binding inputs to integration in the datagrid.

#### String filter

The first and default filter is the "string" filter one, meaning the user is offered a text input, and the rows will be filtered based on a string-matching function you provide. You should now be familiar with our use of interfaces for this, so here is the interface your string matcher should implement:

```typescript
interface ClrDatagridStringFilterInterface<T> {
  accepts(item: T, search: string): boolean;
}
```

Once you have it, you simply need to pass it to a `<clr-dg-string-filter>` component:

```html
<-- In the columns declaration -->
<clr-dg-column>
  My column
  <clr-dg-string-filter [clrDgStringFilter]="myFilter"></clr-dg-string-filter>
</clr-dg-column>
```

In our example, we can allow the user to filter not only by pokemon name, but also by entering the exact number of the pokemon they are interested in.

#### Numeric filter

Another built-in filter is the numeric filter, which allows you to filter a column by a minimum and/or maximum numeric value. The "Wins" column demonstrates the numeric filter. You provide the function logic and the user can optionally enter high and low limits for elements in the column. In this case, use a `<clr-dg-numeric-filter>` component and pass the filter to the `[clrDgNumericFilter]` property.

```typescript
interface ClrDatagridNumericFilterInterface<T> {
  accepts(item: T, low: number, high: number): boolean;
}
```

```html
<clr-dg-column>
  Wins
  <clr-dg-numeric-filter [clrDgNumericFilter]="winsFilter"></clr-dg-numeric-filter>
</clr-dg-column>
```

User ID

Name

Creation date

Pokemon

Favorite color

Wins

30024JohnsonOct 11, 2014 Exeggutor #10375

40512SheridanSep 19, 2016 Ninetales #3879

60451BradFeb 21, 2017 Marowak #10580

2271LennyJun 22, 2018 Tauros #12878

26906JohnsonMar 2, 2017 Hypno #9751

20207MarcellaJul 21, 2015 Vaporeon #13463

27626BradDec 29, 2019 Diglett #5059

90734MarcellaDec 25, 2018 Omastar #1399

59014DesiraeDec 22, 2018 Slowbro #8099

34992AlicaDec 27, 2014 Sandshrew #2782

10 users

```typescript
import { ClrDatagridStringFilterInterface } from '@clr/angular';

class PokemonFilter implements ClrDatagridStringFilterInterface<User> {
  accepts(user: User, search: string): boolean {
    return '' + user.pokemon.number == search || user.pokemon.name.toLowerCase().indexOf(search) >= 0;
  }
}

@Component({
  /* ... */
})
class MyComponent {
  private pokemonFilter = new PokemonFilter();
}
```

```html
<-- In the columns declaration -->
<clr-dg-column>
  Pokemon
  <clr-dg-string-filter [clrDgStringFilter]="pokemonFilter"></clr-dg-string-filter>
</clr-dg-column>
```

#### Filters with preset values

You can use a preset filter with either of the built-in filters to initialize the data grid to a specific state. `[(clrFilterValue)]` can be pre-set to a string for a string filter or a range of numbers for a numeric filter. With numeric filters you can pass `null` for either of the limits to not set it. The example below sets a lower limit of 10 and no upper limit.

```html
<-- Using clrFilterValue declaration -->
<clr-dg-string-filter [clrDgStringFilter]="pokemonFilter" [(clrFilterValue)]="myFilterValue"> </clr-dg-string-filter>
<clr-dg-numeric-filter [clrDgNumericFilter]="winsFilter" [clrFilterValue]="[10, null]"> </clr-dg-numeric-filter>
```

User ID

Name

Creation date

Pokemon

Favorite color

Wins

40512SheridanSep 19, 2016 Ninetales #3879

60451BradFeb 21, 2017 Marowak #10580

2271LennyJun 22, 2018 Tauros #12878

20207MarcellaJul 21, 2015 Vaporeon #13463

34992AlicaDec 27, 2014 Sandshrew #2782

10 users

Info

We are planning on writing more of these semi-customisable filters in future releases, including a filter where the user selects values among the ones that are actually present in the data.  
If the one you are looking for isn't implemented yet, you can absolutely write it yourself using the fully customisable filters. And if you think it's good, feel free to contribute back to Clarity and add it for everyone!

Custom Filtering Pagination
