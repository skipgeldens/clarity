---
title: Overview
---

# Tabs

![HTML5](assets/images/bugs/badge_html5.svg 'HTML5')![CSS3](assets/images/bugs/badge_css3.svg 'CSS3')![Angular](assets/images/bugs/badge_ng.svg 'Angular')

- [Examples & Code](/documentation/tabs#top)
- [Design Guidelines](/documentation/tabs#guidelines)

##### Tabs divide content into separate views which users navigate between.

#### Static

The following is a static example of tabs with their associated sections. You cannot switch between tabs in this static demo because it does not contain the JavaScript to handle this behavior.

The active tab should have the additional class `active`. The stylesheet will hide all the section elements where attribute `aria-hidden` is set to `true`.

- Dashboard
- Management
- Cloud

You cannot switch between tabs in this static demo because it does not contain the JavaScript to handle this behavior. The demo is here to show the look of tabs and the DOM structure.

Content 2

Content 3

```html
<ul id="demoTabs" class="nav" role="tablist">
  <li role="presentation" class="nav-item">
    <button id="tab1" class="btn btn-link nav-link active" aria-controls="panel1" aria-selected="true" type="button">
      Dashboard
    </button>
  </li>
  <li role="presentation" class="nav-item">
    <button id="tab2" class="btn btn-link nav-link" aria-controls="panel2" aria-selected="false" type="button">
      Management
    </button>
  </li>
  <li role="presentation" class="nav-item">
    <button id="tab3" class="btn btn-link nav-link" aria-controls="panel3" aria-selected="false" type="button">
      Cloud
    </button>
  </li>
</ul>
<section id="panel1" role="tabpanel" aria-labelledby="tab1">
  ...
</section>
<section id="panel2" role="tabpanel" aria-labelledby="tab2" aria-hidden="true">
  ...
</section>
<section id="panel3" role="tabpanel" aria-labelledby="tab3" aria-hidden="true">
  ...
</section>
```

###### Vertical Tabs

If you'd like to use vertical tabs add `tabs-vertical` class to the container.

- Dashboard
- Management
- Cloud

You cannot switch between tabs in this static demo because it does not contain the JavaScript to handle this behavior. The demo is here to show the look of tabs and the DOM structure.

Content 2

Content 3

```html
<div class="tabs-vertical">
  <ul id="demoTabs" class="nav" role="tablist">
    <li role="presentation" class="nav-item">
      <button id="tab1" class="btn btn-link nav-link active" aria-controls="panel1" aria-selected="true" type="button">
        Dashboard
      </button>
    </li>
    <li role="presentation" class="nav-item">
      <button id="tab2" class="btn btn-link nav-link" aria-controls="panel2" aria-selected="false" type="button">
        Management
      </button>
    </li>
    <li role="presentation" class="nav-item">
      <button id="tab3" class="btn btn-link nav-link" aria-controls="panel3" aria-selected="false" type="button">
        Cloud
      </button>
    </li>
  </ul>
  <section id="panel1" role="tabpanel" aria-labelledby="tab1">
    ...
  </section>
  <section id="panel2" role="tabpanel" aria-labelledby="tab2" aria-hidden="true">
    ...
  </section>
  <section id="panel3" role="tabpanel" aria-labelledby="tab3" aria-hidden="true">
    ...
  </section>
</div>
```

###### Accessibility

The active tab should have the attribute `aria-selected` set to `true`, and the others to false.

The active panel associated with the active tab should have the attribute `aria-hidden` set to `true`, and the others `to false`.

In addition, each tab should have an aria-controls attribute set to the id of the matching panel and each panel should have an `aria-labelledby` attribute set to the id of the tab associated with the panel.

#### Angular Component

##### Simple Tabs

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

###### Accessibility

All attributes associated with accessibility (`aria-controls`, `aria-selected`, `aria-hidden`, `aria-labelledby`, `role`) are automatically created and managed by the angular component.

#### Summary of Options

##### Tabs Component (clrTabs)

Input/Output

Values

Default

Effect

**\[clrLayout\]**

Values:
<'horizontal', 'vertical'>

Default: 'horizontal'

<'horizontal', 'vertical'>

'horizontal'

If set to 'vertical', will change tabs layout to vertical.

##### Tab Link Directive (clrTabLink)

Input/Output

Values

Default

Effect

**\[id\]**

Values:
any valid id for html element

Default: auto-generated

any valid id for html element

auto-generated

If explicitly set, will assign the set id as the id for the element. If not set, the component will auto-generate the id.

##### Tab Content (clr-tab-content)

Input/Output

Values

Default

Effect

**\[clrTabLinkInOverflow\]**

Values:
true, false

Default: false

<true, false>

false

If true, then this tab link will go into the overflow section of the tabs.

**\[id\]**

Values:
any valid id for html element

Default: auto-generated

any valid id for html element

auto-generated

Used on `<clr-tab-content>`. If explicitly set, will assign the set id as the id for the element. If not set, the component will auto-generate the id.

##### Angular Directives used along with clr-tab-content

Input/Output

Values

Default

Effect

**\[(clrIfActive)\]**

Values:
true, false

Default: false

<true, false>

false

Two-way binding on the state of the tab content. The content of the active tab will lazily load when set to true, and destroy it when set to false.

### Usage

Use tabs for alternate views within the [sidenav](/documentation/sidenav) or main content area.

Don’t use tabs to break user interactions into a series of steps. Serial workflows are best presented in a [wizard](/documentation/wizards).

Avoid using tabs in cards and modals.

### Presentation

Tabs appear in a single, non-scrollable row, above their content. The width of each tab is dependent on its label.

To ensure that all tabs appear in the container, avoid using more than seven tabs and limit labels to one or two words.

### Content

While the content within tabs is flexible, follow these guidelines for organization and presentation:

- Ensure that the content in each view is independent of the content in other views.
- Don’t force users to navigate back and forth to compare data–keep such content in the same view.
- Avoid cross-linking between tabs.
- If the content within a view is broad, divide it into subsections.

### Labels

- Ensure that the labels show a clear relationship between views.
- Favor nouns over verbs, for example, Settings, Permissions, and Performance.
- Avoid generic labels such as General or Advanced.
- Use title-style caps.
- Avoid using icons in labels.
