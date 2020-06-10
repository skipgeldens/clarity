---
title: Overview
---

# Select

![HTML5](assets/images/bugs/badge_html5.svg 'HTML5')![CSS3](assets/images/bugs/badge_css3.svg 'CSS3')

- [Examples & Code](/documentation/select#top)
- [Design Guidelines](/documentation/select#guidelines)

##### With a select box, users can select one item from a list of values. The selected item is visible when the select box is closed.

## Angular Select Component

If you are using Angular, the recommended approach is to always use the `ClrSelect` directive on your selects to help manage the form control. By using `ClrSelect`, you'll automatically be able to leverage built in validation, helper text, and layout features in forms.

#### Basic select

This is the standard way to define a select box inside of a form, without the use of a label or validation. You need to add `clrSelect` to your select to wire up the directive.

OneTwoThree

```html
<select clrSelect name="options" [(ngModel)]="options">
  <option value="one">One</option>
  <option value="two">Two</option>
  <option value="three">Three</option>
</select>
```

#### Labels

For anything beyond a standalone select control, you'll need to wrap your select with the `ClrSelectContainer` component. This is required to contain all of the logic and validation details for the individual select control.

Then you can add a `label` element and it will automatically get laid out correctly in the form.

I've got some options

OneTwoThree

```html
<clr-select-container>
  <label>I've got some options</label>
  <select clrSelect name="options" [(ngModel)]="options">
    <option value="one">One</option>
    <option value="two">Two</option>
    <option value="three">Three</option>
  </select>
</clr-select-container>
```

#### Helper and error messages

The select form control wires up with the validations placed on an select, such as `required` or even custom built validators in Angular. Under the hood, it looks at the `NgControl` values to determine the control validity, and display the helper text or error message accordingly.

Note: the validation in this example only displays an error after you focus and leave focus without selecting a value. The easiest way to do this is to highlight the text in this paragraph, and hit tab a few times to change the focus.

I've got some options

OneTwoThree

You have these choices

```html
<clr-select-container>
  <label>I've got some options</label>
  <select clrSelect name="options" [(ngModel)]="options" required>
    <option value="one">One</option>
    <option value="two">Two</option>
    <option value="three">Three</option>
  </select>
  <clr-control-helper>Helper text</clr-control-helper>
  <clr-control-error>This field is required!</clr-control-error>
</clr-select-container>
```

## CSS Select Component

Selects can be used without Angular, but without some of the automatic interactivity. If you intend to create your own components, here are the basic features you'll need to build out.

#### Basic select

This is the minimal markup needed to style the select control by wrapping it with the an element with the `clr-select-wrapper` class. Ensure you add the `clr-select` class to the select as well.

OneTwoThree

```html
<div class="clr-select-wrapper">
  <select id="select-basic" class="clr-select">
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
</div>
```

#### Full select display

Each form control has a `.clr-form-control` wrapper, as well as a specific DOM structure necessary to layout the form control as desired. This works with all layout options as well without needing to change the DOM structure in any way.

Basic select

OneTwoThree

Helper Text

```html
<div class="clr-form-control">
  <label for="select-full" class="clr-control-label">Basic select</label>
  <div class="clr-control-container">
    <div class="clr-select-wrapper">
      <select id="select-full" class="clr-select">
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
      <clr-icon class="clr-validate-icon" shape="exclamation-circle"></clr-icon>
    </div>
    <span class="clr-subtext">Helper Text</span>
  </div>
</div>
```

#### Error state

To signify an error state, you need to add the `.clr-error` class to the `.clr-control-container` element. This will show the `.clr-validate-icon` and turn the `.clr-subtext` message to red. If you have helper text that needs to change to error content, you'll have to handle the hiding and showing of that content inside of the `.clr-subtext` element.

Basic select

OneTwoThree

Error message

```html
<div class="clr-form-control">
  <label for="select-error" class="clr-control-label">Basic select</label>
  <div class="clr-control-container clr-error">
    <div class="clr-select-wrapper">
      <select id="select-error" class="clr-select">
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
      <clr-icon class="clr-validate-icon" shape="exclamation-circle"></clr-icon>
    </div>
    <span class="clr-subtext">Error message</span>
  </div>
</div>
```

### Usage

Use a select box for a list of items that a user does not need to see all the time.

A common strategy is to combine an input field with a select box so that a user can enter a value and qualify it with a menu item. For example, the user might enter a number in an input field and select the units from the select box.

Don’t confuse a select box with a [dropdown menu](/documentation/dropdowns). Select boxes are for setting options and work best in forms. Dropdowns are for presenting actions and most appropriate in a header.

#### Number of List Items

Typically, a select box contains between 3 and 12 items. For fewer than 3 items or to present choices that are always visible, consider a [radio button](/documentation/radios).

#### Label

A select box requires a brief introductory label that describes the items in the menu. Use sentence-style capitalization for both the label and the menu items.

## Accessibility

For applications that use the `ClrSelect` directive and the associated `ClrSelectContainer` component there is built in support that adds accessible behavior to the control and its form. This behavior includes:

1.  Programmatically associating the correct label `for` attribute with the `id` of the input
2.  Automatic wiring up of the `aria-describedby` behavior with associated `clr-control-error` elements
3.  An `aria-live` region that can notify screen readers about changes in the control error state
4.  Adds the label to a general form summary for screen readers when the control is in an error state after a form submit
