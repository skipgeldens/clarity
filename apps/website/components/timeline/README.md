---
title: Overview
---

# Timeline

- [Design Guidelines](/documentation/timeline#top)
- [Code & Examples](/documentation/timeline#examples)

##### A timeline is a visual indicator that shows progress and might guide the user through specific processes or pre-defined steps while also showing current progress.

### Design Guidelines

Timeline should set an expectation for the whole process by breaking it up into concrete steps and a pre-determined goal. It shows the user their progress along the steps of the timeline with a current step. For all of the steps, a timeline can provide additional information such as a header (timestamp), an icon showing state, a title and a description that optionally includes related contextual actions.

### Layout

There are two types of layouts, horizontal and vertical.

![](assets/images/documentation/timeline/timeline-horizontal-example.svg)

###### Horizontal

- Used when there are workflows of 3 - 5 steps
- Used when all steps can be displayed without wrapping

![](assets/images/documentation/timeline/timeline-vertical-example.svg)

###### Vertical

- Used when there are workflows greater than five steps
- Used when timestamps are optional

### Timeline Step States

Every timeline step has one of five steps. With one exception these steps are represented with a Clarity Icon. The exception is for loading state which uses the `clr-spinner` component.

1.  \- **Step complete** uses the `success-standard` shape
2.  \- **Current step** uses the `dot-circle` shape
3.  \- **Not started, available to start** uses the `circle` shape
4.  Fetching data - **Processing user initiated action** uses the `clr-spinner` (w/ clrMedium size) component
5.  \- **Error completing step** uses the `error` shape

#### Showing the current step

By default, step one is highlighted as the current step.

![](assets/images/documentation/timeline/timeline-step-1.svg)

When step one is complete the step two gets highlighted.

![](assets/images/documentation/timeline/timeline-step-2.svg)

When steps one and two are complete, step three gets highlighted.

![](assets/images/documentation/timeline/timeline-step-3.svg)

All steps are complete.

![](assets/images/documentation/timeline/timeline-step-4.svg)

#### Additional States

![](assets/images/documentation/timeline/timeline-error-state.svg)

###### Error

- Display the error message under the error icon if needed
- Tooltips are not recommended because of low affordance

![](assets/images/documentation/timeline/timeline-loading-state.svg)

###### Loading

- When loading or taking action, display a spinner
- Disable buttons when loading or make buttons contextual for the loading state (e.g CANCEL)

### Step Description

It is optional to have a step description that offers additional information and guidance to the user. This information can be displayed all of the time or only for the current step.

![](assets/images/documentation/timeline/single-step-description.svg)

###### Single step description

![](assets/images/documentation/timeline/all-step-descriptions.svg)

###### All step descriptions

### Code & Examples

#### Structure

A Timeline is structured as a container component with classes placed on the correct DOM structure to target elements for timeline specific style and layout. Te first container element is an unordered list element with `.clr-timeline` class. Each list item corresponds to a step that has the `.clr-timeline-step` class on it. Steps are composed with several children elements. Timelines can be either horizontal or vertical and it is specified by the css class declared with the `.clr-timeline`element.

Each timeline step can have three children elements:

1.  An optional header (`.clr-timeline-step-header`) that appears above the timeline when its horizontal and to the left of the timeline when its vertical. In the demos they are populated with times. e.g 11:59am.
2.  An icon shape that corresponds to the correct step state (note usage of `aria-label` for accessibility):
    - : **Step complete** uses the `success-standard` shape
    - : **Current step** uses the `dot-circle` shape
    - : **Not started, available to start** uses the `circle` shape
    - Loading... : **Processing user initiated action** uses the `spinner` shape
    - : **Error completing step** uses the `error` shape
3.  A container element for the `.clr-timeline-step-body` that contains two children elements:
    - A `.clr-timeline-step-title` for calling out the step title below the step icon when horizontal and on the right at the top of the step when it is vertical
    - A `.clr-timeline-step-description`
      to put a longer description that wraps with the width of the step container. This is also where (optional) action buttons will be placed.

#### CSS Classes (for Clarity UI static implementation)

Classname

Description

`.clr-timeline`

Designates the timeline container element and is used on an unordered list `ul`. This class should only contain `li` children with the `clr-timeline-step` class.

`.clr-timeline-horizontal`

Used in conjunction with `clr-timeline` class to designate a horizontal timeline.

`.clr-timeline-vertical`

Used in conjunction with `clr-timeline` class to designate a vertical timeline.

`.clr-timeline-step`

A class to designate a step container. It should be placed on an `li` element as a child of the `clr-timeline` class.

`.clr-timeline-step-header`

Used to display information like a time or a date. This element will appear **above** the [ClarityIcon](/icons) used in the time line step when its a horizontal timeline and to the **left** when it is a vertical timeline.

`clr-timeline-step-body`

This is a container class used to group the `.clr-timeline-step-title` and `.clr-timeline-step-description` elements. This element will appear **below** the [ClarityIcon](/icons) used in the timeline step when its a horizontal timeline and to the **right** when it is a vertical timeline.

`.clr-timeline-step-title`

Used inside of the `clr-timeline-step-body` container this is a bolded title that describes the step.

`.clr-timeline-step-description`

This element contains a longer description and details about the step it is used on. This is also where consumers should place any action buttons that may be used in **this** step.

#### Examples

Lets look at some of the elements in isolation and then put everything together at the bottom of the page.

### Timeline

###### Vertical Timeline Container

```html
<ul class="clr-timeline clr-timeline-vertical">
  ...
</ul>
```

###### Horizontal Timeline Container

```html
<ul class="clr-timeline clr-timeline-horizontal">
  ...
</ul>
```

### Timeline Step

###### Timeline Step Container

```html
<li class="clr-timeline-step">
  <div class="clr-timeline-step-header">11:59 am</div>
  <clr-icon shape="circle" aria-label="Not started"></clr-icon>
  <div class="clr-timeline-step-body">
    ...
  </div>
</li>
```

Warning

For loading steps, notice that instead of a `clr-icon` element we use a ClrSpinner component.

```html
<clr-spinner clrMedium aria-label="In progress">Fetching data</clr-spinner>
```

### Timeline Step Body

```html
<div class="clr-timeline-step-body">
  <span class="clr-timeline-step-title">Body Title</span>
  <span class="clr-timeline-step-description">Body Description.</span>
</div>
```

### Full Demo

- Clarity UI (Static Horizontal)
- Clarity UI (Static Vertical)
- Clarity Angular

#### ClrTimeline

##### Coming Soon [(Contributions welcome)](https://github.com/vmware/clarity/issues/1633)

##### Horizontal Timeline

- 11:59 am

  Add KMSRoot CA certificate requested.

- 11:59 am

  Add KMS Root CA certificate requested. Upload it to the KMS to complete the connection. Action

- 11:59 am

  Fetching data

  Make vCenter trust KMS Root CA certificate requested. Upload it to the KMS to complete the connection. Third sentence is very long and very long.

- 11:59 am

  Make KMS trust vCenterUpload it to the KMS to complete the connection. Third sentence. Action

- 11:59 am

  ConnectedNo. It's not connected.

```html
<ul class="clr-timeline clr-timeline-horizontal">
  <li class="clr-timeline-step disabled">
    <div class="clr-timeline-step-header">11:59 am</div>
    <clr-icon shape="circle" aria-label="Not started"></clr-icon>
    <div class="clr-timeline-step-body">
      <span class="clr-timeline-step-title">Add KMS</span>
      <span class="clr-timeline-step-description">Root CA certificate requested.</span>
    </div>
  </li>
  <li class="clr-timeline-step">
    <div class="clr-timeline-step-header">11:59 am</div>
    <clr-icon shape="dot-circle" aria-current="true" aria-label="Current"></clr-icon>
    <div class="clr-timeline-step-body">
      <span class="clr-timeline-step-title">Add KMS</span>
      <span class="clr-timeline-step-description">
        Root CA certificate requested. Upload it to the KMS to complete the connection.
        <button class="btn btn-sm">Action</button>
      </span>
    </div>
  </li>
  <li class="clr-timeline-step">
    <div class="clr-timeline-step-header">11:59 am</div>
    <clr-spinner clrMedium aria-label="In progress">Fetching data</clr-spinner>
    <div class="clr-timeline-step-body">
      <span class="clr-timeline-step-title">Make vCenter trust KMS</span>
      <span class="clr-timeline-step-description">
        Root CA certificate requested. Upload it to the KMS to complete the connection. Third sentence is very long and
        very long.
      </span>
    </div>
  </li>
  <li class="clr-timeline-step">
    <div class="clr-timeline-step-header">11:59 am</div>
    <clr-icon shape="success-standard" aria-label="Completed"></clr-icon>
    <div class="clr-timeline-step-body">
      <span class="clr-timeline-step-title">Make KMS trust vCenter</span>
      <span class="clr-timeline-step-description"
        >Upload it to the KMS to complete the connection. Third sentence.
        <button class="btn btn-sm btn-link">Action</button>
      </span>
    </div>
  </li>
  <li class="clr-timeline-step">
    <div class="clr-timeline-step-header">11:59 am</div>
    <clr-icon shape="error-standard" aria-label="Error"></clr-icon>
    <div class="clr-timeline-step-body">
      <span class="clr-timeline-step-title">Connected</span>
      <span class="clr-timeline-step-description">No. It's not connected.</span>
    </div>
  </li>
</ul>
```
