---
title: Accessibility
---

## Accessibility

If your icon button has no text, we recommend adding the **title="" attribute** to your icon buttons. This adds some
additional context for users unfamiliar with what action your icon button might produce. The text should reflect the
action.

```html
<div class="btn-group btn-primary btn-icon">
  <button class="btn">
    <clr-icon shape="check" title="Check"></clr-icon>
  </button>
  <button class="btn">
    <clr-icon shape="home" title="home"></clr-icon>
  </button>
  <button class="btn">
    <clr-icon shape="user" title="user"></clr-icon>
  </button>
</div>
```
