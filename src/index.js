import TreeViewItem from './components/tree-view/TreeViewItem.vue';
import TreeView from './components/tree-view/TreeView.vue';

export const components = {
  TreeViewItem,
  TreeView
};

export default {
  install: (Vue) => {
    console.log("Installing Components", components)
    Object.keys(components).forEach((name) => {
      Vue.component(name, components[name]);
    });
  }
};

export {
  TreeView
};

// module.exports = {
// 	install: (Vue) => {
// 		Vue.component("TreeViewItem", TreeViewItem);
// 		Vue.component("TreeView", TreeView);
// 	}
// };
