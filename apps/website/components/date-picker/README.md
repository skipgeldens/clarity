---
title: Overview
---

# Date Picker

- [Design Guidelines](/documentation/datepicker#top)
- [Code & Examples](/documentation/datepicker#examples)

##### Date Picker is a popover control for picking a date value for a date input. It's also sometimes referred to as Datepicker.

## Design Guidelines

Date Picker is a calendar-view popover. It is paired with a text input so that it can send a formatted date value to the input.

Date Picker is shown by clicking, or gaining focus and hitting enter, on the calendar icon next to the input field.

Today’s date is displayed in bold. Unless preloaded with another date, today’s date will be selected in the Date Picker.

Clicking on the check-calendar icon inside the Date Picker returns the focus to today’s date.

Focus is indicated by a grey background. Focus can be moved around inside the Date Picker using arrow and tab keys. Clicking the enter key will select a value.

![Date Picker](assets/images/documentation/datepicker/datepicker.png)

### Usage

A Date Picker is used to select a date when a user needs to understand the date in context with other possible dates. Date choices are influenced by day of the week, or week within a month. A Date Picker is also helpful when the formatting of the date is important.

Date Pickers aren’t helpful when the date is a known value like a birthdate. A user will likely want to type that value in versus hunting for it in a Date Picker. In cases where space is limited, it may be a good idea to omit the Date Picker.

### Views

The Month and Year views are shown when a user clicks on the month or year titles in the date view.

![Month Picker](assets/images/documentation/datepicker/monthpicker.png)

###### Month

12 month values can be selected from. Arrow keys can be used to navigate through the values. Selecting a month value will return the user back to the date view.

![Year Picker](assets/images/documentation/datepicker/yearpicker.png)

###### Year

10 year values are displayed at one time. Arrow keys can be used to navigate through the values, future years, and past years. Selecting a year value will return the user back to the date view.

### Small Screens

We automatically disable the Clarity Date Picker on small mobile phones. This is done because unlike desktop browsers, most mobile browsers have a built-in date picker. These built-in date pickers are optimized to work on mobile devices and provide an experience which the user is already familiar with.

Clarity Date Picker is shown at screen width `768px` and above.

### Important Notes about User Input

- Every time the user changes the value in the input field, the value is validated against the placeholder to check if a valid date is entered or not. If a valid date is entered, the date picker opens with the entered date selected. If an invalid date is entered, the date picker opens with the focus on today's date.
- Selecting a date from the date picker overrides the value in the input field.
- Date picker ideally requires a 4 digit year but can convert a 2 digit year input by the user to a 4 digit year. For eg: a 2 digit year 20 will convert to 2020. If the 4 digit conversion is 20 more than the current year, we subtract 100 from it. If the current year is 2018 and the year input is 99, then the converted year is 1999. Anything other than a 4 digit or 2 digit year is considered invalid.

## Accessibility

For applications that use the `ClrDateInput` directive and the associated `ClrDateContainer` component there is built in support that adds accessible behavior to the control and its form. This behavior includes:

1.  Programmatically associating the correct label `for` attribute with the `id` of the input
2.  Automatic wiring up of the `aria-describedby` behavior with associated `clr-control-error` elements
3.  An `aria-live` region that can notify screen readers about changes in the control error state
4.  Adds the label to a general form summary for screen readers when the control is in an error state after a form submit

## Code & Examples

### API

#### `clrDate` Directive

To use the date picker, add the `clrDate` directive to an `input` field. Then, place the input inside the `clr-date-container` container element.

Basic Demo

```html
<form clrForm>
  <clr-date-container>
    <label>Basic Demo</label>
    <input type="date" clrDate name="demo" [(ngModel)]="demo" />
  </clr-date-container>
</form>
```

It is recommended that you set the `type` to `date` as it increases readability of your code, helps with SEO, and keeps your HTML markup semantic. When the date picker is enabled, this `type` is overridden to `text` to disable the built-in date pickers that some desktop browsers provide.

#### Min/Max attributes

The earliest and latest acceptable dates can also be set. Just like the native HTML5 date spec a `yyyy-mm-dd` string can be used in the value for min or max. If the max value isn't a possible date then that the input has no max value. Similar for min values, if the string used is not a possible date then the input will not have a min value.

Only dates inside the min/max range will be selectable for the input when there is a bound placed for the min or max attribute.

##### Only Min

Min date: 2019-11-17

```html
<form clrForm>
  <clr-date-container>
    <label>Min date: 2019-11-17</label>
    <input type="date" clrDate name="demo" [(ngModel)]="demo" min="2019-11-17" />
  </clr-date-container>
</form>
```

##### Only Max

Max date: 2019-11-19

```html
<form clrForm>
  <clr-date-container>
    <label>Max date: 2019-11-19</label>
    <input type="date" clrDate name="demo" [(ngModel)]="demo" max="2019-11-19" />
  </clr-date-container>
</form>
```

##### Min and Max

Min date: 2019-11-17 AND Max date: 2019-11-19

```html
<form clrForm>
  <clr-date-container>
    <label>Min date: 2019-11-17 AND Max date: 2019-11-19</label>
    <input type="date" clrDate name="demo" [(ngModel)]="demo" min="2019-11-17" max="2019-11-19" />
  </clr-date-container>
</form>
```

### Internationalization

Clarity uses the [locale identifiers](https://github.com/angular/angular/tree/master/packages/common/locales) supported by Angular for getting the date format, first day of the week, month and day names. These values are used to generate the input field placeholder and the calendar.

#### Placeholder

Using the date format retrieved from Angular, the placeholder is generated in one of the following formats:

1.  big-endian (YYYY/MM/DD)
2.  little-endian (DD/MM/YYYY)
3.  middle-endian (MM/DD/YYYY)

We recommend against overriding the automatically generated placeholder. Adding an incorrect placeholder will create confusion while entering the date in the input.

The following demo shows two date pickers. The first date picker uses the `en-US` locale identifier whereas the second one uses `fr`. Both the date pickers have different first day of the week and the calendar is generated based on the first day of the week.

##### Locale Identifier: en-US

US locale

Key

Value

Language

English

Territory

US

First Day of the Week (Retrieved from Angular)

Sunday (S)

Date Format (Retrieved from Angular)

M/d/yy

Placeholder Generated

MM/DD/YYYY

##### Locale Idenitifer: fr

FR Locale

Key

Value

Language

French

Territory

\-

First Day of the Week (Retrieved from Angular)

Monday (L)

Date Format (Retrieved from Angular)

dd/MM/y

Placeholder Generated

DD/MM/YYYY

By default, Angular uses the `en-US` locale but you can set your application's locale to a different value using the `--locale` parameter while building your Angular CLI application.

Changing the locale requires its data to be registered first.

```html
import { registerLocaleData } from '@angular/common'; import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr);
```

Afterwards you can simply provide the locale in any Module or Component by the `LOCALE_ID` token.

```html
providers: [ {provide: LOCALE_ID, useValue: 'fr'} ]
```

For more information on setting the locale parameter and loading the locale data, please read the Angular [internationalization](https://angular.io/guide/i18n) documentation.

The date picker uses the locale set for the application to ensure consistency of date inputs and outputs across the application. It is not recommended to override the locale identifier to use different locales for different date picker instances in the same application.

#### Accessing the Date

You can access the Date in two ways:

###### 1\. As a Javascript Date Object

You can add a two way binding on `clrDate` to access the date value. The benefit of using this approach is that you can interact with the Date picker directly using Javascript Date objects which would avoid converting values from string to date and vice versa on the application side.

Date picker emits `null` when an invalid date is entered after a valid date was set.

Date Object

```html
<form clrForm clrLayout="vertical">
  <clr-date-container>
    <label>Date Object</label>
    <input type="date" [(clrDate)]="date" />
  </clr-date-container>
</form>
```

###### Output:

"2020-03-04T22:10:54.271Z"

###### 2\. As a date string (in current locale format)

[a. Template Driven Forms](https://angular.io/guide/forms#template-driven-forms)

Template Driven Forms use the `ngModel` directive to create a binding between the model and the input field.

#### Template Driven Form Demo

Enter Date

{
"date": "01/02/2015"
}

```html
<form clrForm #simpleForm="ngForm">
  <h4>Template Driven Form Demo</h4>
  <clr-date-container>
    <label>Enter Date</label>
    <input type="date" name="date" [(ngModel)]="date" clrDate />
  </clr-date-container>
</form>
<pre class="datepicker-output">
{{simpleForm.value | json}}
</pre>
```

```typescript
@Component({
  selector: 'clr-form-demo',
  templateUrl: './form-demo.html',
})
export class DatepickerTemplateDrivenFormsDemo {
  date: string = '01/02/2015';
}
```

[b. Reactive Forms](https://angular.io/guide/reactive-forms)

Reactive Forms use `FormControl`s to create the binding between the model and the input field.

#### Reactive Form Demo

Date

{
"date": null
}

```html
<form clrForm [formGroup]="dateForm" novalidate>
  <h4>Reactive Form Demo</h4>
  <clr-date-container>
    <label>Date</label>
    <input type="date" clrDate formControlName="date" />
  </clr-date-container>
</form>
<pre class="datepicker-output">
    {{dateForm.value | json}}
</pre>
```

```typescript
@Component({
  selector: 'clr-form-demo',
  templateUrl: './form-demo.html',
})
export class DatepickerReactiveFormsDemo {
  dateForm = new FormGroup({ date: new FormControl() });
}
```

We recommend that you either access the date as a string or as a javascript date object from the date picker. Using both at the same time might cause unexpected behavior.

### Summary of Options

Input/Output

Values

Default

Effect

**\[(clrDate)\]**

Type: Date

NA

Javascript Date Objects

NA

Two-way binding on the date value.

\[min\]

string

N/A

Sets the earliest acceptable date and must be in the YYYY-MM-DD format.

\[max\]

string

N/A

Sets the latest acceptable date and must be in the YYYY-MM-DD format.
