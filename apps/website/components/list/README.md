---
title: Overview
---

# Lists

- [Design Guidelines](/documentation/lists#top)
- [Code & Examples](/documentation/lists#examples)

##### Clarity has three types of lists: unordered, ordered, and unstyled.

### Unordered Lists

- Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
- Ullamco laboris nisi ut aliquip
  - Consequat
  - Adipisicing
  - Exercitation
- Reprehenderit in voluptate
- Mollit anim id

```html
<ul class="list">
  <li>...</li>
  <li>
    Ullamco laboris nisi ut aliquip
    <ul class="list">
      <li>Consequat</li>
      <li>Adipisicing</li>
      <li>Exercitation</li>
    </ul>
  </li>
  <li>Reprehenderit in voluptate</li>
  <li>Mollit anim id</li>
</ul>
```

### Ordered Lists

1.  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
2.  Ullamco laboris nisi ut aliquip
    - Consequat
    - Adipisicing
    - Exercitation
3.  Reprehenderit in voluptate
4.  Mollit anim id
    1.  Consequat
    2.  Adipisicing
    3.  Exercitation
5.  Reprehenderit in voluptate

```html
<ol class="list">
  <li>...</li>
  <li>
    Ullamco laboris nisi ut aliquip
    <ul class="list">
      <li>Consequat</li>
      <li>Adipisicing</li>
      <li>Exercitation</li>
    </ul>
  </li>
  <li>Reprehenderit in voluptate</li>
  <li>
    Mollit anim id
    <ol class="list">
      <li>Consequat</li>
      <li>Adipisicing</li>
      <li>Exercitation</li>
    </ol>
  </li>
  <li>Reprehenderit in voluptate</li>
</ol>
```

### Unstyled Lists

- Id est laborum
- Dolore eu fugiat
- Occaecat cupidatat
- Deserunt mollit anim

```html
<ul class="list-unstyled">
  <li>Id est laborum</li>
  <li>Dolore eu fugiat</li>
  <li>Occaecat cupidatat</li>
  <li>Deserunt mollit anim</li>
</ul>
```

### Compact Lists

- Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
- Ullamco laboris nisi ut aliquip
  - Consequat
  - Adipisicing
  - Exercitation
- Reprehenderit in voluptate
- Mollit anim id

```html
<ul class="list compact">
  <li>...</li>
  <li>
    Ullamco laboris nisi ut aliquip
    <ul class="list">
      <li>Consequat</li>
      <li>Adipisicing</li>
      <li>Exercitation</li>
    </ul>
  </li>
  <li>Reprehenderit in voluptate</li>
  <li>Mollit anim id</li>
</ul>
```

### Mixed Styled and Unstyled Lists

- Consectetur adipisicing elit
- Sed do eiusmod tempor
  - Dolore magna
  - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  - Incididunt ut labore
    - Ad minim veniam
    - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    - Exercitation ullamco
    - Laboris nisi ut
      - Aliquip ex ea commodo
      - Consequat duis
      - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    - In reprehenderit
- In voluptate velit esse cillum dolore
- Eu fugiat nulla pariatur

```html
<ul class="list-unstyled">
  <li>Consectetur adipisicing elit</li>
  <li>
    Sed do eiusmod tempor
    <ul class="list">
      <li>Dolore magna</li>
      <li>...</li>
      <li>
        Incididunt ut labore
        <ul class="list-unstyled">
          <li>Ad minim veniam</li>
          <li>...</li>
          <li>Exercitation ullamco</li>
          <li>
            Laboris nisi ut
            <ul class="list">
              <li>Aliquip ex ea commodo</li>
              <li>Consequat duis</li>
              <li>..</li>
            </ul>
          </li>
          <li>In reprehenderit</li>
        </ul>
      </li>
    </ul>
  </li>
  <li>In voluptate velit esse cillum dolore</li>
  <li>Eu fugiat nulla pariatur</li>
</ul>
```

### Lists in Cards

Unordered Lists

Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

- Ullamco Laboris
- Nisi Ut Aliquip
  - Exercitation
  - Laboris
  - Commodo
- Consequat
- Excepteur sint occaecat cupidatat non proident
- Enim ad Minim
- Occeaecat
  - Exercitation
  - Laboris
  - Commodo

Action

Ordered Lists

Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

1.  Ullamco Laboris
2.  Nisi Ut Aliquip
    1.  Exercitation
    2.  Laboris
    3.  Commodo
3.  Consequat
4.  Excepteur sint occaecat cupidatat non proident
5.  Enim ad Minim
6.  Occeaecat
    1.  Exercitation
    2.  Laboris
    3.  Commodo

Action

Unstyled Lists

Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

- Ullamco Laboris
- Nisi Ut Aliquip
  - Exercitation
  - Laboris
  - Commodo
- Consequat
- Excepteur sint occaecat cupidatat non proident
- Enim ad Minim
- Occeaecat
  - Exercitation
  - Laboris
  - Commodo

Action

```html
<div class="clr-row">
  <div class="clr-col-lg-4 clr-col-sm-6 clr-col-12">
    <div class="card">
      <div class="card-header">
        Unordered Lists
      </div>
      <div class="card-block">
        ...
      </div>
      <div class="card-block">
        <ul class="list">
          <li>Ullamco Laboris</li>
          <li>
            Nisi Ut Aliquip
            <ul class="list">
              <li>Exercitation</li>
              <li>Laboris</li>
              <li>Commodo</li>
            </ul>
          </li>
          <li>Consequat</li>
          <li>Excepteur sint occaecat cupidatat non proident</li>
          <li>Enim ad Minim</li>
          <li>
            Occeaecat
            <ul class="list-unstyled">
              <li>Exercitation</li>
              <li>Laboris</li>
              <li>Commodo</li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="card-footer">
        <a class="btn btn-primary">Action</a>
      </div>
    </div>
  </div>
  <div class="clr-col-lg-4 clr-col-sm-6 clr-col-12">
    <div class="card">
      <div class="card-header">
        Ordered Lists
      </div>
      <div class="card-block">
        ...
      </div>
      <div class="card-block">
        <ol class="list">
          <li>Ullamco Laboris</li>
          <li>
            Nisi Ut Aliquip
            <ol class="list">
              <li>Exercitation</li>
              <li>Laboris</li>
              <li>Commodo</li>
            </ol>
          </li>
          <li>Consequat</li>
          <li>Excepteur sint occaecat cupidatat non proident</li>
          <li>Enim ad Minim</li>
          <li>
            Occeaecat
            <ol class="list-unstyled">
              <li>Exercitation</li>
              <li>Laboris</li>
              <li>Commodo</li>
            </ol>
          </li>
        </ol>
      </div>
      <div class="card-footer">
        <a class="btn btn-primary">Action</a>
      </div>
    </div>
  </div>
  <div class="clr-col-lg-4 clr-col-sm-6 clr-col-12">
    <div class="card">
      <div class="card-header">
        Unstyled Lists
      </div>
      <div class="card-block">
        <p class="card-text">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
      <div class="card-block">
        <ul class="list-unstyled">
          <li>Ullamco Laboris</li>
          <li>
            Nisi Ut Aliquip
            <ul class="list">
              <li>Exercitation</li>
              <li>Laboris</li>
              <li>Commodo</li>
            </ul>
          </li>
          <li>Consequat</li>
          <li>Excepteur sint occaecat cupidatat non proident</li>
          <li>Enim ad Minim</li>
          <li>
            Occeaecat
            <ul class="list-unstyled">
              <li>Exercitation</li>
              <li>Laboris</li>
              <li>Commodo</li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="card-footer">
        <a class="btn btn-primary">Action</a>
      </div>
    </div>
  </div>
</div>
```
