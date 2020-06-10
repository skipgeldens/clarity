---
title: Overview
---

# Header

- [Design Guidelines](/documentation/header#top)
- [Code & Examples](/documentation/header#examples)

##### Headers provide branding, navigation, search, and access to global application actions such as settings and notifications.

Note App

[Notes](javascript://)[Shared Notes](javascript://)

[About](javascript://)[Preferences](javascript://)[Log out](javascript://)

### Style

The header is consistent across all pages of an application. This offers a recognizable unifying element to the application.

##### Branding

Include both your application’s name and logo if available. Clicking on the app’s name or logo should take you to the homepage of the application.

![](assets/images/documentation/header/header_01.svg)

##### Top Level Navigation

Include top level navigation items. These items should be persistent throughout your experience.

Have a maximum of four items in top-level navigation. For more info, take a look at [Navigation](/documentation/navigation).

##### Typography

Use clear language for top level navigation items. Do not combine icons and text.

If you’re using icons on their own in the header, using tooltips will help users understand what an icon means.

![](assets/images/documentation/header/header_04.svg)

###### Do

Use Text for navigational items.

![](assets/images/documentation/header/header_02.svg)

###### Not Recommended

Use icons alone for top level navigation items.

![](assets/images/documentation/header/header_03.svg)

###### Not Recommended

Only use a combination of text and icons when the provided text gives additional context specific to the user, for example, the user's username.

### Responsive Navigation

Clarity includes functionality for displaying the navigation on smaller devices like tablets and phones with the _responsive navigation component_ in clarity-angular. Details on how to use [Clarity's responsive header can be found in our documentation on app navigation](/documentation/navigation#responsive_navigation).

### Search

There are many different ways to include search in the header. Which way you choose depends on search's prominence and its utility within the application.

Note App

[About](javascript://)[Preferences](javascript://)[Log out](javascript://)

Use search as a prominent navigation item in the header if you are building a search-based user experience.

Note App

[Notes](javascript://)[Shared Notes](javascript://)

[About](javascript://)[Preferences](javascript://)[Log out](javascript://)

Use search in addition to navigation items when you have 2 or 3 top-level navigational items and search continues to be core to your navigation experience.

![](assets/images/documentation/header/header_05.svg)

Use search as a secondary item to the right of the header if search is not core to your navigation experience or if you need to emphasize 3 or more top level navigation items.

You can read more in about [search](https://github.com/vmware/clarity/issues/186) in the design spec. The search component itself is a work in progress.

### Right Side Action Area

The area to the right of the header serves as a location for global actions and top-level navigational items that are important yet visited less frequently.

![](assets/images/documentation/header/header_06.svg)

For example, this action area on the right side of the header could include application settings, user settings, help, about, and other similar items.

### Code & Examples

The header and subnav support app-level information and navigation links.

###### .header

`.header` is a wrapper around the following four sections:

- Branding
- Navigation
- Search
- Settings

###### .branding

`.branding` contains the product logo and the product title. The logo extends the `.clr-icon` class and the title extends the `.title` class.

###### .header-nav

`.header-nav` contains the navigation links. Each navigation link extends the `.nav-link` class along with the `.nav-text` class for text links and the `.nav-icon` class icon links.

[Project Clarity](javascript://)

[Dashboard](javascript://)[Interactive Analytics](javascript://)

```html
<header class="header-6">
  <div class="branding">
    ...
  </div>
  <div class="header-nav">
    <a href="javascript://" class="active nav-link nav-text">Dashboard</a>
    <a href="javascript://" class="nav-link nav-text">Interactive Analytics</a>
  </div>
  <div class="header-actions">
    <a href="javascript://" class="nav-link nav-icon" aria-label="settings">
      <clr-icon shape="cog"></clr-icon>
    </a>
  </div>
</header>
```

###### .search

`.search` is a form containing the search icon and the search input field.

###### .header-actions

`.header-actions` is a wrapper that contains secondary navigation links. Each navigation link extends the `.nav-link` class. Navigation links can be text or icons.

Info

For information about headers with responsive navigation, see [Responsive Navigation](/documentation/navigation#responsive_navigation).

#### Types

[Project Clarity](javascript://)

[Dashboard](javascript://)[Interactive Analytics](javascript://)

[Project Clarity](javascript://)

[Project Clarity](javascript://)

[Project Clarity](javascript://)

[Log Out](javascript://)

[Project Clarity](javascript://)

john.doe@vmware.com

[Project Clarity](javascript://)

[username](javascript://)

```html
<header class="header-6">
  <div class="branding">
    <a href="..." class="nav-link">
      <clr-icon shape="vm-bug"></clr-icon>
      <span class="title">Project Clarity</span>
    </a>
  </div>
  <div class="header-nav">
    <a href="..." class="active nav-link"><span class="nav-text">Dashboard</span></a>
    <a href="..." class="nav-link"><span class="nav-text">Interactive Analytics</span></a>
  </div>
  <div class="header-actions">
    <a href="..." class="nav-link nav-icon" aria-label="settings">
      <clr-icon shape="cog"></clr-icon>
    </a>
  </div>
</header>

<header class="header-6">
  <div class="branding">
    <a href="..." class="nav-link">
      <clr-icon shape="vm-bug"></clr-icon>
      <span class="title">Project Clarity</span>
    </a>
  </div>
  <form class="search">
    <label for="search_input">
      <input id="search_input" type="text" placeholder="Search for keywords..." />
    </label>
  </form>
  <div class="header-actions">
    <a href="..." class="nav-link nav-icon" aria-label="settings">
      <clr-icon shape="cog"></clr-icon>
    </a>
  </div>
</header>

<header class="header-6">
  <div class="branding">
    <a href="..." class="nav-link">
      <clr-icon shape="vm-bug"></clr-icon>
      <span class="title">Project Clarity</span>
    </a>
  </div>
  <div class="header-actions">
    <clr-dropdown>
      <button class="nav-icon" clrDropdownTrigger aria-label="toggle settings menu">
        <clr-icon shape="cog"></clr-icon>
        <clr-icon shape="caret down"></clr-icon>
      </button>
      <clr-dropdown-menu *clrIfOpen clrPosition="bottom-right">
        <a href="..." clrDropdownItem>About</a>
        <a href="..." clrDropdownItem>Preferences</a>
        <a href="..." clrDropdownItem>Log out</a>
      </clr-dropdown-menu>
    </clr-dropdown>
  </div>
</header>

<header class="header-6">
  <div class="branding">
    <a href="..." class="nav-link">
      <clr-icon shape="vm-bug"></clr-icon>
      <span class="title">Project Clarity</span>
    </a>
  </div>
  <div class="header-actions">
    <a href="..." class="nav-link nav-text">
      Log Out
    </a>
  </div>
</header>

<header class="header-6">
  <div class="branding">
    <a href="..." class="nav-link">
      <clr-icon shape="vm-bug"></clr-icon>
      <span class="title">Project Clarity</span>
    </a>
  </div>
  <div class="header-actions">
    <clr-dropdown>
      <button class="nav-text" clrDropdownTrigger aria-label="open user profile">
        john.doe@vmware.com
        <clr-icon shape="caret down"></clr-icon>
      </button>
      <clr-dropdown-menu *clrIfOpen clrPosition="bottom-right">
        <a href="..." clrDropdownItem>Preferences</a>
        <a href="..." clrDropdownItem>Log out</a>
      </clr-dropdown-menu>
    </clr-dropdown>
  </div>
</header>

<header class="header-6">
  <div class="branding">
    <a href="javascript://" class="nav-link">
      <clr-icon shape="vm-bug"></clr-icon>
      <span class="title">Project Clarity</span>
    </a>
  </div>
  <div class="header-actions">
    <a href="javascript://" class="nav-link nav-icon-text">
      <clr-icon shape="user"></clr-icon>
      <span class="nav-text">username</span>
    </a>
  </div>
</header>
```

#### Color Options

[Project Clarity](javascript://)

[Project Clarity](javascript://)

[Project Clarity](javascript://)

[Project Clarity](javascript://)

[Project Clarity](javascript://)

[Project Clarity](javascript://)

[Project Clarity](javascript://)

```html
<header class="header header-1">
  ...
</header>

<header class="header header-2">
  ...
</header>

<header class="header header-3">
  ...
</header>

<header class="header header-4">
  ...
</header>

<header class="header header-5">
  ...
</header>

<header class="header header-6">
  ...
</header>

<header class="header header-7">
  ...
</header>
```

### Subnav

`.subnav` immediately follows the `.header`. It wraps a [tab](/documentation/tabs) and an `aside` section.

[Project Clarity](javascript://)

- [Dashboard](javascript://)
- [Management](javascript://)
- [Cloud](javascript://)
- [Tenants](javascript://)

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non enim praesent elementum facilisis leo vel fringilla. Euismod elementum nisi quis eleifend quam adipiscing vitae proin. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris. Dolor magna eget est lorem ipsum dolor sit amet consectetur. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Volutpat commodo sed egestas egestas. Pharetra sit amet aliquam id diam maecenas ultricies mi. Pulvinar etiam non quam lacus suspendisse faucibus interdum posuere. Viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat. Enim nunc faucibus a pellentesque sit amet porttitor eget dolor. Quis viverra nibh cras pulvinar mattis nunc. Donec ac odio tempor orci. Tortor consequat id porta nibh. Risus ultricies tristique nulla aliquet enim tortor. A scelerisque purus semper eget duis at tellus at. Arcu non sodales neque sodales ut. Egestas integer eget aliquet nibh praesent tristique.

Leo integer malesuada nunc vel risus commodo viverra. Lectus sit amet est placerat in egestas. Tincidunt vitae semper quis lectus nulla at volutpat diam. Blandit aliquam etiam erat velit scelerisque in dictum non consectetur. Purus sit amet volutpat consequat mauris. Enim blandit volutpat maecenas volutpat blandit aliquam etiam erat velit.

```html
<header>
  ...
</header>
<nav class="subnav">
  <ul class="nav">
    <li class="nav-item">
      <a class="nav-link active" href="#">Dashboard</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Management</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Cloud</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Tenants</a>
    </li>
  </ul>
</nav>
```
