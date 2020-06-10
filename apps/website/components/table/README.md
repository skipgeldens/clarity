---
title: Overview
---

# Tables

![HTML5](assets/images/bugs/badge_html5.svg 'HTML5')![CSS3](assets/images/bugs/badge_css3.svg 'CSS3')

- [Examples & Code](/documentation/tables#top)
- [Design Guidelines](/documentation/tables#guidelines)

##### Use the table styles wherever you need to present static data in a tabular format.

For advanced features like sorting, filtering, pagination etc. see [Datagrid.](/documentation/datagrid)

### Basic Tables

Tables take up the full width of their container. Values in table cells are center-aligned by default.

Decimal

Hexadecimal

Binary

Roman Numeral

1

1

1

I

5

5

101

V

10

A

1010

X

15

F

1111

XV

```html
<table class="table">
  <thead>
    <tr>
      <th>Decimal</th>
      <th>Hexadecimal</th>
      <th>Binary</th>
      <th>Roman Numeral</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>1</td>
      <td>1</td>
      <td>I</td>
    </tr>
    <tr>
      <td>5</td>
      <td>5</td>
      <td>101</td>
      <td>V</td>
    </tr>
    <tr>
      <td>10</td>
      <td>A</td>
      <td>1010</td>
      <td>X</td>
    </tr>
    <tr>
      <td>15</td>
      <td>F</td>
      <td>1111</td>
      <td>XV</td>
    </tr>
  </tbody>
</table>
```

### Left-Aligned Table Cells

Values within cells can be left-aligned by adding the `.left` classname to the table cell.

Wizard

Allegiance

Triwizard Champion?

Can Cast Fireball

Harry

Gryffindor

Yes

No

Gandalf

Hobbits

Maybe?

I don't think so...

Obi-Wan Kenobi

Republic/Rebellion

No

No

Merlin

King Arthur

Probably invented the tournament

Solid maybe

```html
<table class="table">
  <thead>
    <tr>
      <th class="left">Wizard</th>
      <th>Allegiance</th>
      <th>Triwizard Champion?</th>
      <th>Can Cast Fireball</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="left">Harry</td>
      <td>Gryffindor</td>
      <td>Yes</td>
      <td>No</td>
    </tr>
    <tr>
      <td class="left">Gandalf</td>
      <td>Hobbits</td>
      <td>Maybe?</td>
      <td>I don&apos;t think so...</td>
    </tr>
    <tr>
      <td class="left">Obi-Wan Kenobi</td>
      <td>Republic/Rebellion</td>
      <td>No</td>
      <td>No</td>
    </tr>
    <tr>
      <td class="left">Merlin</td>
      <td>King Arthur</td>
      <td>Probably invented the tournament</td>
      <td>Solid maybe</td>
    </tr>
  </tbody>
</table>
```

### Multiline Table Cells

Table cells automatically wrap text.

Name

A/B

Comment

Beetlejuice

B

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Mytzlplk

A

Excepteur sint occaecat cupidatat non proident.

Q

A

Ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.

```html
<table class="table">
  <thead>
    <tr>
      <th class="left">Name</th>
      <th>A/B</th>
      <th class="left">Comment</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="left">Beetlejuice</td>
      <td>B</td>
      <td class="left">...</td>
    </tr>
    <tr>
      <td class="left">Mytzlplk</td>
      <td>A</td>
      <td class="left">...</td>
    </tr>
    <tr>
      <td class="left">Q</td>
      <td>A</td>
      <td class="left">...</td>
    </tr>
  </tbody>
</table>
```

### Non-Bordered Tables

Tables can be displayed without borders by using the `.table-noborder` classname.

Monster

Home

Likes Cookies

Fun to Play With

Wolfman

Nondisclosed countryside

Sometimes

Not really

Mothra

Tropical island

No

Only if you have a flashlight

Oscar the Grouch

Sesame Street

No

No

Cookie Monster

Sesame Street

Definitely yes

Only if you have no cookies

```html
<table class="table table-noborder">
  <thead>
    <tr>
      <th class="left">Monster</th>
      <th>Home</th>
      <th>Likes Cookies</th>
      <th class="left">Fun to Play With</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="left">Wolfman</td>
      <td>Nondisclosed countryside</td>
      <td>Sometimes</td>
      <td class="left">Not really</td>
    </tr>
    <tr>
      <td class="left">Mothra</td>
      <td>Tropical island</td>
      <td>No</td>
      <td class="left">Only if you have a flashlight</td>
    </tr>
    <tr>
      <td class="left">Oscar the Grouch</td>
      <td>Sesame Street</td>
      <td>No</td>
      <td class="left">No</td>
    </tr>
    <tr>
      <td class="left">Cookie Monster</td>
      <td>Sesame Street</td>
      <td>Definitely yes</td>
      <td class="left">Only if you have no cookies</td>
    </tr>
  </tbody>
</table>
```

### Compact Tables

Table row heights can be reduced with the `.table-compact` classname.

Monster

Home

Likes Cookies

Fun to Play With

Wolfman

Nondisclosed countryside

Sometimes

Not really

Mothra

Tropical island

No

Only if you have a flashlight

Oscar the Grouch

Sesame Street

No

No

Cookie Monster

Sesame Street

Definitely yes

Only if you have no cookies

```html
<table class="table table-compact">
  <thead>
    <tr>
      <th class="left">Monster</th>
      <th>Home</th>
      <th>Likes Cookies</th>
      <th class="left">Fun to Play With</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="left">Wolfman</td>
      <td>Nondisclosed countryside</td>
      <td>Sometimes</td>
      <td class="left">Not really</td>
    </tr>
    <tr>
      <td class="left">Mothra</td>
      <td>Tropical island</td>
      <td>No</td>
      <td class="left">Only if you have a flashlight</td>
    </tr>
    <tr>
      <td class="left">Oscar the Grouch</td>
      <td>Sesame Street</td>
      <td>No</td>
      <td class="left">No</td>
    </tr>
    <tr>
      <td class="left">Cookie Monster</td>
      <td>Sesame Street</td>
      <td>Definitely yes</td>
      <td class="left">Only if you have no cookies</td>
    </tr>
  </tbody>
</table>
```

### Compact, Non-Bordered Tables

The `.table-compact` and `.table-noborder` classnames can be combined.

Monster

Home

Likes Cookies

Fun to Play With

Wolfman

Nondisclosed countryside

Sometimes

Not really

Mothra

Tropical island

No

Only if you have a flashlight

Oscar the Grouch

Sesame Street

No

No

Cookie Monster

Sesame Street

Definitely yes

Only if you have no cookies

```html
<table class="table table-compact table-noborder">
  <thead>
    <tr>
      <th class="left">Monster</th>
      <th>Home</th>
      <th>Likes Cookies</th>
      <th class="left">Fun to Play With</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="left">Wolfman</td>
      <td>Nondisclosed countryside</td>
      <td>Sometimes</td>
      <td class="left">Not really</td>
    </tr>
    <tr>
      <td class="left">Mothra</td>
      <td>Tropical island</td>
      <td>No</td>
      <td class="left">Only if you have a flashlight</td>
    </tr>
    <tr>
      <td class="left">Oscar the Grouch</td>
      <td>Sesame Street</td>
      <td>No</td>
      <td class="left">No</td>
    </tr>
    <tr>
      <td class="left">Cookie Monster</td>
      <td>Sesame Street</td>
      <td>Definitely yes</td>
      <td class="left">Only if you have no cookies</td>
    </tr>
  </tbody>
</table>
```

### Vertical Tables

Using the `.table-vertical` classname orients the table vertically. The left-most column serves as the table header. The left-most cell can be either a `td` or `th` element.

Cells in a vertical table default to left alignment. We have no use cases for center alignment at this time.

Basic table

.table

The classname used to apply general styling of Clarity tables to an HTML table.

Left-aligned table cells

.left

Use this classname on a `td` to align its contents to the left edge of the table data cell.
This is not necessary for vertical tables.

Tables without borders

.table-noborder

This classname will remove borders between table rows as well as the border around the edge of the table.
Also removes the background so that the table will be transparent over the background its container has.

Compact tables

.table-compact

This classname changes is the height of the table rows from 36px to 24px.

Vertical tables

.table-vertical

This classname removes the table header and applies table header styles to the left-most column.

```html
<table class="table table-vertical">
  <tbody>
    <tr>
      <th>Basic table</th>
      <td>.table</td>
      <td>...</td>
    </tr>
    <tr>
      <th>Left-aligned table cells</th>
      <td>.left</td>
      <td>...</td>
    </tr>
    <tr>
      <th>Tables without borders</th>
      <td>.table-noborder</td>
      <td>...</td>
    </tr>
    <tr>
      <th>Compact tables</th>
      <td>.table-compact</td>
      <td>...</td>
    </tr>
    <tr>
      <th>Vertical tables</th>
      <td>.table-vertical</td>
      <td>...</td>
    </tr>
  </tbody>
</table>
```

### Vertical, Compact, Non-bordered Tables

Basic table

.table

The classname for applying general styling of Clarity tables to an HTML table.

Left-aligned table cells

.left

This classname on a `td` aligns content to the left edge of the table cell.
This is not necessary for vertical tables.

Tables without borders

.table-noborder

This classname removes borders between table rows and the border around the table.
It also removes the background so that the table is transparent over its container background.

Compact tables

.table-compact

This classname changes the height of the table rows from 36px to 24px.

Vertical tables

.table-vertical

This classname removes the table header and applies table header styles to the left-most column.

```html
<table class="table table-vertical table-noborder table-compact">
  <tbody>
    <tr>
      <th>Basic table</th>
      <td>.table</td>
      <td>...</td>
    </tr>
    <tr>
      <th>Left-aligned table cells</th>
      <td>.left</td>
      <td>...</td>
    </tr>
    <tr>
      <th>Tables without borders</th>
      <td>.table-noborder</td>
      <td>...</td>
    </tr>
    <tr>
      <th>Compact tables</th>
      <td>.table-compact</td>
      <td>...</td>
    </tr>
    <tr>
      <th>Vertical tables</th>
      <td>.table-vertical</td>
      <td>...</td>
    </tr>
  </tbody>
</table>
```

### Table Container Widths

Tables can exist inside grid columns.

Language

Foo

Bar

Baz

Pig Latin

Oofay

Arbay

Azbay

Bizarro

Bar

Foo

Bang

Hodor

Hodor

Hodor

Hodor

Color

R

G

B

Black

0

0

0

New Black

255

165

0

Pantone 292

98

168

229

Name

Weakness

Frankenstein

Fire

Dracula

Garlic

Wolfman

Squirrels

```html
<div class="clr-row">
  <div class="clr-col-12 clr-col-lg-6 clr-col-xl-4">
    <table class="table">
      <thead>
        <tr>
          <th class="left">Language</th>
          <th>Foo</th>
          <th>Bar</th>
          <th>Baz</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="left">Pig Latin</td>
          <td>Oofay</td>
          <td>Arbay</td>
          <td>Azbay</td>
        </tr>
        <tr>
          <td class="left">Bizarro</td>
          <td>Bar</td>
          <td>Foo</td>
          <td>Bang</td>
        </tr>
        <tr>
          <td class="left">Hodor</td>
          <td>Hodor</td>
          <td>Hodor</td>
          <td>Hodor</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="clr-col-12 clr-col-lg-6 clr-col-xl-4">
    <table class="table">
      <thead>
        <tr>
          <th class="left">Color</th>
          <th>R</th>
          <th>G</th>
          <th>B</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="left">Black</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
        </tr>
        <tr>
          <td class="left">New Black</td>
          <td>255</td>
          <td>165</td>
          <td>0</td>
        </tr>
        <tr>
          <td class="left">Pantone 292</td>
          <td>98</td>
          <td>168</td>
          <td>229</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="clr-col-12 clr-col-lg-6 clr-col-xl-4">
    <table class="table">
      <thead>
        <tr>
          <th class="left">Name</th>
          <th class="left">Weakness</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="left">Frankenstein</td>
          <td class="left">Fire</td>
        </tr>
        <tr>
          <td class="left">Dracula</td>
          <td class="left">Garlic</td>
        </tr>
        <tr>
          <td class="left">Wolfman</td>
          <td class="left">Squirrels</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
```
