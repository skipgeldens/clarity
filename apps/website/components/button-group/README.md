---
title: Overview
---

# Button Group

- [Design Guidelines](/documentation/button-group#top)
- [Code & Examples](/documentation/button-group#examples)

##### Button groups are for creating collections of similar type action buttons.

### Design Guidelines

Button groups follow normal [Button](/documentation/buttons) design guidelines. All Button options regarding classes and sizes apply to Button Groups. All features below are available with Solid, Outline and Flat in normal and small sizes.

### Three different types

SolidGroup

Solid button groups direct the user's attention to the **primary actions** the application is suggesting the user take.

OutlineGroup

Outline groups are used to indicate a set of **secondary actions** or to reduce the visual noise on a page.

FlatGroup

Flat button groups are used as a set of **tertiary actions**. They are also typically used in Cards and above Datagrids.

### Mixed Classes

##### Button Arrangement

FavoriteAddDelete

###### Do

Arrange **primary** actions on the left, followed by **secondary** actions, and **warning** actions as the last button in a group.

DeleteAddFavorite

###### Don't

Arrange **warning** actions as the first button in a group or have **secondary** actions before **primary** actions.

##### Group Style

CreateFavoriteDownload

###### Do

Mix similar styled classes together to suit the solution's needs.

CreateFavoriteDownload

###### Don't

Mix differently styled classes together, like solid and outlined.

### Icons

##### Width & Spacing

check home user

###### Types & Sizes

Icon button groups are available in the solid, outline, and flat types. It’s also best to use the normal (36px) sized ones. This makes them easier to recognize and to click.

check home user

###### Don't

Use small icon buttons in most cases. They are difficult to see and distinguish what the icon is or represents. They also create smaller click targets, making them harder to click.

Check Home User Profile

###### With Text

If you have the space, adding text helps users understand the action. Start icon buttons with icons and follow with text.

Check Home User Profile

###### Don't

Start icon buttons with text and follow with icon. This makes them more difficult to scan quickly.

### Accessibility

If your icon button has no text, we recommend adding the `title=""` attribute to your icon buttons. This adds some additional context for users unfamiliar with what action your icon button might produce. The text should reflect the action being completed.

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

### Overflow

Overflow is used when the button group is larger than its containing space, or used to preserve space. The overflow is configurable so you can assign button actions to the dropdown menu.

##### Interaction

- Overflow button is shown below as an ellipsis button in the button group and is the last position to the right
- Clicking on the ellipsis will show the overflow dropdown menu

Create Favorite

Expand dropdown

DownloadDelete

##### Icons

- Button groups with text and icons, or just icons, will have text show in the dropdown menu
- Text for each action icon is needed for overflow to work properly

Add Add Folder Folder

Expand dropdown

Download Download Refresh Refresh

Add Folder

Expand dropdown

DownloadRefresh

### Multiple Groups

Use when you want similar actions to be grouped together and separated from others.

CreateEdit

DeleteStop

###### Do

Lead with **primary** actions followed by **secondary** actions.

DeleteStop

CreateEdit

###### Don't

Lead with **secondary** actions followed by **primary** actions.

### Checkbox

Use when a small list of options can be selected from, similar to the [Checkbox](/documentation/checkboxes) component

- blue indicates an option is selected, white (outline) indicates an unselected option
- user can click the button to select, and click again to deselect
- can be configured with preselected options

Apples

Oranges

Kiwis

###### Do

Use option labels that are 1-3 short words.

Apples

Fresh Local Gold Kiwis

###### Don't

Use option labels that are long or more than 3 words.

### Radio

Use when selecting one option from a small list of options, similar to the [Radio](/documentation/radios) component

- blue indicates an option is selected, white (outline) indicates an unselected option
- user can click the button to select, and click again to deselect
- can be configured with preselected options

Pears

Kiwis

Oranges

###### Do

Use option labels that are 1-3 short words.

Pears

Fresh Local Gold Kiwis

###### Don't

Use option labels that are long or more than 3 words.

### Code & Examples

Clarity defines three button group types:

- **Solid**. A solid background with light text. These buttons are prominent on the page.
- **Outline.** A transparent background with colored border and text. On hover, the button fills with color.
- **Flat.** Text in Action Blue, used to indicate an action.

#### Basic Structure

AddEditDownloadDelete

```html
<div class="btn-group btn-primary">
  <button class="btn">Add</button>
  <button class="btn">Edit</button>
  <button class="btn">Download</button>
  <button class="btn">Delete</button>
</div>
```

##### Overflow

AddEdit

DownloadDelete

```html
<div class="btn-group btn-primary">
  <button class="btn">Add</button>
  <button class="btn">Edit</button>
  <div class="btn-group-overflow open">
    <button class="btn dropdown-toggle">
      <clr-icon shape="ellipsis-horizontal"></clr-icon>
    </button>
    <div class="dropdown-menu">
      <button class="btn">Download</button>
      <button class="btn">Delete</button>
    </div>
  </div>
</div>
```

#### Types

Clarity [Buttons](/documentation/buttons) primary, outline and flat classes can be used along with the `.btn-group` class to style the buttons in a Button Group.

##### Primary

AddEditDownloadDelete

```html
<div class="btn-group btn-primary">
  <button class="btn">Add</button>
  <button class="btn">Edit</button>
  <button class="btn">Download</button>
  <button class="btn">Delete</button>
</div>
```

##### Outline

AddEditDownloadDelete

```html
<div class="btn-group">
  <button class="btn">Add</button>
  <button class="btn">Edit</button>
  <button class="btn">Download</button>
  <button class="btn">Delete</button>
</div>
```

##### Flat

AddEditDownloadDelete

```html
<div class="btn-group btn-link">
  <button class="btn">Add</button>
  <button class="btn">Edit</button>
  <button class="btn">Download</button>
  <button class="btn">Delete</button>
</div>
```

##### Small

AddEditDownloadDelete

```html
<div class="btn-group btn-outline-primary btn-sm">
  <button class="btn">Add</button>
  <button class="btn">Edit</button>
  <button class="btn">Download</button>
  <button class="btn">Delete</button>
</div>
```

#### Mixed

Override a Button type in a Button Group by extending the Button type class directly on the corresponding Button.

FavoriteAddDelete

```html
<div class="btn-group btn-primary">
  <button class="btn">Favorite</button>
  <button class="btn btn-success">Add</button>
  <button class="btn btn-danger">Delete</button>
</div>
```

#### Icons

Text wrapped in `.clr-icon-title` is only displayed in the Overflow Menu.

Home Settings

User Cloud

```html
<div class="btn-group btn-primary btn-icon">
  <button class="btn">
    <clr-icon shape="home"></clr-icon>
    <span class="clr-icon-title">Home</span>
  </button>
  <button class="btn">
    <clr-icon shape="cog"></clr-icon>
    <span class="clr-icon-title">Settings</span>
  </button>
  <div class="btn-group-overflow open">
    <button class="btn dropdown-toggle">
      <clr-icon shape="ellipsis-horizontal"></clr-icon>
    </button>
    <div class="dropdown-menu">
      <button class="btn">
        <clr-icon shape="user"></clr-icon>
        <span class="clr-icon-title">User</span>
      </button>
      <button class="btn">
        <clr-icon shape="cloud"></clr-icon>
        <span class="clr-icon-title">Cloud</span>
      </button>
    </div>
  </div>
</div>
```

##### With Text

Home Settings

User Cloud

```html
<div class="btn-group btn-primary">
  <button class="btn">
    <clr-icon shape="home"></clr-icon>
    Home
  </button>
  <button class="btn">
    <clr-icon shape="cog"></clr-icon>
    Settings
  </button>
  <div class="btn-group-overflow open">
    <button class="btn dropdown-toggle">
      <clr-icon shape="ellipsis-horizontal"></clr-icon>
    </button>
    <div class="dropdown-menu">
      <button class="btn">
        <clr-icon shape="user"></clr-icon>
        User
      </button>
      <button class="btn">
        <clr-icon shape="cloud"></clr-icon>
        Cloud
      </button>
    </div>
  </div>
</div>
```

#### Checkbox

Apples

Oranges

Kiwis

Pears

```html
<div class="btn-group">
  <div class="checkbox btn">
    <input type="checkbox" id="btn-demo-check-1" />
    <label for="btn-demo-check-1">Apples</label>
  </div>
  <div class="checkbox btn">
    <input type="checkbox" id="btn-demo-check-2" checked />
    <label for="btn-demo-check-2">Oranges</label>
  </div>
  <div class="checkbox btn">
    <input type="checkbox" id="btn-demo-check-3" />
    <label for="btn-demo-check-3">Kiwis</label>
  </div>
  <div class="checkbox btn">
    <input type="checkbox" id="btn-demo-check-4 checked" />
    <label for="btn-demo-check-4">Pears</label>
  </div>
</div>
```

#### Radio

Apples

Oranges

Kiwis

Pears

```html
<div class="btn-group">
  <div class="radio btn">
    <input type="radio" name="btn-group-demo-radios" id="btn-demo-radio-1" />
    <label for="btn-demo-radio-1">Apples</label>
  </div>
  <div class="radio btn">
    <input type="radio" name="btn-group-demo-radios" id="btn-demo-radio-2" />
    <label for="btn-demo-radio-2">Oranges</label>
  </div>
  <div class="radio btn">
    <input type="radio" name="btn-group-demo-radios" id="btn-demo-radio-3" />
    <label for="btn-demo-radio-3">Kiwis</label>
  </div>
  <div class="radio btn">
    <input type="radio" name="btn-group-demo-radios" id="btn-demo-radio-4" checked />
    <label for="btn-demo-radio-4">Pears</label>
  </div>
</div>
```

## Angular Component

### Summary of Options

Input/Output

Values

Default

Effect

**\[clrInMenu\]**

Type: Boolean

Default: false

true, false

false

Input which determines if the button is in the menu or inline.

**\[clrMenuPosition\]**

Values:
Direction classnames

Default: "bottom-left"

CSS dropdown menu direction classnames.

Bottom-left

Sets the direction in which the menu will open.

**\[name\]**

Values:
String

N/A

String

N/A

adds a name attribute with the value specified in the input

**\[type\]**

Values:
String

submit

String

submit

adds a type attribute with the value specified in the input

**\[disabled\]**

Values:
boolean

false

boolean

false

adds a disabled attribute if the input is set to true

Use the `clrInMenu` input to determine if a Button belongs in the Overflow Menu or not.

CreateFavorite

More

```html
<clr-button-group class="btn-primary">
  <clr-button>Create</clr-button>
  <clr-button>Favorite</clr-button>
  <clr-button [clrInMenu]="true">Assign</clr-button>
  <clr-button [clrInMenu]="true">Download</clr-button>
  <clr-button [clrInMenu]="true">Delete</clr-button>
</clr-button-group>
```

#### Directions

AddEditDownload

More

```html
<clr-button-group [clrMenuPosition]="'bottom-right'">
  <clr-button class="btn">Add</clr-button>
  <clr-button class="btn">Edit</clr-button>
  <clr-button class="btn">Download</clr-button>
  <clr-button class="btn" [clrInMenu]="true">Assign</clr-button>
  <clr-button class="btn" [clrInMenu]="true">Move</clr-button>
  <clr-button class="btn" [clrInMenu]="true">Delete</clr-button>
</clr-button-group>
```
