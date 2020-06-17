---
title: API
toc: true
---

## Components

{.section-header}

### ClrModal

ClrDropdown is the parent container for all child components and projected content. It allows users to choose an option or action from a contextual list. ClrDropdown can be nested inside of other ClrDropdown components.

#### Selector & Basic Usage

```html
<clr-modal [(clrModalOpen)]="basic">
  <h3 class="modal-title">I have a nice title</h3>
  <div class="modal-body">
    <p>But not much to say...</p>
  </div>
  <div class="modal-footer">
    <button type="button" class="btn btn-outline" (click)="basic = false">Cancel</button>
    <button type="button" class="btn btn-primary" (click)="basic = false">Ok</button>
  </div>
</clr-modal>
```

#### Properties

<DocComponentApi component="ClrModal" item="bindings" />

#### Methods

<DocComponentApi component="ClrModal" item="methods" />
