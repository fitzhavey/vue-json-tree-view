import TreeViewItem from './components/tree-view/TreeViewItem.vue';
import TreeView from './components/tree-view/TreeView.vue';

export const components = {
  TreeViewItem,
  TreeView
};

export default {
  install (Vue) {
    Object.keys(components).forEach((name) => {
      Vue.component(name, components[name]);
    });
  }
};

export {
  TreeView
};
