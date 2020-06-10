# Sidenav

![HTML5](assets/images/bugs/badge_html5.svg 'HTML5')![CSS3](assets/images/bugs/badge_css3.svg 'CSS3')![Angular](assets/images/bugs/badge_ng.svg 'Angular')

- [Examples & Code](/documentation/sidenav#top)
- [Design Guidelines](/documentation/sidenav#guidelines)

##### The sidenav is a left-aligned navigational component.

Clarity’s sidenav is placed inside the `.main-container` class and appears after the `.content-area`.

###### .sidenav-content

This is a wrapper intended to contain one or more `.nav-group` groups.

###### .nav-group

A `.nav-group` consists of a checkbox and label followed by a `.nav-list`. The order of the markup is important to achieve the collapsible effect on the nav-groups.

###### .collapsible

A `.nav-group` inside a sidenav becomes collapsible by adding a `.collapsible` class.

###### .nav-list

A `.nav-list` is a list of navigation links. Each navigation link extends the `.nav-link` class. An active `.nav-link` is assigned the `.active` class.

Header

[Nav Element 1](javascript://) [Nav Element 2](javascript://)

Collapsible Nav Element

- [Link 1](javascript://)
- [Link 2](javascript://)

Default Nav Element

- [Link 1](javascript://)
- [Link 2](javascript://)
- [Link 3](javascript://)
- [Link 4](javascript://)
- [Link 5](javascript://)
- [Link 6](javascript://)

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora eligendi quos unde id optio culpa, illo perspiciatis laboriosam explicabo in voluptate incidunt est beatae rerum quisquam accusantium corporis reiciendis delectus!

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi ad, minus fuga neque voluptatibus quidem libero ducimus quas ipsa eveniet explicabo voluptates sunt error! Eligendi a, animi consequatur odit.

```html
<div class="main-container">
  <header class="header header-6">
    ...
  </header>
  <div class="content-container">
    <nav class="sidenav">
      <section class="sidenav-content">
        <a href="..." class="nav-link active">
          Nav Element 1
        </a>
        <a href="..." class="nav-link">
          Nav Element 2
        </a>
        <section class="nav-group collapsible">
          <input id="tabexample1" type="checkbox" />
          <label for="tabexample1">Collapsible Nav Element</label>
          <ul class="nav-list">
            <li><a class="nav-link">Link 1</a></li>
            <li><a class="nav-link">Link 2</a></li>
          </ul>
        </section>
        <section class="nav-group">
          <input id="tabexample2" type="checkbox" />
          <label for="tabexample2">Default Nav Element</label>
          <ul class="nav-list">
            <li><a class="nav-link">Link 1</a></li>
            <li><a class="nav-link">Link 2</a></li>
            <li><a class="nav-link active">Link 3</a></li>
            <li><a class="nav-link">Link 4</a></li>
            <li><a class="nav-link">Link 5</a></li>
            <li><a class="nav-link">Link 6</a></li>
          </ul>
        </section>
      </section>
    </nav>
    <div class="content-area">
      ...
    </div>
  </div>
</div>
```

### Usage

The sidenav is a familiar navigation pattern for users. The sidenav can fit as many navigation links as needed, scrolling when the content exceeds the viewport. Use the sidenav:

- For links secondary to the links in the header or subnav
- For a navigation schema with a deep hierarchy
- When the header and subnav cannot accommodate the required links

The sidenav works best in desktop applications.

#### Grouping Links

If you group link names under a heading, don’t make the heading a link.

#### Using Icons

Include icons when you want to provide a more appealing visual look than just text.
