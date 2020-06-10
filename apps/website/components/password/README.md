---
title: Overview
---

# Password

![HTML5](assets/images/bugs/badge_html5.svg 'HTML5')![CSS3](assets/images/bugs/badge_css3.svg 'CSS3')![Angular](assets/images/bugs/badge_ng.svg 'Angular')

- [Examples & Code](/documentation/password#top)
- [Design Guidelines](/documentation/password#guidelines)

##### Password fields are a specialized input field with the ability to toggle between the masked field or to view the password in plain text. Clarity supports both a CSS only and Angular component. You may wish to review the general [forms](/documentation/forms) documentation about form controls.

## Angular Password Component

If you are using Angular, the recommended approach is to always use the `ClrPassword` directive on your inputs to help manage the form control. By using `ClrPassword`, you'll automatically be able to leverage built in validation, helper text, and layout features in forms.

The traditional HTML password input only shows the password field format, where the text is hidden from the user and shows dots in places of characters for security. This component also provides a toggle icon to allow users to view the text they've typed into the field, which has become a common design pattern for usability. If you don't need or want this feature, then you may prefer to use the CSS version described below.

#### Basic password

This is the default way to define a password field if you don't have a need for a label or validation. You need to add `clrPassword` to your input to wire up the directive. Notice, it is not necessary to add `type="password"` as it is handled automatically. It will only work if you have the control wired up with either a template driven form or reactive form. You must wrap the input inside the `ClrPasswordContainer` element.

Show

```html
<form clrForm>
  <clr-password-container>
    <input clrPassword placeholder="Password" name="password" [(ngModel)]="exampleOne" />
  </clr-password-container>
</form>
```

#### Labels

Adding a label is simple, as you just add the label inside of the `ClrPasswordContainer` component. It will automatically get laid out correctly in the form.

Password

Show

```html
<form clrForm>
  <clr-password-container>
    <label>Password</label>
    <input clrPassword placeholder="Password please!" name="password" [(ngModel)]="exampleTwo" />
  </clr-password-container>
</form>
```

#### Helper and error messages

The password form control wires up with the validations placed on an password control, such as `required` or even custom built validators in Angular. Under the hood, it looks at the `NgControl` values to determine the control validity, and display the helper text or error message accordingly.

Note: the validation only displays an error after the user has left focus on an input. This is for better UX where the user doesn't see an error while they are still typing.

Password

Show

Must contain at least 8 characters with at least one of them a special character like !@#\$%^&\*)

```html
<form clrForm>
  <clr-password-container>
    <label>Password</label>
    <input placeholder="Password" clrPassword [(ngModel)]="exampleThree" name="password" required minlength="10" />
    <clr-control-helper
      >Must contain at least 8 characters with at least one of them a special character like
      !@#$%^&*)</clr-control-helper
    >
    <clr-control-error *clrIfError="'required'">This field is required!</clr-control-error>
    <clr-control-error *clrIfError="'minlength'">It must be at least 8 characters!</clr-control-error>
  </clr-password-container>
</form>
```

## CSS Password Component

Password inputs can be used without Angular, but without some of the automatic interactivity. If you intend to create your own components, here are the basic features you'll need to build out.

#### Basic password

It is possible to display the password input by simply having the input as a standalone element not inside of a form. This may be useful in simple cases where you don't need a full form and just an inline input.

```html
<form class="clr-form">
  <input type="password" id="basic" placeholder="Password please!" class="clr-input" />
</form>
```

#### Full password display

Each form control has a `.clr-form-control` wrapper, as well as a specific DOM structure necessary to layout the form control as desired. This works with all layout options as well without needing to change the DOM structure in any way.

Full password

Helper Text

```html
<form class="clr-form">
  <div class="clr-form-control">
    <label for="basic" class="clr-control-label">Password</label>
    <div class="clr-control-container">
      <div class="clr-input-wrapper">
        <input type="password" id="basic" placeholder="Password please!" class="clr-input" />
        <clr-icon class="clr-validate-icon" shape="exclamation-circle"></clr-icon>
      </div>
      <span class="clr-subtext">Helper Text</span>
    </div>
  </div>
</form>
```

#### Error state

To signify an error state, you need to add the `.clr-error` class to the `.clr-control-container` element. This will show the `.clr-validate-icon` and turn the `.clr-subtext` message to red. If you have helper text that needs to change to error content, you'll have to handle the hiding and showing of that content inside of the `.clr-subtext` element.

Password

Helper Text

```html
<form class="clr-form">
  <div class="clr-form-control">
    <label for="example" class="clr-control-label">Password</label>
    <div class="clr-control-container">
      <div class="clr-input-wrapper">
        <input type="password" id="example" placeholder="Password please!" class="clr-input" />
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

For applications that use the `ClrPassword` directive and the associated `ClrPasswordContainer` component there is built in support that adds accessible behavior to the control and its form. This behavior includes:

1.  Programmatically associating the correct label `for` attribute with the `id` of the input
2.  Automatic wiring up of the `aria-describedby` behavior with associated `clr-control-error` elements
3.  An `aria-live` region that can notify screen readers about changes in the control error state
4.  Adds the label to a general form summary for screen readers when the control is in an error state after a form submit
