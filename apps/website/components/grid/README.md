---
title: Overview
---

# Grid

![HTML5](assets/images/bugs/badge_html5.svg 'HTML5')![CSS3](assets/images/bugs/badge_css3.svg 'CSS3')

- [Examples & Code](/documentation/grid#top)
- [Design Guidelines](/documentation/grid#guidelines)

##### A grid provides a structure of rows and columns for aligning content. Grids are useful because they help create a familiar and easily navigable structure for content.

Clarity extends the 12-column [Bootstrap 4 Flex Grid](https://getbootstrap.com/docs/4.1/layout/grid/) and prefixes the grid classes with `clr-`. Prefixing allows us to avoid conflicting with other grid systems. However, it also means if you are familiar with the grid classes in Bootstrap 4, the Clarity grid will be familiar.

Important features about the grid are listed below:

Extra Small

Small

Medium

Large

Extra Large

Grid behavior

Horizontal

Collapsed to start, horizontal above breakpoints

Container width

<576px

≥576px

≥768px

≥992px

≥1200px

Class prefix

`.clr-col-`

`.clr-col-sm-`

`.clr-col-md-`

`.clr-col-lg-`

`.clr-col-xl-`

Number of columns

12

Gutter width

24px (12px on the left and right of column)

Nestable

Yes

Offsets

Yes

Column order

Yes

**Grid Behavior**
Horizontal for extra-small. All other breakpoints are collapsed to start, then horizontal above the breakpoint.

**Common Properties**

- Number of columns: 12
- Gutter width: 24px (12px on the left and right of column)
- All columns support nesting, offsets, and column order

Extra small
< 576px

`.clr-col-`

Small
≥ 576px

`.clr-col-sm-`

Medium
≥ 768px

`.clr-col-md-`

Large
≥ 992px

`.clr-col-lg-`

Extra large
≥ 1200px

`.clr-col-xl-`

### Rows

A `.clr-row` is a horizontal group of 12 columns.

### Columns

The column classes specify the number of columns per row. The value appended to the class prefix must be between 1 and 12.

4

6

2

```html
<div class="clr-row">
  <div class="clr-col-4">
    <span>4</span>
  </div>
  <div class="clr-col-6">
    <span>6</span>
  </div>
  <div class="clr-col-2">
    <span>2</span>
  </div>
</div>
```

1

11

2

10

3

9

4

8

5

7

6

6

12

### Column Stacking

Grid columns can occupy different widths on different device sizes.

In the example below, if the device size is ≥ 768px (medium or above), the grid has two columns of equal width and a third column that occupies the entire width of the row.  For device sizes < 768px, each column occupies the entire width of the row and the columns are stacked. Resize your browser to see how this works.

clr-col-sm-12 clr-col-md-6

clr-col-sm-12 clr-col-md-6

clr-col-sm-12 clr-col-md-12

```html
<div class="clr-row">
  <div class="clr-col-sm-12 clr-col-md-6">
    <span>clr-col-sm-12 clr-col-md-6</span>
  </div>
  <div class="clr-col-sm-12 clr-col-md-6">
    <span>clr-col-sm-12 clr-col-md-6</span>
  </div>
  <div class="clr-col-sm-12 clr-col-md-12">
    <span>clr-col-sm-12 clr-col-md-12</span>
  </div>
</div>
```

### Column Wrapping

Placing more than 12 columns in a single row will wrap the columns exceeding the row, as one unit, onto a new line.

clr-col-6

clr-col-8

```html
<div class="clr-row">
  <div class="clr-col-6">
    <span>clr-col-7</span>
  </div>
  <div class="clr-col-8">
    <span>clr-col-8</span>
  </div>
</div>
```

### Flexbox Grid Auto Layout

###### Equal Width

Using the `.clr-col-*` class divides the row into equal width columns.

1/5

1/5

1/5

1/5

1/5

1/3

1/3

1/3

```html
<div class="clr-row">
  <div class="clr-col">
    <span>1/5</span>
  </div>
  <div class="clr-col">
    <span>1/5</span>
  </div>
  <div class="clr-col">
    <span>1/5</span>
  </div>
  <div class="clr-col">
    <span>1/5</span>
  </div>
  <div class="clr-col">
    <span>1/5</span>
  </div>
</div>
<div class="clr-row">
  <div class="clr-col">
    <span>1/3</span>
  </div>
  <div class="clr-col">
    <span>1/3</span>
  </div>
  <div class="clr-col">
    <span>1/3</span>
  </div>
</div>
```

###### Setting One Column Width

A specific width can be assigned to a column. All the siblings of that columns will automatically resize around it.

1/3 (fixed)

Remaining

```html
<div class="clr-row">
  <div class="clr-col-4">
    <span>1/3 (auto)</span>
  </div>
  <div class="clr-col">
    <span>Remaining</span>
  </div>
</div>
```

1/4 (auto)

1/2 (fixed)

1/4 (auto)

```html
<div class="clr-row">
  <div class="clr-col">
    <span>1/4 (auto)</span>
  </div>
  <div class="clr-col-6">
    <span>1/2 (fixed)</span>
  </div>
  <div class="clr-col">
    <span>1/4 (auto)</span>
  </div>
</div>
```

###### Variable Width Content

Using the `.clr-col-*-auto` class on a column sizes it based on the width of its content.

1 of 3

Variable width content

3 of 3

1 of 3

Variable Width Content

3 of 3

```html
<div class="clr-row">
  <div class="clr-col clr-col-lg-2">
    <span>1 of 3</span>
  </div>
  <div class="clr-col-lg-auto">
    <span>Variable width content</span>
  </div>
  <div class="clr-col clr-col-lg-2">
    <span>3 of 3</span>
  </div>
</div>
<div class="clr-row">
  <div class="clr-col">
    <span>1 of 3</span>
  </div>
  <div class="clr-col-md-auto">
    <span>Variable Width Content</span>
  </div>
  <div class="clr-col clr-col-lg-2">
    <span>3 of 3</span>
  </div>
</div>
```

###### Multi Row

Using the `.clr-break-row` class after a column, breaks the following columns to a new line.

clr-col

clr-col

clr-col

clr-col

```html
<div class="clr-row">
  <div class="clr-col">
    <span>clr-col</span>
  </div>
  <div class="clr-col">
    <span>clr-col</span>
  </div>
  <div class="clr-break-row"></div>
  <div class="clr-col">
    <span>clr-col</span>
  </div>
  <div class="clr-col">
    <span>clr-col</span>
  </div>
</div>
```

### Column Offsets

The responsive `clr-offset-*` classes increase a column’s left margin by `*` number of columns.

clr-col-sm-4

clr-col-sm-6 clr-offset-sm-2

```html
<div class="clr-row">
  <div class="clr-col-sm-4">
    <span>clr-col-sm-4</span>
  </div>
  <div class="clr-col-sm-6 clr-offset-sm-2">
    <span>clr-col-sm-6 clr-offset-sm-2</span>
  </div>
</div>
```

### Column Ordering

Error

The usage of the CSS `order` property is no longer recommended by Clarity due to its potential to cause accessibility issues with respect to reading order. Screen reader software uses DOM order to render content to users and when doing so, does not honor the CSS `order` property. Usage of this property can result in violating the WCAG Success Criterion - [1.3.2 Meaningful Sequence](https://www.w3.org/TR/WCAG21/#meaningful-sequence). For more information about this issue see [https://www.w3.org/TR/css-flexbox-1/#order-accessibility](https://www.w3.org/TR/css-flexbox-1/#order-accessibility).

The responsive `clr-order-*` class modifiers change the order of columns where `*` represents the order.

1st, Unordered

2nd, Order 3

3rd, Order 2

```html
<div class="clr-row">
  <div class="clr-col">
    <span>1st, Unordered</span>
  </div>
  <div class="clr-col clr-order-3">
    <span>2nd, Order 3</span>
  </div>
  <div class="clr-col clr-order-2">
    <span>3rd, Order 2</span>
  </div>
</div>
```

### Vertical Alignment in Rows

Columns within a row can be vertically aligned using the following responsive classes:

- `clr-align-items-*-start`
- `clr-align-items-*-center`
- `clr-align-items-*-end`

###### Start

1/2

1/2

```html
<div class="clr-row clr-align-items-start">
  <div class="clr-col">
    <span>1/2</span>
  </div>
  <div class="clr-col">
    <span>1/2</span>
  </div>
</div>
```

###### Center

1/2

1/2

```html
<div class="clr-row clr-align-items-center">
  <div class="clr-col">
    <span>1/2</span>
  </div>
  <div class="clr-col">
    <span>1/2</span>
  </div>
</div>
```

###### End

1/2

1/2

```html
<div class="clr-row clr-align-items-end">
  <div class="clr-col">
    <span>1/2</span>
  </div>
  <div class="clr-col">
    <span>1/2</span>
  </div>
</div>
```

A column can individually be vertically aligned in a row using the following responsive classes:

- `clr-align-self-*-start`
- `clr-align-self-*-center`
- `clr-align-self-*-end`

1/3

1/3

1/3

```html
<div class="clr-row">
  <div class="clr-col clr-align-self-start">
    <span>1/3</span>
  </div>
  <div class="clr-col clr-align-self-center">
    <span>1/3</span>
  </div>
  <div class="clr-col clr-align-self-end">
    <span>1/3</span>
  </div>
</div>
```

### Horizontal Alignment in Rows

To align columns horizontally within a row, extend the row with one of the following responsive classes:

- `clr-justify-content-*-start`
- `clr-justify-content-*-center`
- `clr-justify-content-*-end`
- `clr-justify-content-*-around`
- `clr-justify-content-*-between`

###### Start

1/3

1/3

```html
<div class="clr-row clr-justify-content-start">
  <div class="clr-col-4">
    <span>
      1/3
    </span>
  </div>
  <div class="clr-col-4">
    <span>
      1/3
    </span>
  </div>
</div>
```

###### Center

1/3

1/3

```html
<div class="clr-row clr-justify-content-center">
  <div class="clr-col-4">
    <span>
      1/3
    </span>
  </div>
  <div class="clr-col-4">
    <span>
      1/3
    </span>
  </div>
</div>
```

###### End

1/3

1/3

```html
<div class="clr-row clr-justify-content-end">
  <div class="clr-col-4">
    <span>
      1/3
    </span>
  </div>
  <div class="clr-col-4">
    <span>
      1/3
    </span>
  </div>
</div>
```

###### Space Around

1/3

1/3

```html
<div class="clr-row clr-justify-content-around">
  <div class="clr-col-4">
    <span>
      1/3
    </span>
  </div>
  <div class="clr-col-4">
    <span>
      1/3
    </span>
  </div>
</div>
```

###### Space Between

1/3

1/3

```html
<div class="clr-row clr-justify-content-between">
  <div class="clr-col-4">
    <span>
      1/3
    </span>
  </div>
  <div class="clr-col-4">
    <span>
      1/3
    </span>
  </div>
</div>
```

### Grid Nesting

9

3

9

3

```html
<div class="clr-row">
  <div class="clr-col-9">
    <span>9</span>
    <div class="clr-row">
      <div class="clr-col-3">
        <span>3</span>
      </div>
      <div class="clr-col-9">
        <span>9</span>
      </div>
    </div>
  </div>
  <div class="clr-col-3">
    <span>3</span>
  </div>
</div>
```

### Usage

Clarity recommends that your application layout stay on the grid. A grid-based approach:

- Aligns content consistently
- Establishes a foundation that can be easily built upon for future designs
- Simplifies layout decisions required of a designer
- Coordinates the efforts of multiple designers

#### Applying the Grid

Apply the grid with consideration of content. Some pages might benefit from a three-column layout, where other pages might work best with a two-column layout.

You can vary the column layout within the same page. This strategy works well for presenting content that scrolls vertically.

Don’t lock your design into a layout optimized for a large window.

#### Grids and Card Layouts

Designing to a grid is especially important for [card](/documentation/cards) layouts. Cards contains blocks of content and their height and width can vary. The grid aligns the cards in a way that is easy for users to navigate.

#### If You Decide Not to Conform to the Grid

Do so with intent. Find a balance between aesthetics and conformity. Keep in mind that elements that are not aligned to the grid draw attention in the same way as color, contrast, and iconography and require more cognitive effort on the part of the user.
