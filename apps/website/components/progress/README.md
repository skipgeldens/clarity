---
title: Overview
---

# Progress Bars

- [Design Guidelines](/documentation/progress#top)
- [Code & Examples](/documentation/progress#examples)

##### A progress bar is a linear indicator for providing feedback about an ongoing, user-initiated process.

## Design Guidelines

### Usage

Clarity has two types of progress bars:

- A determinate progress bar, which shows process completion to a specific maximum goal. Use this when the process has a known duration. This could be a file download or upload. Or, a series of configuration steps that happen during an initialization process.
- An indeterminate progress bar, which animates continuously until the process is complete. Use this progress bar for a process when there is no estimate of the end time. It indicates that work is occurring without indicating a scope for completion or implying an estimate for how long it will take.

**Progress example**

Configuring the system

### Placement

Progress bars are designed for use in the [main content area](/documentation/app-layout), [header](/documentation/header), [cards](/documentation/cards), and [modals](/documentation/modals). The size of the progress bar adjusts to its container and indicates which process is being monitored through placement of the progress bar in the container.

Header

Sidenav

Header

Content area

Sidenav.

#### Card title

Card text

[Click](...)

###### Card top

#### Card title

Card text

[Click](...)

###### Card footer

#### Card title

Card text

Block

[Click](...)

###### Card block

### Messaging

50%

###### Determinate Progress Bar

- Shows progress to a specific maximum goal
- Has an optional label that shows percentage completion
- Keep messaging minimal
- Use specific messaging: Process starting, Process finished, etc

Processing step 3 of 4

###### Indeterminate

- Uses specific messaging: E.g "Loading update 3 of 7"
- Will animate continuously until complete
- Has no estmated end time
- Indicates work is occuring

Clarity places the label on the right of the progress bar because the bar fills from left to right.

### Progress Bar Versus Spinner

Clarity also has a circular progress indicator, called a [spinner](/documentation/spinners), which serves the same use case as an indeterminate progress bar. Using a spinner or an indeterminate progress bar is a matter of available space and activation point. In many cases, spinners are best because they occupy less space.

## Accessibility

When adding a progress bar, keep the following in mind when adding a label to make it accessible:

- A label should always be included with a progress bar
- Use aria-labelledby along with an id in order to tie the label and the progress bar together
- Never use color as the only affordance that indicates the nature or meaning of the progress bar
- Use an explicit text label that conveys the nature or meaning of the progress bar for sight impaired users
- Labels should be added above or below the progress bar
- An optional `percentage` label can be included after the progress bar as needed
- While explicit text labels are preferred, an `accessible icon` is acceptable when vertical text labels are deemed inappropriate

**Note:** When the optional percentage label is used it must be associated with the progress bar it is describing. This can be accomplished by using the `id` of the percentage label with the `aria-describedby` attribute on the progress bar. The following form demonstrates an accessible progress implementation that meets both visual and screen reader consumption needs.

```html
<!-- Visual Presentation -->
<div aria-hidden="true"
  <div>Container 1 loading Progress </div>
  <progress  max="100" value="65" data-displayval="65%"></progress>
</div>

<!-- Screen Reader Presentation -->
<!-- Screen reader users will be interrupted and hear "Container 1 Loading Progress is 65%" when the progress bar appears -->
<!-- Screen reader users will also be able to read this text with the screen reader's cursor -->
<span  aria-live="polite">
  <span class="clr-sr-only">
    Container 1 Loading Progress is
  </span>
  65%
</span>
```

### Label examples

An explicit label accurately describes the operation for which the progress/status is being updated by the progressbar

###### Generic Labels

- Progress
- Starting
- Stopping

###### Explicit Labels

- Adding VM
- Uploading image
- Downloading data

### Deprecations

Warning

Several variations of progress bar have been found to be inaccessible and are now deprecated. They will be removed in Clarity v4.0.

The following variations of progress-bar are not accessible to screen reader users or visually impaired users because they rely on recognition of the color to convey meaning or status.

- **Flash**
- **flash-danger**
- **danger**
- **warning**
- **success**

## Code & Examples

Progress bars consist of an HTML5 progress element inside the block-level element with the `.progress` classname. The block-level container is necessary due to cross-browser constraints with styling HTML5 progress elements. As browsers improve, the intent is for this container to go away.

Clarity also has a component `clrProgressBar`. That will add accessibility support for screen readers.

#### API

Input/Output

Type

Default

Effect

**\[id\]**

String

Random ID

HTML ID to bind label to progress bar

**\[clrValue\]**

Number

0

This attribute specifies how much of the task that has been completed. It must be a valid floating point number between 0 and max

**\[clrMax\]**

Number

100

This attribute describes how much work the task indicated by the progress element requires. The max attribute, if present, must have a value greater than zero and be a valid floating point number. The default value is 100

**\[clrDisplayval\]**

String

Empty string

Overwrite the default value representation.

**\[clrPolite\]**

Boolean

true

Change the default aria-live value to polite

**\[clrAssertive\]**

Boolean

false

Change the default aria-live value to assertive

**\[clrOff\]**

Boolean

false

Change the default aria-live value to off. No aria-live event will be trigger

**\[clrLabeled\]**

Boolean

false

Display progress value or displayval

**\[clrLoop\]**

Boolean

false

Add looping animation

**\[clrFade\]**

Boolean

false

Flash animation

**\[clrFlashDanger\]**

Boolean

false

Flash in danger animation

**\[clrSuccess\]**

Boolean

false

Add success style

**\[clrDanger\]**

Boolean

false

Add danger style

Deprecation: Since v4, we will no longer handle setting `aria-live` and announcing the message for you by default. Based on the application use case, you can use the new `ClrAriaLiveService` to make announcements when they make sense for a user to hear about updates or loading status changes. This will result in of removing few inputs provided by the component such as `clrPolite`, `clrAssertive`, `clrOff`

#### Examples

```html
<clr-progress-bar clrValue="40" clrMax="100"></clr-progress-bar>
```

40%

```html
<clr-progress-bar clrValue="75" clrLoop></clr-progress-bar>
```

75%

```html
<clr-progress-bar clrValue="65" clrSuccess clrLabeled></clr-progress-bar>
```

65%

```html
<clr-progress-bar clrValue="65" clrLabeled clrDisplayval="65$"></clr-progress-bar>
```

65\$

```html
<div class="progress-block">
  <label for="demoProgressBar">Text on the left</label>
  <clr-progress-bar id="demoProgressBar" clrValue="85"></clr-progress-bar>
  <span>Text on the right</span>
</div>
```

Text on the left85%Text on the right

#### Progress Bar

Show

#### Labeled

0%

Show

#### Fade Out

Show

```html
<h4>Progress Bar</h4>
<div class="progress demo">
  <progress max="100" value="0" data-displayval="0%"></progress>
</div>

<h4>Labeled</h4>
<div class="progress labeled">
  <progress max="100" value="0" data-displayval="0%"></progress>
  <span></span>
</div>

<h4>Fade Out</h4>
<div class="progress progress-fade">
  <progress max="100" value="0" data-displayval="0%"></progress>
</div>
```

### Indeterminate (Looping) Progress Bars

When the amount of time a task will take is not known, use an indeterminate (or looping) progress bar. These progress bars feature a recurring animation that continues until the task is complete and the progress bar is no longer needed.

#### Indeterminate/Looping

```html
<div class="progress loop"><progress></progress></div>
```

### Color

The default color of the fill bar is Action Blue. You may change the color as required by visual design.

Using color to convey additional information e.g. Green to indicate Success is not recommended. Sight impaired users may not read the additional meaning without additional information such as a text label or icon. The recommendation if such status information is needed in the context of a progress bar, is to communicate this with a notification or text label.

#### Normal

Show

#### User color

user

Show

#### Danger/Warning

flash-danger

Show

```html
<h4>Normal</h4>
<div class="progress">
  <progress max="100" value="0" data-displayval="0%"></progress>
</div>

<h4>Success</h4>
<div class="progress user">
  <progress max="100" value="0" data-displayval="0%"></progress>
</div>

<h4>Danger/Warning</h4>
<div class="progress danger">
  <progress max="100" value="0" data-displayval="0%"></progress>
  <span class="danger-text">
    <clr-icon size="24" shape="exclamation-circle">;</clr-icon>
    Connection to database timed out. >
    <a>Try again</a>
  </span>
</div>
```

### Animation

Progress bars have options for animation.

- Use fade animation when you want the progress bar to disappear with a fade.
- Use flash animation to draw the user’s attention when the process has completed.

#### Fade Out

Show

#### Flash Then Fade

Show

```html
<h4>Fade Out</h4>
<div class="progress progress-fade">
  <progress max="100" value="0" data-displayval="0%"></progress>
</div>

<h4>Flash Then Fade</h4>
<div class="progress flash progress-fade">
  <progress max="100" value="0" data-displayval="0%"></progress>
</div>

<h4>Flash Red, No Fade</h4>
<div class="progress flash-danger">
  <progress max="100" value="0" data-displayval="0%"></progress>
</div>

<h4>Labeled With Success Flash And Fade</h4>
<div class="progress flash progress-fade labeled">
  <progress max="100" value="0" data-displayval="0%"></progress>
</div>
```

### Variations

The animation, color, and type of a progress bar can be changed by adding or removing CSS classes from the following list of class names.

- **labeled:** A progress container with the `labeled` classname will show the percent complete as a numerical percentage to the far right of the progress bar. Note that this requires a `<span>` element be placed within the container after the `<progress>`. You will also need to update the contents of the span programmatically.
- **progress-fade:** A progress container with the `progress-fade` classname will fade out after it reaches 100%.
- **flash:** A progress container with the `flash` classname will have the bar color change to green after it reaches 100%. This can be combined with the `progress-fade` classname to have the bar change color to green and then fade out.

  Warning

  This has been deprecated in Clarity v3.0 and will be removed in v4.0

- **flash-danger:** A progress container with the `flash-danger` classname will have the bar color change to red after it reaches 100%. This classname can also be combined with the `progress-fade` classname.

  Warning

  This has been deprecated in Clarity v2.0 and will be removed in v4.0

- **loop:** A progress container with the `loop` classname will show a progress bar that loops across infinitely. This is the style for our indeterminate progress bar.
- **danger:** A progress container with the `danger` classname will show up as red.

  Warning

  This has been deprecated in Clarity v2.0 and will be removed in v4.0

- **warning:** A progress container with the `warning` classname will also show up as red.

  Warning

  This has been deprecated in Clarity v2.0 and will be removed in v4.0

- **success:** A progress container with the `success` classname will show up as green.

  Warning

  This has been deprecated in Clarity v2.0 and will be removed in v4.0

### Progress Bar in Cards

#### Card title

Here is a progress bar at the very top of a card, above the header.

[Click](javascript://)

#### Card title

Here is a progress bar at the top of a card's footer, above the buttons.

[Click](javascript://)

```html
<div class="clr-row">
  <div class="clr-col-12 clr-col-sm-4">
    <div class="card">
      <div class="card-block">
        <div class="progress top">
          <progress value="..." max="100"></progress>
        </div>
        <h4 class="card-title">Card title</h4>
        <p class="card-text">...</p>
      </div>
      <div class="card-footer">
        <a href="..." class="card-link">Click</a>
      </div>
    </div>
  </div>
  <div class="clr-col-12 clr-col-sm-4">
    <div class="card">
      <div class="card-block">
        <h4 class="card-title">Card title</h4>
        <p class="card-text">...</p>
      </div>
      <div class="card-footer">
        <div class="progress">
          <progress value="..." max="100"></progress>
        </div>
        <a href="..." class="card-link">Click</a>
      </div>
    </div>
  </div>
</div>
```

### Static Progress Bar in Cards

#### Card title

Here is a progress bar at the very top of a card, above the header.

[Click](javascript://)

#### Card title

Here is a progress bar at the top of a card's footer, above the buttons.

[Click](javascript://)

```html
<div class="clr-row">
  <div class="clr-col-12 clr-col-sm-4">
    <div class="card">
      <div class="card-block">
        <h4 class="card-title">Card title</h4>
        <p class="card-text">...</p>
      </div>
      <div class="card-footer">
        <div class="progress-static top">
          <div class="progress-meter" data-value="33"></div>
        </div>
        <a href="..." class="card-link">Click</a>
      </div>
    </div>
  </div>
  <div class="clr-col-12 clr-col-sm-4">
    <div class="card">
      <div class="card-block">
        <h4 class="card-title">Card title</h4>
        <p class="card-text">...</p>
      </div>
      <div class="card-footer">
        <div class="progress-static">
          <div class="progress-meter" data-value="77"></div>
        </div>
        <a href="..." class="card-link">Click</a>
      </div>
    </div>
  </div>
</div>
```

### Progress Bar in Sidebar Navigation

- [Link](javascript://)

- [Link](javascript://)
- [Another link](javascript://)

```html
<ul class="sidenav">
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
    <div class="progress loop"><progress></progress></div>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Another link</a>
  </li>
</ul>
```

### Static Progress Bars

Some applications use progress bars inside other widgets that re-render repeatedly in the DOM. While this is not a pattern that Clarity promotes, we have implemented a “static” progress bar to assist in these uses.

A normal progress bar will animate from its starting point to the defined ending point. When widgets that contain progress bars are re-rendered in the DOM, this results in Clarity’s progress bars continually growing from zero to the defined value.

A static progress bar just shows the defined value. It does not animate and lend itself to these sorts of DOM refreshes.

Because there was no way to turn off the animation in IE/Edge’s implementation of the HTML5 progress element, there is a related, though separate, component for static progress bars.

#### Static Progress Bar

#### Labeled, Static Progress Bar

0%

#### Red Static Progress Bar

#### Green Static Progress Bar

Load New Values

```html
<h4>Static Progress Bar</h4>
<div class="progress-static">
  <div class="progress-meter" data-value="16"></div>
</div>

<h4>Labeled, Static Progress Bar</h4>
<div class="progress-static labeled">
  <div class="progress-meter" data-value="87" data-displayval="87%"></div>
  <span>87%</span>
</div>

<h4>Red Static Progress Bar</h4>
<div class="progress-static danger">
  <div class="progress-meter" data-value="8"></div>
</div>

<h4>Green Static Progress Bar</h4>
<div class="progress-static success">
  <div class="progress-meter" data-value="80"></div>
</div>
```

- Instead of a `.progress` container `div`, the static progress bar has a `.progress-static` container `div`.
- Instead of a `progress` element inside the container, there is a `` div</codeAtom> with the class of `.progress-meter` applied to it. ``
- A `div` cannot have a value attribute, so the `.progress-meter` element has `data-value` attribute. The completion value must be dynamically inserted in the `data-value` attribute.
- The `data-value` attribute must contain an integer between 0 and 100.

### Progress Bar Blocks and Groups

Progress bar blocks allow for `label` and `span` elements to be placed alongside the `.progress` and `.progress-static` element. The progress bar block is a wrapper element with the `.progress-block` classname applied to it.

Progress bar groups allow for vertical stacking of elements above and below the progress bar. To create a progress bar group, wrap the `.progress` and `.progress-static` element with a `.progress-group` element.

#### Inline Progress Bar

Simple Layout

More text

Complex Layout

Left

Right

Left

Right

More text

#### Labeled, Static Progress Bar

Complex Layout

Left

Right

25%

Left

Right

#### Stacked Progress Bars

Stacked Layout

95%

25%

82%

Stacked (but resized) Layout

95%

25%

82%

Load New Values

```html
<h4>Inline Progress Bar</h4>
<div class="progress-block">
  <label>Simple Layout</label>
  <div class="progress">
    <progress value="..." max="100" data-displayval="...%"></progress>
  </div>
  <span>More text</span>
</div>

<div class="progress-block">
  <label>Complex Layout</label>
  <div class="progress-group">
    <div class="clr-row">
      <div class="clr-col-6">Left</div>
      <div class="clr-col-6 text-right">Right</div>
    </div>
    <div class="progress-static">
      <div class="progress-meter" data-value="..." data-displayval="...%"></div>
    </div>
    <div class="clr-row">
      <div class="clr-col-6">Left</div>
      <div class="clr-col-6 text-right">Right</div>
    </div>
  </div>
  <span>More text</span>
</div>

<h4>Labeled, Static Progress Bar</h4>
<div class="progress-block">
  <label>Complex Layout</label>
  <div class="progress-group">
    <div class="clr-row">
      <div class="clr-col-6">Left</div>
      <div class="clr-col-6 text-right">Right</div>
    </div>
    <div class="progress-static labeled danger">
      <div class="progress-meter" data-value="..." data-displayval="...%"></div>
      <span>...%</span>
    </div>
    <div class="clr-row">
      <div class="clr-col-6">Left</div>
      <div class="clr-col-6 text-right">Right</div>
    </div>
  </div>
</div>

<h4>Stacked Progress Bars</h4>
<div class="progress-block">
  <label>Stacked Layout</label>
  <div class="progress-group">
    <div class="progress-static labeled danger">
      <div class="progress-meter" data-value="..." data-displayval="...%"></div>
      <span>...%</span>
    </div>
    <div class="progress-static labeled">
      <div class="progress-meter" data-value="..." data-displayval="...%"></div>
      <span>...%</span>
    </div>
    <div class="progress-static labeled success">
      <div class="progress-meter" data-value="..." data-displayval="...%"></div>
      <span>...%</span>
    </div>
  </div>
</div>

<div class="progress-block">
  <label>Stacked (but resized) Layout</label>
  <div class="progress-group" style="font-size: 1px">
    <div class="progress-static danger">
      <div class="progress-meter" data-value="..." data-displayval="...%"></div>
      <span>...%</span>
    </div>
    <div class="progress-static">
      <div class="progress-meter" data-value="..." data-displayval="...%"></div>
      <span>...%</span>
    </div>
    <div class="progress-static success">
      <div class="progress-meter" data-value="..." data-displayval="...%"></div>
      <span>...%</span>
    </div>
  </div>
</div>
```

Progress bar blocks are also available for use inside of Clarity cards.

#### Card title

Here is a progress bar at the very top of a card.

Label

Longer Label

Really, Really, Really Long Label

[Click](javascript://)

```html
<div class="clr-row">
  <div class="clr-col-12 clr-col-sm-6">
    <div class="card">
      <div class="card-block">
        <h4 class="card-title">Card title</h4>
        <p class="card-text">Here is a progress bar at the very top of a card.</p>
        <div class="progress-block">
          <label>Label</label>
          <div class="progress-static">
            <div class="progress-meter" data-value="..."></div>
          </div>
        </div>
        <div class="progress-block">
          <label>Longer Label</label>
          <div class="progress-static">
            <div class="progress-meter" data-value="..."></div>
          </div>
        </div>
        <div class="progress-block">
          <label>Really, Really, Really Long Label</label>
          <div class="progress success">
            <progress value="..." max="100" data-displayval="...%"></progress>
          </div>
        </div>
      </div>
      <div class="card-footer">
        <div class="progress-static top">
          <div class="progress-meter" data-value="..."></div>
        </div>
        <a href="..." class="card-link">Click</a>
      </div>
    </div>
  </div>
</div>
```
