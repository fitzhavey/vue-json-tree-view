# Vue JSON Tree View

![a demonstration](https://raw.githubusercontent.com/arvidkahl/vue-json-tree-view/master/header.png)

## Demo and Blogpost

You can check out the [demo](https://jsfiddle.net/arvidkahl/kwo6vk9d/11/) on JSFiddle and read the Blogpost called [Building a JSON Tree View Component in Vue.js from Scratch in Six Steps](http://brianyang.com/building-a-json-tree-view-component-in-vue-js-from-scratch-in-six-steps) that lead to the creation of this library.

##  Installation

Install the plugin with npm:
```shell
npm install --save vue-json-tree-view
```

Then, in your Application JavaScript, add:
```javascript
import TreeView from "vue-json-tree-view"
Vue.use(TreeView)
```

Done.

## Usage

Put the `tree-view` element into your  HTML where you want the Tree View to appear.
```html
<div>
  <tree-view :data="jsonSource" :options="{maxDepth: 3}"></tree-view>
</div>
```

## Props

#### `data`

The JSON to be displayed. Expects a valid JSON object.

#### `options`

The defaults are:
```
{
  maxDepth: 4,
  rootObjectKey: "root",
  modifiable: false,
  link: false,
  limitRenderDepth: false
}
```
- maxDepth: The maximum number of levels of the JSON Tree that should be expanded by default. Expects an Integer from 0 to Infinity.
- rootObjectKey: the name of the Root Object, will default to `root`.
- modifiable: To modify the json value.
- link: URL strings will appear as clickable links (unless `modifiable="true"`).
- limitRenderDepth: maximum number of nodes that should be rendered (for very large JSONs)

#### `open-child-details`

```
{
  openKey:"Contact",
  uniqueKey:{
    key:"Name",
    value:"John Doe"
  }
}
```
- The `open-child-details` component is used to specify the default open state of a nested data. It has two main properties:
- `openKey`: This property represents the exact name of the key or node that you want to be opened by default.
- `uniqueKey`: This property is used to identify the exact `openKey` when you have multiple instances of the openKey existing in different children of the data. It consists of two sub-properties:
- `key`: The key within the data that you want to use as the unique identifier.
- `value`: The value of the unique identifier.

```{ State: "NY",
  City: "NY",
  Count: 25
  Citizens: [{
    Name: "John Doe",
    Contact: [1234567890, 0987654321]
  },
  {
    Name: "Jane Doe",
    Contact: [1122334455, 0099887766]
  }]
}
```

- In this example, To open John Doe Citizen's contact information using their name as the unique identifier, provide the following props:

```
{
  openKey:"Contact",
  uniqueKey:{
    key:"Name",
    value:"John Doe"
  }
}
```

## Event

#### updated json data
If `modifiable` is true and you want to take the updated json data, you must register event handler as `v-on:change-data=...`. Only one argument is passed that is updated data - `data`.
```html
<div>
  <tree-view :data="jsonSource" :options="{modifiable: true}" @change-data="onChangeData"></tree-view>
</div>

// in your vue code
  ...
  methods: {
    onChangeData: function(data) {
      console.log(JSON.stringify(data))
    }
  },
  ...

```


## Custom Styling

All leaves will have their type indicated as a CSS class, like `tree-view-item-value-string`. Supported types: String, Number, Function, Boolean and Null Values.

Keys can also be styled. For instance to make labels red:
```
.tree-view-item-key {
    color: red;
}
```

## Contributing
Contributions to this repo are very welcome as they are what has helped it become what it is today. Simply raise an issue with new ideas or submit a pull request.

A github action automatically deploys changes when they are merged into the master branch.