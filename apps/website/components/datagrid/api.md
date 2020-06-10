---
title: API
toc: true
---

## Classes

{.section-header}

### ClrDatagrid

#### Selector & Basic Usage

```html
<clr-datagrid></clr-datagrid>
```

#### Properties

| Name                           | Type                                                  | Description                                                                                                                                                                         |
| ------------------------------ | ----------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| clrDgLoading                   | @Input: boolean                                       | When this is true the datagrid will have an overlay that blocks user interaction and shows a \<clr-spinner\> that indicates activity associated with retrieving data from a server. |
| clrDgRefresh                   | @Output: EventEmitter\<ClrDatagridStateInterface\<T>> | The state object reflecting the page metadata (to, from size & current) and current sorting and filters applied to the data models.                                                 |
| clrDgSelected                  | @Input: value: T[]                                    | Used for the multi-select datagrid. An input accepting the array of all items that should be selected when data is rendered.                                                        |
| clrDgSelectedChange            | @Output: T[]                                          | Used for the multi-select datagrid. An array of all items that are currently selected. This output is fired after a user selects an item.                                           |
| clrDgSingleSelected            | @Input: value: T                                      | Used for the single-select datagrid. The item that should be selected when the data is rendered.                                                                                    |
| clrDgSingleSelected            | @Output                                               | Used for the single-select datagrid. The item that is currently selected. Fired when user selects an item from the datagrid rows.                                                   |
| clrDgSingleSelectionAriaLabel  | @Input: string                                        | Customized aria-label for the single select checkbox in the row when single row select is declared for the datagrid.                                                                |
| clrDgSingleActionableAriaLabel | @Input: string                                        | Customized aria-label for the row-action button when there are row actions declared for the datagrid.                                                                               |
| clrDetailExpandableAriaLabel   | @Input: string                                        |                                                                                                                                                                                     |
| clrDgPreserveSelection         | @Input" boolean                                       | Set this to true to preserve datagrid selections after filtering has occurred on the dataset.                                                                                       |

{.table .left-cell}

#### Methods

| Method Name | Arguments: Type | Return Type | Description                                                                              |
| ----------- | --------------- | ----------- | ---------------------------------------------------------------------------------------- |
| dataChanged | none            | void        | Re-trigger the computation of displayed items manually. (cell width and datagrid height) |
| allSelected | none            | boolean     | Use to determine if all displayed items are selected.                                    |
| allSelected | value: boolean  | void        | In a multi-select datagrid use this to select all items.                                 |
| resize      | none            | void        | Re-render the datagrid content. E.g recalculate columns widths for projected content.    |

{.table .left-cell}

### ClrDatagridActionBar

Use this component to project buttons with functionality that operate on multiple items at once. There are no
properties or methods for this class.

#### Selector & Basic Usage

```html
<clr-dg-action-bar><clr-dg-action-bar></clr-dg-action-bar></clr-dg-action-bar>
```

### ClrDatagridActionOverflow

Declare this component inside of the `clr-dg-row` element. It is used to project row specific actions that
operate on a single row item.

#### Selector & Basic Usage

```html
Next Selector
```

#### Properties

| Name                          | Type             | Description                                                       |
| ----------------------------- | ---------------- | ----------------------------------------------------------------- |
| clrDgActionOverflowOpen       | @Input: boolean  | An input that sets the open/closed state of the menu.             |
| clrDgActionOverflowOpenChange | @Output: boolean | An output emitted after the open/close state of the menu changes. |

{.table .left-cell}

### ClrDatagridColumn

#### Selector & Basic Usage

```html
<clr-dg-column></clr-dg-column>
```

The ClrDgatagridColumn is used to project column header content, declare the property on the model that relates to a
column and declare filters, sorting as well as if it can be hidden by the user.

#### Properties

| Name                 | Type                                       | Description                                                                                           |
| -------------------- | ------------------------------------------ | ----------------------------------------------------------------------------------------------------- |
| clrDgColType         | @Input: string                             | number                                                                                                | Input that sets the item type for the column when a default filter is used. |
| clrDgField           | @Input: string                             | Used to set the model field (e.g: item.field) for sorting and filters on non server driven datagrids. |
| clrDgSortBy          | @Input: ClrDatagridComparatorInterface\<T> | Used to pass a custom sorting comparator to the column.                                               |
| clrDgSortOrder       | @Input: ClrDatagridSortOrder               | Used to set the initial sorted state of a column.                                                     |
| clrDgSortOrderChange | @Output: ClrDatagridSortOrder              | Emits the ClrDatagridSortOrder on a column after it has been changed.                                 |
| clrFilterValue       | @Input: string                             | \[number, number]                                                                                     | Use this to preset the initial filter value for a column. |
| clrFilterValueChange | @Output: string                            | \[number, number]                                                                                     | An output event that emits the the value used to filter a column after it changes. |
| clrDgColumnResize\*  | @Output: number                            | Output that emits the updated width (in px) of a column width after it has changed.                   |

