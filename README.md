# Vue JSON Tree View

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
  <tree-view :data="jsonSource" max-depth="3"></tree-view>
</div>
```

## Props

#### `data`

The JSON to be displayed. Expects a valid JSON object.

#### `max-depth`

The maximum number of levels of the JSON Tree that should be expanded by default. Expects an Integer from 0 to Infinity.

## Notes

Enjoy.
