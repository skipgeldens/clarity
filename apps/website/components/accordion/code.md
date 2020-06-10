---
title: Code
toc: true
---

Accordions by default only allow one panel to be open at a time. To enable multiple panels set `clrAccordionMultiPanel="true"` on the `clr-accordion` component.

Leverage our optional `*clrIfExpanded` structural directive on the `clr-accordion-panel` to only instantiate children when they are displayed.

## Examples

### Basic

A basic accordion is made up of a set of panels, each with a title and content.

```
<<< ../angular/src/stories/accordion/basic.html
```

### Bindings

The Accordion has several bindings for setting options and listening for events.

```
<<< ../angular/src/stories/accordion/bindings.html
```

### Conditional rendering

Using the optional `*clrIfExpanded` structural directive, you can conditionally render the content only when the panel is opened. This is useful when you have a lot of content inside of the panels that could be slowing down the browser. Be aware that it also removes the content from the DOM when the panel closes, which could have side effects if your content has state.

```
<<< ../angular/src/stories/accordion/with-if-expanded.html
```

## API

### `ClrAccordion` Component

```html
<clr-accordion [clrAccordionMultiPanel]="multi"></clr-accordion>
```

#### Inputs

- `clrAccordionMultiPanel: boolean` - Allows multiple panels to be open at the same time. Default: `false`.

### `ClrAccordionPanel` Component

```html
<clr-accordion-panel [clrAccordionPanelDisabled]="false" [(clrAccordionPanelOpen)]="panelState"> </clr-accordion-panel>
```

#### Inputs

- `clrAccordionPanelDisabled: boolean` - Disable the panel from changing its open state, will be locked opened or closed. Default: `false`.

#### Two-way Bindings

- `clrAccordionPanelOpen: boolean` - Change the open state of the panel. Default: `false`.

### `ClrIfExpanded` Directive

```html
<clr-accordion-panel *clrIfExpanded></clr-accordion-panel>
```

#### Inputs

- `clrIfExpanded: boolean` - Allows setting the open state of the panel, and will create on open and destroy the contents on close. Default: `false`.
