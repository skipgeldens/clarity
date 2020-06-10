---
title: Overview
---

# Badges

- [Design Guidelines](/documentation/badges#top)
- [Code & Examples](/documentation/badges#examples)

##### Badges provide a method to highlight a count of an element either next to it or inside the element itself.

### Style

Badges have a colorful, bold, and filled style that makes them stand out when appearing within or next to another component.

#### Overall Style

Badges have a more rounded border radius, similar to labels, to distinguish them from primary buttons.

Badges are also small enough to fit next to or within another element.

Inbox

1

New Email 1

Folders

#### Color

You can use different colors in badges.

Stoplight colors are reserved to display a sense of urgency or indicate state.

**Notifications**12

**Alerts**12

#### Typography

Use integers within badges. If you’re attempting to use text, consider using a label instead.

#### Over 99

If a badge needs to display a number above 99, use “99+” instead of the number unless the number is important to the user’s objectives and you are certain there is room in the design to accommodate it.

London (Location) 14 Austin (Location) 99+

### Code & Examples

A badge overlays a count of items on another component, such as a menu or label.

###### 1\. Badges (Color Options)

11523129051253257

```html
<span class="badge">1</span>
<span class="badge badge-purple">15</span>
<span class="badge badge-blue">2</span>
<span class="badge badge-orange">3</span>
<span class="badge badge-light-blue">12</span>
<span class="badge badge-1">90</span>
<span class="badge badge-2">51</span>
<span class="badge badge-3">25</span>
<span class="badge badge-4">32</span>
<span class="badge badge-5">57</span>
```

###### 2\. Status Badges

231215

```html
<span class="badge badge-info">2</span>
<span class="badge badge-success">3</span>
<span class="badge badge-warning">12</span>
<span class="badge badge-danger">15</span>
```
