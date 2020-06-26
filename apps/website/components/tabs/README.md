---
title: Overview
toc: true
---

Tabs divide content into separate views which users navigate between.

## Usage

Use tabs for alternate views within the [sidenav](./sidenav) or main content area.

Don’t use tabs to break user interactions into a series of steps. Serial workflows are best presented in a [wizard](./wizard).

<!-- [//]: # Types -->

## Anatomy

While the content within tabs is flexible, follow these guidelines for organization and presentation:
-Ensure that the content in each view is independent of the content in other views.
-Don’t force users to navigate back and forth to compare data–keep such content in the same view.
-Avoid cross-linking between tabs.
-If the content within a view is broad, divide it into subsections.

<!-- [//]: # Behavior -->

## Placement

Tabs appear in a single, non-scrollable row, above their content. The width of each tab is dependent on its label.
To ensure that all tabs appear in the container, avoid using more than seven tabs and limit labels to one or two words.

Avoid using tabs in cards and modals.

## Content

- Ensure that the labels show a clear relationship between views.
- Favor nouns over verbs, for example, Settings, Permissions, and Performance.
- Avoid generic labels such as General or Advanced.
- Use title-style caps.
- Avoid using icons in labels.

## Code Examples

### Simple Tabs

The tabs component uses the `*clrIfActive` structural directive to lazy load the content of an active tab. For simple cases, using the microsyntax as shown below would suffice.

- Dashboard
- Management
- Cloud

Content for Dashboard tab. Here is a [link](javascript://) that can be accessed via clicking or through keyboard via tabbing.

```html
<clr-tabs>
  <clr-tab>
    <button clrTabLink id="link1">Tab1</button>
    <clr-tab-content id="content1" *clrIfActive>
      ...
    </clr-tab-content>
  </clr-tab>
  <clr-tab>
    <button clrTabLink>Tab2</button>
    <clr-tab-content *clrIfActive="true">
      ...
    </clr-tab-content>
  </clr-tab>
</clr-tabs>
```

##### Tabs with two-way binding

If you'd like to use two-way binding on the active state of the tabs, we recommend that you use the de-sugared syntax of the structural directive by wrapping it in `ng-template` as shown below.

- Dashboard
- Management
- Cloud
- Infrastructure

Content for Dashboard tab. Here is a [link](javascript://) that can be accessed via clicking or through keyboard via tabbing.

```html
<clr-tabs>
  <clr-tab>
    <button clrTabLink>Dashboard</button>
    <ng-template [(clrIfActive)]="dashboardActive">
      <clr-tab-content>
        ...
      </clr-tab-content>
    </ng-template>
  </clr-tab>

  <clr-tab>
    <button clrTabLink>Management</button>
    <ng-template [(clrIfActive)]="managementActive">
      <clr-tab-content>
        ...
      </clr-tab-content>
    </ng-template>
  </clr-tab>

  <clr-tab>
    <button clrTabLink>Cloud</button>
    <ng-template [(clrIfActive)]="cloudActive">
      <clr-tab-content>
        ...
      </clr-tab-content>
    </ng-template>
  </clr-tab>

  <clr-tab>
    <button clrTabLink>Infrastructure</button>
    <ng-template [(clrIfActive)]="infrastructureActive">
      <clr-tab-content>
        ...
      </clr-tab-content>
    </ng-template>
  </clr-tab>
</clr-tabs>
```

##### Tab Overflow

Tab overflow is used when the tab group is larger than its containing space, or used to preserve space. The overflow is configurable so you can assign tabs to the dropdown menu.

Tab overflow is shown below as an ellipsis button in the tab group and is the last position to the right. Clicking on the ellipsis will show the overflow dropdown menu.

We recommend that a overflow dropdown have at least two options in it. We also recommend that you test out scenarios with tab labels that may vary in length or when translated to another language to make sure there is enough room for them.

- Dashboard
- Management

- More
  CloudSettings

Content for Dashboard tab. Here is a [link](javascript://) that can be accessed via clicking or through keyboard via tabbing.

```html
<clr-tabs>
  <clr-tab>
    <button clrTabLink>Dashboard</button>
    <clr-tab-content *clrIfActive>
      ...
    </clr-tab-content>
  </clr-tab>

  <clr-tab>
    <button clrTabLink>Management</button>
    <clr-tab-content *clrIfActive>
      ...
    </clr-tab-content>
  </clr-tab>

  <clr-tab>
    <button clrTabLink>Cloud</button>
    <clr-tab-content *clrIfActive>
      ...
    </clr-tab-content>
  </clr-tab>

  <clr-tab>
    <button clrTabLink [clrTabLinkInOverflow]="inOverflow">Settings</button>
    <clr-tab-content *clrIfActive>
      ...
    </clr-tab-content>
  </clr-tab>

  <clr-tab>
    <button clrTabLink [clrTabLinkInOverflow]="inOverflow">Alerts</button>
    <clr-tab-content *clrIfActive>
      ...
    </clr-tab-content>
  </clr-tab>
</clr-tabs>
```

##### Vertical Tabs

If you'd like to use vertical tabs add `clrLayout="vertical"` parameter to the `clr-tabs` component.

- Dashboard
- Management
- Cloud

Content for Dashboard tab. Here is a [link](javascript://) that can be accessed via clicking or through keyboard via tabbing.

```html
<clr-tabs clrLayout="vertical">
  <clr-tab>
    <button clrTabLink id="link1">Tab1</button>
    <clr-tab-content id="content1" *clrIfActive>
      ...
    </clr-tab-content>
  </clr-tab>
  <clr-tab>
    <button clrTabLink>Tab2</button>
    <clr-tab-content *clrIfActive="true">
      ...
    </clr-tab-content>
  </clr-tab>
</clr-tabs>
```
