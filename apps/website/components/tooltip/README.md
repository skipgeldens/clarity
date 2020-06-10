---
title: Overview
---

# Tooltips

![HTML5](assets/images/bugs/badge_html5.svg 'HTML5')![CSS3](assets/images/bugs/badge_css3.svg 'CSS3')![Angular](assets/images/bugs/badge_ng.svg 'Angular')

- [Examples & Code](/documentation/tooltips#top)
- [Design Guidelines](/documentation/tooltips#guidelines)

##### A tooltip provides a short description of a UI element.

###### .tooltip

This class wraps an actionable icon followed by the `.tooltip-content` to be shown on the icon. The content appears when the user hovers over the icon.

###### .tooltip-content

This class contains the text that will be shown when the tooltip is visible.

### Sizes

Tooltips support four sizes, defined by using one of the following classes with the `.tooltip` class:

- .tooltip-xs
- .tooltip-sm
- .tooltip-md
- .tooltip-lg

###### Extra Small

[Lorem](javascript://)

```html
<a href="..." role="tooltip" aria-haspopup="true" class="tooltip tooltip-xs">
  <clr-icon shape="info-circle" size="24"></clr-icon>
  <span class="tooltip-content">Lorem</span>
</a>
```

###### Small

[Lorem ipsum sit](javascript://)

```html
<a href="..." role="tooltip" aria-haspopup="true" class="tooltip tooltip-sm">
  <clr-icon shape="info-circle" size="24"></clr-icon>
  <span class="tooltip-content">Lorem</span>
</a>
```

###### Medium

[Lorem ipsum dolor sit amet, ipsum](javascript://)

```html
<a href="..." role="tooltip" aria-haspopup="true" class="tooltip tooltip-md">
  <clr-icon shape="info-circle" size="24"></clr-icon>
  <span class="tooltip-content">Lorem</span>
</a>
```

###### Large

[Lorem ipsum dolor sit amet, consectetur adipisicing elit](javascript://)

```html
<a href="..." role="tooltip" aria-haspopup="true" class="tooltip tooltip-lg">
  <clr-icon shape="info-circle" size="24"></clr-icon>
  <span class="tooltip-content">Lorem</span>
</a>
```

### Directions

Tooltips support six directions, defined by using one of the following classes with the `.tooltip` class:

- .tooltip-top-right
- .tooltip-top-left
- .tooltip-bottom-right
- .tooltip-bottom-left
- .tooltip-right
- .tooltip-left

###### Top-Right

[Lorem ipsum sit](javascript://)

```html
<a href="..." role="tooltip" aria-haspopup="true" class="tooltip tooltip-sm tooltip-top-right">
  <clr-icon shape="info-circle" size="24"></clr-icon>
  <span class="tooltip-content">Lorem ipsum sit</span>
</a>
```

###### Top-Left

[Lorem ipsum sit](javascript://)

```html
<a href="..." role="tooltip" aria-haspopup="true" class="tooltip tooltip-sm tooltip-top-left">
  <clr-icon shape="info-circle" size="24"></clr-icon>
  <span class="tooltip-content">Lorem ipsum sit</span>
</a>
```

###### Bottom-Right

[Lorem ipsum dolor sit amet, ipsum](javascript://)

```html
<a href="..." role="tooltip" aria-haspopup="true" class="tooltip tooltip-md tooltip-bottom-right">
  <clr-icon shape="info-circle" size="24"></clr-icon>
  <span class="tooltip-content">Lorem ipsum dolor sit amet, ipsum</span>
</a>
```

###### Bottom-Left

[Lorem ipsum dolor sit amet, consectetur adipisicing elit](javascript://)

```html
<a href="..." role="tooltip" aria-haspopup="true" class="tooltip tooltip-lg tooltip-bottom-left">
  <clr-icon shape="info-circle" size="24"></clr-icon>
  <span class="tooltip-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit</span>
</a>
```

###### Right

[Lorem ipsum dolor sit amet, ipsum](javascript://)

```html
<a href="..." role="tooltip" aria-haspopup="true" class="tooltip tooltip-right">
  <clr-icon shape="info-circle" size="24"></clr-icon>
  <span class="tooltip-content">Lorem ipsum dolor sit amet, ipsum</span>
</a>
```

###### Left

[Lorem ipsum sit](javascript://)

```html
<a href="..." role="tooltip" aria-haspopup="true" class="tooltip tooltip-sm tooltip-left">
  <clr-icon shape="info-circle" size="24"></clr-icon>
  <span class="tooltip-content">Lorem ipsum sit</span>
</a>
```

### Usage

Use tooltips for actionable icons that do not have text labels, such as the icons in a toolbar. A tooltip is visible on hover.

Don’t use a tooltip on:

- **Components.** Provide a descriptive label and use inline or signpost help for more information.
- **Static images.** Use the HTML alt tag to provide information about the image.
- **Textual links.** Ensure that the link describes its destination and is not truncated.

Don’t rely on tooltips to meet accessibility requirements. Rather, ensure that your underlying content is well-structured for accessibility, for example, by using ARIA roles.

#### Placement

Choose a tooltip position that ensures the entire tooltip is visible on the screen and that the tooltip does not cover an important UI element. By default, the positioning for tooltips is to the top-right of the icon, pointing to its center.

Other positions are:

- Top left
- Bottom right
- Bottom left
- Side left
- Side right

#### Size

Set a width that accommodates the text string. The default is 240 px. Other choices are 72 px, 120 px, and 360 px.

#### Text

- Use a verb phrase to describe the action on the icon, for example, “Edit settings.”
- Use only plain text and be concise. Tooltips can be a sentence fragment.
- If more detailed information is required, use another form of help.
- Use sentence-style caps and no ending punctuation.

## Angular Component

The tooltip component uses the `*clrIfOpen` structural directive (detailed documentation coming soon) on the tooltip content to indicate clearly that said content is only present in the DOM when open. We heavily recommend using it for many reasons: better performance, making the intent clear in your own templates, and following a more natural lifecycle for any directives or components inside of the tooltip.

If for some reason this behavior was not the one you wanted, for instance if you want screenreaders to read the tooltip inline as opposed to when the user moves focus to the trigger, we also support the tooltip content without a `*clrIfOpen` directive on it. It will be created eagerly when the tooltip itself initializes, and will not be destroyed or recreated until the tooltip itself is. Please make sure you know exactly why you are omitting this directive if you end up doing so.

### Summary of Options

###### `<clr-tooltip-content>` component

Input / Output

Values

Default

Effect

**\[clrPosition\]**

Values:
Direction classnames

Default: "right"

top-right, top-left, bottom-right, bottom-left, right, left

right

Sets the direction in which the tooltip will open.

**\[clrSize\]**

Values: xs, sm, md, lg

Default: md

xs, sm, md, lg

md

Sets the size of the tooltip.

**\[clrTooltipLabel\]**

string

Consumers must supply a unique value that is human readable for screen readers.

Populates the value for aria-label attribute needed to enable screen readers in supported browsers.

**\[id\]**

string

Consumers can supply a custom id for the tooltip content. If no id is supplied Clarity will generate one for the tooltip complex. Note: empty strings, undefined and null values will be coerced into an empty string and the content id / trigger aria-describedby values will not be accessible.

clr-tooltip-content(id) associates with the clr-tooltip-trigger(aria-describedby) attribute using this value.

#### Example

Below are tooltip examples using various directions and sizes.

###### Top-Right

```html
<clr-tooltip>
  <clr-icon clrTooltipTrigger shape="info-circle" size="24" aria-label="Uniq tooltip 1"></clr-icon>
  <clr-tooltip-content clrPosition="top-right" clrSize="xs" *clrIfOpen>
    <span>Lorem</span>
  </clr-tooltip-content>
</clr-tooltip>
```

###### Top-Left

```html
<clr-tooltip>
  <clr-icon clrTooltipTrigger shape="info-circle" size="24" aria-label="Uniq tooltip 2"></clr-icon>
  <clr-tooltip-content clrPosition="top-left" clrSize="sm" *clrIfOpen>
    <span>Lorem ipsum</span>
  </clr-tooltip-content>
</clr-tooltip>
```

###### Bottom-Right

```html
<clr-tooltip>
  <clr-icon clrTooltipTrigger shape="info-circle" size="24" aria-label="Uniq tooltip 3"></clr-icon>
  <clr-tooltip-content clrPosition="bottom-right" clrSize="md" *clrIfOpen>
    <span>Lorem ipsum sit</span>
  </clr-tooltip-content>
</clr-tooltip>
```

###### Bottom-Left

```html
<clr-tooltip>
  <clr-icon clrTooltipTrigger shape="info-circle" size="24" aria-label="Uniq tooltip 4"></clr-icon>
  <clr-tooltip-content clrPosition="bottom-left" clrSize="lg" *clrIfOpen>
    <span>Lorem ipsum sit</span>
  </clr-tooltip-content>
</clr-tooltip>
```

###### Right

```html
<clr-tooltip>
  <clr-icon clrTooltipTrigger shape="info-circle" size="24" aria-label="Uniq tooltip 5"></clr-icon>
  <clr-tooltip-content *clrIfOpen>
    <span>Lorem ipsum sit</span>
  </clr-tooltip-content>
</clr-tooltip>
```

###### Left

```html
<clr-tooltip>
  <clr-icon clrTooltipTrigger shape="info-circle" size="24" aria-label="Uniq tooltip 6"></clr-icon>
  <clr-tooltip-content clrPosition="left" clrSize="sm" *clrIfOpen>
    <span>Lorem ipsum sit</span>
  </clr-tooltip-content>
</clr-tooltip>
```
