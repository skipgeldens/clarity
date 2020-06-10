---
title: Overview
---

# Modals

- [Design Guidelines](/documentation/modals#top)
- [Code & Examples](/documentation/modals#examples)

##### Modals provide information or help a user complete a task. They require the user to take an action to dismiss them.

### Style

Beginning of Modal Content

### Add datastore to host

Select a host where you want your datastore to be added.

Host

10.11.12.1314.15.16.1718.19.20.2122.23.24.25

CancelAdd

End of Modal Content

###### Title

The title **summarizes the purpose** of the modal. In a confirmation modal, use a question in your title and make sure the action is clearly called out in the buttons.

###### Content

The content may differ between different types of modals. **Be concise and provide a clear explanation** of the task or information a user should focus on.

###### Buttons

Buttons should include clear and direct action for the user to take. Buttons are right-aligned based on the **Z Pattern**. Read more about it in [Button Placement](/documentation/buttons).

### Sizes

There are multiple sizes for modals. The Clarity modal defaults to medium but different sizes could be used based on the content and screen sizes you are planning to support. Always remember to test responsiveness as you design and use modals.

S

###### Small Modal

Width: 288px

Launch

M

###### Medium Modal

Width: 576px

Launch

L

###### Large Modal

Width: 864px

Launch

XL

###### X-Large Modal

Width: 1152px

Launch

### Overlay

The background overlay is dark with opacity to provide the feeling of a third dimensional layer. This also eliminates distraction and helps the user focus on the modal content.

### Animation

The background overlay animates once a modal is launched to grab a user’s attention and retain their focus.

### Delete datastore

Are you sure you want to delete **datastore743**? This action is permanent and cannot be recovered.

CancelDelete

### Behavior

Modals are used in different scenarios. Most notably: alerting the user, confirmation dialogs, and task-oriented workflows.

###### Focus

Modals are disruptive. Only use modals when you need the user’s **full attention** for the period of time the modal is displayed.

###### Dismissing modals

A user needs to **actively** dismiss a modal. A modal should **not** disappear on its own. Taking any of the actions to either cancel or proceed should eventually dismiss the modal.

![Different ways modals can be dismissed](assets/images/documentation/modals/dismissing.png)

There are multiple ways to dismiss a modal but a user needs to **intentionally** make that choice.

Clarity Modals are not dismissed when clicking on the background overlay. This prevents losing information or data. An option to override this is available.

###### Stacking modals

Modals shouldn’t launch other modals. Stacking modals makes it hard to dismiss them and confuses the user on their levels of importance.

If you see a need to stack modals, you should:

- Seek alternatives to the second modal such as inline expansion within the first one.
- Seek alternatives to the use of modals in that scenario and explore alternatives such as inline task completion.

![Don't stack modals on top of each other](assets/images/documentation/modals/stacking.png)

###### Don't

Stack multiple modals on top of each other.

###### Scrolling

Scrolling makes it hard for a user to go through the content of your modal or complete the task assigned. Use scrolling only when absolutely needed.

If your modals scroll, make sure:

- You’re using the right modal size based on your content and supported screen sizes.
- Consider alternative components to using modal if the content is too long or too complex within a modal.

### Code & Examples

A static example of a modal with header, body and footer:

IE fix: When the modal dialog is open, extend the `.no-scrolling` class on the `body` tag so that the content behind the backdrop does not scroll. Remove the class when the modal dialog is closed.

### I have a nice title

But not much to say...

CancelOk

```html
<div class="modal">
  <div class="modal-dialog" role="dialog" aria-hidden="true">
    <div class="modal-content">
      <div class="modal-header">
        <button aria-label="Close" class="close" type="button">
          <clr-icon aria-hidden="true" shape="close"></clr-icon>
        </button>
        <h3 class="modal-title">I have a nice title</h3>
      </div>
      <div class="modal-body">
        <p>But not much to say...</p>
      </div>
      <div class="modal-footer">
        <button class="btn btn-outline" type="button">Cancel</button>
        <button class="btn btn-primary" type="button">Ok</button>
      </div>
    </div>
  </div>
</div>
<div class="modal-backdrop" aria-hidden="true"></div>
```

### Sizes

In addition to the default, medium size, Clarity modals come in two optional sizes: large and small. To use an optional size, add `modal-sm` or `modal-lg` class to your modal-dialog.

###### 1\. .modal-sm

### Small modal

I am a small modal.

Ok

```html
<div class="modal">
  <div class="modal-dialog modal-sm" role="dialog" aria-hidden="true">
    <div class="modal-content">
      ...
    </div>
  </div>
</div>
<div class="modal-backdrop" aria-hidden="true"></div>
```

###### 2\. .modal-lg

### Large modal

I am a large modal.

CancelOk

```html
<div class="modal">
  <div class="modal-dialog modal-lg" role="dialog" aria-hidden="true">
    <div class="modal-content">
      ...
    </div>
  </div>
</div>
<div class="modal-backdrop" aria-hidden="true"></div>
```

###### 3\. .modal-xl

### Extra large modal

I am an extra large modal.

CancelOk

```html
<div class="modal">
  <div class="modal-dialog modal-xl" role="dialog" aria-hidden="true">
    <div class="modal-content">
      ...
    </div>
  </div>
</div>
<div class="modal-backdrop" aria-hidden="true"></div>
```

### Modal Backdrop

Here is an example of a backdrop to use behind your modal, when you display it over a page:

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ullamcorper nec ex in volutpat. Maecenas consectetur, dui quis accumsan pellentesque, dui sem ultricies nulla, sed auctor magna diam vel neque. Nullam id est vel purus volutpat accumsan non quis enim. Curabitur non turpis eu nunc faucibus venenatis quis ut neque. Integer in mattis tortor, eu sollicitudin sapien. Vestibulum convallis et quam vitae auctor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam sagittis facilisis sapien, a malesuada purus. Donec vel dui sit amet orci semper accumsan sit amet non enim. Nulla sit amet commodo justo, ut pellentesque mauris. Pellentesque sollicitudin vestibulum ante eleifend pharetra. Nullam dignissim risus eget feugiat scelerisque. Nullam vehicula porta ex ac hendrerit. Phasellus laoreet felis et lacinia tincidunt. Nullam mattis sit amet est a maximus.
Ut dolor ipsum

```html
<div class="modal-backdrop" aria-hidden="true"></div>
```

### Animation

Modals and backdrops support fading animations. Clarity recommends using `fadeDown` on the `modal-dialog` and `fade` on the `modal-backdrop`. These animations hide the modal and backdrop by default. Adding or removing the `in` class animates the modal or backdrop in or out, respectively.

### I have a nice title

But not much to say...

CancelOk

```html
<div class="modal">
  <div class="modal-dialog fadeDown in" role="dialog" aria-hidden="true">
    <div class="modal-content">
      ...
    </div>
  </div>
</div>
<div class="modal-backdrop fade in" aria-hidden="true"></div>
```

## Angular Component

### Summary of Options

Input/Output

Values

Default

Effect

**\[(clrModalOpen)\]**

Type: Boolean

Default: false

true, false

false

Two-way binding on the state of the modal: opened or closed.

**\[clrModalSize\]**

Values:
"sm", "md", "lg", "xl"

Default: "md"

"sm", "md", "lg", "xl"

"md"

Sets the size of the modal. "md" is for medium size.

**\[clrModalClosable\]**

Type: Boolean

Default: true

true, false

true

If false, the modal will not be closable by clicking on the mask or on the top-right "x".

**\[clrModalStaticBackdrop\]**

Type: Boolean

Default: true

true, false

true

If true, the modal will not close when the user clicks outside of the modal.

#### Examples

Try it live: Show modal

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

###### 1\. clrModalSize

The Angular component offers the same optional sizes as the static styles through the `clrModalSize` input. The default, empty size is medium.

Small modalLarge modalExtra large modal

```html
<clr-modal [(clrModalOpen)]="opened" [clrModalSize]="'sm'">
  ...
</clr-modal>

<clr-modal [(clrModalOpen)]="opened" [clrModalSize]="'lg'">
  ...
</clr-modal>

<clr-modal [(clrModalOpen)]="opened" [clrModalSize]="'xl'">
  ...
</clr-modal>
```

###### 2\. clrModalClosable

If you don’t want your modal to be closable by clicking on the top-right “x” or on the mask, you can do so with the `clrModalClosable` input. The default value is `true`. You can still close the modal if one of _your_ components modifies the value bound to `clrModalOpen`.

Show modal

```html
<clr-modal [(clrModalOpen)]="opened" [clrModalClosable]="false">
  <h3 class="modal-title">No "x" in the top-right corner</h3>
  <div class="modal-body">
    <p>Clicking on the backdrop doesn't do anything.</p>
  </div>
  <div class="modal-footer">
    <button type="button" class="btn btn-primary" (click)="opened = false">
      I'm the only way to close the modal!
    </button>
  </div>
</clr-modal>
```

###### 3\. clrModalStaticBackdrop

If you want the modal to be closable with a click on the backdrop, use the `clrModalStaticBackdrop`. If `false`, clicks on the background will close the modal. The default value is `true`.

Show modal

```html
<clr-modal [(clrModalOpen)]="opened" [clrModalStaticBackdrop]="false">
  ...
</clr-modal>
```

### API Reference

Method

Arguments

Return Value

Description

open()

N/A

N/A

Manually opens the modal.

close()

N/A

N/A

Manually closes the modal if `clrModalClosable` is not set to `false`.
