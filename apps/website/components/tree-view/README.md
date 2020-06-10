---
title: Overview
---

# Tree View

- [Design Guidelines](/documentation/tree-view#top)
- [Code & Examples](/documentation/tree-view#examples)

##### A tree is a hierarchical component that shows the visual representation of the parent-child relationship between nodes.

### Three Main Variations

#### Basic Tree

A basic tree provides a tree structure with named nodes and an arrow to expand and collapse child nodes.

Office Locations

USA

Palo Alto, CA (Headquarters)

Seattle, WA

Austin, TX

UK

London

India

Bangalore, KA

Pune, MH

#### Basic Tree With Icons

A tree can include icons to represent the type of nodes within that group. Icons appear between the collapse/expand arrow and the parent node title.

When using icons in a tree, make sure to use them on all nodes. Do not alternate between using and not using icons within the same tree.

If using a tree in the context of other components, make sure those icons are distinctive and easily recognizable. Use neutral colors to avoid overloading the tree and related components with colors and shapes.

Applications

Calendar

Charts

Dashboard

Maps

Mail

Numbers

Tasks

Reminders

Files

Cover Letter.doc

Flyer.doc

Resume.doc

Notes.txt

Images

Screenshot.png

Pic.png

Portfolio.jpg

#### Checkbox Tree

A checkbox tree features checkboxes between the collapse/expand arrow and the name to indicate whether a node is selected. A parent node with children that are both selected and not selected is shown with an “indeterminate” state.

Checkbox trees should not be used together with icons for the nodes. As with icon trees, make sure to put checkboxes on all nodes of a checkbox tree. Do not alternate between types of trees in a checkbox tree.

Permissions

unselected

Authenticated Users

unselected

Read

selected

Modify

unselected

Owners

selected

Read

selected

Modify

selected

Public

unselected

Read

unselected

Modify

selected

### Style

The styling of each piece of a tree node is consistent across the different types of trees.

#### Touch Targets

The dimensions of the expand/collapse arrow and the node title allow for a comfortable touch target allowing use with a mouse or a touch screen.

![Touch Targets](assets/images/documentation/tree-view/example_tree_touch.svg)

Touch Targets are relevant even outside of a mobile form factor. Many new desktop environments, especially those running Windows, allow for the use of a touch screen and should be considered when designing your applications.

### Behavior

To explain the behavior of the tree, here is the terminology we’ll be using in this section:

###### Highlight

Click on a node in the tree to either “highlight” it or navigate to its relative content.

###### Select

Choose items to apply an action. For example, selecting a checkbox in the tree.

###### Expand / Collapse

Use the arrow to the left of a node to expand or collapse a node in the tree.

### Interacting With Nodes

#### Expanding / Collapsing Nodes

To expand or collapse a parent node, the user clicks on the expand/collapse arrow. Clicking on the node item itself does not expand or collapse a node. It serves as a highlighting mechanism.

In read-only trees where highlighting is not an option, this pattern remains true for consistency.

![Interacting With Nodes](assets/images/documentation/tree-view/example_tree_interacting.svg)

#### Highlighting Tree Nodes

To navigate to a content area based on a tree node or to highlight a tree node in order to take a subsequent action based on the selection, a user clicks on the node title itself.

![Highlighting Tree Nodes](assets/images/documentation/tree-view/example_tree_highlighting.svg)

#### Interacting With Checkbox Trees

With a checkbox tree, a user is able to perform one or a combination of three actions by clicking on one of three distinct targets:

1.  Expanding and Collapsing: a user is able to perform this action by clicking on the expand / collapse arrow.
2.  Checking a Checkbox: this would require clicking on the checkbox itself to check or uncheck a treenode. This will also affect the status of the parent node’s checkbox.
3.  Highlighting Tree Node: a user can highlight a tree node by clicking on the name (label) of the tree node. This allows for the possibility of loading content based on selection to provide more information on a tree node.

![Interacting with Checkbox Trees](assets/images/documentation/tree-view/example_tree_checkbox_interacting.svg)

### Loading Data

The way to load data within the tree is based on the scenario in which the tree is being used.

###### Load Parent Nodes First

With a dynamic tree, make sure to load the parent nodes first and then lazy load child nodes when requested.

A general goal to keep in mind is that you want to minimize the time a user needs to spend before their first interaction with the tree as well as every subsequent interaction afterwards.

![Loading Data](assets/images/documentation/tree-view/example_tree_lazyloading.svg)

### Code & Examples

- [Basic tree](/documentation/tree-view#basic-tree)
- [Keeping track of expanded nodes](/documentation/tree-view#expanded-nodes)
- [Routing using a tree](/documentation/tree-view#routing-tree)
- [Generating A tree dynamically](/documentation/tree-view#dynamically-generated)
- [Checkbox tree](/documentation/tree-view#checkbox-tree)
- [Binding selection to a boolean](/documentation/tree-view#boolean-selection)
- [Recursive tree](/documentation/tree-view#recursive-tree)
- [Lazy loading children](/documentation/tree-view#lazy-loading)
- [Lazy loading and selection](/documentation/tree-view#lazy-loading-selection)
- [Lazy-loading recursive trees](/documentation/tree-view#lazy-loading-recursive)
- [Summary of options](/documentation/tree-view#api-tables)

### Basic Tree

A basic tree can be created by simply nesting `clr-tree-node` components at will. To pre-expand a node, you can use the `[clrExpanded]` input.

Please note that every tree requires to have root node to work properly, this is done by having `clr-tree` as root wrapper, please check the example below.

David Wallace (CFO)

Michael Scott (Regional Manager)

Dwight K. Schrute (Assistant to the Regional Manager)

Jim Halpert (Head of Sales)

Andy Bernard

Stanley Hudson

Phyllis Vance

Todd Packer

Angela Martin (Head of Accounting)

Kevin Malone

Oscar Martinez

Kelly Kapoor (Head of Customer Service)

Ryan Howard (Temp)

Creed Bratton (Quality Assurance)

Meredith Palmer (Supplier Relations)

Toby Flenderson (Human Resources)

Pam Beesly (Reception)

Darryl Philbin (Warehouse)

```html
<clr-tree>
  <clr-tree-node [clrExpanded]="true">
    David Wallace (CFO)
    <clr-tree-node [clrExpanded]="true">
      Michael Scott (Regional Manager)

      <clr-tree-node>Dwight K. Schrute (Assistant to the Regional Manager)</clr-tree-node>

      <clr-tree-node>
        Jim Halpert (Head of Sales)
        <clr-tree-node>Andy Bernard</clr-tree-node>
        <clr-tree-node>Stanley Hudson</clr-tree-node>
        <clr-tree-node>Phyllis Vance</clr-tree-node>
        <clr-tree-node>Todd Packer</clr-tree-node>
      </clr-tree-node>

      <clr-tree-node>
        Angela Martin (Head of Accounting)
        <clr-tree-node>Kevin Malone</clr-tree-node>
        <clr-tree-node>Oscar Martinez</clr-tree-node>
      </clr-tree-node>

      <clr-tree-node>
        Kelly Kapoor (Head of Customer Service)
        <clr-tree-node>Ryan Howard (Temp)</clr-tree-node>
      </clr-tree-node>

      <clr-tree-node>
        Creed Bratton (Quality Assurance)
      </clr-tree-node>

      <clr-tree-node>
        Meredith Palmer (Supplier Relations)
      </clr-tree-node>

      <clr-tree-node>
        Toby Flenderson (Human Resources)
      </clr-tree-node>

      <clr-tree-node>
        Pam Beesly (Reception)
      </clr-tree-node>

      <clr-tree-node>
        Darryl Philbin (Warehouse)
      </clr-tree-node>
    </clr-tree-node>
  </clr-tree-node>
</clr-tree>
```

[Back to navigation](/documentation/tree-view#examples)

### Keeping track of expanded nodes

If you need to keep track of whether certain nodes are expanded or collapsed, each tree node offers a `[(clrExpanded)]` boolean two-way binding.

I am expanded

Child Tree Node

```html
<clr-tree>
  <clr-tree-node [(clrExpanded)]="expanded">
    {{expanded ? "I am expanded" : "I am collapsed"}}
    <clr-tree-node>
      Child Tree Node
    </clr-tree-node>
  </clr-tree-node>
</clr-tree>
```

```typescript
export class TreeNodeLabelChangeOnExpandDemo {
  expanded: boolean = true;
}
```

[Back to navigation](/documentation/tree-view#examples)

### Routing using a Tree

Use the `.clr-treenode-link` class to style content inside of a Tree Node as clickable. To indicate an active Tree Node use the `.active` class along with `.clr-treenode-link`.

The Beatles

Abbey Road

Revolver

Rubber Soul

#### Abbey Road (1969)

Abbey Road is the eleventh studio album by the English rock band the Beatles, released on 26 September 1969 by Apple Records. The recording sessions for the album were the last in which all four Beatles participated. Although Let It Be was the final album that the Beatles completed before the band's dissolution in April 1970, most of the album had been recorded before the Abbey Road sessions began. A double A-side single from the album, "Something"/"Come Together", released in October, topped the Billboard chart in the US.

```html
<clr-tree>
  <clr-tree-node [clrExpanded]="true">
    The Beatles
    <clr-tree-node>
      <a [routerLink]="['./album1']" class="clr-treenode-link" routerLinkActive="active">Abbey Road</a>
    </clr-tree-node>
    <clr-tree-node>
      <a [routerLink]="['./album2']" class="clr-treenode-link" routerLinkActive="active">Revolver</a>
    </clr-tree-node>
    <clr-tree-node>
      <a [routerLink]="['./album3']" class="clr-treenode-link" routerLinkActive="active">Rubber Soul</a>
    </clr-tree-node>
  </clr-tree-node>
</clr-tree>
<router-outlet></router-outlet>
```

[Back to navigation](/documentation/tree-view#examples)

### Generating A Tree Dynamically

Applications

Calendar

Charts

Dashboard

Maps

Mail

Numbers

Tasks

Reminders

Files

Cover Letter.doc

Flyer.doc

Resume.doc

Notes.txt

Images

Screenshot.png

Pic.png

Portfolio.jpg

```html
<clr-tree>
  <clr-tree-node *ngFor="let directory of rootDirectory" [(clrExpanded)]="directory.expanded">
    <clr-icon [attr.shape]="directory.icon"></clr-icon>
    {{directory.name}}
    <clr-tree-node *ngFor="let file of directory.files">
      <button (click)="openFile(directory.name, file.name)" class="clr-treenode-link" [class.active]="file.active">
        <clr-icon [attr.shape]="file.icon"></clr-icon>
        {{file.name}}
      </button>
    </clr-tree-node>
  </clr-tree-node>
</clr-tree>
```

```typescript
rootDirectory: any[] = [
        {
            name: "Applications",
            icon: "folder",
            expanded: true,
            files: [
                {
                    icon: "calendar",
                    name: "Calendar",
                    active: true
                },
                {
                    icon: "line-chart",
                    name: "Charts",
                    active: false
                },
                {
                    icon: "dashboard",
                    name: "Dashboard",
                    active: false
                },
                {
                    icon: "map",
                    name: "Maps",
                    active: false
                },
                ...
            ]
        },
        {
            name: "Files",
            icon: "folder",
            expanded: false,
            files: [
                {
                    icon: "file",
                    name: "Cover Letter.doc",
                    active: false
                },
                ...
            ]
        },
        {
            name: "Images",
            icon: "folder",
            expanded: false,
            files: [
                {
                    icon: "image",
                    name: "Screenshot.png",
                    active: false
                },
                ...
            ]
        }
    ];

    openFile(directoryName: string, fileName: string) {
        ...
        ...
    }
```

[Back to navigation](/documentation/tree-view#examples)

### Checkbox Tree

Selection on the whole tree is enabled as soon as one of the nodes uses the `[(clrSelected)]` two-way binding. This two-way binding can receive either booleans or `ClrSelectedState` enum values, which can be `UNSELECTED`, `SELECTED` or `INDETERMINATE`. It will however always output `ClrSelectedState` enum values because the node could become indeterminate, so true two-way binding should be used on a `ClrSelectedState` property.

As with any two-way binding, the input can be used to pre-select nodes or dynamically select them due to external actions.

Dairy

unselected

Milk

unselected

Cheese

selected

Vegetables

unselected

Carrots

unselected

Potatoes

unselected

Beans

unselected

Select all vegetables

\[
{
"name": "Dairy",
"selected": "INDETERMINATE",
"items": \[
{
"name": "Milk",
"selected": "UNSELECTED"
},
{
"name": "Cheese",
"selected": "SELECTED"
}
\]
},
{
"name": "Vegetables",
"selected": "UNSELECTED",
"items": \[
{
"name": "Carrots",
"selected": "UNSELECTED"
},
{
"name": "Potatoes",
"selected": "UNSELECTED"
},
{
"name": "Beans",
"selected": "UNSELECTED"
}
\]
}
\]

```html
<clr-tree>
  <clr-tree-node *ngFor="let group of groceries" [(clrSelected)]="group.selected" [clrExpanded]="true">
    {{group.name}}
    <clr-tree-node *ngFor="let item of group.items" [(clrSelected)]="item.selected">
      {{item.name}}
    </clr-tree-node>
  </clr-tree-node>
</clr-tree>

<button class="btn btn-sm" type="button" (click)="selectVegetables()">Select all vegetables</button>
```

```typescript
export class GroceryList {
  groceries = [
    {
      name: 'Dairy',
      selected: ClrSelectedState.INDETERMINATE,
      items: [
        {
          name: 'Milk',
          selected: ClrSelectedState.UNSELECTED,
        },
        {
          name: 'Cheese',
          selected: ClrSelectedState.SELECTED,
        },
      ],
    },
    {
      name: 'Vegetables',
      selected: ClrSelectedState.UNSELECTED,
      items: [
        {
          name: 'Carrots',
          selected: ClrSelectedState.UNSELECTED,
        },
        {
          name: 'Potatoes',
          selected: ClrSelectedState.UNSELECTED,
        },
        {
          name: 'Beans',
          selected: ClrSelectedState.UNSELECTED,
        },
      ],
    },
  ];

  selectVegetables() {
    this.groceries[1].selected = ClrSelectedState.SELECTED;
  }
}
```

### Binding selection to a boolean

If you know a specific node can never become indeterminate, you probably want to use a boolean property on your node. As mentioned previously, `[(clrSelected)]` always outputs `ClrSelectedState` enum values, making two-way binding with a boolean problematic. The most straightforward solution is to use [the de-sugarized syntax of the two-way binding](https://angular.io/guide/template-syntax#two-way-binding---) , transforming the output to a boolean directly.

Permissions

unselected

Authenticated Users

unselected

Read

selected

Modify

selected

Create

unselected

Delete

unselected

Owners

selected

Read

selected

Modify

selected

Create

selected

Delete

selected

Public

unselected

Read

selected

Modify

unselected

Create

unselected

Delete

unselected

\[
{
"type": "Authenticated Users",
"rights": \[
{
"name": "Read",
"enable": true
},
{
"name": "Modify",
"enable": true
},
{
"name": "Create",
"enable": false
},
{
"name": "Delete",
"enable": false
}
\]
},
{
"type": "Owners",
"rights": \[
{
"name": "Read",
"enable": true
},
{
"name": "Modify",
"enable": true
},
{
"name": "Create",
"enable": true
},
{
"name": "Delete",
"enable": true
}
\]
},
{
"type": "Public",
"rights": \[
{
"name": "Read",
"enable": true
},
{
"name": "Modify",
"enable": false
},
{
"name": "Create",
"enable": false
},
{
"name": "Delete",
"enable": false
}
\]
}
\]

```html
<clr-tree>
  <clr-tree-node [clrExpanded]="true">
    Permissions
    <clr-tree-node *ngFor="let permission of permissions" [clrExpanded]="true">
      {{permission.type}}
      <clr-tree-node
        *ngFor="let right of permission.rights"
        [clrSelected]="right.enable"
        (clrSelectedChange)="right.enable = !!$event"
      >
        {{right.name}}
      </clr-tree-node>
    </clr-tree-node>
  </clr-tree-node>
</clr-tree>
```

```typescript
@Component({
  selector: '...',
  templateUrl: '...',
})
export class Permissions {
  permissions: any = [
    {
      type: 'Authenticated Users',
      rights: [
        {
          name: 'Read',
          enable: true,
        },
        {
          name: 'Modify',
          enable: true,
        },
        {
          name: 'Create',
          enable: false,
        },
        {
          name: 'Delete',
          enable: false,
        },
      ],
    },
    {
      type: 'Owners',
      rights: [
        {
          name: 'Read',
          enable: true,
        },
        {
          name: 'Modify',
          enable: true,
        },
        {
          name: 'Create',
          enable: true,
        },
        {
          name: 'Delete',
          enable: true,
        },
      ],
    },
  ];
}
```

[Back to navigation](/documentation/tree-view#examples)

### Recursive tree

If the data you are displaying is recursive or has an unknown depth, you can use our `*clrRecursiveFor` structural directive to recursively iterate over your data. It has the same syntax as `*ngFor`, and accepts an additional `getChildren` parameter that receives a node and should return its children. Please note that it needs to be used inside of a `<clr-tree>` to function properly.

src

unselected

app

unselected

app.component.html

unselected

app.component.ts

unselected

app.module.ts

selected

app.routing.ts

unselected

environments

unselected

environments.prod.ts

unselected

environment.ts

unselected

index.html

selected

main.ts

selected

package.json

unselected

tsconfig.json

unselected

```html
<clr-tree>
  <clr-tree-node *clrRecursiveFor="let file of root; getChildren: getChildren" [(clrSelected)]="file.selected">
    {{file.name}}
  </clr-tree-node>
</clr-tree>
```

```typescript
export class RecursiveSelection {
  root = [
    {
      name: 'src',
      selected: ClrSelectedState.INDETERMINATE,
      files: [
        {
          name: 'app',
          selected: ClrSelectedState.INDETERMINATE,
          files: [
            {
              name: 'app.component.html',
              selected: ClrSelectedState.UNSELECTED,
            },
            {
              name: 'app.component.ts',
              selected: ClrSelectedState.UNSELECTED,
            },
            {
              name: 'app.module.ts',
              selected: ClrSelectedState.SELECTED,
            },
            {
              name: 'app.routing.ts',
              selected: ClrSelectedState.UNSELECTED,
            },
          ],
        },
        {
          name: 'environments',
          selected: ClrSelectedState.SELECTED,
          files: [
            {
              name: 'environments.prod.ts',
              selected: ClrSelectedState.SELECTED,
            },
            {
              name: 'environment.ts',
              selected: ClrSelectedState.SELECTED,
            },
          ],
        },
        {
          name: 'index.html',
          selected: ClrSelectedState.UNSELECTED,
        },
        {
          name: 'main.ts',
          selected: ClrSelectedState.UNSELECTED,
        },
      ],
    },
    {
      name: 'package.json',
      selected: ClrSelectedState.UNSELECTED,
    },
    {
      name: 'tsconfig.json',
      selected: ClrSelectedState.UNSELECTED,
    },
  ];

  getChildren = folder => folder.files;
}
```

[Back to navigation](/documentation/tree-view#examples)

### Lazy-loading children

If your tree is too large to be fully build on initialization or getting the children of a node is an expensive operation like an HTTP request, you might want to lazy-load tree nodes, only loading the ones that are currently displayed. To lazy-load children for a simple tree component, you need to combine several features as follows:

- use our `<clr-tree>` root component, giving it a `[clrLazy]="true"` input,
- leverage our `*clrIfExpanded` structural directive to only instantiate children when they are displayed,
- listen to the `(clrIfExpandedChange)` output to fetch the children's data,
- add a `[clrLoading]` boolean input to the node if fetching children is asynchronous, to display a spinner while waiting for the data to be loaded.

Office Locations

```html
<clr-tree [clrLazy]="true">
  <clr-tree-node [clrLoading]="loading">
    <clr-icon shape="building"></clr-icon>
    Office Locations
    <ng-template clrIfExpanded (clrIfExpandedChange)="$event ? fetchLocations() : null">
      <clr-tree-node *ngFor="let location of locations$ | async">
        {{location}}
      </clr-tree-node>
    </ng-template>
  </clr-tree-node>
</clr-tree>
```

```typescript
@Component({...})
export class OfficeLocations {
    constructor(private locationService: LocationService) {}

    locations$: Observable<string[]>;
    loading = false;

    fetchLocations() {
        this.loading = true;
        this.locations$ = this.locationService.getLocations().pipe(tap(() => this.loading = false));
    }
}
```

[Back to navigation](/documentation/tree-view#examples)

### Lazy-loading and selection

When lazy-loading nodes in a tree, Clarity only has partial information on the overall data and cannot link parent and children state as it does in the previous cases. For instance, in a lazy-loaded file system tree, our tree component does not know the contents of a folder until it is expanded. This means that if the user selects the folder without expanding it first we cannot output the selection change for the files, only for the folder itself. It is up to the application or up to the server to preserve consistency, ensuring files in the folder are selected if the folder itself is.

Dairy

unselected

Vegetables

unselected

```html
<clr-tree [clrLazy]="true">
  <clr-tree-node *ngFor="let group of groceries$ | async" [(clrSelected)]="group.selected">
    {{group.name}}
    <ng-template clrIfExpanded>
      <my-grocery-items [group]="group"></my-grocery-items>
    </ng-template>
  </clr-tree-node>
</clr-tree>
```

```typescript
@Component({
  selector: 'my-grocery-items',
  template: `
    <ng-container [clrLoading]="loading">
      <clr-tree-node *ngFor="let item of items$ | async" [(clrSelected)]="item.selected">
        {{ item.name }}
      </clr-tree-node>
    </ng-container>
  `,
})
export class GroceryItemsComponent implements OnInit {
  constructor(private itemsService: ItemsService) {}

  @Input() group: Group;
  items$: Observable<Item[]>;
  loading = false;

  ngOnInit() {
    this.loading = true;
    this.items$ = this.itemsService.getItems(this.group).pipe(tap(() => (this.loading = false)));
  }
}
```

[Back to navigation](/documentation/tree-view#examples)

### Lazy-loading recursive trees

Lazy-loading data for recursive trees is actually the simplest case: as soon as you set `[clrLazy]="true"` on the parent `<clr-tree>`, the `getChildren` function will only be lazily called when a node becomes expanded, and supports both `Promise` and `Observable` return types if you need to fetch children asynchronously.

By default, recursive trees will pre-load on level ahead to know if the currently displayed nodes are expandable of not. If you do not want this behavior and have a way of knowing if a node is expandable without fetching its children, you can prevent the extra loading by using the `[clrExpandable]` boolean input on nodes based on your own condition.

src

package.json

tsconfig.json

```html
<clr-tree [clrLazy]="true">
  <clr-tree-node *clrRecursiveFor="let file of root$ | async; getChildren: getChildren" [clrExpandable]="file.isFolder">
    <clr-icon [attr.shape]="file.isFolder ? 'folder' : 'file'"></clr-icon>
    {{file.name}}
  </clr-tree-node>
</clr-tree>
```

```typescript
@Component({...})
export class FileBrowser implements OnInit {
    constructor(private folderService: FolderService) {}

    root$: Observable<File[]>;

    getChildren = (folder: File) => {
        if (folder.isFolder) {
            return this.folderService.getFiles(folder);
        } else {
            return null;
        }
    };

    ngOnInit(): void {
        this.root$ = this.folderService.getFiles('/');
    }
}
```

[Back to navigation](/documentation/tree-view#examples)

## Summary of Options

#### Tree `<clr-tree>`

Input/Output

Values

Default

Effect

**\[(clrLazy)\]**

Type: boolean

Default: false

boolean

false

Indicates to the tree that children nodes should be lazy-loaded

#### Tree Node `<clr-tree-node>`

Input/Output

Values

Default

Effect

**\[(clrSelected)\]**

Type: ClrSelectedState

Default: UNSELECTED

ClrSelectedState

UNSELECTED

Two-way binding on the state of a Tree Node: UNSELECTED, SELECTED or INDETERMINATE.

**\[(clrExpanded)\]**

Type: boolean

Default: false

boolean

false

Two-way binding on the expanded/collapsed state of the node.

**\[clrExpandable\]**

Type: boolean | undefined

Default: undefined

boolean | undefined

undefined

Forces a node to be expandable or node, regardless of its children.

#### Recursive iterator `*clrRecursiveFor`

Input/Output

Values

Default

Effect

**\[clrRecursiveForOf\]**

Type: T | T\[\]

Default: none

T | T\[\]

none

Root node(s) of the recursive tree, to begin the iteration.

**\[clrRecursiveForGetChildren\]**

Type: T => T\[\] | Promise<T\[\]> | Observable<T\[\]>

Default: none

T => T\[\] | Promise<T\[\]> | Observable<T\[\]>

none

The function to call in order to iterate over the children of a node. Can return an asynchronous result in the form of a Promise or an Observable.

#### `*clrIfExpanded` directive

Input/Output

Values

Default

Effect

**\[(clrIfExpanded)\]**

Type: boolean

Default: false

boolean

false

Two-way binding on the expanded/collapsed state of the node.

#### Loading directive `[clrLoading]`

Input/Output

Values

Default

Effect

**\[clrLoading\]**

Type: boolean

Default: false

boolean

false

Activates a spinner to indicate that children nodes are loading.