{.table .left-cell}

##### Note: Marked items **\*** are special directives that overload the clr-dg-column selector and provide additional properties or methods.

#### Methods

TODO: Decide how many of the public methods we want to docuemnt here (e.g header-renderer has several public methods
related to column width and column state)
| Method Name | Arguments: Type | Return Type | Description |
| ---- | ---- | ---- | ---- |
| getColumnWidthState | none | Partial\<ColumnState\> | Returns an object that partially describes the current state of
a column. It will describe the width of a column and if there is a strict width set on the column. |
| setColumnState | index: number | void | Used to update the order of columns with the column in the index position. |
{.table .left-cell}

### ClrDatagridFilter

Declares the filter component to be applied on the container (clr-dg-column) element. This is only needed when
creating and applying custom filters to a column.

TODO: Add in docs for clr-dg-string-filter and clr-dg-numeric-filter

#### Selector & Basic Usage

```html
<clr-dg-filter [clrDgFilter]="myFilter">
  <my-reusable-filter></my-reusable-filter>
  <!-- encapsulated view -->
</clr-dg-filter>

<clr-dg-filter [clrDgFilter]="myFilter">
  <-- The HTML for custom view with myFilter -->
</clr-dg-filter>
```

#### Properties

| Name                  | Type                                   | Description                                                                                       |
| --------------------- | -------------------------------------- | ------------------------------------------------------------------------------------------------- |
| clrDgFilter           | @Input: ClrDatagridFilterInterface\<T> | This input takes a filter that implements the ClrDatagridFilterInterface (for the row item Type). |
| clrDgFilterOpen       | @Input: boolean                        | Input that takes a boolean to set the open of closed state of the filter.                         |
| clrDgFilterOpenChange | @Output: boolean                       | An output that emits the open/closed state of a filter after it changes.                          |

{.table .left-cell}

#### Methods

| Method Name | Arguments: Type | Return Type | Description                                  |
| ----------- | --------------- | ----------- | -------------------------------------------- |
| active      | none            | boolean     | Indicates if the filter is currently active. |

{.table .left-cell}

### ClrDatagridRow

#### Selector & Basic Usage

```html
<clr-dg-row></clr-dg-row>
```

#### Properties

| Name                  | Type             | Description                                                                                                                           |
| --------------------- | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| clrDgItem             | @Input: T        | This is the model for the row to display. It (implicitly) sets the type (T) of the datagrid and all childe components and directives. |
| clrDgSelected         | @Input: boolean  | Use this to set the selected state of a row item.                                                                                     |
| clrDgSelectable       | @Input: booean   | Use this to set the selectable state of a row.                                                                                        |
| clrDgSelectedChange   | @Output: boolean | Change event that emits after an item is selected or unselected.                                                                      |
| clrDgDetailOpenLabel  | @Input: string   | Set this if the applied common string for open needs to be different on each row.                                                     |
| clrDgDetailCloseLabel | @Input: string   | Set this if the applied common string for close needs to be different on each row.                                                    |
|                       |                  |                                                                                                                                       |

{.table .left-cell}

### ClrDatagridCell

This class is used to project cell content into. Content can be simple textual content or complex DOM structure.

#### Selector & Basic Usage

```html
<clr-dg-cell></clr-dg-cell>
```

### ClrDgFooter

This class contains a layout for the following features: non-interactive icon that appears when rows are selected, a
toggle button for the hide/show control when one or more columns are hideable and a slot for the pagination
component. Any other projected content will be displayed in the description slot.

#### Selector & Basic Usage

```html
<clr-dg-footer></clr-dg-footer>
```

### ClrDatagridPagination

#### Selector & Basic Usage

```html
<clr-dg-pagination></clr-dg-pagination>
```

#### Properties

| Name                   | Type            | Description                                                                             |
| ---------------------- | --------------- | --------------------------------------------------------------------------------------- |
| clrDgPageInputDisabled | @Input: boolean | Use this to enable or disable the pagination control from user input.                   |
| clrDgPageSize          | @Input: number  | Use this to pass a number that determines the max number of items to display on a page. |
| clrDgTotalItems        | @Input: number  | Use this to tell the datagrid the total number of items in the item set.                |
| clrDgLastPage          | @Input: number  | Use this to set the number of the last page (e.g back)                                  |
| clrDgPage              | @Input: number  | Use this to set the current page for the dataset.                                       |
| clrDgPageChange        | @Output: number | Output that emits the crrent page when it gets changed.                                 |

{.table .left-cell}

### ClrDatagridPageSize

Child component of pagination. Used to set the page size for pagination calculations.

