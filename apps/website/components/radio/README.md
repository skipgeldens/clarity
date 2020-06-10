---
title: Overview
---

# Radio Buttons

![HTML5](assets/images/bugs/badge_html5.svg 'HTML5')![CSS3](assets/images/bugs/badge_css3.svg 'CSS3')

- [Examples & Code](/documentation/radio#top)
- [Design Guidelines](/documentation/radio#guidelines)

##### Using radio buttons, users can select one option from a group of options.

## Angular Radio Component

If you are using Angular, the recommended approach is to always use the `ClrRadio` directive on your radio buttons to help manage the form control. By using `ClrRadio`, you'll automatically be able to leverage built in validation, helper text, and layout features in forms.

#### Basic radio button

While it is possible to create a radio button without a label, the cases are rare. However, it is possible by just adding `clrRadio` to your radio button to wire up the directive. Notice, it is necessary to add `type="radio"`.

```html
<input type="radio" clrRadio value="option1" />
```

#### Labels

For anything beyond a standalone radio button, you'll need to wrap your radios with the `ClrRadioWrapper` component when you include a label. This manages the label and display of the radio button for you.

Option 1Option 2

```html
<clr-radio-wrapper>
  <input type="radio" clrRadio value="option1" name="options" />
  <label>Option 1</label>
</clr-radio-wrapper>
<clr-radio-wrapper>
  <input type="radio" clrRadio value="option2" name="options" />
  <label>Option 2</label>
</clr-radio-wrapper>
```

#### Helper and error messages

To leverage helper and validation messages, you'll need to wrap all of the radios inside of a `ClrRadioContainer` component. The radio button container tracks the the validations placed on a radio button, such as `required` or even custom built validators in Angular. Under the hood, it looks at the `NgControl` values to determine the control validity, and display the helper text or error message accordingly.

Note: the validation in this example only displays an error after you focus and leave focus without selecting a value. The easiest way to do this is to highlight the text in this paragraph, and hit tab a few times to change the focus.

Full radio example

Option 1Option 2

Helper text

```html
<clr-radio-container>
  <label>Full radio</label>
  <clr-radio-wrapper>
    <input type="radio" clrRadio name="options" required value="option1" [(ngModel)]="options" />
    <label>Option 1</label>
  </clr-radio-wrapper>
  <clr-radio-wrapper>
    <input type="radio" clrRadio name="options" required value="option2" [(ngModel)]="options" />
    <label>Option 2</label>
  </clr-radio-wrapper>
  <clr-control-helper>Helper text</clr-control-helper>
  <clr-control-error>This field is required!</clr-control-error>
</clr-radio-container>
```

#### Inline radios

Radio buttons can be placed inline by default by adding the `clrInline` directive to your radio container elements. The radio buttons will wrap if there is not enough space.

Inline radio example

Option 1Option 2

Helper text

```html
<clr-radio-container clrInline>
  <label>Inline radio example</label>
  <clr-radio-wrapper>
    <input type="radio" clrRadio name="options" required value="option1" [(ngModel)]="options" />
    <label>Option 1</label>
  </clr-radio-wrapper>
  <clr-radio-wrapper>
    <input type="radio" clrRadio name="options" required value="option2" [(ngModel)]="options" />
    <label>Option 2</label>
  </clr-radio-wrapper>
  <clr-control-helper>Helper text</clr-control-helper>
  <clr-control-error>This field is required!</clr-control-error>
</clr-radio-container>
```

#### Disabled radio

A radio can be disabled by simply putting the `disabled` attribute on the radio input. This does require the radio to be inside of a radio container. Also, for groups of radios you have to put the disabled attribute on the last radio and cannot disable individual ones, as Angular doesn't have support to disable individual radios in a group.

Disabled radio example

Option 1Option 2

Helper text

```html
<clr-radio-container>
  <label>Disabled radio example</label>
  <clr-radio-wrapper>
    <input type="radio" clrRadio name="options" value="option1" [(ngModel)]="options" disabled />
    <label>Option 1</label>
  </clr-radio-wrapper>
  <clr-radio-wrapper>
    <input type="radio" clrRadio name="options" value="option2" [(ngModel)]="options" disabled />
    <label>Option 2</label>
  </clr-radio-wrapper>
  <clr-control-helper>Helper text</clr-control-helper>
</clr-radio-container>
```

## CSS Radio Component

Radio buttons can be used without Angular, but without some of the automatic interactivity. If you intend to create your own components, here are the basic features you'll need to build out.

#### Basic radio button

This is the minimal markup needed to style the radio button control by wrapping it with the an element with the `clr-radio-wrapper` class. You must then put the input first, then the label like you see below (the CSS selectors are specific about this ordering). You'll want to tie the input and label together by providing an id for the label to connect. Ensure you add the `clr-radio` class to the radio button as well.

My choice

```html
<div class="clr-radio-wrapper">
  <input type="radio" id="radio1" name="radio-basic" value="option1" class="clr-radio" />
  <label for="radio1">My choice</label>
</div>
```

#### Full input display

Each form control has a `.clr-form-control` wrapper, as well as a specific DOM structure necessary to layout the form control as desired. This works with all layout options as well without needing to change the DOM structure in any way.

Full radio example

option 1

option 2

option 3

Helper Text

```html
<div class="clr-form-control">
  <label class="clr-control-label">Full radio</label>
  <div class="clr-control-container">
    <div class="clr-radio-wrapper">
      <input type="radio" id="vertical-radio1" name="radio-full" value="option1" class="clr-radio" />
      <label for="vertical-radio1" class="clr-control-label">option 1</label>
    </div>
    <div class="clr-radio-wrapper">
      <input type="radio" id="vertical-radio2" name="radio-full" value="option2" class="clr-radio" />
      <label for="vertical-radio2" class="clr-control-label">option 2</label>
    </div>
    <div class="clr-radio-wrapper">
      <input type="radio" id="vertical-radio3" name="radio-full" value="option3" class="clr-radio" />
      <label for="vertical-radio3" class="clr-control-label">option 3</label>
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

Error radio

option 1

option 2

option 3

Error message

```html
<div class="clr-form-control">
  <label class="clr-control-label">Basic radio</label>
  <div class="clr-control-container clr-error">
    <div class="clr-radio-wrapper">
      <input type="radio" id="vertical-radio1" name="radio-error" value="option1" class="clr-radio" />
      <label for="vertical-radio1" class="clr-control-label">option 1</label>
    </div>
    <div class="clr-radio-wrapper">
      <input type="radio" id="vertical-radio2" name="radio-error" value="option2" class="clr-radio" />
      <label for="vertical-radio2" class="clr-control-label">option 2</label>
    </div>
    <div class="clr-radio-wrapper">
      <input type="radio" id="vertical-radio3" name="radio-error" value="option3" class="clr-radio" />
      <label for="vertical-radio3" class="clr-control-label">option 3</label>
    </div>
    <div class="clr-subtext-wrapper">
      <clr-icon class="clr-validate-icon" shape="exclamation-circle"></clr-icon>
      <span class="clr-subtext">Error message</span>
    </div>
  </div>
</div>
```

#### Inline radio

Radio buttons can be placed inline by default by adding the `clr-control-inline` directive to your radio container. The radio buttons will wrap if there is not enough space.

The subtext content, the icon and subtext messages, also must be wrapped in a `clr-subtext-wrapper` element so it can properly layout in all layout variations. If you omit this, the validation icon and text may appear in the wrong place.

Inline radio example

option 1

option 2

option 3

Helper text

```html
<div class="clr-form-control">
  <label class="clr-control-label">Inline radio example</label>
  <div class="clr-control-container clr-control-inline">
    <div class="clr-radio-wrapper">
      <input type="radio" id="vertical-radio1" name="radio-full" value="option1" class="clr-radio" />
      <label for="vertical-radio1" class="clr-control-label">option 1</label>
    </div>
    <div class="clr-radio-wrapper">
      <input type="radio" id="vertical-radio2" name="radio-full" value="option2" class="clr-radio" />
      <label for="vertical-radio2" class="clr-control-label">option 2</label>
    </div>
    <div class="clr-radio-wrapper">
      <input type="radio" id="vertical-radio3" name="radio-full" value="option3" class="clr-radio" />
      <label for="vertical-radio3" class="clr-control-label">option 3</label>
    </div>
    <div class="clr-subtext-wrapper">
      <clr-icon class="clr-validate-icon" shape="exclamation-circle"></clr-icon>
      <span class="clr-subtext">Helper Text</span>
    </div>
  </div>
</div>
```

#### Disabled radios

In order to disable buttons, you'll add the `disabled` attribute on the radio and putting the `clr-form-control-disabled` class onto the form control wrapper. This helps setup the correct styling for the labels and other aspects of the form control when it is disabled.

Disabled radio example

option 1

option 2

option 3

Helper text

```html
<div class="clr-form-control clr-form-control-disabled">
  <label class="clr-control-label">Disabled radio example</label>
  <div class="clr-control-container">
    <div class="radio">
      <input type="radio" id="radio10" name="radio-error" value="option1" class="clr-radio" disabled />
      <label for="radio10" class="clr-control-label">option 1</label>
    </div>
    <div class="clr-radio-wrapper">
      <input type="radio" id="radio11" name="radio-error" value="option2" class="clr-radio" disabled />
      <label for="radio11" class="clr-control-label">option 2</label>
    </div>
    <div class="clr-radio-wrapper">
      <input type="radio" id="radio12" name="radio-error" value="option3" class="clr-radio" disabled />
      <label for="radio12" class="clr-control-label">option 3</label>
    </div>
    <div class="clr-subtext-wrapper">
      <clr-icon class="clr-validate-icon" shape="exclamation-circle"></clr-icon>
      <span class="clr-subtext">Helper text</span>
    </div>
  </div>
</div>
```

### Usage

Use radio buttons when you want users to see all available options and the list of options is small. For mutually exclusive options, consider a [checkbox](/documentation/checkboxes) or [toggle switch](/documentation/toggle-switches).

- Radio buttons are best for six or fewer options.
- For more than six options, consider a [select box](/documentation/select-boxes), which prompts users to disclose the options.

## Accessibility

For applications that use the `ClrRadio` directive and the associated `ClrRadioContainer` and `ClrRadioWrapper` components there is built in support that adds accessible behavior to the control and its form. This behavior includes:

1.  Programmatically associating the correct label `for` attribute with the `id` of the input
2.  Automatic wiring up of the `aria-describedby` behavior with associated `clr-control-error` elements
3.  An `aria-live` region that can notify screen readers about changes in the control error state
4.  Adds the label to a general form summary for screen readers when the control is in an error state after a form submit
