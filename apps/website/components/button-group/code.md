---
title: Code
---

### Code & Examples

#### Menu overflow

Use the clrInMenu input to determine if a button belongs in the overflow menu or not.

##### Default position

```html
<clr-button-group class="btn-primary">
  <clr-button>Create</clr-button>
  <clr-button>Favorite</clr-button>
  <clr-button [clrInMenu]="true">Assign</clr-button>
  <clr-button [clrInMenu]="true">Download</clr-button>
  <clr-button [clrInMenu]="true">Delete</clr-button>
</clr-button-group>
```

#### Menu Position

```html
<clr-button-group class="btn-primary" [clrMenuPosition]="'bottom-right'">
  <clr-button>Create</clr-button>
  <clr-button>Favorite</clr-button>
  <clr-button [clrInMenu]="true">Assign</clr-button>
  <clr-button [clrInMenu]="true">Download</clr-button>
  <clr-button [clrInMenu]="true">Delete</clr-button>
</clr-button-group>
```