#### Selector & Basic Usage

```html
<clr-dg-page-size></clr-dg-page-size>
```

#### Properties

| Name               | Type             | Description                                     |
| ------------------ | ---------------- | ----------------------------------------------- |
| clrPageSizeOptions | @Input: number[] | Sets the size of items visible on a given page. |
|                    |                  |                                                 |

{.table .left-cell}

### ClrDatagridPlaceholder

Content projected into this component appears only when the datagrid is empty.

#### Selector & Basic Usage

```html
<clr-dg-placeholder></clr-dg-placeholder>
```

### ClrDatagridDetail

Use this to project the details view when a row has master/detail enabled.

#### Selector & Basic Usage

```html
<clr-dg-detail></clr-dg-detail>
```

## Directives

{.section-header}

### ClrDatagridHideableColumn

This is a structural directive that seperates on the column it is declared on. When at least one column is hidable the
datagrid displays UI controls to hide and show the columns that have this directive declared. Note: it accepts the
{ hidden: boolean } object when presetting the hidden or shown state.

#### Selector & Basic Usage

```html
<clr-dg-column clrDgHideableColumn></clr-dg-column> <clr-dg-column clrDgHideableColumn="{hidden: true}"></clr-dg-column>
```

#### Properties

| Name                | Type                        | Description                                                            |
| ------------------- | --------------------------- | ---------------------------------------------------------------------- |
| clrDgHideableColumn | @Input: { hidden: boolean } | The hidden state of a column with the directive on it.                 |
| clrDgHidden         | @Input: boolean             | An alternaitve input for setting the hidden boolean value of a column. |
| clrDgHiddenChange   | @Output: boolean            | An output that emits the hidden state after it has changed.            |

{.table .left-cell}

### ClrDatagridItems

For datagrids that can supply all of the items on page load there is a structural directive that lets us handle all
of the data processing needed for filters, sorting and pagination.

#### Selector & Basic Usage

```html
<clr-dg-row *clrDgItems="let item of items"></clr-dg-row>
<clr-dg-row *clrDgItems="let item of items; trackBy: myTrackByFunction"></clr-dg-row>
```

#### Properties

| Name              | Type                        | Description                                                                                                                                |
| ----------------- | --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| clrDgItemsTrackBy | @Input: TrackByFunction\<T> | Optional function passed in that defines how to make track changes for the iterable. The function takes an iteration index and an item ID. |

{.table .left-cell}

### ClrIfDetail

Structural directive that creates the detail view after a user activates it with the row button.
Use it on the clr-dg-detail element and use the let keyword to declare a template variable for it.

#### Selector & Basic Usage

```html
<clr-dg-detail *clrIfDetail="let detail"></clr-dg-detail>
```

#### Properties

| Name              | Type         | Description                                                   |
| ----------------- | ------------ | ------------------------------------------------------------- |
| clrIfDetail       | @Input: any  | The model mapped to the template variable for this directive. |
| clrIfDetailChange | @Output: any | The model mapped to the template variable for this directive  |
|                   |              |                                                               |

{.table .left-cell}

## Interfaces

{.section-header}

### ClrDatagridStateInterface

The meta information about the datagrid model that is passed to the server in order to get a slice of the data.
It contains a page object for paging state, a filters array with the filter object and a object that describes how
the data gets sorted.

| InterfaceProperty | InterfacePropertyType                        | InterfacePropertyDescription                                             |
| ----------------- | -------------------------------------------- | ------------------------------------------------------------------------ |
| page?.from?       | number                                       | The (optional) starting page number for the slice of data.               |
| page?.to?         | number                                       | The (optional) ending page number for the slice of data.                 |
| page?.size?       | number                                       | The (optional) number of records for a single slice of data.             |
| page?.current?    | number                                       | The page number for the current slice of model data.                     |
| sort?.by          | string \| ClrDatagridComparatorInterface\<T> | DESC, ASC, None or the comparator used to sort.                          |
| sort?.reverse     | boolean                                      | The opposite of the sorting applied to the model data.                   |
| filters           | any[]                                        | An array of filters that are applied to the data passed to the datagrid. |

{.table .left-cell}

### ClrDatagridComparatorInterface

An interfaced used when creating a custom comparator used to sort a one of the models columns. It must implement the
compare method described below.

#### Methods

| Method Name | Arguments: Type | Return Type | Description |
| ----------- | --------------- | ----------- | ----------- |
| compare     | a: T, b: T      | number      |             | the (T)ype is the model provded for a datagrid row item. |

{.table .left-cell}

##### ClrDatagridComparatorInterface Notes

(T)ype is the type that describes a row of data for the items in the datagrid. It should handle undefined cases for
both arguments along with the cases where a is sorted before b and b is sorted before a. When none of those cases
applies it should return 0 (e.g the unsorted case).
