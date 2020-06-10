---
title: Overview
---

# Wizards

- [Design Guidelines](/documentation/wizards#top)
- [Code & Examples](/documentation/wizards#examples)

##### Wizards provide a way to go through a sequence of steps that form an end to end workflow..

## Design Guidelines

Wizards are used to help users walk through a defined step-by-step process. Each step is in the sidebar on the left. As users complete steps, the steps are marked with a green bar to the left.

Wizards should have at least 2 steps. If your wizard exceeds 10 steps, consider combining similar steps.

Here is when you might want to use a wizard over just a normal form:

- if the user is **not familiar with the domain knowledge** needed to complete a process
- if the user needs to accomplish a goal that has **many steps** in it
- if steps must be completed in a **specific sequence**

### Style

Beginning of Modal Content

# New Pokèmon

1Basic Information

2Color

3Power

4Weakness

5Summary

## Basic Information

Name

Height (Feet)

0 ft. 1 ft. 2 ft. 3 ft. 4 ft.

Height (Inches)

0 in. 1 in. 2 in. 3 in. 4 in. 5 in. 6 in. 7 in. 8 in. 9 in. 10 in. 11 in.

Weight

Gender

Male Female

Your pokèmon will be Blue.

Your pokèmon has the power of boundless optimism.

Your pokèmon is afraid of the dark.

Your pokèmon's name is . He has the power of boundless optimism but is afraid of the dark.

Your pokèmon's power ranking is: 12.

Your pokemon is weak and sickly. It will suffer a short lifetime of exorbitant veterinary bills, humiliation, and defeat.

CancelBackNextDone

End of Modal Content

###### Titles

Titles are **concise summaries**. The wizard title describes the overall workflow. The step title describes the task being completed. The content title should be similar to its step title.

###### Content

The content may differ between different types of wizards. Content can be text, a form, or both. Be **concise** and provide a **clear explanation** of the task or information a user should focus on.

###### Buttons

Default progress buttons are provided, but can be overridden. Buttons are right-aligned based on the Z Pattern. Read more about it in [Button Placement](/documentation/buttons).

### Sizes

There are multiple sizes for wizards. The Clarity wizard defaults to **x-large** but different sizes could be used based on the content and screen sizes you are planning to support. Always remember to test responsiveness as you design and use wizards. The best size is one that doesn’t feel like there is too much or too little whitespace. If you’re unsure, test different ones to see which looks best.

M

###### Medium Modal

Width: 576px

Launch

L

###### Large Modal

Width: 864px

Launch

XL

###### X-Large Modal

Width: 1152px

Launch

### Step Indicators

- Current step is indicated by a row-selected blue background
- Complete steps are indicated by a green bar to the left

![Completed steps are highlighted with a green bar to the left](assets/images/documentation/wizards/wizard-steps.png)

Completed steps are highlighted with a green bar to the left.

### Building Steps

When building a step, it’s important to organize related tasks in it. Unrelated tasks should be separate into a new step. This helps preserve context around the step being completed.

If a step’s content scrolls, consider splitting the step into two steps or use a larger sized wizard. Scrolling content can sometimes be overlooked and users may try to progress to the next step unintentionally.

It’s best to include only the required tasks in a step so users know they need to fill out everything they see. Optional tasks slow the process of filling out a wizard.

### Conditional Steps

Conditional wizards change step content or the number of steps based on the entry from another step. Non-conditional wizards are preferable. However, if a conditional wizard is necessary, it is preferred to update the next step to be completed. Otherwise, users might lose context of what change was made.

### Dismissing Wizard

- A user needs to actively dismiss a wizard. A wizard should not disappear on its own
- Completing all of the steps or cancelling should dismiss the wizard

Clarity Wizards are not dismissed when clicking on the background overlay. This prevents losing information or data. An option to override this is available.

![There are three ways of closing the wizard](assets/images/documentation/wizards/wizard-dismissing.png)

The wizard can be closed by clicking the finish button, the cancel button, or canceling out by clicking the close "X" in the top right.

### Error Validation

Enhancement to the wizard component to add an error state to the wizard step states.

###### Wizard step states:

- Inactive
- Active
- Complete
- Error

###### Use Cases Under Consideration

- When selections in a later step in the wizard invalidate entries in earlier steps
- When the user resolves an error/errors in the current step

###### Error Reported

When an error occurs, replace the step number with the error icon. This design is consistent with the stepper design. Change the progress indicator to red and add a one pixel gap above and below the red bar for accessibility.

![An error reported to the user via error steps.](assets/images/documentation/wizards/wizard-error-reported.png)

###### Error State Active

Indicate clearly why the error occurs on the error step.

![An error active reported to the user.](assets/images/documentation/wizards/wizard-error-active.png)

###### Error Resolved

The progress indicator changed back to green once all errors are resolved.

![An error resolved in wizard.](assets/images/documentation/wizards/wizard-error-resolved.png)

### Code & Examples

The wizard is hidden and shown by toggling a boolean value assigned to the `clrWizardOpen` input. The toggling of these values is shown in the code examples below.

Note that you will probably want unique booleans for hiding and showing wizards when you have more than one wizard on a page. If hiding and showing are all assigned to the same boolean, the wizards will all hide and show together. This is probably not the intended experience.

The wizard comes in three different sizes: medium, large, and extra-large. You can set the size by providing the value as an input — `clrWizardSize`. If not specified, the wizard will **default to extra-large**. Sizing options for `clrWizardSize` are: `md`, `lg`, and `xl`.

Medium WizardLarge WizardX-Large Wizard

```typescript
import {Component, ViewChild} from "@angular/core";
import {ClrWizard} from "@clr/angular";

@Component({
    ...
})
export class WizardBasic {
    @ViewChild("wizardmd") wizardMedium: ClrWizard;
    @ViewChild("wizardlg") wizardLarge: ClrWizard;
    @ViewChild("wizardxl") wizardExtraLarge: ClrWizard;

    mdOpen: boolean = false;
    lgOpen: boolean = false;
    xlOpen: boolean = false;
```

```html
<clr-wizard #wizardmd [(clrWizardOpen)]="mdOpen" clrWizardSize="md">
  <clr-wizard-title>Medium-Sized Wizard</clr-wizard-title>

  <clr-wizard-button [type]="'cancel'">Cancel</clr-wizard-button>
  <clr-wizard-button [type]="'previous'">Back</clr-wizard-button>
  <clr-wizard-button [type]="'next'">Next</clr-wizard-button>
  <clr-wizard-button [type]="'finish'">Finish</clr-wizard-button>

  <clr-wizard-page>
    <ng-template clrPageTitle>Page 1</ng-template>
    ...
  </clr-wizard-page>

  <clr-wizard-page>
    <ng-template clrPageTitle>Page 2</ng-template>
    ...
  </clr-wizard-page>

  <clr-wizard-page>
    <ng-template clrPageTitle>Page 3</ng-template>
    ...
  </clr-wizard-page>
</clr-wizard>

<clr-wizard #wizardlg [(clrWizardOpen)]="lgOpen" clrWizardSize="lg">
  <clr-wizard-title>Large-Sized Wizard</clr-wizard-title>

  <clr-wizard-button [type]="'cancel'">Cancel</clr-wizard-button>
  <clr-wizard-button [type]="'previous'">Back</clr-wizard-button>
  <clr-wizard-button [type]="'next'">Next</clr-wizard-button>
  <clr-wizard-button [type]="'finish'">Finish</clr-wizard-button>

  <clr-wizard-page>
    <ng-template clrPageTitle>Page 1</ng-template>
    ...
  </clr-wizard-page>

  <clr-wizard-page>
    <ng-template clrPageTitle>Page 2</ng-template>
    ...
  </clr-wizard-page>

  <clr-wizard-page>
    <ng-template clrPageTitle>Page 3</ng-template>
    ...
  </clr-wizard-page>
</clr-wizard>

<clr-wizard #wizardxl [(clrWizardOpen)]="xlOpen">
  <clr-wizard-title>XL Wizard (Default)</clr-wizard-title>

  <clr-wizard-button [type]="'cancel'">Cancel</clr-wizard-button>
  <clr-wizard-button [type]="'previous'">Back</clr-wizard-button>
  <clr-wizard-button [type]="'next'">Next</clr-wizard-button>
  <clr-wizard-button [type]="'finish'">Finish</clr-wizard-button>

  <clr-wizard-page>
    <ng-template clrPageTitle>Page 1</ng-template>
    ...
  </clr-wizard-page>

  <clr-wizard-page>
    <ng-template clrPageTitle>Page 2</ng-template>
    ...
  </clr-wizard-page>

  <clr-wizard-page>
    <ng-template clrPageTitle>Page 3</ng-template>
    ...
  </clr-wizard-page>
</clr-wizard>
```

### Skipping and Unskipping Steps

Depending on the flow of the wizard, you may want to skip or add steps in the wizard. In the 0.9.0 wizard, this is accomplished by using the `*ngIf` Angular directive.

Skipping a Page in the Wizard

```typescript
@Component({
    ...
})
export class WizardSimple {
    @ViewChild("wizard") wizard: ClrWizard;
    skipStepTwo: boolean = true;
    _open: boolean = false;

    toggleStepTwo() {
        this.skipStepTwo = !this.skipStepTwo;
    }

    open() {
        this._open = !this.open;
    }
}
```

```html
<clr-wizard #wizard [(clrWizardOpen)]="_open">
  <clr-wizard-title>Skipping Page Two</clr-wizard-title>

  <clr-wizard-button [type]="'cancel'">Cancel</clr-wizard-button>
  <clr-wizard-button [type]="'previous'">Back</clr-wizard-button>
  <clr-wizard-button [type]="'next'">Next</clr-wizard-button>
  <clr-wizard-button [type]="'finish'">Finish</clr-wizard-button>

  <clr-wizard-page>
    <ng-template clrPageTitle>Title for page 1</ng-template>
    <ng-template clrPageNavTitle>Step 1</ng-template>
    ...
    <p>
      <button class="btn btn-secondary" (click)="wizard.toggleStepTwo()">
        <span *ngIf="skipStepTwo">Show Page 2</span>
        <span *ngIf="!skipStepTwo">Hide Page 2</span>
      </button>
    </p>
  </clr-wizard-page>

  <clr-wizard-page *ngIf="!skipStepTwo">
    <ng-template clrPageTitle>Title for page 2</ng-template>
    <ng-template clrPageNavTitle>Step 2</ng-template>
    ...
  </clr-wizard-page>

  <clr-wizard-page>
    <ng-template clrPageTitle>Title for page 3</ng-template>
    <ng-template clrPageNavTitle>Step 3</ng-template>
    <p *ngIf="skipStepTwo">Page 3 is the last page because we skipped page 2.</p>
    <p *ngIf="!skipStepTwo">Now our wizard has three pages/steps.</p>
  </clr-wizard-page>
</clr-wizard>
```

#### Skipping steps and \*ngFor

If you are using `*ngFor` to generate your wizard pages and still want to use `*ngIf` to hide them, you will want to follow [the Angular team's recommendations on nested structural directives](https://angular.io/docs/ts/latest/guide/structural-directives.html#!#one-per-element).

At a high level, this means wrapping your `<clr-wizard-page *ngIf="yourCondition">` inside a `<ng-container *ngFor="let page of pages">` element.

Alternatively, you could add and remove elements from the array of pages you are sending to the `*ngFor`.

```html
<clr-wizard #wizard [(clrWizardOpen)]="open">
  <clr-wizard-title>Wizard Title</clr-wizard-title>

  <clr-wizard-button type="cancel">Cancel</clr-wizard-button>
  <clr-wizard-button type="previous">Back</clr-wizard-button>
  <clr-wizard-button type="next">Next</clr-wizard-button>
  <clr-wizard-button type="finish">Finish</clr-wizard-button>

  <ng-container *ngFor="let page of pages; let i=index">
    <clr-wizard-page *ngIf="!page.skipped">
      <ng-template clrPageTitle>
        Page {{index}}
      </ng-template>
      Content for page {{index}}
    </clr-wizard-page>
  </ng-container>
</clr-wizard>
```

### Programmatically Navigating the Wizard

There may be times when you need end-users to jump to a specific step in a wizard. The way to do this is pass the page object to the `currentPage` property of the wizard's `WizardNavigationService` provider.

The safest way to ensure that end-users do not wind up in a bad state is to make sure that the page to which they are navigating is completed and, if not, send users to the last valid page using the `setLastEnabledPageCurrent()` method on the same `WizardNavigationService` provider, as in the example below.

Open WizardTry to Open at Step 3Try to Open at Step 5

```typescript
import { Component, ViewChild } from "@angular/core";
import { ClrWizard, ClrWizardPage } from "@clr/angular";

@Component({
    ...
})
export class WizardJumpToDemo {
    @ViewChild("wizard") wizard: ClrWizard;
    @ViewChild("pageThree") pageThree: ClrWizardPage;
    @ViewChild("pageFive") pageFive: ClrWizardPage;

    public jumpTo(page: ClrWizardPage) {
        if (page && page.completed) {
            this.wizard.navService.currentPage = page;
        } else {
            this.wizard.navService.setLastEnabledPageCurrent();
        }
        this.wizard.open();
    }

    public jumpToThree(): void {
        this.jumpTo(this.pageThree);
    }

    public jumpToFive(): void {
        this.jumpTo(this.pageFive);
    }
}
```

```html
<clr-wizard #wizard [(clrWizardOpen)]="open" [clrWizardSize]="'md'">
  <clr-wizard-title>Jump-To Wizard</clr-wizard-title>

  <clr-wizard-button [type]="'cancel'">Cancel</clr-wizard-button>
  <clr-wizard-button [type]="'previous'">Back</clr-wizard-button>
  <clr-wizard-button [type]="'next'">Next</clr-wizard-button>
  <clr-wizard-button [type]="'finish'">Done</clr-wizard-button>

  <clr-wizard-page>
    <ng-template clrPageTitle>Page 1</ng-template>
    ...
  </clr-wizard-page>

  <clr-wizard-page>
    <ng-template clrPageTitle>Page 2</ng-template>
    ...
  </clr-wizard-page>

  <clr-wizard-page #pageThree>
    <ng-template clrPageTitle>Page 3</ng-template>
    ...
  </clr-wizard-page>

  <clr-wizard-page>
    <ng-template clrPageTitle>Page 4</ng-template>
    ...
  </clr-wizard-page>

  <clr-wizard-page #pageFive>
    <ng-template clrPageTitle>Page 5</ng-template>
    ...
  </clr-wizard-page>
</clr-wizard>
```

### Different Page Title in the Sidenav

By default, the nav item on the right-hand side will display the same title as the title inside the `<ng-template clrPageTitle>` in your `<clr-wizard-page>`. In fact, this is the _only_ element that is required inside your `<clr-wizard-page>`. It provides not only the title at the top of the content area but also the item in the sidenav to the left.

Sometimes, however, having the title in the content area match the nav item is not a desired behavior. The title in the content area may be too long or the nav item may need to update based on changes elsewhere in the wizard.

To accomplish this customization, you can use a `<ng-template clrPageNavTitle>` element. When placed inside, a `<clr-wizard-page>`, a `clrPageNavTitle` template reference will be used in the nav sidebar of the wizard instead of the content title.

As with any Angular content, you can also use projection to change the titles in either a `clrPageTitle` or `clrPageNavTitle` whenever you need to.

```html
<clr-wizard #wizard [(clrWizardOpen)]="open">
  <clr-wizard-title>Wizard Title</clr-wizard-title>

  <clr-wizard-button type="cancel">Cancel</clr-wizard-button>
  <clr-wizard-button type="previous">Back</clr-wizard-button>
  <clr-wizard-button type="next">Next</clr-wizard-button>
  <clr-wizard-button type="finish">Finish</clr-wizard-button>

  <clr-wizard-page>
    <ng-template clrPageTitle>
      This title will appear in the content area and the sidebar
    </ng-template>
    Content for page 1
  </clr-wizard-page>

  <clr-wizard-page>
    <ng-template clrPageTitle>
      This title will appear in the content area
    </ng-template>
    <ng-template clrPageNavTitle>
      This title in the sidebar
    </ng-template>
    Content for page 2
  </clr-wizard-page>

  <clr-wizard-page>
    <ng-template clrPageTitle>
      {{projectedTitle}}
    </ng-template>
    Content for page 3
  </clr-wizard-page>
</clr-wizard>
```

### Overriding Buttons at the Page Level

As part of creating a wizard, you need to include a set of default buttons of types finish, next, previous, and cancel as a direct child of your `<clr-wizard>` element.

```html
<clr-wizard #wizard [(clrWizardOpen)]="open">
  <clr-wizard-title>Wizard Title</clr-wizard-title>

  <clr-wizard-button type="cancel">Cancel</clr-wizard-button>
  <clr-wizard-button type="previous">Back</clr-wizard-button>
  <clr-wizard-button type="next">Next</clr-wizard-button>
  <clr-wizard-button type="finish">Finish</clr-wizard-button>

  <clr-wizard-page>
    ...
  </clr-wizard-page>

  ...
</clr-wizard>
```

These buttons can be overridden at the page level, however, with other buttons of the same type (but with different text) or with completely custom buttons. To override the default buttons, include a new set of buttons inside a `<ng-template clrPageButtons>` template reference element. Sets of buttons defined at the page level will override the default buttons defined at the wizard level.

### Custom Buttons and Page-Level Button Overrides

A _page override_ is defining a button at the page level in place of a button of the same type at the wizard level. These types include finish, danger, next, previous, and cancel. If you override the click events of these buttons with an output like `clrWizardPagePreventDefault`, you can also short-circuit the default action of the button to define your own custom action at the page level.

A _custom button_ is a different beast entirely. Custom buttons are not like page overrides. They have no action assigned to them. So you will need to use the `clrWizardPageCustomButton` output to assign an action to your custom buttons. The output receives the custom button type which should allow you to route your wizard's behavior based on the type of button it receives.

You can use specified custom button types such as `custom-finish`, `custom-next`, `custom-danger`, `custom-previous`, or `custom-cancel` to have your custom buttons inherit the styling of the button listed in the latter part of the button type. Note, however, that these custom buttons _do not_ kick off the actions associated with their styled types. You have to tell a wizard what you want a button to do.

By default, a custom button will be styled as an outline button. Meaning it will look like a "previous" type of button. For example, you would get an action blue, outlined button with the text "Wallaby" inside it if you created a button with the following declaration: `<clr-wizard-button [type]="'wallaby'">Wallaby</clr-wizard-button>`. And if your page was listening to the `clrWizardPageCustomButton` output, your event handler would receive the button type `wallaby` as a parameter when the custom button was clicked.

Reference the following example:

Wizard + Button Overrides

```typescript
import { Component, ViewChild } from "@angular/core";
import { ClrWizard } from "@clr/angular";

@Component({
    ...
})
export class WizardCustomButtonsDemo {
    @ViewChild("wizard") wizard: ClrWizard;

    public handleDangerClick(): void {
        this.wizard.finish();
    }

    public showWarning = false;

    public doCustomClick(buttonType: string): void {
        if ("custom-next" === buttonType) {
            this.wizard.next();
        }

        if ("custom-previous" === buttonType) {
            this.wizard.previous();
        }

        if ("custom-danger" === buttonType) {
            this.showWarning = true;
        }
    }
}
```

```html
<clr-wizard #wizard [(clrWizardOpen)]="open" [clrWizardSize]="'lg'">
  <clr-wizard-title>Custom and default buttons</clr-wizard-title>

  <clr-wizard-button [type]="'cancel'">Default</clr-wizard-button>
  <clr-wizard-button [type]="'previous'">Default</clr-wizard-button>
  <clr-wizard-button [type]="'next'">Default</clr-wizard-button>
  <clr-wizard-button [type]="'finish'">Default</clr-wizard-button>

  <clr-wizard-page>
    <ng-template clrPageTitle>Page 1 with default buttons</ng-template>
    <ng-template clrPageNavTitle>Default buttons</ng-template>
    ...
  </clr-wizard-page>

  <clr-wizard-page (clrWizardPageCustomButton)="doCustomClick($event)">
    <ng-template clrPageTitle>Page 2 with custom buttons</ng-template>
    <ng-template clrPageNavTitle>Custom buttons</ng-template>
    ...

    <ng-template clrPageButtons>
      <clr-wizard-button [type]="'cancel'">Page Override</clr-wizard-button>
      <clr-wizard-button [type]="'custom-previous'">Custom</clr-wizard-button>
      <clr-wizard-button [type]="'custom-next'">Custom</clr-wizard-button>
    </ng-template>
  </clr-wizard-page>

  <clr-wizard-page>
    <ng-template clrPageTitle>Page 3 with default buttons</ng-template>
    <ng-template clrPageNavTitle>Default buttons</ng-template>
    ...
  </clr-wizard-page>

  <clr-wizard-page (clrWizardPageCustomButton)="doCustomClick($event)">
    <ng-template clrPageTitle>Page 4 with custom finish</ng-template>
    <ng-template clrPageNavTitle>Custom buttons</ng-template>

    <p *ngIf="!showWarning">
      ...
    </p>

    <p *ngIf="showWarning">
      <button type="submit" class="btn btn-danger" (click)="handleDangerClick()">
        Click here if you are sure
      </button>
    </p>

    <ng-template clrPageButtons>
      <clr-wizard-button [type]="'cancel'">Page Override</clr-wizard-button>
      <clr-wizard-button [type]="'previous'">Page Override</clr-wizard-button>
      <clr-wizard-button [type]="'custom-danger'">Custom</clr-wizard-button>
    </ng-template>
  </clr-wizard-page>
</clr-wizard>
```

### Wizard with Form Validation

You can use form validation with the wizard. If you wish to disable the next button until the form is valid, you can do so by setting the `clrWizardPageNextDisabled` input of the `<clr-wizard-page>` to the form’s valid property as shown in the example.

Note also in the example how the text of the third step nav item changes as the form is validated.

Wizard + Form Validation

```typescript
import { Component, ViewChild } from "@angular/core";
import { ClrWizard } from "@clr/angular";

@Component({
    ...
})
export class WizardFormValidation {
    @ViewChild("wizard") wizard: ClrWizard;
    @ViewChild("number") numberFi: any;

    model = {
        name: "",
        favorite: "",
        number: ""
    };
}
```

```html
<clr-wizard #wizard [(clrWizardOpen)]="open">
  <clr-wizard-title>Wizard with form validation</clr-wizard-title>

  <clr-wizard-button [type]="'cancel'">Close</clr-wizard-button>
  <clr-wizard-button [type]="'previous'">Previous</clr-wizard-button>
  <clr-wizard-button [type]="'next'">Next</clr-wizard-button>
  <clr-wizard-button [type]="'finish'">Done</clr-wizard-button>

  <clr-wizard-page [clrWizardPageNextDisabled]="name.pristine || !formPageOne.valid">
    <ng-template clrPageTitle>Form with validation</ng-template>
    <!-- mandatory -->

    <form clrForm #formPageOne="ngForm">
      <clr-input-container>
        <label>Name</label>
        <input clrInput required [(ngModel)]="model.name" name="name" #name="ngModel" />
        <clr-control-error>This field is required!</clr-control-error>
      </clr-input-container>

      <clr-input-container>
        <label>Favorite food</label>
        <input clrInput [(ngModel)]="model.favorite" name="favorite" />
      </clr-input-container>
    </form>
  </clr-wizard-page>

  <clr-wizard-page [clrWizardPageNextDisabled]="number.pristine || !formPageTwo.valid">
    <ng-template clrPageTitle>We need a number</ng-template>
    <!-- mandatory -->
    <ng-template clrPageNavTitle>Enter a number</ng-template>
    <!-- optional -->

    <form #formPageTwo="ngForm">
      <label>Please your lucky number!</label>
      <clr-input-container>
        <label>Your number</label>
        <input clrInput required type="number" [(ngModel)]="model.number" name="number" #number="ngModel" />
        <clr-control-error>This field is required!</clr-control-error>
      </clr-input-container>
    </form>
  </clr-wizard-page>

  <clr-wizard-page [clrWizardPageNextDisabled]="!formPageOne.valid || !formPageTwo.valid">
    <ng-template clrPageTitle>Title for page 3</ng-template>
    <!-- mandatory -->
    <ng-template clrPageNavTitle>
      <span *ngIf="formPageOne.valid && formPageTwo.valid">
        Ready to go!
      </span>
      <span *ngIf="!formPageOne.valid || !formPageTwo.valid">
        Not ready yet
      </span>
    </ng-template>
    <!-- optional -->

    <div *ngIf="formPageOne.valid && formPageTwo.valid">
      <p>Congratulations! You are done with this wizard.</p>
      <label>Your information</label>
      <section>
        <p>
          <label>Your name:</label>
          <span>{{ this.model.name }}</span>
        </p>
        <p>
          <label>Your favorite food:</label>
          <span>{{ this.model.favorite }}</span>
        </p>
        <p>
          <label>Your lucky number:</label>
          <span>{{ this.model.number }}</span>
        </p>
      </section>
    </div>

    <div *ngIf="!formPageOne.valid || !formPageTwo.valid">
      <p>Not quite there yet.</p>
    </div>
  </clr-wizard-page>
</clr-wizard>
```

### Wizard with Asynchronous Validation

Some applications may need to make an an asynchronous call for server-side validation of form input. The example below demonstrates how you can prevent the wizard from moving forward with the next button by setting the `clrWizardPagePreventDefault` input to false. Then enable it by programmatically calling next when the asynchronous form validation passes.

Wizard + Async Form Validation

```typescript
import { Component, ViewChild } from "@angular/core";
import { ClrWizard } from "@clr/angular";

@Component({
    ...
})
export class WizardAsyncValidation {
    @ViewChild("wizard") wizard: ClrWizard;
    @ViewChild("myForm") formData: any;

    loadingFlag: boolean = false;
    errorFlag: boolean = false;

    // have to define doCancel because page will prevent doCancel from working
    // if the page had a previous button, you would need to call
    // this.wizard.previous() manually as well...
    doCancel(): void {
        this.wizard.close();
    }

    onCommit(): void {
        let value: any = this.formData.value;
        this.loadingFlag = true;
        this.errorFlag = false;

        setTimeout(() => {
            if (value.answer === "42") {
                this.wizard.forceNext();
            } else {
                this.errorFlag = true;
            }
            this.loadingFlag = false;
        }, 1000);
    }
}
```

```html
<clr-wizard #wizard [(clrWizardOpen)]="open">
  <clr-wizard-title>Async validation</clr-wizard-title>

  <clr-wizard-button [type]="'cancel'">Cancel</clr-wizard-button>
  <clr-wizard-button [type]="'previous'">Back</clr-wizard-button>
  <clr-wizard-button [type]="'next'">Next</clr-wizard-button>
  <clr-wizard-button [type]="'finish'">Finish</clr-wizard-button>

  <clr-wizard-page
    clrWizardPagePreventDefault="true"
    (clrWizardPageOnCommit)="onCommit()"
    (clrWizardPageOnCancel)="doCancel()"
  >
    <ng-template clrPageTitle>Form with async validation</ng-template>
    <!-- mandatory -->

    <clr-spinner *ngIf="loadingFlag">
      Loading
    </clr-spinner>
    <clr-alert [clrAlertType]="'alert-info'" [clrAlertClosable]="false" [clrCloseButtonAriaLabel]="'Close Wiki alert'">
      <clr-alert-item>
        This&nbsp;<a
          href="https://en.wikipedia.org/wiki/42_(number)#The_Hitchhiker.27s_Guide_to_the_Galaxy"
          target="_blank"
          >wiki article</a
        >&nbsp;might help you answer the question.
      </clr-alert-item>
    </clr-alert>
    <clr-alert *ngIf="errorFlag" [clrAlertType]="'alert-danger'" [clrCloseButtonAriaLabel]="'Close Answer alert'">
      <clr-alert-item>
        Your answer is incorrect.
      </clr-alert-item>
    </clr-alert>

    <form clrForm #myForm="ngForm" [class.hide]="loadingFlag">
      <clr-input-container>
        <label>The answer to life, the universe and everything</label>
        <input clrInput [(ngModel)]="answer" name="answer" />
      </clr-input-container>
    </form>
  </clr-wizard-page>
  <clr-wizard-page>
    ...
  </clr-wizard-page>
</clr-wizard>
```

### Wizard with Asynchronous Completion

While not a recommended pattern, some applications need to validate data before finishing the wizard — as opposed to the sort of page-to-page validation demonstrated above.

The approach to doing this on the final page of a wizard is very similar to validating each page with the only twist being where the `finish()` method should be called.

Wizard + Async Completion

```typescript
import { ClrWizard, ClrWizard } from "@clr/angular";

@Component({
    ...
})
export class WizardAsyncCompletion {
    @ViewChild("wizard") wizard: ClrWizard;
    @ViewChild("myForm") formData: any;
    @ViewChild("myFinishPage") finishPage: ClrWizardPage;

    loadingFlag: boolean = false;
    errorFlag: boolean = false;
    checked = false;
    finished = false;
    open: boolean = false;
    answer: number = null;

    // have to define doCancel because page will prevent doCancel from working
    // if the page had a previous button, you would need to call
    // this.wizard.previous() manually as well...
    doCancel(): void {
        this.wizard.close();
    }

    get showCongrats(): boolean {
      return !this.errorFlag && this.checked;
    }

    resetFinalPage(): void {
      this.loadingFlag = false;
      this.errorFlag = false;
      this.checked = false;
    }

    goBack(): void {
      this.wizard.previous();
    }

    doFinish(): void {
      this.wizard.forceFinish();
      this.resetFinalPage();
    }

    onCommit(): void {
        let value: any = this.formData.value;
        this.loadingFlag = true;
        this.errorFlag = false;

        if (this.finished) {
          this.doFinish();
          return;
        }

        setTimeout(() => {
            if (value.answer === "42") {
              this.finished = true;
            } else {
                this.finishPage.completed = false;
                this.errorFlag = true;
            }
            this.checked = true;
            this.loadingFlag = false;
        }, 1000);
    }
}
```

```html
<clr-wizard #wizard [(clrWizardOpen)]="open" (clrWizardCurrentPageChanged)="resetFinalPage()">
  <clr-wizard-title>Async validation on completion</clr-wizard-title>

  <clr-wizard-button [type]="'cancel'">Cancel</clr-wizard-button>
  <clr-wizard-button [type]="'previous'">Back</clr-wizard-button>
  <clr-wizard-button [type]="'next'">Next</clr-wizard-button>
  <clr-wizard-button [type]="'finish'">
    {{ finished ? "Done" : "Check Form" }}
  </clr-wizard-button>

  <clr-wizard-page>
    <ng-template clrPageTitle>Form question</ng-template>
    <!-- mandatory -->

    <clr-alert [clrAlertType]="'alert-info'" [clrAlertClosable]="false" [clrCloseButtonAriaLabel]="'Close Wiki alert'">
      <div class="alert-item">
        This&nbsp;<a
          href="https://en.wikipedia.org/wiki/42_(number)#The_Hitchhiker.27s_Guide_to_the_Galaxy"
          target="_blank"
          >wiki article</a
        >&nbsp;might help you answer the question.
      </div>
    </clr-alert>
    <form clrForm #myForm="ngForm">
      <clr-input-container>
        <label>The answer to life, the universe and everything</label>
        <input clrInput [(ngModel)]="answer" name="answer" />
      </clr-input-container>
    </form>
  </clr-wizard-page>
  <clr-wizard-page
    #myFinishPage
    clrWizardPagePreventDefault="true"
    (clrWizardPageOnCommit)="onCommit()"
    (clrWizardPageOnCancel)="doCancel()"
    (clrWizardPagePrevious)="goBack()"
  >
    <ng-template clrPageTitle>Async validation on finish</ng-template>
    <!-- mandatory -->

    <clr-alert *ngIf="errorFlag" [clrAlertType]="'alert-danger'" [clrCloseButtonAriaLabel]="'Close Answer alert'">
      <div class="alert-item">
        Your answer is incorrect.
      </div>
    </clr-alert>

    <clr-spinner *ngIf="loadingFlag">
      Loading
    </clr-spinner>

    <p *ngIf="errorFlag && !loadingFlag">Go back and try again!</p>

    <p *ngIf="showCongrats && !loadingFlag">
      Congratulations! Now you know the answer to life, the universe and everything!
    </p>

    <p *ngIf="!checked && !loadingFlag">Click finish to see if you got the answer right.</p>
  </clr-wizard-page>
</clr-wizard>
```

### Preventing Navigation and Disabling the Stepnav

If a wizard concludes with a long-running task or validation, preventing a user from closing the wizard, jumping to a new page in the wizard, or navigating forwards or backwards may be required. The Clarity wizard offers two inputs for disabling navigation.

The first is the `clrWizardPreventNavigation` input on the `clr-wizard` component. When set to `true`, this input prevents all stepnav links and buttons from navigating away from the current wizard page.

The next input on the `clr-wizard` component is more specific to the stepnav. When `clrWizardDisableStepnav` is set to `true`, it only disables the links in the stepnav on the left of the wizard. Buttons still work.

Examples of when and how to use both are demonstrated in the following example.

Wizard: Stop Navigation

```typescript
import { Component, ViewChild } from "@angular/core";
import { ClrWizard } from "@clr/angular";

@Component({
    ...
})
export class WizardStopNavigation {
    @ViewChild("wizard") wizard: ClrWizard;

    untouched: boolean = true;
    loading: boolean = false;
    errorFlag: boolean = false;
    progress: number = 0;

    get readyToFinish(): boolean {
        return !this.untouched && !this.loading;
    }

    model = {
        won: "",
        too: "",
        tree: ""
    };

    // have to define doCancel because page will prevent doCancel from working
    // if the page had a previous button, you would need to call
    // this.wizard.previous() manually as well...
    doCancel(): void {
        this.wizard.close();
        this.resetWizard();
    }

    resetWizard(): void {
        this.wizard.reset();
        this.model.won = "";
        this.model.too = "";
        this.model.tree = "";
        this.progress = 0;
    }

    onCommit(): void {
        if (this.untouched) {
            this.untouched = false;
            this.loading = true;
            let timer = setInterval(() => {
                this.progress = this.progress + 14;

                if (this.progress > 99) {
                    this.progress = 100;
                    this.loading = false;
                    clearInterval(timer);
                }
            }, 1000);
        } else {
            this.wizard.forceFinish();
            this.resetWizard();
        }
    }
```

```html
<clr-wizard
  #wizard
  [(clrWizardOpen)]="open"
  [clrWizardSize]="'lg'"
  [clrWizardPreventNavigation]="loading"
  [clrWizardDisableStepnav]="readyToFinish"
  [clrWizardPreventDefaultCancel]="true"
  (clrWizardOnCancel)="doCancel()"
  [clrWizardClosable]="!readyToFinish"
>
  <clr-wizard-title>Wizard stops navigating while validating</clr-wizard-title>

  <clr-wizard-button type="cancel" *ngIf="!readyToFinish">Cancel</clr-wizard-button>
  <clr-wizard-button type="previous" *ngIf="!readyToFinish">Back</clr-wizard-button>
  <clr-wizard-button type="next">Next</clr-wizard-button>
  <clr-wizard-button type="finish">
    <span *ngIf="untouched && !loading">Validate</span>
    <span *ngIf="loading">Please wait...</span>
    <span *ngIf="readyToFinish">OK</span>
  </clr-wizard-button>

  <clr-wizard-page
    [clrWizardPageNextDisabled]="(name.pristine && quest.pristine && velocity.pristine) || !formPage.valid"
  >
    <ng-template clrPageTitle>Form to submit</ng-template>
    <!-- mandatory -->

    <form clrForm #formPage="ngForm">
      <label>To proceed, you must answer these three questions...</label>
      <clr-input-container>
        <label>What is your name?</label>
        <input clrInput name="name" required [(ngModel)]="model.won" #name="ngModel" />
        <clr-control-error>This field is required!</clr-control-error>
      </clr-input-container>

      <clr-input-container>
        <label>What is your quest?</label>
        <input clrInput name="quest" required [(ngModel)]="model.too" #quest="ngModel" />
        <clr-control-error>This field is required!</clr-control-error>
      </clr-input-container>

      <clr-input-container>
        <label>What is the air-speed velocity of an unladen swallow?</label>
        <input clrInput name="velocity" required [(ngModel)]="model.tree" #velocity="ngModel" />
        <clr-control-error>This field is required!</clr-control-error>
      </clr-input-container>
    </form>
  </clr-wizard-page>
  <clr-wizard-page [clrWizardPagePreventDefaultNext]="true" (clrWizardPageOnCommit)="onCommit()">
    <ng-template clrPageTitle>
      Validate your information
    </ng-template>
    <ng-template clrPageNavTitle>
      <span *ngIf="!readyToFinish">Validate Info</span>
      <span *ngIf="readyToFinish">Ready to Go!</span>
    </ng-template>

    <p *ngIf="untouched && !loading">
      Click the Validate button to kick off a timed routine. While the validation is running, try clicking buttons and
      stepnav items. Note that they don't do anything while the validation is running. The validation is just an
      exercise. It will not fail.
    </p>

    <ng-container *ngIf="loading">
      <p>Loading...</p>
      <div class="progress">
        <progress [value]="progress" max="100" [attr.data-displayval]="progress + '%'"></progress>
      </div>
    </ng-container>

    <p *ngIf="readyToFinish">
      Click on the OK button to close the wizard.
    </p>
  </clr-wizard-page>
</clr-wizard>
```

### Resetting the Wizard

While the easiest way to restore a wizard back to its pristine state is to destroy and recreate it, there are use cases where this is not feasible. If you need to reset the wizard while it is open, destroying and recreating it would be a poor experience for users. Likewise, some applications are architected such that it is less expensive to reuse an instance of a wizard instead of destroying it and making the backend calls necessary to re-initialize a new instance.

The Clarity wizard includes a `reset()` convenience method. In order to use it, you would need a reference to the wizard in your host component and can call reset from there. In the example below, we use `wizard.reset()` which references the ViewChild `<clr-wizard #wizard>` in the host component's template.

The `reset()` method resets the wizard's navigation and page state. So it clears out any pages that were marked completed and sets the active page back to the first page of the wizard.

When resetting the wizard, it is your responsibility to reset your wizard's model. This can be done either as part of the action that calls the reset, as in the example below, or with an event handler that listens to the `clrWizardOnReset` output.

Reset Wizard

```typescript
import { Component, OnInit, ViewChild } from '@angular/core';
import { ClrWizard } from '@clr/angular';

@Component({
  moduleId: module.id,
  selector: 'clr-wizard-reset',
  templateUrl: './wizard-reset.demo.html',
})
export class WizardResetDemo implements OnInit {
  @ViewChild('wizard') wizard: ClrWizard;

  public open: boolean = false;

  public model: any;

  public ngOnInit() {
    this.model = {
      forceReset: false,
      favoriteColor: '',
      luckyNumber: '',
      flavorOfIceCream: '',
    };
  }

  public doFinish(): void {
    this.doReset();
  }

  public doReset(): void {
    if (this.model.forceReset) {
      this.wizard.reset();
      this.model.forceReset = false;
      this.model.favoriteColor = '';
      this.model.luckyNumber = '';
      this.model.flavorOfIceCream = '';
    }
  }
}
```

```html
<clr-wizard
  #wizard
  [(clrWizardOpen)]="open"
  [clrWizardSize]="'md'"
  (clrWizardOnFinish)="doFinish()"
  (clrWizardOnCancel)="doFinish()"
>
  <clr-wizard-title>
    {{ model.forceReset ? "Wizard resets" : "Wizard doesn't reset" }}
  </clr-wizard-title>

  <clr-wizard-button [type]="'cancel'">Cancel</clr-wizard-button>
  <clr-wizard-button [type]="'previous'">Back</clr-wizard-button>
  <clr-wizard-button [type]="'next'">Next</clr-wizard-button>
  <clr-wizard-button [type]="'finish'">OK</clr-wizard-button>

  <clr-wizard-page>
    <ng-template clrPageTitle>Page 1</ng-template>
    <!-- mandatory -->

    <p>Check below if you want the wizard to reset when it finishes or closes.</p>

    <clr-checkbox-wrapper>
      <input #forceReset type="checkbox" clrCheckbox name="forceReset" [(ngModel)]="model.forceReset" />
      <label>Force reset on close</label>
    </clr-checkbox-wrapper>
  </clr-wizard-page>

  <clr-wizard-page>
    <ng-template clrPageTitle>Page 2</ng-template>
    <!-- mandatory -->
    <clr-input-container>
      <label>What is your favorite color?</label>
      <input clrInput placeholder="Color?" #stepTwoInput [(ngModel)]="model.favoriteColor" />
    </clr-input-container>
  </clr-wizard-page>

  <clr-wizard-page>
    <ng-template clrPageTitle>Page 3</ng-template>
    <!-- mandatory -->
    <clr-input-container>
      <label>What is your favorite ice cream?</label>
      <input clrInput placeholder="Flavor?" #stepThreeInput [(ngModel)]="model.flavorOfIceCream" />
    </clr-input-container>
  </clr-wizard-page>

  <clr-wizard-page>
    <ng-template clrPageTitle>Page 4</ng-template>
    <!-- mandatory -->
    <clr-input-container>
      <label>What is your lucky number?</label>
      <input clrInput placeholder="Lucky number?" #stepFourInput type="number" [(ngModel)]="model.luckyNumber" />
    </clr-input-container>
  </clr-wizard-page>
</clr-wizard>
```

##### Making users go back through skipped pages

A different kind of wizard reset is one that occurs during navigation. For wizards that use the next button to perform custom validations, users navigating backwards in the wizard using the stepnav is problematic.

A user could, for instance, navigate from page 5 back to page 2 with the stepnav, make changes on page 2, and then navigate back to page 5 (again using the stepnav). The validation on the wizard would not run until the user clicked next or finish on page 5, at which point they would be surprised with validation errors.

To avoid this, the Clarity wizard includes an input `clrWizardForceForwardNavigation` which resets pages when navigating backwards when set to `true`.

In the above example, pages 2, 3, and 4 would be reset to incomplete when the user navigated from page 5 to page 2 using the stepnav.

This functionality is called “force forward” because it prevents users from jumping backwards and forwards. An example is shown in the demo below.

Force Forward Wizard

```typescript
import { ClrWizard } from "@clr/angular";

@Component({
    ...
})
export class WizardForceForwardDemo {
    @ViewChild("wizard") wizard: ClrWizard;
    _open: boolean = false;

    open() {
        this._open = !this.open;
    }
}
```

```html
<clr-wizard #wizard [(clrWizardOpen)]="_open" [clrWizardForceForwardNavigation]="true">
  <clr-wizard-title>Wizard, Only Forward Navigation</clr-wizard-title>

  <clr-wizard-button [type]="'cancel'">Cancel</clr-wizard-button>
  <clr-wizard-button [type]="'previous'">Back</clr-wizard-button>
  <clr-wizard-button [type]="'next'">Next</clr-wizard-button>
  <clr-wizard-button [type]="'finish'">Finish</clr-wizard-button>

  <clr-wizard-page *ngFor="let page of [1, 2, 3, 4]">
    <ng-template clrPageTitle>Title for page {{ page }}</ng-template>
    <p>Content for page {{ page }}.</p>
  </clr-wizard-page>
</clr-wizard>
```

### Providing an Alternative Cancel for the Wizard

The Clarity wizard allows users to circumvent the default cancel/close action at both the page and wizard level to enable their own functionality to validate, prompt users, or reset their data.

At the wizard level, setting the `clrWizardPreventDefaultCancel` input to true prevents the wizard’s cancel routine from running on any page. When the `clrWizardPreventDefaultCancel` input is set, users must also assign an event handler to the `clrWizardOnCancel` output and manually call `close()` on their instance of the wizard for the cancel action to take effect.

That cancel/close functionality of the wizard can also be overridden at the page level. Users must set the `clrWizardPagePreventDefaultCancel` input to true on the `<clr-wizard-page>` declaration and likewise supply an event handler to the `clrWizardPageOnCancel` output. This event handler will also need to manually call `close()` for the expected wizard cancel functionality to take effect.

In the case of a conflict where the cancel action is overridden at both the page and wizard levels, the page level takes precedence. `clrWizardOnCancel` will never be emitted. The example below demonstrates this.

Alt-Cancel Wizard

```typescript
import { Component, ViewChild } from "@angular/core";
import { ClrWizard } from "@clr/angular";

@Component({
    ...
})
export class WizardAltCancelDemo {
    @ViewChild("wizard") wizard: ClrWizard;

    public showCancelConfirm: boolean = false;

    public pageCustomCancel(): void {
        this.showCancelConfirm = true;
    }

    public doPageCancel() {
        this.showCancelConfirm = false;
        this.wizard.close();
    }

    public doCancel() {
        if (confirm("Do you really, really want to close the wizard?")) {
            this.showCancelConfirm = false;
            this.wizard.close();
        }
    }
}
```

```html
<clr-wizard #wizard [(clrWizardOpen)]="open" (clrWizardOnCancel)="doCancel()" [clrWizardPreventDefaultCancel]="true">
  <clr-wizard-title>Wizard with alternate cancel</clr-wizard-title>

  <clr-wizard-button [type]="'cancel'">Cancel</clr-wizard-button>
  <clr-wizard-button [type]="'previous'">Back</clr-wizard-button>
  <clr-wizard-button [type]="'next'">Next</clr-wizard-button>
  <clr-wizard-button [type]="'finish'">Finish</clr-wizard-button>

  <clr-wizard-page>
    ...
  </clr-wizard-page>

  <clr-wizard-page (clrWizardPageOnCancel)="pageCustomCancel()" [clrWizardPagePreventDefaultCancel]="true">
    ...
  </clr-wizard-page>
</clr-wizard>
```

##### But what if I do not want any cancel buttons?

There are times when you may want your end-users to finish hey wizard before they can do anything else. This may include installation routines or set up of your application. In these instances, it makes sense to use a wizard that does not have a cancel button and is also not closable.

If you do not want a cancel action in your wizard, do not include a cancel button in your default set of buttons or do not include it in your `<ng-template clrPageButtons>` template reference at the page level.

This also applies to other button types like previous or next. Note, however, that omission of next, previous, and finish buttons is not recommended and could confuse end-users of your application.

The example below demonstrates a wizard without cancel buttons that is also set to not be closable. The only way to close it is to the click all the way through it.

Wizard That You Must Finish

```typescript
@Component({
    ...
})
export class WizardNoCancel {
    @ViewChild("wizard") wizard: ClrWizard;
    open: boolean = false;
    pageArray: string[] = [ "1", "2", "3" ];

    // adding a reset here for sanity's sake
    reset(): void {
        this.wizard.reset();
    }
}
```

```html
<clr-wizard
  #wizard
  [(clrWizardOpen)]="open"
  [clrWizardClosable]="false"
  [clrWizardSize]="'md'"
  (clrWizardOnFinish)="reset()"
>
  <clr-wizard-title>Wizard that you can't close</clr-wizard-title>

  <clr-wizard-button type="previous">Back</clr-wizard-button>
  <clr-wizard-button type="next">Next</clr-wizard-button>

  <clr-wizard-page *ngFor="let page of pageArray">
    <ng-template clrPageTitle>Page {{page}}</ng-template>
    <!-- mandatory -->
    <p>Page {{ page }} of {{ pageArray.length }}</p>

    <ng-template clrPageButtons *ngIf="page === '3'">
      <clr-wizard-button type="finish">YAY</clr-wizard-button>
    </ng-template>
  </clr-wizard-page>
</clr-wizard>
```

### Providing an Alternative Next for the Wizard

Just like with `clrWizardPreventDefaultCancel`, the Clarity wizard allows users to override the default primary button actions at both the page and wizard level. This includes danger, finish, and next buttons.

The use case for this is when you want the wizard to validate its contents whenever the next button is clicked. It is less overt than manipulating the `clrWizardPageNextDisabled` to enable or disable a wizard page's primary buttons, as demonstrated in the form validation example above.

Overriding next, finish, and danger buttons at the wizard level involves setting the `clrWizardPreventDefaultNext` input to true. This prevents the wizard from executing the built-in methods that finish the wizard and move the wizard to the next page.

Using `clrWizardPreventDefaultNext` requires that you handle the `clrWizardOnNext` and `clrWizardOnFinish` event emitters in your host component's code. These routines will need to call `wizard.forceNext()` and `wizard.forceFinish()`, respectively. `forceNext()` and `forceFinish()` perform the work of finishing the wizard and moving it to the next page without the checks and event emissions involved with calling the default `next()` and `finish()` methods in the wizard.

You can override the primary button actions at a page level by using the `clrWizardPagePreventDefaultNext` input.

As with wizard level overrides, you will need to provide an event handler for the `clrWizardPageNext` and `clrWizardPageFinish` outputs. If your specific page does not have a finish button, there is no need to handle the `clrWizardPageFinish` event. The same holds true for wizard pages that do not have next buttons.

Also similar to the output routines at the wizard level, your page-level methods will need to manually call the `wizard.forceNext()` and `wizard.forceFinish()` methods to bring that functionality back to the overridden page.

Just like with the cancel overrides, the page level override is used in place of the wizard level override when a specific page has them both set. The example below shows how this happens.

Alt-Next Wizard

```typescript
import { Component, ViewChild, OnInit } from "@angular/core";
import { ClrWizard } from "@clr/angular";

@Component({
    ...
})
export class WizardAltNextDemo implements OnInit {
    @ViewChild("wizard") wizard: ClrWizard;

    public model: any;
    public stressText: boolean = false;
    public errorFlag: boolean = false;

    public ngOnInit() {
        this.model = {
            allowNext: false,
            sequenceOne: "",
            sequenceTwo: "",
            sequenceThree: ""
        };
    }

    public pageCustomNext(): void {
        if (confirm("Are you sure you got it right?")) {
            this.errorFlag = false;
            this.wizard.forceNext();
        }
    }

    public doFinish() {
        let sequenceOneIsCorrect = this.model.sequenceOne === 3;
        let sequenceTwoIsCorrect = this.model.sequenceTwo === 5;
        let sequenceThreeIsCorrect = this.model.sequenceThree === 8;
        let allAreCorrect = sequenceOneIsCorrect && sequenceTwoIsCorrect && sequenceThreeIsCorrect;

        if (allAreCorrect) {
            this.wizard.forceFinish();
            // resetting for another pass through
            this.model.allowNext = false;
            this.model.sequenceOne = "";
            this.model.sequenceTwo = "";
            this.model.sequenceThree = "";
            this.wizard.reset();
            this.errorFlag = false;
        } else {
            this.errorFlag = true;
        }
    }

    public doNext() {
        if (this.model.allowNext) {
            this.wizard.forceNext();
            this.stressText = false;
        } else {
            this.stressText = true;
        }
    }
}
```

```html
<clr-wizard
  #wizard
  [(clrWizardOpen)]="open"
  [clrWizardSize]="'lg'"
  (clrWizardOnNext)="doNext()"
  (clrWizardOnFinish)="doFinish()"
  [clrWizardPreventDefaultNext]="true"
>
  <clr-wizard-title>Wizard with alternate next flows</clr-wizard-title>

  <clr-wizard-button [type]="'cancel'">Cancel</clr-wizard-button>
  <clr-wizard-button [type]="'previous'">Back</clr-wizard-button>
  <clr-wizard-button [type]="'next'">Next</clr-wizard-button>
  <clr-wizard-button [type]="'finish'">Finish</clr-wizard-button>

  <clr-wizard-page>
    <ng-template clrPageTitle>Wizard level alt-next</ng-template>
    <p [class.stress]="stressText">Alt-Next means you manually move users to the next page.</p>
    <p></p>
    <label>
      <input #allowNext type="checkbox" name="allowNext" [(ngModel)]="model.allowNext" />
      Check the box if you want to go to the next page
    </label>
  </clr-wizard-page>

  <clr-wizard-page (clrWizardPageNext)="pageCustomNext()" [clrWizardPagePreventDefaultNext]="true">
    <ng-template clrPageTitle>Page level alt-next</ng-template>
    <p *ngIf="showCancelConfirm">Complete this fibonacci sequence</p>

    <p>1, 2...</p>

    <form clrForm>
      <clr-input-container>
        <label>What comes after 2?</label>
        <input clrInput type="number" name="number" placeholder="Enter a number" [(ngModel)]="model.sequenceOne" />
      </clr-input-container>

      <clr-input-container>
        <label>What is the next number in the sequence?</label>
        <input clrInput type="number" name="number2" placeholder="Enter a number" [(ngModel)]="model.sequenceTwo" />
      </clr-input-container>

      <clr-input-container>
        <label>What is the next number in the sequence?</label>
        <input clrInput type="number" name="number3" placeholder="Enter a number" [(ngModel)]="model.sequenceThree" />
      </clr-input-container>
    </form>
  </clr-wizard-page>

  <clr-wizard-page>
    <ng-template clrPageTitle>Wizard level alt-next and the finish button</ng-template>
    <clr-alert *ngIf="errorFlag" clrAlertType="alert-danger">
      <div class="alert-item">
        Your sequence should be 1, 2, 3, 5, 8.
      </div>
    </clr-alert>

    <ng-container *ngIf="!errorFlag">
      <p>Alt-next at the wizard level also affects the finish button!</p>
      <p>So make sure to call through to finish when you use it.</p>
      <p>Click the finish button to test your answers.</p>
    </ng-container>

    <p *ngIf="errorFlag">Click back to the previous page to change your answers.</p>
  </clr-wizard-page>
</clr-wizard>
```

### Non-Closable Wizard

In some circumstances, you may want to not show the closing × icon in the top right of the Wizard modal. You can remove this close × icon by setting the `clrWizardClosable` input to `false`.

Wizard, Not Closable

```typescript
import { Component, ViewChild } from "@angular/core";
import { ClrWizard } from "@clr/angular";

@Component({
    ...
})
export class WizardNotClosableDemo {
    @ViewChild("wizard") wizard: ClrWizard;
    open: boolean = false;
}
```

```html
<clr-wizard #wizard [(clrWizardOpen)]="open" [clrWizardClosable]="false">
  <clr-wizard-title>Wizard, not closable</clr-wizard-title>

  <clr-wizard-button [type]="'cancel'">Cancel</clr-wizard-button>
  <clr-wizard-button [type]="'previous'">Back</clr-wizard-button>
  <clr-wizard-button [type]="'next'">Next</clr-wizard-button>
  <clr-wizard-button [type]="'finish'">Finish</clr-wizard-button>

  <clr-wizard-page>
    <ng-template clrPageTitle>Page 1</ng-template>
    ...
  </clr-wizard-page>

  <clr-wizard-page>
    <ng-template clrPageTitle>Page 2</ng-template>
    ...
  </clr-wizard-page>
</clr-wizard>
```

### Clarity Wizard Deep-Dive

The Clarity wizard is a complex component made up of a number of subcomponents. Each Clarity wizard also has a number of services whose chief responsibility is handling communication between the wizard and its subcomponents.

The subcomponents that make up the wizard include a collection of buttons, wizard pages, the “step-nav” to the left of the wizard’s content area, and the “step-nav items” which constitute the links that appear in the step-nav.

The Clarity wizard also has a number of providers (services). The most important of these services are the `WizardNavigationService` and the `PageCollectionService`. At a high-level, the `WizardNavigationService` (or “nav service”) manages the state of the current page in a wizard, as well as functionality and communication related to making pages current. The `PageCollectionService` (or “page collection”) handles functionality that treats the pages within a wizard as a group of objects.

In the following sections, we will briefly touch upon the most important components and services related to the wizard, as well as their most notable inputs, outputs, and public methods and properties.

##### The wizard

The wizard component is a sort of meta-component that brings together a group of services and subcomponents. Most of the time, everything you need to do with the wizard can be done through a reference to the wizard in your host component.

```typescript
@Component({
    ...
})
export class WizardJumpToDemo {
    @ViewChild("ohai") wizard: ClrWizard; // makes wizard accessible through this.wizard!!!
    ...
```

```html
<clr-wizard #ohai [(clrWizardOpen)]="open">
  <!-- the '#wizard' up there creates the reference that your ViewChild property looks for -->
  <clr-wizard-title>Your Wizard</clr-wizard-title>
  ...</clr-wizard
>
```

Because the wizard’s functionality involves mostly monitoring the state and managing communications with child components, the wizard expects some subcomponents to be declared in order for it to avoid an existential crisis.

Every wizard needs a `<clr-wizard-title>`, `<clr-wizard-button>`, and at least one `<clr-wizard-page>` component to be declared as its children. If these sub-components are not present, the wizard will throw an error.

As a convenience, wizards give you hooks to all of their services. If you have a reference to the wizard in your host component as in the example above, you can access all of the important nav service and page collection functionality. Specifically, the above example could call `this.wizard.navService` or `this.wizard.pageCollection` to access the nav service or page collection, respectively.

###### Inputs of note

- `clrWizardSize` (string) sets the size of the wizard. Acceptable values are `md`, `lg`, and `xl` representing medium, large, and extra-large wizards. `xl` is default.
- `clrWizardClosable` (boolean) hides or reveals the close “X” in the top right. If false, the close “X” will not be present. The property defaults to true.
- `clrWizardOpen` (boolean) hides or shows the wizard, in the same way that `clrModalOpen` hides or shows a modal.
- `clrWizardPreventDefaultCancel` (boolean) prevents a user’s cancel action from closing the wizard. Defaults to false.
- `clrWizardForceForwardNavigation` (boolean) sets pages to incomplete when they are skipped over because a user navigates backwards using the stepnav. Most useful when validation is occurring on a page-by-page basis when the next button is clicked.
- When set to true, `clrWizardPreventNavigation` (boolean) disables the buttons in the footer, the links in the stepnav to the left, and the close "X" in the top right of the wizard if present.
- `clrWizardDisableStepnav` (boolean) disables the links in the stepnav when set to true.

###### Outputs of note

- `clrWizardOpenChange` is an output that fires an event after the wizard has opened.
- `clrWizardOnCancel` fires an event after the wizard has been canceled and, in most cases, closed. This output can be used with the `clrWizardPreventDefaultCancel` input to implement custom functionality when a user wants to close or cancel a wizard.
- `clrWizardOnFinish` emits an event after a wizard has been completed — once the finish button on the last page has been clicked. If you wanted to reset the wizard after it was finished, this would be a good output to consider.
- `clrWizardOnReset` emits an event after the wizard has reset all of its pages to incomplete and also reset its navigation to make the first page in the step nav current.
- `clrWizardCurrentPageChanged` is fired after the current page of the wizard has been changed.

###### Useful properties on the wizard

- `wizard.currentPage` will retrieve the current page object (`WizardPage`) of the wizard.
- `wizard.isLast` returns a boolean telling you if the current page is the last page in the wizard.
- `wizard.isFirst` will also return a boolean, but this one will tell you if the current page is the first page in the wizard.

###### Useful methods on the wizard

- `wizard.open()` opens the wizard.
- `wizard.close()` just closes the wizard but bypasses event emitters associated with finish and cancel. Use this method on the wizard to implement custom cancel or finish methods in your host component to avoid any circular event emission.
- You can pass a boolean to `wizard.toggle()` to hide or show the wizard. `wizard.toggle(false)` will hide the wizard and `wizard.toggle(true)` will show it.
- `wizard.previous()` will try to move the wizard to the page immediately before the current page — if it can. It will fail silently if the current page has no previous page to which it can move.
- `wizard.next()` will try to move the wizard to the page immediately after the current page. It will also fail silently if the current page has no page that follows it.
- `wizard.finish()` will initiate the routines associated with completing the wizard, as if a finish button had been clicked on the last page. You can use `wizard.finish()` in your code if you are using a custom finish or danger button on the last page in your wizard.
- `wizard.cancel()` will invoke the cancel routines for the wizard as if the close “X” or cancel button had been clicked. This should probably only be used if you have a custom cancel button that you need to wire up or if you want to cancel the wizard programmatically. If you are trying to circumvent the wizard’s cancel routine altogether, you would be better off using `wizard.close()`.
- `wizard.goTo()` accepts a string representing the id of the page you want the wizard to make current as a parameter. If you have references to your pages in your host component, the page id can be retrieved with `wizardpage.id` and can be passed into `wizard.goTo()` — `this.wizard.goTo(this.wizardpage.id)`. Note that `wizard.goTo()` checks to see if preceding pages have been completed before navigating to the specified page. If they have not been, it doesn’t do anything.
- `wizard.reset()` resets all pages' completed states to false and makes the first page in the wizard the current page — as if the wizard had never been opened before. See the demo below for a more extensive example and explanation.

##### The wizard page

Besides the wizard, the second most important component is the wizard page. This is because users often want to customize at the page level, instead of the wizard level.

Just like the wizard, the wizard page needs an expected element within it or it will throw an error. Each wizard page needs a `<ng-template clrPageTitle>` templateRef inside of it. Without this, the wizard page will have an existential crisis and not know what to call itself.

By default, the content of the `<ng-template clrPageTitle>` templateRef will appear as the title in the content area of the wizard when the page is current as well as in the page's associated link in the step nav to the left.

You can also save a reference to a wizard page in your host component if you want. Each page has hooks to the nav service and page collection providers shared between the wizard and its subcomponents.

```typescript
@Component({
    ...
})
export class WizardJumpToDemo {
    @ViewChild("firstPage") wizardPage_1: ClrWizardPage;
    @ViewChild("secondPage") wizardPage_2: ClrWizardPage;

    get pageAreDone(): boolean &123;
        return this.firstPage.completed && this.secondPage.completed;
    &125;
```

```html
<clr-wizard [(clrWizardOpen)]="open">
  <clr-wizard-title>Your Wizard</clr-wizard-title>
  <clr-wizard-page #firstPage>
    ...
  </clr-wizard-page>
  <clr-wizard-page #secondPage>
    ...
  </clr-wizard-page>
  ...</clr-wizard
>
```

###### Inputs of note

- `clrWizardPageNextDisabled` is a boolean that disables the next button. It can be used to force validation on the current page before allowing users to move to the next page or finish a wizard. This is `false` by default.
- `clrWizardPagePreventDefault` is a boolean that circumvents all actions (cancel, finish, next, and previous) when the page is current. This can be used in combination with the outputs below to write your own wizard navigation procedures. This input is `false` by default.
- Most users, however, only want to monitor or circumvent the cancellation of the wizard. `clrWizardPagePreventDefaultCancel` does that. It is a boolean input that, if set to true, prevents the cancel action from firing when the page is current. Also `false` by default.
- `clrWizardPageHasError` is a boolean that applies the error style on the page. This input is `false` by default.

###### Outputs of note

- `clrWizardPageOnCommit` is an output that emits after a page is marked completed by user action. Generally, this happens after danger, finish, or next buttons are clicked. It will not be fired if the page is marked completed programmatically.
- `clrWizardPageOnLoad` is emitted after a page is made the current page. It cannot circumvent making a page current but it will notify you when a page has been made current and it delivers the page’s id as a string.
- `clrWizardPageOnCancel` is an output that fires when a user's action on a page initiates the wizard’s cancel routine. This output, combined with the `clrWizardPagePreventDefaultCancel` or `clrWizardPagePreventDefault` inputs, allows you to customize or rewrite the cancellation of a wizard from a page level.
- Wizard pages also have a set of outputs that emit when different buttons are clicked in the wizard. Note that these events are only emitted for the page when the page is current. These outputs include: `clrWizardPageFinish` when the finish button is clicked, `clrWizardPagePrevious` when the previous button is clicked, `clrWizardPageNext` when the next button is clicked, `clrWizardPageDanger` when a danger button is clicked, `clrWizardPagePrimary` when a next/finish/danger button is clicked, and `clrWizardPageCustomButton` when any custom button is clicked. All of these outputs (and `clrWizardPageOnCancel`) can be combined with the `clrWizardPagePreventDefault` input to create a unique, page-based behavior. More examples are available in the demos below.

###### Useful properties of the wizard page

- `wizardpage.id` returns the id of the page as a string.
- `wizardpage.completed` is a boolean that tells you if the page has been completed or not. If `true`, the page has been completed. If `false`, it has not.
- `wizardpage.current` is a boolean tells you if the page is the current page or not.
- `wizardpage.hasError` is a boolean that tells you if the page has an error or not.

###### Useful methods of the wizard page

- `wizardpage.makeCurrent()` tells the nav service to make `wizardpage` the current page. This method circumvents checks to see if the page can be made current. Use `wizard.goTo()` if you want to nav service to validate whether the specified page can be made current or not.

##### Providers (Services)

The Clarity wizard has a number of services (providers) that are created by the wizard and shared among all of its subcomponents. The two that you are most likely to interact with are the `WizardNavigationService` and `PageCollectionService`.

###### WizardNavigationService

The `WizardNavigationService` or “nav service” is the wizard’s executive assistant. It communicates with the wizard, the pages, and the `PageCollectionService` to make sure everyone stays in sync. Most of what the nav service does is already available to you through convenience methods on the wizard. Methods like `next()`, `previous()`, and `finish()`.

It may have seemed, initially, that the wizard was super-helpful and doing lots of work. But the truth is the nav service does all the work. The wizard just gets all the credit!

Because much of what the nav service does is behind-the-scenes, there is really only a couple of methods and properties on the nav service that may interest you:

- `wizard.navService.currentPage` is a getter/setter That will return the current page is called on its own or set the current page to any WizardPage object that is passed to it. This bypasses most of the checks involved with setting the current page but still emits a `pageOnLoad` event.
- `wizard.navService.goTo()` takes either the id of a page or the page object itself and checks to see if it can make the page current. This is slightly more flexible than `wizard.goTo()` which only takes a page id.

###### PageCollectionService

The `PageCollectionService` — or “page collection” — groups all of the pages in the wizard together and acts as kind of a librarian. If you are looking for a page or even a group of pages, the page collection has you covered. The page collection also handles a small set of bulk actions on the pages in a wizard.

**Properties**

- `wizard.pageCollection.pages` is a `QueryList` of all the pages in a wizard.
- `wizard.pageCollection.pagesAsArray` is a convenient getter that returns `wizard.pageCollection.pages` as an array of page objects.

**Methods**

- If you know a page’s id, you can pass it as a string parameter to `wizard.pageCollection.getPageById()` and it will return the page if it exists in the page collection.
- Alternatively, you can pass the page’s index in the list of pages as a number parameter to `wizard.pageCollection.getPageByIndex()` to get the page returned back to you.
- If you have a page and you need to know where it is in the list of pages, you can pass the page object as a parameter to `wizard.pageCollection.getPageIndex()` and it will return the page’s numeric index.
- Passing a page object to `wizard.pageCollection.getPreviousPage()` as a parameter will return you the page before it in the collection or null if your page object is the first page in the collection.
- Continuing the trend, you can pass a page object as a parameter to `wizard.pageCollection.getNextPage()` and it will return the page after your page object in the collection or null if your page object is the last page in the collection.
- `wizard.pageCollection.updateCompletedStates()` is a function that cleans up the page collection by figuring out the first page marked as incomplete and the collection and then marking every page after it incomplete as well. This is a useful method if you handle a lot of page state programmatically.
