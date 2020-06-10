---
title: Overview
---

# Toggle Switches

![HTML5](assets/images/bugs/badge_html5.svg 'HTML5')![CSS3](assets/images/bugs/badge_css3.svg 'CSS3')

- [Examples & Code](/documentation/toggle-switches#top)
- [Design Guidelines](/documentation/toggle-switches#guidelines)

##### With toggle switches, users can select the on or off state of an option.

## Angular Toggle Switch Component

If you are using Angular, the recommended approach is to always use the `ClrToggle` directive on your toggle switches to help manage the form control. By using `ClrToggle`, you'll automatically be able to leverage built in validation, helper text, and layout features in forms.

#### Basic checkbox button

While it is possible to create a toggle switch without a label, the cases are rare. However, it is possible by just adding `clrToggle` to your checkbox button to wire up the directive. Notice, it is necessary to add `type="checkbox"`.

```html
<input type="checkbox" clrToggle />
```

#### Labels

For anything beyond a standalone checkbox button, you'll need to wrap your toggle switches with the `ClrToggleWrapper` component when you include a label. This manages the label and display of the toggle switch for you.

Option 1Option 2

```html
<clr-toggle-container>
  <clr-toggle-wrapper>
    <input type="checkbox" clrToggle value="option1" name="options" />
    <label>Option 1</label>
  </clr-toggle-wrapper>
  <clr-toggle-wrapper>
    <input type="checkbox" clrToggle value="option2" name="options" />
    <label>Option 2</label>
  </clr-toggle-wrapper>
</clr-toggle-container>
```

#### Helper and error messages

To leverage helper and validation messages, you'll need to wrap all of the toggle switches inside of a `ClrToggleContainer` component. The toggle switch container tracks the the validations placed on a toggle switch, such as `required` or even custom built validators in Angular. Under the hood, it looks at the `NgControl` values to determine the control validity, and display the helper text or error message accordingly.

Note: the validation in this example only displays an error after you focus and leave focus without selecting a value. The easiest way to do this is to highlight the text in this paragraph, and hit tab a few times to change the focus.

Full toggle switch example

Option 1Option 2

Helper text

```html
<clr-toggle-container>
  <label>Full toggle switch</label>
  <clr-toggle-wrapper>
    <input type="checkbox" clrToggle name="options" required value="option1" [(ngModel)]="options" />
    <label>Option 1</label>
  </clr-toggle-wrapper>
  <clr-toggle-wrapper>
    <input type="checkbox" clrToggle name="options" required value="option2" [(ngModel)]="options" />
    <label>Option 2</label>
  </clr-toggle-wrapper>
  <clr-control-helper>Helper text</clr-control-helper>
  <clr-control-error>This field is required!</clr-control-error>
</clr-toggle-container>
```

#### Inline toggle switches

Toggle switches can be placed inline by default by adding the `clrInline` directive to your toggle switch container elements. The toggle switches will wrap if there is not enough space.

Inline toggle switch example

Option 1Option 2

Helper text

```html
<clr-toggle-container clrInline>
  <label>Inline toggle switch example</label>
  <clr-toggle-wrapper>
    <input type="checkbox" clrToggle name="options" required value="option1" [(ngModel)]="options" />
    <label>Option 1</label>
  </clr-toggle-wrapper>
  <clr-toggle-wrapper>
    <input type="checkbox" clrToggle name="options" required value="option2" [(ngModel)]="options" />
    <label>Option 2</label>
  </clr-toggle-wrapper>
  <clr-control-helper>Helper text</clr-control-helper>
  <clr-control-error>This field is required!</clr-control-error>
</clr-toggle-container>
```

#### Disabled toggle switches

A toggle switch can be disabled by simply putting the `disabled` attribute on the checkbox input. This does require the toggle switch to be inside of a toggle switch container. Also, for groups of toggle switches you have to put the disabled attribute on the last checkbox input and cannot disable individual ones, as Angular doesn't have support to disable individual checkboxes in a group.

Disabled toggle switch example

Option 1Option 2

Helper text

```html
<clr-toggle-container>
  <label>Disabled toggle switch example</label>
  <clr-checkbox-wrapper>
    <input type="checkbox" clrToggle name="options" value="option1" [(ngModel)]="options" disabled />
    <label>Option 1</label>
  </clr-checkbox-wrapper>
  <clr-checkbox-wrapper>
    <input type="checkbox" clrToggle name="options" value="option2" [(ngModel)]="options" disabled />
    <label>Option 2</label>
  </clr-checkbox-wrapper>
  <clr-control-helper>Helper text</clr-control-helper>
</clr-toggle-container>
```

## CSS Toggle Switch Component

Toggle switches can be used without Angular, but without some of the automatic interactivity. If you intend to create your own components, here are the basic features you'll need to build out.

#### Basic toggle switch button

This is the minimal markup needed to style the checkbox button control by wrapping it with the an element with the `clr-toggle-wrapper` class. You must then put the input first, then the label like you see below (the CSS selectors are specific about this ordering). You'll want to tie the input and label together by providing an id for the label to connect. Ensure you add the `clr-toggle` class to the checkbox input as well.

My choice

```html
<div class="clr-form-control">
  <div class="clr-control-container">
    <div class="clr-toggle-wrapper">
      <input type="checkbox" id="toggle1" name="toggle-basic" value="option1" class="clr-toggle" />
      <label for="toggle1">My choice</label>
    </div>
  </div>
</div>
```

#### Full input display

Each form control has a `.clr-form-control` wrapper, as well as a specific DOM structure necessary to layout the form control as desired. This works with all layout options as well without needing to change the DOM structure in any way.

Full toggle switch example

option 1

option 2

option 3

Helper Text

```html
<div class="clr-form-control">
  <label class="clr-control-label">Full toggle switch</label>
  <div class="clr-control-container">
    <div class="clr-toggle-wrapper">
      <input type="checkbox" id="toggle1" name="toggle-full" value="option1" class="clr-toggle" />
      <label for="toggle1" class="clr-control-label">option 1</label>
    </div>
    <div class="clr-toggle-wrapper">
      <input type="checkbox" id="toggle2" name="toggle-full" value="option2" class="clr-toggle" />
      <label for="toggle2" class="clr-control-label">option 2</label>
    </div>
    <div class="clr-toggle-wrapper">
      <input type="checkbox" id="toggle3" name="toggle-full" value="option3" class="clr-toggle" />
      <label for="toggle3" class="clr-control-label">option 3</label>
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
  <label class="clr-control-label">Basic toggle switch</label>
  <div class="clr-control-container clr-error">
    <div class="clr-toggle-wrapper">
      <input type="checkbox" id="toggle1" name="toggle-error" value="option1" class="clr-toggle" />
      <label for="toggle1" class="clr-control-label">option 1</label>
    </div>
    <div class="clr-toggle-wrapper">
      <input type="checkbox" id="toggle2" name="toggle-error" value="option2" class="clr-toggle" />
      <label for="toggle2" class="clr-control-label">option 2</label>
    </div>
    <div class="clr-toggle-wrapper">
      <input type="checkbox" id="toggle3" name="toggle-error" value="option3" class="clr-toggle" />
      <label for="toggle3" class="clr-control-label">option 3</label>
    </div>
    <div class="clr-subtext-wrapper">
      <clr-icon class="clr-validate-icon" shape="exclamation-circle"></clr-icon>
      <span class="clr-subtext">Error message</span>
    </div>
  </div>
</div>
```

#### Inline toggle switches

Toggle switches can be placed inline by default by adding the `clr-control-inline` directive to your checkbox container. The toggle switches will wrap if there is not enough space.

The subtext content, the icon and subtext messages, also must be wrapped in a `clr-subtext-wrapper` element so it can properly layout in all layout variations. If you omit this, the validation icon and text may appear in the wrong place.

Inline toggle switches example

option 1

option 2

option 3

Helper text

```html
<div class="clr-form-control">
  <label class="clr-control-label">Inline toggle switches example</label>
  <div class="clr-control-container clr-control-inline">
    <div class="clr-toggle-wrapper">
      <input type="checkbox" id="toggle1" name="toggle-full" value="option1" class="clr-toggle" />
      <label for="toggle1" class="clr-control-label">option 1</label>
    </div>
    <div class="clr-toggle-wrapper">
      <input type="checkbox" id="toggle2" name="toggle-full" value="option2" class="clr-toggle" />
      <label for="toggle2" class="clr-control-label">option 2</label>
    </div>
    <div class="clr-toggle-wrapper">
      <input type="checkbox" id="toggle3" name="toggle-full" value="option3" class="clr-toggle" />
      <label for="toggle3" class="clr-control-label">option 3</label>
    </div>
    <div class="clr-subtext-wrapper">
      <clr-icon class="clr-validate-icon" shape="exclamation-circle"></clr-icon>
      <span class="clr-subtext">Helper Text</span>
    </div>
  </div>
</div>
```

#### Disabled toggle switches

In order to disable toggle switches, you'll add the `disabled` attribute on the checkbox input and putting the `clr-form-control-disabled` class onto the form control wrapper. This helps setup the correct styling for the labels and other aspects of the form control when it is disabled.

Disabled toggle switches example

option 1

option 2

option 3

Helper text

```html
<div class="clr-form-control clr-form-control-disabled">
  <label class="clr-control-label">Disabled toggle switches example</label>
  <div class="clr-control-container">
    <div class="clr-toggle-wrapper">
      <input type="checkbox" id="toggle1" name="toggle-disabled" value="option1" class="clr-toggle" disabled />
      <label for="toggle1" class="clr-control-label">option 1</label>
    </div>
    <div class="clr-toggle-wrapper">
      <input type="checkbox" id="toggle2" name="toggle-disabled" value="option2" class="clr-toggle" disabled />
      <label for="toggle2" class="clr-control-label">option 2</label>
    </div>
    <div class="clr-toggle-wrapper">
      <input type="checkbox" id="toggle3" name="toggle-disabled" value="option3" class="clr-toggle" disabled />
      <label for="toggle3" class="clr-control-label">option 3</label>
    </div>
    <div class="clr-subtext-wrapper">
      <clr-icon class="clr-validate-icon" shape="exclamation-circle"></clr-icon>
      <span class="clr-subtext">Helper text</span>
    </div>
  </div>
</div>
```

### Usage

Use a toggle switch when you need the sole options of “on” and “off.”

Toggle switches take up less space than an “on/off” [radio button group](/documentation/radio) and communicate their intended purpose better than a [checkbox](/documentation/checkboxes) that toggles functionality.

#### Toggle States

Toggle switches should always be preceded with a visual label such as ON/OFF

#### Label

The label should clearly describe the setting. Although Clarity supports a toggle switch without a label, use this approach only if the purpose of the control is made clear elsewhere, for example, in a group label or section header.

## Accessibility

For applications that use the `ClrToggle` directive and the associated `ClrToggleContainer` and `ClrToggleWrapper` components there is built in support that adds accessible behavior to the control and its form. This behavior includes:

1.  Programmatically associating the correct label `for` attribute with the `id` of the input
2.  Automatic wiring up of the `aria-describedby` behavior with associated `clr-control-error` elements
3.  An `aria-live` region that can notify screen readers about changes in the control error state
4.  Adds the label to a general form summary for screen readers when the control is in an error state after a form submit
