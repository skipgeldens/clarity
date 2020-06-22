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

## Server-Driven datagrid

When dealing with large amounts of data or heavy processing, a datagrid often has access the currently displayed data only, requesting only the necessary pieces from the server. This is a very common case that we fully support.

We expose events and hooks on all parts of the datagrid to make sure you can trigger any requests you need based on precise user actions. But an important thing to note is that when the server does handle pagination, it needs to also deal with sorting and filtering, because all three are tightly coupled. In light of this, we decided to expose a single global output `(clrDgRefresh)` that emits the current "state" of the datagrid whenever it changes due to a user action or an external one. This state has the following format:

```typescript
interface ClrDatagridStateInterface<T = any> {
  page?: {
    from?: number;
    to?: number;
    size?: number;
    current?: number;
  };
  sort?: {
    by: string | ClrDatagridComparatorInterface<T>;
    reverse: boolean;
  };
  filters?: any[];
}
```

It contains all the information you need to send to the server in order to get the slice of data currently displayed. It even contains redundant information ( `page.to` and `page.size` for instance), to make sure you have access to the most practical for you without extra processing.

The `filters` array contains either a custom state object returned by the `state` method of the filter or the filter instance itself if the optional `state` method is not implemented.

One important thing to note is that since you don't have all the data available at once, you cannot use the smart iterator `*clrDgItems`: it would sort, filter and paginate a subset of the data that has already gone through all that. So all you need to do is to go back to a simple `*ngFor`, which we support.

Finally, since server calls are involved, we need some way of notifying the user that his action has been acknowledged and that we are currently working on it. To this effect, we provide an input `[clrDgLoading]` that you can use to display the datagrid in a loading state, while fetching data.

Here is an example showcasing all this with a fake server latency of 500ms. It also demonstrates how to adapt the state we emit when it does not match exactly your server's API: in this example, the filters are re-formatted from an array to a map.

User ID

Name

Creation date

Pokemon

Favorite color

Users per page

102050100

1 - 10 of 0 users

Loading

```typescript
import { ClrDatagridStateInterface } from '@clr/angular';

class MyComponent {
  users: User[];
  total: number;
  loading: boolean = true;

  refresh(state: ClrDatagridStateInterface) {
    this.loading = true;
    // We convert the filters from an array to a map,
    // because that's what our backend-calling service is expecting
    let filters: { [prop: string]: any[] } = {};
    if (state.filters) {
      for (let filter of state.filters) {
        let { property, value } = <{ property: string; value: string }>filter;
        filters[property] = [value];
      }
    }
    this.inventory
      .filter(filters)
      .sort(<{ by: string; reverse: boolean }>state.sort)
      .fetch(state.page.from, state.page.size)
      .then((result: FetchResult) => {
        this.users = result.users;
        this.total = result.length;
        this.loading = false;
      });
  }
}
```

```html
<clr-datagrid (clrDgRefresh)="refresh($event)" [clrDgLoading]="loading">
  <clr-dg-column>User ID</clr-dg-column>
  <clr-dg-column [clrDgField]="'name'">Name</clr-dg-column>
  <clr-dg-column [clrDgField]="'creation'">Creation date</clr-dg-column>
  <clr-dg-column [clrDgField]="'pokemon'">Pokemon</clr-dg-column>
  <clr-dg-column [clrDgField]="'color'">Favorite color</clr-dg-column>

  <clr-dg-row *ngFor="let user of users">
    <clr-dg-cell>{{user.id}}</clr-dg-cell>
    <clr-dg-cell>{{user.name}}</clr-dg-cell>
    <clr-dg-cell>{{user.creation | date}}</clr-dg-cell>
    <clr-dg-cell>{{user.pokemon.name}}</clr-dg-cell>
    <clr-dg-cell>
      <span class="color-square" [style.backgroundColor]="user.color"></span>
    </clr-dg-cell>
  </clr-dg-row>

  <clr-dg-footer>
    {{pagination.firstItem + 1}} - {{pagination.lastItem + 1}} of {{total}} users
    <clr-dg-pagination #pagination [clrDgTotalItems]="total"></clr-dg-pagination>
  </clr-dg-footer>
</clr-datagrid>
```

Single Action Placeholder
