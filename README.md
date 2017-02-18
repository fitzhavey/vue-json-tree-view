# Vue JSON Tree View

## Demo and Blogpost

You can check out the [demo](https://jsfiddle.net/arvidkahl/kwo6vk9d/11/) on JSFiddle and read the Blogpost called [Building a JSON Tree View Component in Vue.js from Scratch in Six Steps](https://devblog.digimondo.io/building-a-json-tree-view-component-in-vue-js-from-scratch-in-six-steps-ce0c05c2fdd8#.dkwh4jo2m) that lead to the creation of this library.

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
