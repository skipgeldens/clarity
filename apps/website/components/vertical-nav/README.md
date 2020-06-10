---
title: Overview
---

# Vertical Nav

- [Design Guidelines](/documentation/vertical-nav#top)
- [Code & Examples](/documentation/vertical-nav#examples)

##### This is a vertically-aligned navigational component.

### Design Guidelines

Vertical navigation is a familiar navigation pattern for users. It can fit as many navigation links as needed, scrolling when the content exceeds the viewport.

[Project Pokémon](javascript://)

[Snorlax](javascript://)[Jigglypuff](javascript://)[Ditto](javascript://)[Charizard](javascript://)[Arcanine](javascript://)[Blastoise](javascript://)[Gyrados](javascript://)[Jolteon](javascript://)[Raichu](javascript://)

## Jigglypuff

Jigglypuff is a round, pink ball with pointed ears and large, blue eyes. It has rubbery, balloon-like skin and small, stubby arms and somewhat long feet. On top of its head is a curled tuft of fur. As seen in Pokémon Stadium, it is filled with air, as a defeated Jigglypuff, deflates until it is flat. By drawing extra air into its body, it is able to float as demonstrated in Super Smash Bros.

#### Usage

Use the vertical navigation when you need:

- to collapse and expand the navigation to free up space for the content area
- a hierarchical navigation or nested navigation
- many links in the navigation across a top level of navigation
- icons to describe navigation items which is helpful when the navigation is collapsed

[Project Pokémon](javascript://)

[Snorlax](javascript://)[Jigglypuff](javascript://)[Ditto](javascript://)[Charizard](javascript://)[Arcanine](javascript://)[Blastoise](javascript://)[Gyrados](javascript://)[Jolteon](javascript://)[Raichu](javascript://)

###### Do

Use vertical navigation with a header.

[Project Pokémon](javascript://)

- [Pokédex](javascript://)
- [Movies](javascript://)
- [Games](javascript://)
- [Events](javascript://)

[Snorlax](javascript://)[Jigglypuff](javascript://)[Ditto](javascript://)[Charizard](javascript://)[Arcanine](javascript://)[Blastoise](javascript://)[Gyrados](javascript://)[Jolteon](javascript://)[Raichu](javascript://)

###### Don't

Use vertical navigation with a header and subnav. Having too many places for navigation is confusing for users.

### Layout

Vertical navigation has a few layout options including dividers and section headers. Active links are displayed with a white background. Touch targets are larger for easier interaction and span the entire width of the navigation, similar to the space of the active link indicator.

[Snorlax](javascript://)[Jigglypuff](javascript://)[Ditto](javascript://)[Charizard](javascript://)[Arcanine](javascript://)[Blastoise](javascript://)[Gyrados](javascript://)[Jolteon](javascript://)[Raichu](javascript://)

###### Basic

No dividers or section headers.

[Snorlax](javascript://)[Jigglypuff](javascript://)[Ditto](javascript://)

[Charizard](javascript://)[Arcanine](javascript://)

[Blastoise](javascript://)[Gyrados](javascript://)[Jolteon](javascript://)

###### Dividers

Used to separate logical clusters of navigation items. Best used when you have two or more links in a cluster.

Normal [Snorlax](javascript://)[Jigglypuff](javascript://)[Ditto](javascript://)

Fire [Charizard](javascript://)[Arcanine](javascript://)

###### Dividers & Headers

Used to separate logical clusters of navigation items. Best used when you have two or more links in a cluster.

### Icons

Icons should be placed to the left of the link label. Active links will display a blue icon. Make sure your icons are distinctive and easily recognizable. Touch targets include the entire width of the navigation including the icon.

[Normal](javascript://) [Fire](javascript://) [Water](javascript://) [Electric](javascript://) [Grass](javascript://) [Ice](javascript://) [Fighting](javascript://) [Poison](javascript://) [Ground](javascript://)

###### Do

Use icons across all links if you choose to use them.

[Normal](javascript://) [Fire](javascript://) [Water](javascript://) [Electric](javascript://) [Grass](javascript://) [Ice](javascript://) [Fighting](javascript://) [Poison](javascript://) [Ground](javascript://)

###### Don't

Add icons to some links and not to other links. This becomes difficult to scan and read.

### Hierarchy

Hierarchy is used to show parent-child relationship between links. If a child link is active and the parent item is collapsed, the parent will display as active. When expanded, the active indicator will display on the child link. Clicking on text, carets or icons will expand and collapse the parent item.

Normal

Expand

[Pidgey](javascript://) [Rattata](javascript://) [Spearow](javascript://)

Fire

Expand

[Charmander](javascript://) [Charmeleon](javascript://) [Charizard](javascript://)

Water

Expand

[Blastoise](javascript://) [Squirtle](javascript://) [Wartortle](javascript://)

Electric

Expand

[Magnemite](javascript://) [Pikachu](javascript://) [Raichu](javascript://)

Grass

Expand

[Bulbasaur](javascript://) [Ivysaur](javascript://) [Venusaur](javascript://)

Ice

Expand

[Articuno](javascript://) [Dewgong](javascript://) [Jynx](javascript://)

###### Basic

Top level hierarchy items are semibold font weight and have a caret to the right. Child links are normal font weight.

Normal

Expand

[Pidgey](javascript://) [Rattata](javascript://) [Spearow](javascript://)

Fire

Collapse

[Charmander](javascript://) [Charmeleon](javascript://) [Charizard](javascript://)

Water

Expand

[Blastoise](javascript://) [Squirtle](javascript://) [Wartortle](javascript://)

Electric

Expand

[Magnemite](javascript://) [Pikachu](javascript://) [Raichu](javascript://)

Grass

Expand

[Bulbasaur](javascript://) [Ivysaur](javascript://) [Venusaur](javascript://)

Ice

Expand

[Articuno](javascript://) [Dewgong](javascript://) [Jynx](javascript://)

###### Icons

Icons are only applied to the top level navigation items. They are not applied to child links.

Normal

Expand

[Pidgey](javascript://) [Rattata](javascript://) [Spearow](javascript://)

Fire

Expand

[Charmander](javascript://) [Charmeleon](javascript://) [Charizard](javascript://)

[Ice](javascript://)

Water

Expand

[Blastoise](javascript://) [Squirtle](javascript://) [Wartortle](javascript://)

Electric

Expand

[Magnemite](javascript://) [Pikachu](javascript://) [Raichu](javascript://)

[Poison](javascript://)

Grass

Expand

[Bulbasaur](javascript://) [Ivysaur](javascript://) [Venusaur](javascript://)

Ice

Expand

[Articuno](javascript://) [Dewgong](javascript://) [Jynx](javascript://)

###### Mixed

Top level hierarchy items without child links are semibold. Clicking on one will navigate a user to a page.

Info

If you need a summary or overview-type landing page for a link group, we recommend you make it as your first child link.

### Collapse & Expand Navigation

Collapsing and expanding navigation is used to create more space in content areas or to bring greater focus to content. The double caret in the upper right corner will collapse and expand the navigation.

##### Basic

Collapse

[Normal](javascript://) [Fire](javascript://) [Water](javascript://) [Electric](javascript://) [Grass](javascript://) [Ice](javascript://) [Fighting](javascript://) [Poison](javascript://) [Ground](javascript://)

###### No Icons

When no icons are present, collapsing the navigation will show a basic bar. The entire bar is a click target that can expand the navigation.

Expand

[Normal](javascript://) [Fire](javascript://) [Water](javascript://) [Electric](javascript://) [Grass](javascript://) [Ice](javascript://) [Fighting](javascript://) [Poison](javascript://) [Ground](javascript://)

###### Icons

When collapsed, text will disappear and only icons will show. Clicking on an icon will navigate the user. An active link will also show as an active icon when collapsed.

##### Hierarchy

Collapse

Normal

Expand

[Pidgey](javascript://) [Rattata](javascript://) [Spearow](javascript://)

Fire

Expand

[Charmander](javascript://) [Charmeleon](javascript://) [Charizard](javascript://)

Water

Expand

[Blastoise](javascript://) [Squirtle](javascript://) [Wartortle](javascript://)

Electric

Expand

[Magnemite](javascript://) [Pikachu](javascript://) [Raichu](javascript://)

Grass

Expand

[Bulbasaur](javascript://) [Ivysaur](javascript://) [Venusaur](javascript://)

Ice

Expand

[Articuno](javascript://) [Dewgong](javascript://) [Jynx](javascript://)

###### No Icons

When no icons are present, collapsing the navigation will show a basic bar. The entire bar is a click target that can expand the navigation.

Collapse

Normal

Expand

[Pidgey](javascript://) [Rattata](javascript://) [Spearow](javascript://)

Fire

Expand

[Charmander](javascript://) [Charmeleon](javascript://) [Charizard](javascript://)

Water

Expand

[Blastoise](javascript://) [Squirtle](javascript://) [Wartortle](javascript://)

Electric

Expand

[Magnemite](javascript://) [Pikachu](javascript://) [Raichu](javascript://)

Grass

Expand

[Bulbasaur](javascript://) [Ivysaur](javascript://) [Venusaur](javascript://)

Ice

Expand

[Articuno](javascript://) [Dewgong](javascript://) [Jynx](javascript://)

###### Icons

Top level hierarchy items will show a caret next to its icon when the navigation is collapsed. Clicking one will expand the navigation its top level item.

Collapse

Normal

Expand

[Pidgey](javascript://) [Rattata](javascript://) [Spearow](javascript://)

Fire

Expand

[Charmander](javascript://) [Charmeleon](javascript://) [Charizard](javascript://)

[Ice](javascript://)

Water

Expand

[Blastoise](javascript://) [Squirtle](javascript://) [Wartortle](javascript://)

Electric

Expand

[Magnemite](javascript://) [Pikachu](javascript://) [Raichu](javascript://)

[Poison](javascript://)

Grass

Expand

[Bulbasaur](javascript://) [Ivysaur](javascript://) [Venusaur](javascript://)

Ice

Expand

[Articuno](javascript://) [Dewgong](javascript://) [Jynx](javascript://)

###### Mixed

Top level items without children will show no caret next to the icon. Clicking on an icon with no caret will navigate the user to a page.

### Long Labels

When labels get too long they will be trimmed and followed by an ellipsis (…). We recommend that navigation labels remain short and concise to prevent an ellipsis from showing.

[Snorlax](javascript://)[Jigglypuff](javascript://)[Ditto](javascript://)[Ultra Rare Mega Charizard EX (Secret Rare)](javascript://)[Arcanine](javascript://)[Blastoise](javascript://)[Gyrados](javascript://)[Jolteon](javascript://)[Raichu](javascript://)

[Normal](javascript://) [Fire](javascript://) [Water](javascript://) [Electric](javascript://) [Grass](javascript://) [Ice](javascript://) [Fighting, Psychic, Dragon, Fairy, Rock, Dark](javascript://) [Poison](javascript://) [Ground](javascript://)

Normal

Expand

[Pidgey](javascript://) [Rattata](javascript://) [Spearow](javascript://)

Fire

Collapse

[Charmander](javascript://) [Charmeleon](javascript://) [Ultra Rare Mega Charizard (Secret Rare)](javascript://)

Water

Expand

[Blastoise](javascript://) [Squirtle](javascript://) [Wartortle](javascript://)

Electric

Expand

[Magnemite](javascript://) [Pikachu](javascript://) [Raichu](javascript://)

Grass, Fighting, Dragon, Steel, Psychic

Expand

[Bulbasaur](javascript://) [Ivysaur](javascript://) [Venusaur](javascript://)

Ice

Expand

[Articuno](javascript://) [Dewgong](javascript://) [Jynx](javascript://)

### Smaller Screens - Responsive

When screens drop below 768px wide, the navigation will hide completely and can be shown by clicking on one of the header icons. All normal vertical navigation designs and behaviors are the same in the responsive state. Read the Responsive section in Navigation for more information on how this works.

![Responsive Vertical Nav](assets/images/documentation/vertical-nav/responsive-left.png)

![Responsive Vertical Nav](assets/images/documentation/vertical-nav/responsive-right.png)

### Accessibility

Applications need to inform users who rely on assistive technologies when a routing change loads new content. For this reason, we offer `clrFocusOnViewInit` along with the Vertical Nav component. The directive allows you to choose the element for assistive technologies to read first when the new content gets loaded. You will see it in action in the examples below.

Warning

We have introduced `clrFocusOnViewInit` in Clarity v2.1.2, thus make sure you are on that or later versions to use the directive.

### Code & Examples

We have 5 Vertical Nav demos. Starting with the basics, each demo shows you one or more of the advanced Vertical Nav features.

- [Basic Structure](/documentation/vertical-nav/basic-structure)
- [Icon Links](/documentation/vertical-nav/icon-links)
- [Collapsible Navigation](/documentation/vertical-nav/collapsible-nav)
- [Vertical Nav Groups](/documentation/vertical-nav/nav-groups)
- [Lazy Loading Nav Links in Nav Groups](/documentation/vertical-nav/lazy-loading-nav-links)

#### Basic Structure

Use the `clr-vertical-nav` component to create the Vertical Nav. Add the `clrVerticalNavLink` directive on each Nav Link in the Vertical Nav. Use `<div class="nav-divider"></div>` to add a horizonal divider to separate logical groups.

[Project Pokémon](/documentation/vertical-nav/basic-structure/project-pokemon)

[Charmander](/documentation/vertical-nav/basic-structure/charmander)[Jigglypuff](/documentation/vertical-nav/basic-structure/jigglypuff)[Pikachu](/documentation/vertical-nav/basic-structure/pikachu)[Raichu](/documentation/vertical-nav/basic-structure/raichu)[Snorlax](/documentation/vertical-nav/basic-structure/snorlax)

[Credit](/documentation/vertical-nav/basic-structure/credit)

#### Charmander

The flame that burns at the tip of its tail is an indication of its emotions. The flame wavers when Charmander is enjoying itself. If the Pokémon becomes enraged, the flame burns fiercely.

_The template preview of the router component:_

```html
<h4 clrFocusOnViewInit>Charmander</h4>
<p>
  The flame that burns at the tip of its tail is an indication of its emotions. The flame wavers when Charmander is
  enjoying itself. If the Pokémon becomes enraged, the flame burns fiercely.
</p>
```

```html
<div class="main-container">
  <header class="header">
    ...
  </header>
  <div class="content-container">
    <clr-vertical-nav>
      <a clrVerticalNavLink routerLink="./charmander" routerLinkActive="active">Charmander</a>
      <a clrVerticalNavLink routerLink="./jigglypuff" routerLinkActive="active">Jigglypuff</a>
      <a clrVerticalNavLink routerLink="./pikachu" routerLinkActive="active">Pikachu</a>
      <a clrVerticalNavLink routerLink="./raichu" routerLinkActive="active">Raichu</a>
      <a clrVerticalNavLink routerLink="./snorlax" routerLinkActive="active">Snorlax</a>
      <div class="nav-divider"></div>
      <a clrVerticalNavLink routerLink="./credit" routerLinkActive="active">Credit</a>
    </clr-vertical-nav>
    <div class="content-area">
      <router-outlet></router-outlet>
    </div>
  </div>
</div>
```
