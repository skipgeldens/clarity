---
title: Overview
---

# Datalist

- [Design Guidelines](/documentation/datalist#top)
- [Code & Examples](/documentation/datalist#examples)

##### The datalist element offers a flexible input when users need to filter and select from a large list of pre-defined options. Or, they need to input a custom value (not provided in the pre-defined list) for the input.

### Usage

Use a datalist when the user needs to choose from a list of items that is long enough for it to be filtered it before selection. Or, there are pre-defined options but the user needs the ability to input a custom value for their use case.

Use a datalist of you want to provide a standard set of options but also allow the user to enter a custom value that may not be pre-defined.

Do not confuse a datalist element with the select input. Datalist elements usually have more than 13 options that the user will need to filter or narrow down before making a choice. If there are 3-13 options, consider using the [select](/documentation/select) input.

### Auto-completion

Autocomplete is a familiar pattern for users of web technology. Searching, item suggestion and filtering are all common activities users encounter when interacting with web technology and content. The HTML5 element `datalist` natively supports autocomplete behavior on the web.

### Code & Examples

The HTML `datalist` element contains a list of pre-defined `option` elements that can be chosen for an input control value. Or, the user can type a different value into the input.

Natively, the `id` for a datailist provides the link to an input via the value given for the input's `list` attribute. Clarity handles this association by default; it generates and associates the datalist id with its corresponding input element via the `list` attribute on the input. The app markes the input for a datalist by using the `clrDatalistInput` directive on the input and default, unique values are generated for the component. If there is an application side need to declare s custom id for the datalist, this value will be used instead of the generated id.

### Validation

Datalists in template driven forms implement the same validation attributes that is described by native HTML form validation. Datalists in reactive forms allow apps to utilize the built in Angular validators (e.g `required` or `minlength`) or, they can add custom validator functions directly to the form control model in the component class.

As with other Clarity form controls, the datalist and its associated input belong inside a container. In this case it is named `clr-datalist-container`. Besides the required input with the `clrDatalistInput` directive and the datalist element this container tkaes three other optional elements. An optional element, `clr-control-helper` and the `clr-control-error` elements if there is validation for it.

### Basic Example

- basic.html
- basic.ts

```html
<form clrForm>
  <clr-datalist-container>
    <input clrDatalistInput [(ngModel)]="vertical" placeholder="No label" name="Option" />
    <datalist>
      <option *ngFor="let item of items" [value]="item"></option>
    </datalist>
  </clr-datalist-container>
</form>
```

### Template Validataion

Toggle Disabled

Enabled

Helper text

Submit

- template.html
- template.ts

```html
<form clrForm>
  <clr-datalist-container>
    <label>Template Datalist</label>
    <input minlength="4" name="Option" required clrDatalistInput [disabled]="disabled" [(ngModel)]="vertical" />
    <datalist>
      <option *ngFor="let item of items" [value]="item"></option>
    </datalist>
    <clr-control-helper>Helper text</clr-control-helper>
    <clr-control-error>There was an error</clr-control-error>
  </clr-datalist-container>
</form>
```

### Reactive Validation

Datalist - Reactive Form

Helper text

Submit

- reactive.html
- reactive.ts

```html
<form clrForm [formGroup]="model">
  <clr-datalist-container>
    <label>Reactive Datalist</label>
    <input clrDatalistInput placeholder="Option" name="Option" formControlName="item" />
    <datalist id="clr-custom-datalistid-1">
      <option *ngFor="let item of items" [value]="item + ' dl 1'"></option>
    </datalist>
  </clr-datalist-container>
  <button class="btn btn-primary" type="submit" [disabled]="model.invalid" (click)="submit()">
    Submit
  </button>
</form>
```
