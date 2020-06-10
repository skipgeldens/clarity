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

## Custom sort

Sometimes, the natural sort order for a property is not the relevant one. Sometimes, a column is not even a property on your model but is dynamically generated instead. In these cases, you might want to specify a custom comparator to sort the column according to your needs. This can be done by providing a comparator through the `[clrDgSortBy]` input, whether or not your column is declared as a `clrDgField`, and will always take precedence over it if it is.

A comparator is just an object that implements a `compare` method that could be given as parameter to Javascript's native `Array.sort()` function. In other words, if a and b are two elements being compared, then:

- if compare(a, b) is less than 0, a comes first,
- if compare(a, b) returns 0, leave a and b unchanged with respect to each other, but sorted with respect to all other items,
- if compare(a, b) is greater than 0, b comes first.

The safest way to check that your types comply with our API is to have your comparator be an instance of a class that implement the `ClrDatagridComparatorInterface` interface provided by Clarity.

Why use an object instead of the function directly?  
Using an object implementing an interface allows strong type-checking, which is safer for your application. If your sorting function does not comply with our API, you will get a clear error during typescript compilation, instead of an obscure one during runtime.  
Admittedly, we could achieve strong typing by exporting a function signature instead of a whole interface, but not only do interfaces leave room for future features without forcing breaking changes, they also encourage you to write your business logic outside of the controller, naturally creating pure Typescript or Javascript "logic" classes, which are far more reusable.

In our example, everyone knows pokemon should not be sorted lexicographically, but according to Pokédex number.

The datagrid is currently sorted **descendingly**.

Sort ascendingly Sort descendingly Clear sort

User ID

Name

Creation date

Pokemon

Favorite color

21460JeanaDec 9, 2016 Zapdos #145

45218LottieMar 19, 2017 Flareon #136

47354DebbyApr 16, 2017 Seaking #119

25577DarlaJan 30, 2020 Magnemite #81

74284EllenJul 14, 2016 Machoke #67

60286NidiaMar 29, 2018 Gloom #44

96276RoslynFeb 24, 2019 Nidoran-m #32

99410SibylApr 15, 2018 Sandshrew #27

86893DesiraeJun 18, 2019 Beedrill #15

50342LottieAug 12, 2019 Beedrill #15

10 users

```typescript
import { ClrDatagridComparatorInterface } from '@clr/angular';

class PokemonComparator implements ClrDatagridComparatorInterface<User> {
  compare(a: User, b: User) {
    return a.pokemon.number - b.pokemon.number;
  }
}

@Component({
  /* ... */
})
class MyComponent {
  public pokemonComparator = new PokemonComparator();
}
```

```html
<-- In the columns declaration -->
<clr-dg-column [clrDgField]="'pokemon.name'" [clrDgSortBy]="pokemonComparator">Pokemon</clr-dg-column>
```

The following example is showcasing the deprecated way of sorting pokemon. This will be removed in the next major release.

The datagrid is currently not sorted. Sort

User ID

Name

Creation date

Pokemon

Favorite color

21460JeanaDec 9, 2016 Zapdos #145

99410SibylApr 15, 2018 Sandshrew #27

47354DebbyApr 16, 2017 Seaking #119

86893DesiraeJun 18, 2019 Beedrill #15

50342LottieAug 12, 2019 Beedrill #15

25577DarlaJan 30, 2020 Magnemite #81

74284EllenJul 14, 2016 Machoke #67

96276RoslynFeb 24, 2019 Nidoran-m #32

45218LottieMar 19, 2017 Flareon #136

60286NidiaMar 29, 2018 Gloom #44

10 users

```typescript
import { ClrDatagridComparatorInterface } from '@clr/angular';

class PokemonComparator implements ClrDatagridComparatorInterface<User> {
  compare(a: User, b: User) {
    return a.pokemon.number - b.pokemon.number;
  }
}

@Component({
  /* ... */
})
class MyComponent {
  public pokemonComparator = new PokemonComparator();
}
```

```html
<-- In the columns declaration -->
<clr-dg-column [clrDgField]="'pokemon.name'" [clrDgSortBy]="pokemonComparator">Pokemon</clr-dg-column>
```

#### Pre-Sorted Columns

Columns can be pre-sorted ascending or descending by declaring the `clrSortOrder` input on `clr-dg-column`. You must also provide the `[clrDgField]` so it knows what field in the provided object to sort on. Clarity provides an enum for such a scenario: `ClrDatagridSortOrder`

Here is an example that presorts the **Name** column for descending sort order.

```typescript
import {ClrDatagridSortOrder} from '@clr/angular';
...
@Component({ /* ... */ })
class MyComponent {
    this.descSort = ClrDatagridSortOrder.DESC;
}
```

```html
<clr-dg-column [clrDgField]="'name'" [clrDgSortOrder]="descSort">Name</clr-dg-column>
```

User ID

Name

Creation date

Pokemon

Favorite color

99410SibylApr 15, 2018 Sandshrew #27

96276RoslynFeb 24, 2019 Nidoran-m #32

60286NidiaMar 29, 2018 Gloom #44

50342LottieAug 12, 2019 Beedrill #15

45218LottieMar 19, 2017 Flareon #136

21460JeanaDec 9, 2016 Zapdos #145

74284EllenJul 14, 2016 Machoke #67

86893DesiraeJun 18, 2019 Beedrill #15

47354DebbyApr 16, 2017 Seaking #119

25577DarlaJan 30, 2020 Magnemite #81

10 users

Binding Properties Custom Filtering
