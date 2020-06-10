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

## Custom filters

Similarly to the advanced sorting features, sometimes the default filter on a string property is not what you need. When this is the case you can write your own filter, with fully custom template and controller, and both wrap it in and pass it to a `<clr-dg-filter>` component in your column declaration. This can be done whether or not your column is declared as a `clrDgField`, and will always take precedence over it if it is.

The filter you provide to the `<clr-dg-filter>` component needs to implement the `ClrDatagridFilterInterface` interface provided by Clarity:

```typescript
interface ClrDatagridFilterInterface<T, S = any> {
  isActive(): boolean;
  accepts(item: T): boolean;
  changes: Observable<any>;
  readonly state?: S;
  equals?(other: ClrDatagridFilterInterface<T, any>): boolean;
}
```

There are several ways to pass your filter to the `<clr-dg-filter>` component:

- The simplest, but less reusable way, is to simply inline your filter's template in the column and use the `[clrDgFilter]` input to pass your filter instance:

  ```typescript
  import { ClrDatagridFilterInterface } from '@clr/angular';

  class MyFilter implements ClrDatagridFilterInterface<User> {
    changes = new Subject<any>();
    isActive(): boolean {
      /* ... */
    }
    accepts(user: User) {
      /* ... */
    }
  }

  @Component({
    /* ... */
  })
  class MyComponent {
    public myFilter = new MyFilter();
  }
  ```

  ```html
  <-- In the columns declaration -->
  <clr-dg-column>
    My column
    <clr-dg-filter [clrDgFilter]="myFilter">
      <-- The HTML from your custom filter: inputs, checkboxes, ... -->
    </clr-dg-filter>
  </clr-dg-column>
  ```

- A more reusable way is to write an actual component for your custom filter, and inject its `DatagridFilter` parent in its constructor so that it can register itself:

  ```typescript
  import { ClrDatagridFilterInterface, ClrDatagridFilter } from '@clr/angular';

  @Component({
    selector: 'my-filter',
    /* ... */
  })
  class MyFilter implements ClrDatagridFilterInterface<User> {
    constructor(private filterContainer: ClrDatagridFilter) {
      filterContainer.setFilter(this);
    }
    changes = new Subject<any>();
    isActive(): boolean {
      /* ... */
    }
    accepts(user: User) {
      /* ... */
    }
  }
  ```

  ```html
  <-- In the columns declaration -->
  <clr-dg-column>
    My column
    <clr-dg-filter>
      <my-filter></my-filter>
    </clr-dg-filter>
  </clr-dg-column>
  ```

- Finally, if you want to have a completely reusable filter independently of our Datagrid, you can write a component for it and use a template reference variable to declare the filter to its container:

  ```typescript
  @Component({
    selector: 'my-reusable-filter',
    /* ... */
  })
  class MyReusableFilter {
    changes = new Subject<any>();
    isActive(): boolean {
      /* ... */
    }
    accepts(user: User) {
      /* ... */
    }
  }
  ```

  ```html
  <-- In the columns declaration -->
  <clr-dg-column>
    My column
    <clr-dg-filter [clrDgFilter]="myFilter">
      <my-reusable-filter #myFilter></my-reusable-filter>
    </clr-dg-filter>
  </clr-dg-column>
  ```

In our example, we can create "color picker" filter, rather than have to search by color name.

User ID

Name

Creation date

Pokemon

Favorite color

68588KaitlinOct 23, 2016Ekans

95140KaitlinSep 28, 2019Goldeen

2876DorianMar 27, 2016Blastoise

82553LottieMar 3, 2017Dodrio

135DorianMar 14, 2016Mew

70573OleneMar 7, 2019Fearow

2245BeverlyFeb 12, 2014Abra

14679NelsonJan 5, 2015Nidoran-m

32668GeorgiaJun 22, 2019Charmeleon

61045DesiraeJul 1, 2016Nidoran-f

10 users

```typescript
import { ClrDatagridFilterInterface } from '@clr/angular';

@Component({
  selector: 'color-filter',
  /* The rest of the filter component's declaration */
})
class ColorFilter implements ClrDatagridFilterInterface<User> {
  changes = new Subject<any>();
  isActive(): boolean {
    /* ... */
  }
  accepts(user: User) {
    /* ... */
  }
}
```

```html
<-- In the columns declaration -->
<clr-dg-column>
  Favorite color
  <clr-dg-filter [clrDgFilter]="colorFilter">
    <color-filter #colorFilter></color-filter>
  </clr-dg-filter>
</clr-dg-column>
```

By default, filtering searches the original model value for matches. In cases where you format the text for display (such as using a pipe), you may want to create a custom filter to handle searching the formatted text. Otherwise, the results you see may not be filtered in the way you expect.

```html
<clr-datagrid>
  <-- This will search into user.creation (a Date object) and not the result of the pipe (the string 'Jan 6, 2018'). -->
  <clr-dg-column [clrDgField]="'creation'">Creation Date</clr-dg-column>

  <-- This will search into user.name and will not include user.id -- searching for user.id will not return any results.
  -->
  <clr-dg-column [clrDgField]="'name'">Name</clr-dg-column>

  <clr-dg-row *ngFor="let user of users">
    <clr-dg-cell>{{user.creation | date}}</clr-dg-cell>
    <clr-dg-cell>{{ user.id }} : {{ user.name }}</clr-dg-cell>
  </clr-dg-row>
</clr-datagrid>
```

In the example above you will need to go with custom filters that will take into account the data that the user sees is the same that he is searching into.

#### Preset Column Filters

You can use a preset filter on columns to initialize the data grid to a specific filtered state. `[(clrFilterValue)]` can be pre-set.

```html
<-- Using clrFilterValue declaration -->
<clr-dg-column [clrDgField]="'name'" [(clrFilterValue)]="myFilterValue">
  Name
</clr-dg-column>
```

User ID

Name

Creation date

Pokemon

Favorite color

68588KaitlinOct 23, 2016 Ekans #23

95140KaitlinSep 28, 2019 Goldeen #118

2876DorianMar 27, 2016 Blastoise #9

135DorianMar 14, 2016 Mew #151

32668GeorgiaJun 22, 2019 Charmeleon #5

61045DesiraeJul 1, 2016 Nidoran-f #29

10 users

Custom Sorting Built-in Filters
