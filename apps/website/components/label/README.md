---
title: Overview
---

# Labels

- [Design Guidelines](/documentation/labels#top)
- [Code & Examples](/documentation/labels#examples)

##### Labels show concise metadata in a compact format.

john@example.comjames@example.com

### Style

Labels are visually styled to differentiate them from buttons.

#### Overall Style

The distinctive visual style of labels deliberately deviates from buttons. This prevents users from confusing labels with buttons and allows labels to co-exist with other components without competing for a user's attention with primary and secondary buttons on the screen.

FruitMeatDrinkVegetable

#### Color

The Clarity color palette and the colors you are using throughout your application should guide which colors you choose for your labels. We recommend reserving stoplight colors (red, yellow, and green) to display state or status.

If the intent is to use colors as a way to have groups of labels be visually distinct from one another, keep in mind that there may be accessibility issues around using color as your sole differentiator.

Avoid using too many colors within the same context, displaying too many colors may distract the user from the core of your application and the information it presents.

![](assets/images/documentation/labels/labels_color.svg)

Status colors are generally reserved to display state or status.

### Typography

##### Capitalization

To differentiate from buttons, it is recommended that you avoid using all caps for labels. Using all caps might make the user think the label is a button and conflates the use case for labels with actions and buttons.

LONDON (LOCATION)NABLUS (LOCATION)

###### Don't

Use all caps in labels

##### Multiline Text

Keep labels to one line of concise text. The use case for labels is to showcase information in a compact format.

LONDON
(LOCATION)NABLUS
(LOCATION)

###### Don't

Use multiple lines of text within a single label.

##### Additional Metadata

Describe additional information or metadata in parenthesis if necessary.

London (Location)Nablus (Location)

###### Do

Use parenthesis for additional metadata displayed in the same label.

### Behavior

##### Clicking Labels

Labels may be clickable. In this case, clicking on a label should perform an action related to that label. Clicking on a location label used as a tag, for example, could serve to filter the results in a nearby list by that location. Clicking a label could also display more information about the metadata described by that label.

[Chocolate](javascript://) [Vanilla](javascript://) [Mixed](javascript://)

##### Dismissing Labels

A label can be dismissed. Use a close icon at the right-most side of a label to dismiss it.

[james@test.com](javascript://) [jimmy@test.com](javascript://)

##### Labels and Badges

Labels and badges can be used together to show a count relating to the metadata displayed in the label.

Production 12 Dev/Test 99+

Documentation for Badges is available [here](/documentation/badges).

### Code & Examples

A label is a visual tag that provides additional information about data in the UI.

###### 1\. Labels (not clickable)

AustinNew YorkPalo AltoSan FranciscoSeattle

```html
<span class="label">Austin</span>
<span class="label">New York</span>
<span class="label">Palo Alto</span>
<span class="label">San Francisco</span>
<span class="label">Seattle</span>
```

###### 2\. Color Options

SeattleAustinNew YorkPalo AltoSan Francisco

```html
<span class="label">Seattle</span>
<span class="label label-purple">Austin</span>
<span class="label label-blue">New York</span>
<span class="label label-orange">Palo Alto</span>
<span class="label label-light-blue">San Francisco</span>
```

###### 3\. Clickable Labels

[Austin](javascript://)[New York](javascript://)[Palo Alto](javascript://)[San Francisco](javascript://)[Seattle](javascript://)

```html
<a href="..." class="label label-purple clickable">
  Austin
</a>
<a href="..." class="label label-blue clickable">
  New York
</a>
<a href="..." class="label label-orange clickable">
  Palo Alto
</a>
<a href="..." class="label label-light-blue clickable">
  San Francisco
</a>
<a href="..." class="label clickable">
  Seattle
</a>
```

###### 4\. Status Labels (not clickable)

InfoSuccessWarningError

```html
<span class="label label-info">Info</span>
<span class="label label-success">Success</span>
<span class="label label-warning">Warning</span>
<span class="label label-danger">Error</span>
```

###### 5\. Labels with Badges

[Austin1](javascript://)[New York2](javascript://)[Palo Alto3](javascript://)[San Francisco12](javascript://)[Seattle15](javascript://)[Chicago55](javascript://)[San Jose66](javascript://)[Charlotte88](javascript://)[Atlanta99+](javascript://)[Philadelphia0](javascript://)

```html
<a href="..." class="label label-purple clickable">
  Austin
  <span class="badge">1</span>
</a>
<a href="..." class="label label-blue clickable">
  New York
  <span class="badge">2</span>
</a>
<a href="..." class="label label-orange clickable">
  Palo Alto
  <span class="badge">3</span>
</a>
<a href="..." class="label label-light-blue clickable">
  San Francisco
  <span class="badge">12</span>
</a>
<a href="..." class="label clickable">
  Seattle
  <span class="badge">15</span>
</a>
<a href="..." class="label label-purple clickable">
  Chicago
  <span class="badge">55</span>
</a>
<a href="..." class="label label-blue clickable">
  San Jose
  <span class="badge">66</span>
</a>
<a href="..." class="label label-orange clickable">
  Charlotte
  <span class="badge">88</span>
</a>
<a href="..." class="label label-light-blue clickable">
  Atlanta
  <span class="badge">99+</span>
</a>
<a href="..." class="label clickable"> Philadephia<span class="badge">0</span> </a>
```
