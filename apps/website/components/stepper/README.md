---
title: Overview
---

# Stepper

- [Design Guidelines](/documentation/stepper#top)
- [Code & Examples](/documentation/stepper#examples)

##### A stepper structures multi-step processes into 2 or more expanding panels that break up complex workflows.

### Design Guidelines

Each panel representing each step will contain a title and a description that describes the entire workflow at a glance. After completing each step, collapsed panels then replace step descriptions with summaries describing what the user has accomplished.

#### Here is when you might want to use a stepper over normal forms or wizards:

- Complex and long work processes that may not fit in one viewport
- When the user would need to see the forms in-line with the rest of the page content
- If users need more detail than step titles to understand the process.
- If summaries of previous steps are helpful in informing next steps.

### Style

![](assets/images/documentation/stepper/stepper-style.png)

Steppers are composed of two sections, the stepper header and input section.

##### Stepper Header Section

The step title section has three states: completed, active, to-do. When a step is in its active state, its title section will be highlighted and its input section will be visible for users to interact. As users complete steps, the steps are marked with a green bar to the left, and a summary of user's input will replace the description.

##### Input Section

The input section has two elements: the form and the buttons. The form is used to collect input from users to finish the step. The buttons section will allow the users to proceed to the next step or finish the workflow. To go back to a previous step, users need to click on the step title of one of the previous steps. That step will become the active step with its input section visible for editing.

![](assets/images/documentation/stepper/stepper-dont.png)

###### Don't

Don't use ambiguous a non-action oriented description that does not specify what users are accomplishing.

![](assets/images/documentation/stepper/stepper-do.png)

###### Do

Use clear copy in the final call to action to best represent the action that users are taking in completing the stepper.

##### Final Call to Action

For the button label in the final call to action, we recommend that the copy also describe an immediate outcome of completing a stepper. If the workflow will require more time to process after the stepper is complete, then FINISH or other non-specific terminology may work better.

Though we recommend action-oriented button labels, there are use cases where labels like DONE work well. If the user is viewing read-only information, we recommend using labels like DONE.

### Code & Examples

The Stepper is an extension of the base Accordion component. The stepper requires use of the Angular Forms API. Using the Forms API allows the stepper to easily reflect the form state of each step in the stepper template.

Leverage our `*clrIfExpanded` structural directive on the `clr-stepper-panel` to only instantiate children when they are displayed.

#### Angular - Reactive Forms

Reset Stepper

Legal NameDescription goes here.

First Name

Last Name

next

Contact InformationDescription goes here.

PasswordDescription goes here.

```html
<form clrStepper [formGroup]="form" (ngSubmit)="submit()">
  <clr-stepper-panel formGroupName="name">
    <clr-step-title>Legal Name</clr-step-title>
    <clr-step-description>Description goes here.</clr-step-description>
    <clr-step-content *clrIfExpanded>
      <clr-input-container>
        <label>First Name</label>
        <input clrInput formControlName="first" />
        <clr-control-error *clrIfError="'required'">First Name Required</clr-control-error>
      </clr-input-container>

      <clr-input-container>
        <label>Last Name</label>
        <input clrInput formControlName="last" />
        <clr-control-error *clrIfError="'required'">Last Name Required</clr-control-error>
      </clr-input-container>

      <button clrStepButton="next">next</button>
    </clr-step-content>
  </clr-stepper-panel>

  <clr-stepper-panel formGroupName="contact">
    <clr-step-title>Contact Information</clr-step-title>
    <clr-step-description>...</clr-step-description>
    <clr-step-content *clrIfExpanded>
      ...
      <button clrStepButton="next">next</button>
    </clr-step-content>
  </clr-stepper-panel>

  <clr-stepper-panel formGroupName="password">
    <clr-step-title>Password</clr-step-title>
    <clr-step-description>...</clr-step-description>
    <clr-step-content *clrIfExpanded>
      ...
      <button clrStepButton="submit">submit</button>
    </clr-step-content>
  </clr-stepper-panel>
</form>
```

```typescript
import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'clr-angular-stepper-reactive-demo',
  templateUrl: './angular-stepper-reactive.demo.html',
})
export class AngularStepperReactiveDemo {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      name: this.formBuilder.group({
        first: ['Luke', Validators.required],
        last: ['Skywalker', Validators.required],
      }),
      contact: this.formBuilder.group({
        email: [],
        phone: [],
      }),
      password: this.formBuilder.group({
        password: [],
        confirm: [],
      }),
    });
  }

  submit() {
    console.log('reactive form submit', this.form.value);
  }
}
```

#### Angular - Template Forms

Legal NameDescription goes here.

First Name

Last Name

next

Contact InformationDescription goes here.

PasswordDescription goes here.

```html
<form clrStepper #contactForm="ngForm" (ngSubmit)="templateFormSubmit(contactForm.value)">
  <clr-stepper-panel ngModelGroup="name">
    <clr-step-title>Legal Name</clr-step-title>
    <clr-step-description>Description goes here.</clr-step-description>
    <clr-step-content>
      <clr-input-container>
        <label>First Name</label>
        <input clrInput [ngModel]="templateForm.name.firstName" name="firstName" required />
      </clr-input-container>

      <clr-input-container>
        <label>Last Name</label>
        <input clrInput [ngModel]="templateForm.name.lastName" name="lastName" required />
      </clr-input-container>

      <button clrStepButton="next">next</button>
    </clr-step-content>
  </clr-stepper-panel>

  <clr-stepper-panel ngModelGroup="contact">
    <clr-step-title>Contact Information</clr-step-title>
    <clr-step-description>...</clr-step-description>
    <clr-step-content>
      ...
      <button clrStepButton="next">next</button>
    </clr-step-content>
  </clr-stepper-panel>

  <clr-stepper-panel ngModelGroup="password">
    <clr-step-title>Password</clr-step-title>
    <clr-step-description>...</clr-step-description>
    <clr-step-content>
      ...
      <button clrStepButton="submit">submit</button>
    </clr-step-content>
  </clr-stepper-panel>
</form>
```

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'clr-angular-stepper-template-demo',
  templateUrl: './angular-stepper-template.demo.html',
})
export class AngularStepperTemplateDemo {
  templateForm = {
    name: {
      firstName: '',
      lastName: '',
    },
    contact: {
      email: '',
      phone: '',
    },
    password: {
      password: '',
      confirm: '',
    },
  };

  templateFormSubmit(templateFormValues: {}) {
    console.log('template form submit', templateFormValues);
  }
}
```

### Summary of Options

#### `[clrStepper]` directive

Input / Output

Values

Default

Effect

**\[clrInitialStep\]**

Type: String

Default: ''

String

''

Expects the name of the starting `formGroupName` or `ngModelGroup` to initialize stepper.

#### `<clr-stepper-panel>` component

Directive

Values

Default

Effect

**\[formGroupName | ngModelGroup\]**

Type: FormGroupName | NgModelGroup

Default: ''

FormGroupName | NgModelGroup

''

Expects a `formGroupName` or `ngModelGroup` directive to initialize the stepper panel.

#### `[clrStepButton]` directive

Input / Output

Values

Default

Effect

**\[clrStepButton\]**

Type: ClrStepButtonType | string

Default: ClrStepButtonType.Next | 'next'

ClrStepButtonType | string

ClrStepButtonType.Next | 'next'

Expects a string value of 'next' or 'submit' to determine if button should navigate to next step or submit form.

#### `*clrIfExpanded` directive

Input/Output

Values

Default

Effect

**\[(clrIfExpanded)\]**

Type: boolean

Default: false

Boolean

false

Two-way binding on the expanded/collapsed state of the node.
