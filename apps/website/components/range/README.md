---
title: Overview
---

# Range Input

- [Design Guidelines](/documentation/range#top)
- [Code & Examples](/documentation/range#examples)

##### The HTML5 range input element is used when a user can choose between a min and a max value but the precise value chosed is not considered important.

### Design Guidelines

The range input control allows the user to chose a value when they don’t care (or know) what the specific number value chosen is. This is an imprecise input control that should only be used when the exact value is not important for the user to know. Range controls work well when the users is more concerned with percent sidtance between the min and the max.

### Code & Examples

The Range input uses standard HTML5 attributes and can be used with Clarity forms.

Progress can be shown as a value of the percentage of the range with the `clrRangeHasProgress` input.

Attribute

Value / Type

Default

Description

**min**

Type: string that converts to a floating point number

Default: 0

Type: string that converts to a floating point number

0

Sets the minimum value of the range.

**max**

Type: number

Default: 100

Type: number

100

Sets the minimum value of the range.

**step**

Type: number

Default: 100

Type: number

1

Specifies the granularity that the value must adhere to.

**value**

Type: number

Default: the value of the min attribute

Type: number

Default: the value of the min attribute

The string representation of the selected number.

**\[clrRangeHasProgress\]**

Type: boolean

Default: false

Type: boolean

Default: false

When true, shows the percentage of the range below the current value as a colored line.

#### Basic

```html
<form clrForm>
  <clr-range-container>
    <input type="range" clrRange name="two" [(ngModel)]="input.one" />
  </clr-range-container>
</form>
```

#### Full Example

Full example

Helper text

```html
<form clrForm>
  <clr-range-container [clrRangeHasProgress]="true">
    <label>Full example</label>
    <input type="range" clrRange [(ngModel)]="input.two" name="three" />
    <clr-control-helper>Helper text</clr-control-helper>
  </clr-range-container>
</form>
```

#### Disabled

Disabled

Helper text

```html
<form clrForm>
  <clr-range-container [clrRangeHasProgress]="true">
    <label>Disabled</label>
    <input type="range" clrRange [(ngModel)]="input.three" name="four" [disabled]="disabled" />
    <clr-control-helper>Helper text</clr-control-helper>
  </clr-range-container>
</form>
```

#### Value Changes

Applications may need to be aware of the current slider value. They can use the standard Angular `(change)` output to handle changes to the slider value.

Value change example

Helper text

- Tab1
- Tab2

```html
<form clrForm>
  <clr-range-container [clrRangeHasProgress]="true">
    <label>Value change example</label>
    <input type="range" clrRange [(ngModel)]="input.two" name="three" (change)="rangeChange($event)" />
    <clr-control-helper>Helper text</clr-control-helper>
  </clr-range-container>
</form>
```
