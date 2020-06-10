---
title: Overview
---

# Spinners

![HTML5](assets/images/bugs/badge_html5.svg 'HTML5')![CSS3](assets/images/bugs/badge_css3.svg 'CSS3')![Angular](assets/images/bugs/badge_ng.svg 'Angular')

- [Examples & Code](/documentation/spinners#top)
- [Design Guidelines](/documentation/spinners#guidelines)

##### A spinner is visual indicator of an ongoing, user-initiated process.

Clarity has two types of spinners:

- **Page Spinners:** For tracking the progress of an operation related to an entire page.
- **Inline Spinners:** For tracking the progress of an operation related to a specific component.

###### .spinner

Use the `.spinner` to create a page spinner.

###### .spinner-inline

Extend the `.spinner-inline` class with `.spinner` to create an inline spinner.

###### .spinner-inverse

Extend the `.spinner-inverse` class with `.spinner` to create a spinner for dark backgrounds.

### Examples

##### Page Spinners

Loading...

```html
<span class="spinner">
  Loading...
</span>
```

##### Inline Spinners

Loading... Loading...

```html
<span class="spinner spinner-inline">
  Loading...
</span>
<span>
  Loading...
</span>
```

##### Spinners on a dark background

Loading...

```html
<span class="spinner spinner-inverse">
  Loading...
</span>
```

### Spinner Sizes

Clarity spinners can be displayed in three sizes:

- **Small:** This is the required sizing for inline spinners (see above). It measures 18x18 pixels.
- **Medium:** Medium spinners measure 36x36 pixels.
- **Large:** This is the default size for page spinners (see above).

###### Spinner sizes classnames

The classnames used to size spinners are: `.spinner-sm`, `.spinner-md`, and `.spinner-lg`. Note that using the `.spinner-inline` class will force a spinner to the small size and that `.spinner-lg` is the default sizing of page spinners.

### Examples

##### Small

Loading...

```html
<span class="spinner spinner-sm">
  Loading...
</span>
```

##### Medium

Loading...

```html
<span class="spinner spinner-md">
  Loading...
</span>
```

##### Large (default)

Loading...

```html
<span class="spinner spinner-lg">
  Loading...
</span>
```

### Usage

Use the three sizes of spinners as follows:

**Large**

72px × 72px

72px × 72px

Use to track the progress of an operation related to a page. For example, in the login form, a large spinner replaces the form fields while the data is being authenticated.

**Medium**

36px × 36px

36px × 36px

Use when content is being loaded, for example, in a table or datagrid.

**Small**

18px × 18px

18px × 18px

Use in constrained spaces, such as in an input field or next to a button. The spinner animates and the field or button is disabled until the action is complete.

#### Placement

Place the spinner where you want to focus users’ attention when the process completes.

#### Label

Optionally, provide a brief description of the process, for example, “Loading …”

#### Spinners Versus Progress Bars

Clarity provides a linear, indeterminate [progress bar](/documentation/progress) that serves the same use cases as a spinner. Using a spinner or an indeterminate progress bar is a matter of spacing, visual consistency, and the object the user selected to begin the process.

### Spinner Component

Clarity provides a component to help with displaying a spinner for loading purposes. This component also helps with accessibility needs to announce loading tasks to a screen reader user.

Input/Output

Type

Default

Effect

**\[clrInline\]**

Boolean

false

Create an inline spinner

**\[clrInverse\]**

Boolean

false

Create spinner for dark background

**\[clrSmall\]**

Boolean

false

Make the spinner small 18x18 pixels

**\[clrMedium\]**

Boolean

false

Medium spinners 36x36 pixels

**\[clrAssertive\]**

Boolean

false

Set aria-live to "assertive", default is "polite"

**\[clrOff\]**

Boolean

false

Set aria-live to "off", no event will be broadcasted to screen readers

Deprecation: Since v4, we will no longer handle setting `aria-live` and announcing the message for you by default. Based on the application use case, you can use the new `ClrAriaLiveService` to make announcements when they make sense for a user to hear about updates or loading status changes. This will result in of removing few inputs provided by the component such as `clrPolite`, `clrAssertive`, `clrOff`

##### Examples:

Fetch user information

```html
<clr-spinner *ngIf="fetchingUserInformation">Loading data</clr-spinner>
```

##### Modify

Add modifier like `inline` or `inverse`. If you need to make change on the size you could add `small` or `medium`, the default size is auto set to `large`.

Download file

```html
<div *ngIf="downloadingFile">
  <clr-spinner clrInline>
    Downloading
  </clr-spinner>
  <span>
    Downloading
  </span>
</div>
```

##### Accessibility live region

By default the component will set `aria-live='polite'`. If you need to change it you need to pass `assertive` or `off` to disable the live announcement.

To prevent unwanted announcement, use `*ngIf` to add or remove it from the DOM. By default the component will be created with `aria-live='polite'` if not set otherwise. This will trigger the screen reader to announce the event in the next possible moment.

Download Invoice

```html
<clr-spinner *ngIf="downloadinInvoice" clrMedium clrAssertive>Downloading</clr-spinner>
```
