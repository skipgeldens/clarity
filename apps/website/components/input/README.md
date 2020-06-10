---
title: Overview
---

# Inputs

![HTML5](assets/images/bugs/badge_html5.svg 'HTML5')![CSS3](assets/images/bugs/badge_css3.svg 'CSS3')![Angular](assets/images/bugs/badge_ng.svg 'Angular')

- [Examples & Code](/documentation/input#top)
- [Design Guidelines](/documentation/input#guidelines)

##### Inputs are the most commonly used form control, and Clarity supports both a CSS only and Angular component. You may wish to review the general [forms](/documentation/forms) documentation about form controls.

## Angular Input Component

If you are using Angular, the recommended approach is to always use the `ClrInput` directive on your inputs to help manage the form control. By using `ClrInput`, you'll automatically be able to leverage built in validation, helper text, and layout features in forms.

#### Basic input

This is the most basic way to create an input inside of a form. This is only if you don't have a need for a label or validation. You need to add `clrInput` to your input to wire up the directive. Notice, it is not necessary to add `type="text"` as it is handled automatically. It will only work if you have the control wired up with either a template driven form or reactive form.

```html
<form clrForm>
  <input clrInput placeholder="My input" name="input" [(ngModel)]="input" />
</form>
```

#### Labels

For anything beyond a standalone input field, you'll need to wrap your input with the `ClrInputContainer` component. This is required to contain all of the logic and validation details for the individual input control.

Then you can add a `label` element and it will automatically get laid out correctly in the form.

My name

```html
<form clrForm>
  <clr-input-container>
    <label>My name</label>
    <input clrInput placeholder="Fill me in, scotty!" name="name" [(ngModel)]="name" />
  </clr-input-container>
</form>
```

#### Helper and error messages

The input form control wires up with the validations placed on an input, such as `required` or even custom built validators in Angular. Under the hood, it looks at the `NgControl` values to determine the control validity, and display the helper text or error message accordingly.

Note: the validation only displays an error after the user has left focus on an input. This is for better UX where the user doesn't see an error while they are still typing.

Full name

Helper text

```html
<form clrForm>
  <clr-input-container>
    <label>Full name</label>
    <input placeholder="Full name" clrInput [(ngModel)]="exampleThree" name="name" required />
    <clr-control-helper>Helper text</clr-control-helper>
    <clr-control-error>This field is required!</clr-control-error>
  </clr-input-container>
</form>
```

## CSS Input Component

Inputs can be used without Angular, but without some of the automatic interactivity. If you intend to create your own components, here are the basic features you'll need to build out.

#### Basic input

It is possible to display the input by simply having the input as a standalone element not inside of a form. This may be useful in simple cases where you don't need a full form and just an inline input.

```html
<form class="clr-form">
  <input type="text" id="basic" placeholder="Enter value here" class="clr-input" />
</form>
```

#### Full input display

Each form control has a `.clr-form-control` wrapper, as well as a specific DOM structure necessary to layout the form control as desired. This works with all layout options as well without needing to change the DOM structure in any way.

Basic input

Helper Text

```html
<form class="clr-form">
  <div class="clr-form-control">
    <label for="basic" class="clr-control-label">Basic input</label>
    <div class="clr-control-container">
      <div class="clr-input-wrapper">
        <input type="text" id="basic" placeholder="Enter value here" class="clr-input" />
        <clr-icon class="clr-validate-icon" shape="exclamation-circle"></clr-icon>
      </div>
      <span class="clr-subtext">Helper Text</span>
    </div>
  </div>
</form>
```

#### Error state

To signify an error state, you need to add the `.clr-error` class to the `.clr-control-container` element. This will show the `.clr-validate-icon` and turn the `.clr-subtext` message to red. If you have helper text that needs to change to error content, you'll have to handle the hiding and showing of that content inside of the `.clr-subtext` element.

Label

Helper Text

```html
<form class="clr-form">
  <div class="clr-form-control">
    <label for="example" class="clr-control-label">Label</label>
    <div class="clr-control-container clr-error">
      <div class="clr-input-wrapper">
        <input type="text" id="example" placeholder="Example Input" class="clr-input" />
        <clr-icon class="clr-validate-icon" shape="exclamation-circle"></clr-icon>
      </div>
      <span class="clr-subtext">Error message</span>
    </div>
  </div>
</form>
```

### Design Guidelines

The UX design guidelines documentation is currently a work in progress, and will be updated when they are ready.

## Accessibility

For applications that use the `ClrInput` directive and the associated `ClrInputContainer` component there is built in support that adds accessible behavior to the control and its form. This behavior includes:

1.  Programmatically associating the correct label `for` attribute with the `id` of the input
2.  Automatic wiring up of the `aria-describedby` behavior with associated `clr-control-error` elements
3.  An `aria-live` region that can notify screen readers about changes in the control error state
4.  Adds the label to a general form summary for screen readers when the control is in an error state after a form submit
