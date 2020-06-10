---
title: API
toc: true
---

# API

### Code & Examples

Clarity defines three button styles:

- **Solid.** A solid background with light text. These buttons are prominent on the page.
- **Outline.** A transparent background with colored border and text. On hover, the button fills with color.
- **Flat.** Text in Action Blue, used to indicate an action.

#### Solid Buttons

<button class="btn btn-primary">Primary</button>
<button class="btn btn-success">Success</button>
<button class="btn btn-warning">Warning</button>
<button class="btn btn-danger">Danger</button>
<button class="btn btn-danger" disabled>Disabled</button>

```html
<button class="btn btn-primary">Primary</button>
<button class="btn btn-success">Success</button>
<button class="btn btn-warning">Warning</button>
<button class="btn btn-danger">Danger</button>
<button class="btn btn-danger" disabled>Disabled</button>
```

#### Outline Buttons

<button class="btn btn-outline">Regular</button>
<button class="btn btn-success-outline">Success-Outline</button>
<button class="btn btn-info-outline">Info</button>
<button class="btn btn-warning-outline">Warning</button>
<button class="btn btn-danger-outline">Danger</button>
<button class="btn btn-outline" disabled>Disabled</button>

```html
<button class="btn btn-outline">Regular</button>
<button class="btn btn-success-outline">Success-Outline</button>
<button class="btn btn-info-outline">Info</button>
<button class="btn btn-warning-outline">Warning</button>
<button class="btn btn-danger-outline">Danger</button>
<button class="btn btn-outline" disabled>Disabled</button>
```

#### Flat Buttons

<button class="btn btn-link">Regular</button>
<button class="btn btn-link" disabled>Disabled</button>
<button class="btn btn-sm btn-link">Regular</button>
<button class="btn btn-sm btn-link" disabled>Disabled</button>

```html
<button class="btn btn-link">Regular</button>
<button class="btn btn-link" disabled>Disabled</button>
<button class="btn btn-sm btn-link">Regular</button>
<button class="btn btn-sm btn-link" disabled>Disabled</button>
```

### Types

#### Primary Button

<button class="btn btn-primary">Primary</button>

```html
<button class="btn btn-primary">Primary</button>
```

#### Secondary Button

<button class="btn">Secondary</button>

```html
<button class="btn">Secondary</button>
```

#### Tertiary Button

<button class="btn btn-link">Tertiary</button>
<button class="btn btn-link" disabled>Disabled</button>

```html
<button class="btn btn-link">Tertiary</button> <button class="btn btn-link" disabled>Disabled</button>
```

### States

#### Info, Success and Danger Outline Buttons

<button class="btn btn-info-outline">Info</button>
<button class="btn btn-success-outline">Success</button>
<button class="btn btn-danger-outline">Danger</button>

#### Success and Danger Solid Buttons

<button class="btn btn-success">Success</button>
<button class="btn btn-danger">Danger</button>

```html
<button class="btn btn-info-outline">Info</button>
<button class="btn btn-success-outline">Success</button>
<button class="btn btn-danger-outline">Danger</button>

<button class="btn btn-success">Success</button>
<button class="btn btn-danger">Danger</button>
```

### Sizes

#### Normal

<button class="btn">Regular</button>
<button class="btn btn-primary">Primary</button>
<button class="btn btn-success">Success</button>
<button class="btn btn-info">Info</button>
<button class="btn btn-warning">Warning</button>
<button class="btn btn-danger">Danger</button>
<button class="btn" disabled>Disabled</button>

```html
<button class="btn">Regular</button>
<button class="btn btn-primary">Primary</button>
<button class="btn btn-success">Success</button>
<button class="btn btn-info">Info</button>
<button class="btn btn-warning">Warning</button>
<button class="btn btn-danger">Danger</button>
<button class="btn" disabled>Disabled</button>
```

#### Small

<button class="btn btn-sm">Regular</button>
<button class="btn btn-primary btn-sm">Primary</button>
<button class="btn btn-success btn-sm">Success</button>
<button class="btn btn-info btn-sm">Info</button>
<button class="btn btn-warning btn-sm">Warning</button>
<button class="btn btn-danger btn-sm">Danger</button>
<button class="btn btn-sm" disabled>Disabled</button>

```html
<button class="btn btn-sm">Regular</button>
<button class="btn btn-primary btn-sm">Primary</button>
<button class="btn btn-success btn-sm">Success</button>
<button class="btn btn-info btn-sm">Info</button>
<button class="btn btn-warning btn-sm">Warning</button>
<button class="btn btn-danger btn-sm">Danger</button>
<button class="btn btn-sm" disabled>Disabled</button>
```

