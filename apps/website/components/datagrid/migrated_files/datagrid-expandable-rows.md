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

## Expandable rows

Use expandable rows when you have additional information for a row, or row cells that do not need to be shown at all times. This helps minimize visual clutter. It also frees up the need of a second datagrid that gets updated with details. This is sometimes called a master-detail or master-child pattern. Another use is replacing original row data with a custom view or layout which includes most or all of the original row data. The expanded area can be loaded with other components as well to fit your needs.

To make a row expandable, you need to put a `<clr-dg-row-detail>` component inside your row, and add a `*clrIfExpanded` structural directive on it. This directive doesn't take any input, it is here for 2 reasons: make sure the details are only instantiated once they are needed, and make it very clear in _your_ application templates that this part of the DOM is not present at all times, but only when the row is expanded. This component can contain anything: text, images, graphs, ... It can ignore the overall table layout. If you wish to display details for each cell of the row individually and respect the table layout, all you need to do is use our usual `<clr-dg-cell>` component in the detail. Make sure you have exactly as many cells in the detail as you have in the row, or they will not align properly.

```html
<clr-dg-row *ngFor="let user of users">
  <-- Cells declarations -->
  <clr-dg-cell>...</clr-dg-cell>

  <clr-dg-row-detail *clrIfExpanded>
    Lorem ipsum...
  </clr-dg-row-detail>
</clr-dg-row>
```

If you want the details to replace the original row rather than expand under it, we offer a `[clrDgReplace]` input that receives a boolean on the `<clr-dg-row-detail>` component. In other words, to make details replace the row they're in, just write:

```html
<clr-dg-row-detail *clrIfExpanded [clrDgReplace]="true">
  Lorem ipsum...
</clr-dg-row-detail>
```

Sometimes you want to conditionally display the expandable row, depending on if the given row has any content to expand. In order to handle this, you'll need to wrap your expandable row in a conditional `*ngIf` directive to handle this, but since you can't put two structural directives on the same element you'll need to use `NgContainer` and `ngProjectAs` like you see here in the following snippet.

```html
<ng-container ngProjectAs="clr-dg-row-detail" *ngIf="true">
  <clr-dg-row-detail *clrIfExpanded>
    Lorem ipsum...
  </clr-dg-row-detail>
</ng-container>
```

Finally, you might need to make a server call to get the details for a row before you can display them. This is a very common lazy loading pattern. In this case, you need to add a `[clrLoading]` directive receiving a boolean _anywhere in the row_. Yes, it can be absolutely anywhere, as long as it's in or on the row itself. The easiest way to make the server call lazily is simply to create a component that will make the call on initialization (typically in the `ngOnInit()` method), and to use that component inside the `*clrIfExpanded` structural directive. Here is an example of what this solution typically looks like.

```html
<clr-dg-row *ngFor="let user of users">
  <-- Cells declarations -->
  <clr-dg-cell>...</clr-dg-cell>

  <my-detail *clrIfExpanded [user]="user" ngProjectAs="clr-dg-row-detail"></my-detail>
</clr-dg-row>
```

```typescript
@Component({
    selector: "my-detail",
    template: `
        <div [clrLoading]="loading">...</div>
    `
})
class MyDetailComponent implements OnInit {
    @Input() user: User;

    loading: boolean;

    ngOnInit() {
        this.loading = true;
        // Make the server call
        fetchRemoteDetail(user).then(() => this.loading = false));
    }
}
```

Note the `ngProjectAs` attribute on our custom detail component. This is needed to make sure it is projected in the same place an actual `<clr-dg-row-detail>` would be.

Here is an example showcasing all these different combinations in action:

Type of detail

OverallPer Column

Replace rowLazy loading

User ID

Name

Creation date

Pokemon

Favorite color

Expand

6962GeorgiaMay 22, 2019Shellder

Expand

40066ShenikaAug 30, 2014Blastoise

Expand

51148LottieJul 8, 2015Pidgey

Expand

91092MarcellaMay 2, 2017Articuno

Expand

89135LunaNov 27, 2014Persian

Expand

86556JohnsonMar 29, 2018Nidoking

Expand

73043KaitlinMar 19, 2019Blastoise

Expand

1504DesiraeFeb 15, 2014Paras

Expand

81255JeanaMay 5, 2014Porygon

Expand

89580DorianJan 13, 2015Kangaskhan

10 users

Detail Pane Compact
