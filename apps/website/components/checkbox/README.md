---
title: Overview
---

With checkboxes, users can select one or more options from a list of options.

## Usage

Use a checkbox for yes or no choices, for example "Remember me" on the [login page](./login).

- Checkboxes are best for seven or fewer options
- For readability, keep the checkbox label to a single line

For on and off options, use a [toggle switch](./toggles).

<!-- [//]: # Types -->

<!-- [//]: # Anatomy -->

<!-- [//]: # Behavior -->

<!-- [//]: # Placement - Checkboxes are often use in forms see: vertical, horizontal and compact form elements. -->

<!-- [//]: # Content -->

##### With checkboxes, users can select multiple options in a list of options.

## Angular Checkbox Component

If you are using Angular, the recommended approach is to always use the `ClrCheckbox` directive on your checkbox buttons to help manage the form control. By using `ClrCheckbox`, you'll automatically be able to leverage built in validation, helper text, and layout features in forms.

### Basic checkbox button

It is possible to create a checkbox button without a label. However the checkbox will not take advantage of the accessability built into Clarity Forms. An example of the basic checkbox adds `clrCheckbox` to an input with the `type="checkbox"`. This will wire up the checkbox directive for use with the form.

```html
<input type="checkbox" clrCheckbox />
```

### Labels

**Labels are required to make Clarity form controls accessible.**

To enable the accessabiltiy behaviors, you'll need to wrap your checkboxes with the `ClrCheckboxWrapper` component when you include a label. This manages the label and display of the checkbox button for you.

Checkboxes without a label will not be accessible. So, while it it is possible to create a checkbox by just adding `clrCheckbox` it is not recommended. Notice, it is necessary to add `type="checkbox"`. The basic checkbox control needs to be nested inside both the `clr-checkbox-container` and the `clr-checkbox-wrapper` to enable all of the styles and accessabiltiy behaviors.

Option 1Option 2

```html
<clr-checkbox-container>
  <clr-checkbox-wrapper>
    <input type="checkbox" clrCheckbox value="option1" name="options" />
    <label>Option 1</label>
  </clr-checkbox-wrapper>
  <clr-checkbox-wrapper>
    <input type="checkbox" clrCheckbox value="option2" name="options" />
    <label>Option 2</label>
  </clr-checkbox-wrapper>
</clr-checkbox-container>
```

### Helper and error messages

To leverage helper and validation messages, you'll need to wrap all of the checkboxes inside of a `ClrCheckboxContainer` component. The checkbox button container tracks the the validations placed on a checkbox button, such as `required` or even custom built validators in Angular. Under the hood, it looks at the `NgControl` values to determine the control validity, and display the helper text or error message accordingly.

Note: the validation in this example only displays an error after you focus and leave focus without selecting a value. The easiest way to do this is to highlight the text in this paragraph, and hit tab a few times to change the focus.

Full checkbox example

Option 1Option 2

Helper text

```html
<clr-checkbox-container>
  <label>Full checkbox</label>
  <clr-checkbox-wrapper>
    <input type="checkbox" clrCheckbox name="options" required value="option1" [(ngModel)]="options.option1" />
    <label>Option 1</label>
  </clr-checkbox-wrapper>
  <clr-checkbox-wrapper>
    <input type="checkbox" clrCheckbox name="options" required value="option2" [(ngModel)]="options.option2" />
    <label>Option 2</label>
  </clr-checkbox-wrapper>
  <clr-control-helper>Helper text</clr-control-helper>
  <clr-control-error>This field is required!</clr-control-error>
</clr-checkbox-container>
```

### Inline checkboxes

Checkbox buttons can be placed inline by default by adding the `clrInline` directive to your checkbox container elements. The checkbox buttons will wrap if there is not enough space.

Inline checkbox example

Option 1Option 2

Helper text

```html
<clr-checkbox-container clrInline>
  <label>Inline checkbox example</label>
  <clr-checkbox-wrapper>
    <input type="checkbox" clrCheckbox name="options" required value="option1" [(ngModel)]="options.option1" />
    <label>Option 1</label>
  </clr-checkbox-wrapper>
  <clr-checkbox-wrapper>
    <input type="checkbox" clrCheckbox name="options" required value="option2" [(ngModel)]="options.option2" />
    <label>Option 2</label>
  </clr-checkbox-wrapper>
  <clr-control-helper>Helper text</clr-control-helper>
  <clr-control-error>This field is required!</clr-control-error>
</clr-checkbox-container>
```

#### Disabled checkboxes

A checkbox can be disabled by simply putting the `disabled` attribute on the checkbox input. This does require the checkbox to be inside of a checkbox container. Also, for groups of checkboxes you have to put the disabled attribute on the last checkbox and cannot disable individual ones, as Angular doesn't have support to disable individual checkboxes in a group.

Disabled checkbox example

Option 1Option 2

Helper text

```html
<clr-checkbox-container>
  <label>Disabled checkbox example</label>
  <clr-checkbox-wrapper>
    <input type="checkbox" clrCheckbox name="options" value="option1" [(ngModel)]="options.option1" disabled />
    <label>Option 1</label>
  </clr-checkbox-wrapper>
  <clr-checkbox-wrapper>
    <input type="checkbox" clrCheckbox name="options" value="option2" [(ngModel)]="options.option2" disabled />
    <label>Option 2</label>
  </clr-checkbox-wrapper>
  <clr-control-helper>Helper text</clr-control-helper>
</clr-checkbox-container>
```

#### Indeterminate checkboxes

In cases where you want to display a checkbox as indeterminate, meaning it is neither selected or unselected. This can happen in cases where your checkboxes have a hierarchy (such as we have in our Tree View), and a child is selected but not the parent. You can control the indeterminate state by binding a boolean value like `[indeterminate]="true"`.

Indeterminate checkbox example

Option 1

Helper text

Reset indeterminate state

```html
<clr-checkbox-container>
  <label>Indeterminate checkbox example</label>
  <clr-checkbox-wrapper>
    <input
      type="checkbox"
      clrCheckbox
      name="test6"
      value="option1"
      (change)="indeterminateState = false"
      [(ngModel)]="options.option1"
      [indeterminate]="indeterminateState"
    />
    <label>Option 1</label>
  </clr-checkbox-wrapper>
  <clr-control-helper>Helper text</clr-control-helper>
</clr-checkbox-container>

<button class="btn btn-sm" (click)="indeterminateState = true">Reset indeterminate state</button>
```

## CSS Checkbox Component

Checkbox buttons can be used without Angular, but without some of the automatic interactivity. If you intend to create your own components, here are the basic features you'll need to build out.

### Basic checkbox button

This is the minimal markup needed to style the checkbox button control by wrapping it with the an element with the `clr-checkbox-wrapper` class. You must then put the input first, then the label like you see below (the CSS selectors are specific about this ordering). You'll want to tie the input and label together by providing an id for the label to connect. Ensure you add the `clr-checkbox` class to the checkbox button as well.

My Choice

```html
<div class="clr-form-control">
  <div class="clr-control-container ">
    <div class="clr-checkbox-wrapper">
      <input clrcheckbox="" name="test2" type="checkbox" value="option1" id="clr-form-control-1" />
      <label class="clr-control-label" for="clr-form-control-1">My Choice</label>
    </div>
  </div>
</div>
```

### Full input display

Each form control has a `.clr-form-control` wrapper, as well as a specific DOM structure necessary to layout the form control as desired. This works with all layout options as well without needing to change the DOM structure in any way.

Full checkbox example

option 1

option 2

option 3

Helper Text

```html
<div class="clr-form-control">
  <label class="clr-control-label">Full checkbox</label>
  <div class="clr-control-container">
    <div class="clr-checkbox-wrapper">
      <input type="checkbox" id="vertical-checkbox1" name="checkbox-full" value="option1" class="clr-checkbox" />
      <label for="vertical-checkbox1" class="clr-control-label">option 1</label>
    </div>
    <div class="clr-checkbox-wrapper">
      <input type="checkbox" id="vertical-checkbox2" name="checkbox-full" value="option2" class="clr-checkbox" />
      <label for="vertical-checkbox2" class="clr-control-label">option 2</label>
    </div>
    <div class="clr-checkbox-wrapper">
      <input type="checkbox" id="vertical-checkbox3" name="checkbox-full" value="option3" class="clr-checkbox" />
      <label for="vertical-checkbox3" class="clr-control-label">option 3</label>
    </div>
    <div class="clr-subtext-wrapper">
      <clr-icon class="clr-validate-icon" shape="exclamation-circle"></clr-icon>
      <span class="clr-subtext">Helper Text</span>
    </div>
  </div>
</div>
```

#### Error state

To signify an error state, you need to add the `.clr-error` class to the `.clr-control-container` element. This will show the `.clr-validate-icon` and turn the `.clr-subtext` message to red. If you have helper text that needs to change to error content, you'll have to handle the hiding and showing of that content inside of the `.clr-subtext` element.

Error checkbox

option 1

option 2

option 3

Error message

```html
<div class="clr-form-control">
  <label class="clr-control-label">Basic checkbox</label>
  <div class="clr-control-container clr-error">
    <div class="clr-checkbox-wrapper">
      <input type="checkbox" id="vertical-checkbox1" name="checkbox-error" value="option1" class="clr-checkbox" />
      <label for="vertical-checkbox1" class="clr-control-label">option 1</label>
    </div>
    <div class="clr-checkbox-wrapper">
      <input type="checkbox" id="vertical-checkbox2" name="checkbox-error" value="option2" class="clr-checkbox" />
      <label for="vertical-checkbox2" class="clr-control-label">option 2</label>
    </div>
    <div class="clr-checkbox-wrapper">
      <input type="checkbox" id="vertical-checkbox3" name="checkbox-error" value="option3" class="clr-checkbox" />
      <label for="vertical-checkbox3" class="clr-control-label">option 3</label>
    </div>
    <div class="clr-subtext-wrapper">
      <clr-icon class="clr-validate-icon" shape="exclamation-circle"></clr-icon>
      <span class="clr-subtext">Error message</span>
    </div>
  </div>
</div>
```

### Inline checkbox

Checkbox buttons can be placed inline by default by adding the `clr-control-inline` directive to your checkbox container. The checkbox buttons will wrap if there is not enough space.

The subtext content, the icon and subtext messages, also must be wrapped in a `clr-subtext-wrapper` element so it can properly layout in all layout variations. If you omit this, the validation icon and text may appear in the wrong place.

Inline checkbox example

option 1

option 2

option 3

Helper text

```html
<div class="clr-form-control">
  <label class="clr-control-label">Inline checkbox example</label>
  <div class="clr-control-container clr-control-inline">
    <div class="clr-checkbox-wrapper">
      <input type="checkbox" id="vertical-checkbox1" name="checkbox-full" value="option1" class="clr-checkbox" />
      <label for="vertical-checkbox1" class="clr-control-label">option 1</label>
    </div>
    <div class="clr-checkbox-wrapper">
      <input type="checkbox" id="vertical-checkbox2" name="checkbox-full" value="option2" class="clr-checkbox" />
      <label for="vertical-checkbox2" class="clr-control-label">option 2</label>
    </div>
    <div class="clr-checkbox-wrapper">
      <input type="checkbox" id="vertical-checkbox3" name="checkbox-full" value="option3" class="clr-checkbox" />
      <label for="vertical-checkbox3" class="clr-control-label">option 3</label>
    </div>
    <div class="clr-subtext-wrapper">
      <clr-icon class="clr-validate-icon" shape="exclamation-circle"></clr-icon>
      <span class="clr-subtext">Helper Text</span>
    </div>
  </div>
</div>
```

### Disabled checkbox

In order to disable buttons, you'll add the `disabled` attribute on the checkbox and putting the `clr-form-control-disabled` class onto the form control wrapper. This helps setup the correct styling for the labels and other aspects of the form control when it is disabled.

Disabled checkbox example

option 1

option 2

option 3

Helper text

```html
<div class="clr-form-control clr-form-control-disabled">
  <label class="clr-control-label">Disabled checkbox example</label>
  <div class="clr-control-container">
    <div class="clr-checkbox-wrapper">
      <input type="checkbox" id="checkbox10" name="checkbox-disabled" value="option1" class="clr-checkbox" disabled />
      <label for="checkbox10" class="clr-control-label">option 1</label>
    </div>
    <div class="clr-checkbox-wrapper">
      <input type="checkbox" id="checkbox11" name="checkbox-disabled" value="option2" class="clr-checkbox" disabled />
      <label for="checkbox11" class="clr-control-label">option 2</label>
    </div>
    <div class="clr-checkbox-wrapper">
      <input type="checkbox" id="checkbox12" name="checkbox-disabled" value="option3" class="clr-checkbox" disabled />
      <label for="checkbox12" class="clr-control-label">option 3</label>
    </div>
    <div class="clr-subtext-wrapper">
      <clr-icon class="clr-validate-icon" shape="exclamation-circle"></clr-icon>
      <span class="clr-subtext">Helper text</span>
    </div>
  </div>
</div>
```

## Usage

Use a checkbox for yes or no choices, for example "Remember me" on the [login page](/documentation/login). For on and off options, use a [toggle switch](/documentation/toggle-switches).

- Checkboxes are best for seven or fewer options.
- For readability, keep the checkbox label to a single line.

## Accessibility

For applications that use the `ClrCheckbox` directive and the associated `ClrCheckboxContainer` and `ClrCheckboxWrapper` components there is built in support that adds accessible behavior to the control and its form. This behavior includes:

1.  Programmatically associating the correct label `for` attribute with the `id` of the input
2.  Automatic wiring up of the `aria-describedby` behavior with associated `clr-control-error` elements
3.  An `aria-live` region that can notify screen readers about changes in the control error state
4.  Adds the label to a general form summary for screen readers when the control is in an error state after a form submit