#### Normal Flat Buttons

<button class="btn btn-link">Flat Regular</button>
<button class="btn btn-link" disabled>Flat Disabled</button>

```html
<button class="btn btn-link">Flat Regular</button> <button class="btn btn-link" disabled>Flat Disabled</button>
```

#### Small Flat Buttons

<button class="btn btn-link btn-sm">Flat Regular</button>
<button class="btn btn-link btn-sm" disabled>Flat Disabled</button>

```html
<button class="btn btn-link btn-sm">Flat Regular</button>
<button class="btn btn-link btn-sm" disabled>Flat Disabled</button>
```

#### Block

<button class="btn btn-primary btn-block">Primary</button>
<button class="btn btn-success btn-block">Success</button>

```html
<button class="btn btn-primary btn-block">Primary</button> <button class="btn btn-success btn-block">Success</button>
```

### Inverse

#### Inverse Button

<button class="btn btn-inverse">Inverse</button>
<button class="btn btn-inverse" disabled>Disabled Inverse</button>

```html
<button class="btn btn-inverse">Inverse</button> <button class="btn btn-inverse" disabled>Disabled Inverse</button>
```

### Icon Buttons

Use the `.btn-icon` class to create Icon Buttons. Make sure to set an appropriate aria-label that describes the action for screen readers.

<button type="button" class="btn btn-icon" aria-label="home">
    <clr-icon shape="home"></clr-icon>
</button>
<button type="button" class="btn btn-icon btn-primary" aria-label="settings">
    <clr-icon shape="cog"></clr-icon>
</button>
<button type="button" class="btn btn-icon btn-warning" aria-label="warning">
    <clr-icon shape="warning-standard"></clr-icon>
</button>
<button type="button" class="btn btn-icon btn-danger" aria-label="error">
    <clr-icon shape="error-standard"></clr-icon>
</button>
<button type="button" class="btn btn-icon btn-success" aria-label="done">
    <clr-icon shape="check"></clr-icon>
</button>
<button type="button" class="btn btn-icon" disabled aria-label="home">
    <clr-icon shape="home"></clr-icon>
</button>

```html
<button type="button" class="btn btn-icon" aria-label="home">
  <clr-icon shape="home"></clr-icon>
</button>
<button type="button" class="btn btn-icon btn-primary" aria-label="settings">
  <clr-icon shape="cog"></clr-icon>
</button>
<button type="button" class="btn btn-icon btn-warning" aria-label="warning">
  <clr-icon shape="warning-standard"></clr-icon>
</button>
<button type="button" class="btn btn-icon btn-danger" aria-label="error">
  <clr-icon shape="error-standard"></clr-icon>
</button>
<button type="button" class="btn btn-icon btn-success" aria-label="done">
  <clr-icon shape="check"></clr-icon>
</button>
<button type="button" class="btn btn-icon" disabled aria-label="home">
  <clr-icon shape="home"></clr-icon>
</button>
```

### Loading Buttons

Use the `clrLoading` directive to change the state of the spinner button. The directive can be set to one of the following values:

- `ClrLoadingState.DEFAULT`: the default state of the button.
- `ClrLoadingState.LOADING`: replaces the button text with a spinner.
- `ClrLoadingState.SUCCESS`: briefly shows a check mark, and automatically transition back to the `ClrLoadingState.DEFAULT` state.

ValidateSubmit

```html
<button [clrLoading]="validateBtnState" class="btn btn-info-outline" (click)="validateDemo()">Validate</button>
<button [clrLoading]="submitBtnState" type="submit" class="btn btn-success-outline" (click)="submitDemo()">
  Submit
</button>
```

```typescript
import { ClrLoadingState } from '@clr/angular';

export class ButtonLoadingDemo {
  validateBtnState: ClrLoadingState = ClrLoadingState.DEFAULT;
  submitBtnState: ClrLoadingState = ClrLoadingState.DEFAULT;

  validateDemo() {
    this.validateBtnState = ClrLoadingState.LOADING;
    //Validating Logic
    this.validateBtnState = ClrLoadingState.SUCCESS;
  }

  submitDemo() {
    this.submitBtnState = ClrLoadingState.LOADING;
    //Submit Logic
    this.submitBtnState = ClrLoadingState.DEFAULT;
  }
}
```
