---
title: Overview
toc: true
---

# Tabs

Tabs divide content into separate views which users navigate between.

## Usage

::: do Use tabs for alternate views
<DocInset height="100">
Use tabs in hte main content area or, alternatively use the [vertical nav](/components/vertical-nav) component to break up separate views.

</DocInset>
:::

::: dont Use tabs to beak up user interactions
<DocInset height="100">
Use tabs to break user interactions into a series of steps. Serial workflows are best presented in a multistep workflow, like [wizard](/components/wizards), [stepper](/components/stepper), or a [timeline](/components/timeline).

</DocInset>
:::

### Content

Content projected within tabs is flexible. Follow these guidelines to organize and present content effectively:

1. Place content in each view that is independent of the content in other views
2. Don’t force users to navigate back and forth to compare data
3. Avoid cross-linking between tabs
4. When the content within a view is broad, divide it into subsections
5. Avoid using tabs in [cards](/components/cards) and [modals](/components/modals)

### Presentation

Tabs appear in a single, non-scrollable row, above their content. The width of each tab is dependent on its label.

When there are seven or fewer tabs, limit the labels to on or two words. This ensures that all tabs appear in the container. If the application is using Angular and there need to be more than seven tabs look into the overflow inputfor [ClrTabLink](/components/tabs/api.html#clrtablink).

### Labels

Use labels to organize the tabs and their content.

1. Ensure that the labels show a clear relationship between views
1. Favor nouns over verbs, for example, Settings, Permissions, and Performance
1. Avoid generic labels such as General or Advanced
1. Use title-style caps
1. Avoid using icons in labels

## Types

There are four types of tabs that might be used. Go to the [demo](/components/tabs/demo.html) to see them in action.
For optimization, tabs component uses the \*clrIfActive structural directive to lazy load the content of an active tab.
If you need two-way binding on the active state of a tab, use the de-sugared syntax for the [ClrIfActive](/components/tabs/api.html#clrifactive) structural directive shown beloe in the two way binding example.

### Horizontal

<doc-demo src="/demos/tabs/horizontal-ng.html" demo="/demos/tabs/horizontal-css.html" />

### Vertical

<doc-demo src="/demos/tabs/vertical-ng.html" demo="/demos/tabs/vertical-css.html" />

### Overflow

When there are to many horizontal tabs to fit into the viewport, use overflow to hide less important tabs.
<doc-demo src="/demos/tabs/overflow-ng.html" demo="/demos/tabs/overflow-css.html" />

### Two-way Binding

<doc-demo src="/demos/tabs/two-way-ng.html" demo="/demos/tabs/two-way-css.html" />

## Anatomy

Compose tabs with the following components and directives. ClrIfActive is optional but recommended.

### ClrTabs

[ClrTabs](/components/tabs/api.html#clrtabs) is the parent container for all angualr children components. Its default layout is horizontal but it can also be set to vertical.

### ClrTab

[ClrTab](/compnents/tabs/api.html#clrtab) is a child of [ClrTabs](/components/tabs/api.html#clrtabs) that contains the tab link and the tab content which must be associated together.

### ClrTabContent

[ClrTabContent](/compnents/tabs/api.html#clrtabcontent) is a component where application content can be projected into for diusplay.

### ClrTabLink

[ClrTabLink](/compnents/tabs/api.html#clrtablink) is an attribute directive that designates button elements to be used as the displayed tab.

### ClrIfActive

[ClrIfActive](/compnents/tabs/api.html#clrifactive) is a structural directive used to lazy load the tab content.

## Accessibility

The Clarity Angular components implement the following behaviors to make them accessible.

1. The active tab has the attribute aria-selected set to true, and the others to false
1. The active panel associated with the active tab has the attribute aria-hidden set to true, and the others panels to false
1. ach tab should has an aria-controls attribute set to the id of the matching panel and each panel has an aria-labelledby attribute set to the id of the tab associated with the panel
