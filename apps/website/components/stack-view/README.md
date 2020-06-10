---
title: Overview
---

# Stack View

![HTML5](assets/images/bugs/badge_html5.svg 'HTML5')![CSS3](assets/images/bugs/badge_css3.svg 'CSS3')![Angular](assets/images/bugs/badge_ng.svg 'Angular')

- [Examples & Code](/documentation/stack-view#top)
- [Design Guidelines](/documentation/stack-view#guidelines)

##### A stack view displays key/value pairs, which users can expand to show more detail.

### HTML and Styles

We do not recommend using Stack View as a static component since the DOM structure is architected to enable the Stack View's Javascript behavior and animation handling. If you cannot use the Angular component, these are the elements and classes you will need to use to benefit from Clarity's styles, without the animations.

#### Static stack viewEdit

Label 1

Content 1

Label 2

Content 2

Sub-label 1

Sub-content 1

Sub-label 2

Sub-content 2

Sub-label 3

Sub-content 3

Label 3

Content 3

```html
<h4 class="stack-header">
  <span class="stack-title">Static stack view</span>
  <span class="stack-actions">
    <button class="stack-action btn btn-sm btn-link" type="button">Edit</button>
  </span>
</h4>
<dl class="stack-view">
  <div class="stack-block">
    <dt class="stack-block-label" aria-level="1" aria-posinset="1" aria-setsize="3">Label 1</dt>
    <dd class="stack-block-content">Content 1</dd>
  </div>
  <div class="stack-block stack-block-expandable stack-block-expanded">
    <dt class="stack-block-label" aria-level="1" aria-posinset="2" aria-setsize="3">Label 2</dt>
    <dd class="stack-block-content">Content 2</dd>
    <div class="stack-children">
      <div class="stack-block">
        <dt class="stack-block-label" aria-level="2" aria-posinset="1" aria-setsize="3">Sub-label 1</dt>
        <dd class="stack-block-content">Sub-content 1</dd>
      </div>
      <div class="stack-block">
        <dt class="stack-block-label" aria-level="2" aria-posinset="2" aria-setsize="3">Sub-label 2</dt>
        <dd class="stack-block-content">Sub-content 2</dd>
      </div>
      <div class="stack-block">
        <dt class="stack-block-label" aria-level="2" aria-posinset="3" aria-setsize="3">Sub-label 3</dt>
        <dd class="stack-block-content">Sub-content 3</dd>
      </div>
    </div>
  </div>
  <div class="stack-block stack-block-expandable">
    <dt class="stack-block-label" aria-level="1" aria-posinset="3" aria-setsize="3">Label 3</dt>
    <dd class="stack-block-content">Content 3</dd>
    <div class="stack-children"></div>
  </div>
</dl>
```

### Basic Stack View Component

#### Angular stack view

Label 1

Content 1

Expand

Label 2

Content 2

Sub-label 1

Sub-content 1

Sub-label 2

Sub-content 2

Sub-label 3

Sub-content 3

Expand

Label 3

Content 3

Sub-label 4

Sub-content 4

Sub-label 5

Sub-content 5

```html
<clr-stack-view>
  <clr-stack-header>Angular stack view</clr-stack-header>

  <clr-stack-block [clrStackViewLevel]="1" [clrStackViewSetsize]="3" [clrStackViewPosinset]="1">
    <clr-stack-label>Label 1</clr-stack-label>
    <clr-stack-content>Content 1</clr-stack-content>
  </clr-stack-block>

  <clr-stack-block [clrStackViewLevel]="1" [clrStackViewSetsize]="3" [clrStackViewPosinset]="2">
    <clr-stack-label>Label 2</clr-stack-label>
    <clr-stack-content>Content 2</clr-stack-content>
    <clr-stack-block [clrStackViewLevel]="2" [clrStackViewSetsize]="3" [clrStackViewPosinset]="1">
      <clr-stack-label>Sub-label 1</clr-stack-label>
      <clr-stack-content>Sub-content 1</clr-stack-content>
    </clr-stack-block>
    <clr-stack-block [clrStackViewLevel]="2" [clrStackViewSetsize]="3" [clrStackViewPosinset]="2">
      <clr-stack-label>Sub-label 2</clr-stack-label>
      <clr-stack-content>Sub-content 2</clr-stack-content>
    </clr-stack-block>
    <clr-stack-block [clrStackViewLevel]="2" [clrStackViewSetsize]="3" [clrStackViewPosinset]="3">
      <clr-stack-label>Sub-label 3</clr-stack-label>
      <clr-stack-content>Sub-content 3</clr-stack-content>
    </clr-stack-block>
  </clr-stack-block>

  <clr-stack-block [clrStackViewLevel]="1" [clrStackViewSetsize]="3" [clrStackViewPosinset]="3">
    <clr-stack-label>Label 3</clr-stack-label>
    <clr-stack-content>Content 3</clr-stack-content>
    <clr-stack-block>
      <clr-stack-label>Sub-label 4</clr-stack-label>
      <clr-stack-content>Sub-content 4</clr-stack-content>
    </clr-stack-block>
    <clr-stack-block>
      <clr-stack-label>Sub-label 5</clr-stack-label>
      <clr-stack-content>Sub-content 5</clr-stack-content>
    </clr-stack-block>
  </clr-stack-block>
</clr-stack-view>
```

### Stack View With Editing in a Modal

#### Modal editor Edit

Label 1

Content 1

Expand

Label 2

Content 2

Sub-label 1

Sub-content 1

Sub-label 2

Sub-content 2

Sub-label 3

Sub-content 3

Label 3

Content 3

```html
<clr-stack-view>
  <clr-stack-header>
    Modal editor
    <button class="stack-action btn btn-sm btn-link" (click)="editModal = true" type="button">Edit</button>
  </clr-stack-header>

  <clr-stack-block
    *ngFor="let block of blocks; let i = index"
    [clrStackViewLevel]="1"
    [clrStackViewSetsize]="blocks.length"
    [clrStackViewPosinset]="i"
  >
    <clr-stack-label>{{block.title}}</clr-stack-label>
    <clr-stack-content>{{block.content}}</clr-stack-content>

    <clr-stack-block
      *ngFor="let child of block.children; let j = index"
      [clrStackViewLevel]="2"
      [clrStackViewSetsize]="block.children.length"
      [clrStackViewPosinset]="j"
    >
      <clr-stack-label>{{child.title}}</clr-stack-label>
      <clr-stack-content>{{child.content}}</clr-stack-content>
    </clr-stack-block>
  </clr-stack-block>
</clr-stack-view>

<clr-modal [(clrModalOpen)]="editModal">
  <h3 class="modal-title">Edit mode</h3>
  <div class="modal-body">
    <clr-stack-view>
      <clr-stack-block
        *ngFor="let block of blocks; let blockIndex = index"
        [clrSbNotifyChange]="block.content!=='Content '+ (blockIndex)"
        [clrStackViewLevel]="1"
        [clrStackViewSetsize]="blocks.length"
        [clrStackViewPosinset]="blockIndex + 1"
      >
        <clr-stack-label>{{block.title}}</clr-stack-label>
        <clr-stack-content>
          <input type="text" [(ngModel)]="block.content" class="clr-input" />
        </clr-stack-content>

        <clr-stack-block
          *ngFor="let child of block.children; let blockChildIndex = index"
          [clrSbNotifyChange]="child.content!=='Sub-content '+ (blockChildIndex)"
          [clrStackViewLevel]="2"
          [clrStackViewSetsize]="block.children.length"
          [clrStackViewPosinset]="blockChildIndex + 1"
        >
          <clr-stack-label>{{child.title}}</clr-stack-label>
          <clr-stack-content>
            <input type="text" [(ngModel)]="child.content" class="clr-input" />
          </clr-stack-content>
        </clr-stack-block>
      </clr-stack-block>
    </clr-stack-view>
  </div>
  <div class="modal-footer">
    <button type="button" class="btn btn-primary" (click)="editModal = false">Done</button>
  </div>
</clr-modal>
```

### Lazy Loading of Children

This example shows how to leverage the various inputs and outputs provided by `<clr-stack-block>` to make blocks expandable even though their children are loaded on demand from the server.

#### Lazily loaded children Reset

Expand

Label 1

Content 1

Loading...

Label 2

Content 2

```html
<clr-stack-view>
  <clr-stack-header>
    Lazily loaded children
    <button class="stack-action btn btn-sm btn-link" (click)="resetChildren()" type="button">Reset</button>
  </clr-stack-header>

  <clr-stack-block
    #lazyBlock
    [clrSbExpandable]="true"
    (clrSbExpandedChange)="fetchChildren()"
    [clrStackViewLevel]="1"
    [clrStackViewSetsize]="2"
    [clrStackViewPosinset]="1"
  >
    <clr-stack-label>Label 1</clr-stack-label>
    <clr-stack-content>Content 1</clr-stack-content>

    <clr-stack-block
      *ngIf="children.length == 0"
      [clrStackViewLevel]="2"
      [clrStackViewSetsize]="0"
      [clrStackViewPosinset]="1"
    >
      <clr-spinner clrAssertive clrInline>
        Loading...
      </clr-spinner>
    </clr-stack-block>

    <clr-stack-block
      *ngFor="let child of children; let i = index"
      [clrStackViewLevel]="2"
      [clrStackViewSetsize]="children.length"
      [clrStackViewPosinset]="i + 1"
    >
      <clr-stack-label>{{child.title}}</clr-stack-label>
      <clr-stack-content>{{child.content}}</clr-stack-content>
    </clr-stack-block>
  </clr-stack-block>

  <clr-stack-block [clrStackViewLevel]="1" [clrStackViewSetsize]="2" [clrStackViewPosinset]="2">
    <clr-stack-label>Label 2</clr-stack-label>
    <clr-stack-content>Content 2</clr-stack-content>
  </clr-stack-block>
</clr-stack-view>
```

###### Options for `<clr-stack-block>`

Input/Output

Values

Default

Effect

**\[clrSbExpandable\]**

Type: Boolean

Default:
true if `<clr-stack-block>` children are detected

true, false

true if and only if `<clr-stack-block>` children are detected

Makes the stack block expandable, even if it doesn’t contain any nested `<clr-stack-block>`

**\[clrSbExpanded\]**

Type: Boolean

Default: false

true, false

false

Two-way binding on the state of the block: expanded or collapsed. Has no effect if the block is not expandable.

**\[clrSbNotifyChange\]**

Type: Boolean

Default: false

true, false

false

Shows an updated indicator on the stack block, when set to true.

**\[clrStackViewLevel\]**

Type: Number

Default: None

None

[aria-level](https://www.w3.org/TR/wai-aria-1.1/#aria-level) Defines the hierarchical level of an element within a structure.

**\[clrStackViewSetsize\]**

Type: Number

Default: None

None

[aria-setsize](https://www.w3.org/TR/wai-aria-1.1/#aria-setsize) Defines the number of items in the current set of listitems.

**\[clrStackViewPosinset\]**

Type: Number

Default: None

None

[aria-posinset](https://www.w3.org/TR/wai-aria-1.1/#aria-posinset) Defines an element's number or position in the current set of listitems.

### Usage

Stack views are designed for use in the main content area and modals. Use a stack view when you want to:

- Display related key/value pairs, for example, an object’s settings.
- Progressively disclose data. This is useful when the set of key/value pairs is large or you want to enable users to reveal more complex or less frequently used data as necessary.

#### Enabling Value Editing

In this pattern, the component includes an Edit button on the top right, which on click opens an editable stack view in a modal. This design prevents users from accidentally altering a value in the main content area. Common editing controls include input fields, select boxes, checkboxes, and radio buttons.

#### Labels

- Provide terse labels that let users know what is under the label. Try to keep the label to one line.
- Use noun phrases, sentence-style capitalization, and no ending punctuation.
- Avoid using icons.

#### Highlights and Horizontal lines

The stack view highlight color (#DDDDDD) differs from the usual Clarity highlight color to make it more distinct. Expanded sections have a lighter background color to make it easier to understand the hierarchy.

Horizontal lines in the stack editor are for readability–they help users quickly discern the relationship between columns.

#### Accessibility

To provide better accessibility to the StackView some attributes have to be set manualy to `.stack-block-label` element in the static form or use one of the provided inputs to `ClrStackBlock`.
