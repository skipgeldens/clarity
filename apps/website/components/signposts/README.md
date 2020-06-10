---
title: Overview
---

# Signposts

- [Design Guidelines](/documentation/signposts#top)
- [Code & Examples](/documentation/signposts#examples)

##### The signpost is a convenient, lightweight way to show contextual help of information without taking the user out of the current context.

### Examples

![basic and pie chart](assets/images/documentation/signposts/basic-and-pie-chart.svg)

### Description

A signpost displays contextual help or information in a popover dialog. Like a tooltip, it has an arrow/pointer that extends out to the trigger element, but the dialog is larger to fit more content. Signposts are designed to show a relatively small amount of content which may include: a title, images, text links of image links. A vertical scrollbar (browser default) may be used if the content exceeds the maximum height of the dialog.

##### Size

- Min-width 216px; Min-height 84px
- Max-width 360px; Max-height 504px

### Usage

Signposts should be used when you want to show a small amount of contextual help of information without taking the user out of the current context. Use sparingly as a supplemental element and not as a primary method of adding detail.

- When the amount of content won't fit in a tooltip
- When you want to include a header, image or text/image links in the content
- When the information presented needs to stay in view at length (Unlike tooltips, signposts stay in view until the user interacts with another element)

### Interaction

Clicking the icon triggers the signpost. It remains visible until the user clicks the close icon or clicks anywhere outside of the dialog to dismiss it. To keep the interface uncluttered, only one signpost is displayed at a time. When a dialog is visible, clicking an icon to open another one automatically dismisses the previous dialog.

![](assets/images/documentation/signposts/states.svg)

### Trigger icon and dialog positioning

![](assets/images/documentation/signposts/positioning.svg)

Default position for the dialog is 6px to the right of the trigger icon.

![Signposts inline alignment](assets/images/documentation/signposts/inline-alignment.svg)

Default position for the dialog is 6px from the end of the text

![Signpost in column alignment](assets/images/documentation/signposts/column-alignment.svg)

In tables, the icons may be aligned in a column

#### Recommendations

- The popover should not be so large that it dominates the screen
- Make sure that the popover doesn't obstruct other important information on the screen
- With the exception of text/image links, don't insert any actionable components, such as buttons, in the dialog
- Don't rely on signposts as a primary method of displaying additional information - i.e. as a way to save space on a page
- Use sparingly as a device to add immediate, relevant information

### Code & Examples

The signpost component uses the `*clrIfOpen` structural directive (detailed documentation coming soon) on the signpost content to indicate clearly that said content is only present in the DOM when open. We heavily recommend using it for many reasons: better performance, making the intent clear in your own templates, and following a more natural lifecycle for any directives or components inside of the signpost.

If for some reason this behavior was not the one you wanted, for instance if you want screenreaders to read the signpost inline as opposed to when the user activates the trigger, we also support the signpost content without a `*clrIfOpen` directive on it. It will be created eagerly when the signpost itself initializes, and will not be destroyed or recreated until the signpost itself is. Please make sure you know exactly why you are omitting this directive if you end up doing so.

The default signpost is shown to the right of the trigger icon with the content centered vertically in the middle of the trigger. It opens with a click action. Once open its contents can be interacted with. The Signpost is closed when clicking on the icon or by clicking anywhere outside the `clr-signpost-content` element.

Info

```html
<clr-signpost>
  <clr-signpost-content *clrIfOpen>
    <h3>Default Signpost</h3>
    <p>Position: <code class="clr-code">right-middle</code></p>
  </clr-signpost-content>
</clr-signpost>
```

Signposts should be used when you want to show a small amount of contextual help of information without taking the user out of the current context. Use sparingly as a supplemental element and not as a primary method of adding detail. Info

```html
<p>
  Signposts should be used when you want to show a small amount of contextual help of information without taking the
  user out of the current context. Use sparingly as a supplemental element and not as a primary method of adding detail.
  <clr-signpost>
    <clr-signpost-content *clrIfOpen="openState">
      <h3 style="margin-top: 0">Inline signpost</h3>
      <p>Position: <code class="clr-code">right-middle</code></p>
    </clr-signpost-content>
  </clr-signpost>
</p>
```

```typescript
import {Component} from "@angular/core";

@Component({
    ...
})

export class MyClass {
    // Use *clrIfOpen directive to manage hide/show with the openState property.
    public openState: boolean = false;
}
```

### Signpost positions

There are twelve signpost positions to help place the popover in an appropriate position when shown. You control the position and direction by declaring a position that orients your that Signpost content as you see fit. On a `clr-signpost-content` component add the input `[clrPosition]="'position'"` where position is one of the following:

- `top-X:` the arrow will point down and the popover will be above the trigger in the X position where X = left, middle or right
- `bottom-X:` the arrow will point up and the popover will be below the trigger in the X position where X = left, middle or right
- `left-X:` the arrow will point right and the popover will be left of the trigger in the X position where X = top, middle or bottom
- `right-X:` the arrow will point left and the popover will be right of the trigger in the X position where X = top, middle or bottom

Select a position:

top-lefttop-middletop-rightright-topright-middleright-bottombottom-leftbottom-middlebottom-rightleft-topleft-middleleft-bottom

Info

```html
<clr-select-container>
  <label>Select a position:</label>
  <select clrSelect name="position" [(ngModel)]="position">
    <option *ngFor="let position of positions" [ngValue]="position">{{ position }}</option>
  </select>
</clr-select-container>
<clr-signpost>
  <clr-signpost-content [clrPosition]="position" *clrIfOpen>
    <h3 style="margin-top: 0">Position</h3>
    <p><code class="clr-code">{{ position }}</code></p>
  </clr-signpost-content>
</clr-signpost>
```

```typescript
@Component({
    ...
})
export class MyClass {
    positions: string[] = [ "top-left", "top-middle", "top-right",
                            "right-top", "right-middle", "right-bottom",
                            "bottom-left", "bottom-middle", "bottom-right",
                            "left-top", "left-middle", "left-bottom" ];
    position: string = "right-middle";
}
```

### Custom Triggers

We provide a default trigger but you can add one yourself. The signpost component provides the `clrSignpostTrigger` attribute directive that can be added to the `clr-signpost-content` child. To control the position of your signpost, add `[clrPosition]="position"` so that it knows how the Signpost should point.

###### Clarity Icon

###### Button Link

Button Link Trigger

###### Button Link w/ Clarity Icon

Button Link

```html
<div class="signpost-triggers-wrapper">
  <div class="signpost-trigger-demo">
    <div class="signpost-item">
      <h6>Clarity Icon</h6>
      <clr-signpost>
        <clr-icon shape="avatar" class="is-solid has-badge-info" clrSignpostTrigger> </clr-icon>
        <clr-signpost-content [clrPosition]="'bottom-middle'" *clrIfOpen>
          Lorem ipsum...
        </clr-signpost-content>
      </clr-signpost>
    </div>
    <div class="signpost-item">
      <h6>Button Link</h6>
      <div class="trigger-item">
        <clr-signpost>
          <button class="btn btn-link" clrSignpostTrigger>
            Button Link Trigger
          </button>
          <clr-signpost-content [clrPosition]="'top-middle'" *clrIfOpen>
            Lorem ipsum...
          </clr-signpost-content>
        </clr-signpost>
      </div>
    </div>
    <div class="signpost-item">
      <h6>Button Link w/ Clarity Icon</h6>
      <div class="trigger-item">
        <clr-signpost>
          <button class="btn btn-link" clrSignpostTrigger>
            Button Link
            <clr-icon shape="help-info"></clr-icon>
          </button>
          <clr-signpost-content [clrPosition]="'bottom-middle'" *clrIfOpen>
            Lorem ipsum...
          </clr-signpost-content>
        </clr-signpost>
      </div>
    </div>
  </div>
</div>
```

## Summary of Options

Input/Output

Values

Default

Effect

**\[clrPosition\]**

Type: string

Default: right-middle

string

right-middle

Set the position of the `clr-signpost-content` popover: anchorPoint & popoverPosition. For example: "right-middle" (ANCHOR-POSITION) will anchor the clr-signpost-content popover and point to the icons middle on the right side. And, the popover itself will be positioned to the right of the trigger icon with the icon in the vertical middle of the popover.

**clrSignpostTrigger**

Type: SignpostTriggerDirective

Default: n/a

SignpostTriggerDirective

n/a

The SignpostTriggerDirective is placed on the outer-most container element for a custom trigger. It overrides the default Signpost trigger with custom content.
