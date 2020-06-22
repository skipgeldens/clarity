---
title: API
toc: true
---

## CSS

Clarity defines three different button styles and five status types.

### Classes

<DocComponentApi component="ClrButton" item="css" />

### HTML

#### Styles

```html
<button class="btn btn-primary">Primary</button>
<button class="btn btn-primary-outline">Success</button>
<button class="btn btn-link">Warning</button>
```

#### Color

```html
<button class="btn btn-primary">Primary</button>
<button class="btn btn-success">Success</button>
<button class="btn btn-warning">Warning</button>
<button class="btn btn-danger">Danger</button>
<button class="btn btn-inverse">Inverse</button>
```

#### Size

```html
<button class="btn btn-primary">Primary</button>
<button class="btn btn-primary btn-sm">Primary</button>
<button class="btn btn-link btn-sm">Flat Regular</button>
<button class="btn btn-primary btn-block">Primary</button>
<button type="button" class="btn btn-icon" aria-label="home">
  <cds-icon shape="home"></cds-icon>
</button>
```

#### Misc

```html
<!-- Loading button -->
<button [clrLoading]="'true'" type="submit" class="btn btn-primary-outline">
  Submit
</button>
```
