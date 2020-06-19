---
title: API
toc: true
---

## Angular Components

{.section-header}

### ClrTooltip

#### Selector & Basic Usage

```html
<clr-tooltip>
  <!-- clrTooltipTrigger -->
  <!-- clr-tooltip-content -->
</clr-tooltip>
```

### ClrTooltipContent

#### Selector & Basic Usage

```html
<clr-tooltip>
  <!-- clrTooltipTrigger -->
  <clr-tooltip-content>
    Concise description.
  </clr-tooltip-content>
</clr-tooltip>
```

#### Bindings

<DocComponentApi component="ClrTooltipContent" item="bindings" />

## Angular Directives

{.section-header}

### ClrTooltipTrigger

Used to designate the open/close element for [ClrTooltipContent](./api.md#clrtooltipcontent).

#### Selector & Basic Usage

```html
<clr-tooltip>
  <clr-icon shape="help" clrTooltipTrigger></clr-icon>
  <!-- clr-tooltip-content -->
</clr-tooltip>
```

### ClrIfOpen

#### Selector & Basic Usage

```html
<clr-tooltip>
  <!-- clrTooltipTrigger -->
  <clr-tooltip-content *clrIfOpen>
    Concise description.
  </clr-tooltip-content>
</clr-tooltip>
```

#### Properties

<DocComponentApi component="ClrIfOpen" item="bindings" />
