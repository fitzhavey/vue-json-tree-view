# Vue JSON Tree View
A Vue component to render JSON data in a collapsable tree.
![an example](https://raw.githubusercontent.com/arvidkahl/vue-json-tree-view/master/header.png)

## Installation

Install [vue-json-tree-vue](https://www.npmjs.com/package/vue-json-tree-view):
```bash
npm install --save vue-json-tree-view
```

Include in it either globally (in `main.js`) or a Vue component.
_Global_:
```js
// main.js
// ...
import TreeView from 'vue-json-tree-view';

Vue.use(TreeView);
// ...
```
_Component_:
```js
// MyComponent.vue
// ...
import TreeView from 'vue-json-tree-view';

export default {
	components: {
		TreeViewItem
	},
// ...
```

And then add it to your template:
```html
	<div>
		<tree-view :data="jsonSource"/>
	</div>
```

## Properties
Customisation of the tree is configured with the following properties:
| Name    | Default      | Description                                                 |
|---------|--------------|-------------------------------------------------------------|
| data    | **required** | JS object to render (accepts `Object` / `String` / `Array`) |
| options | `{}`         | _documented below_                                          |

The options object contains the following properties, shown with default values below:
```js
{
	// type: Boolean
	// info: whether Strings that contain links should be clickable
	link: false,

	// type: Boolean / Number
	// info: maximum depth into the tree that should be considered when rendering. If set to false will render as many nodes as possible.
	limitRenderDepth: false

	// type: Number
	// info: the depth into the tree that should be expanded by default.
	maxDepth: 4,

	// type Boolean
	// info: whether the data should be editable
	modifiable: false,

	// type: String
	// info: the label for the root of the tree
	rootObjectKey: 'root'
}
```

## Events

| Name       | Description                                              | Params                            |
|------------|----------------------------------------------------------|-----------------------------------|
| changeData | Fired when the JSON is updated (if `modifiable="true"`) | `data`: the new value of the JSON |


## Styling

All edge nodes or 'leaves' of this tree have their type indicated with a CSS class, i.e. `tree-view-item-value-string`. The keys can also be styled with the class `tree-view-item-key`.

e.g.
```css
.tree-view-item-value-string {
	color: yellow;
}

.tree-view-item-key {
	color: red;
}
```

## Contributing
Contributions to this repo are very welcome, it wouldn't be what it is tdoay without them! Simply raise an issue with new ideas or send a pull request our way. If you've done the above and are interested in joining the team, we'd be very happy to have you on board!

### Development

Install dependencies
```
npm install
```

And then start a webpack development server to host your local files.
```
npm run dev
```
You'll now be able to see your changes. From here make changes to your hearts content and then submit a pull request. These changes will automatically be deployed once the pull request has been merged into the master branch.

## Relevant Links
- This project was inspired by a blogpost, which can be found here:
	http://brianyang.com/building-a-json-tree-view-component-in-vue-js-from-scratch-in-six-steps

- A JS Fiddle to test out this package:
	https://jsfiddle.net/arvidkahl/kwo6vk9d/11/