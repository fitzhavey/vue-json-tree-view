import TreeViewItemValue from './TreeViewItemValue.vue';
import TreeViewItem from './TreeViewItem.vue';
import TreeView from './TreeView.vue';

export default function install(Vue) {
	Vue.component('tree-view-item-value', TreeViewItemValue);
	Vue.component('tree-view-item', TreeViewItem);
	Vue.component('tree-view', TreeView);
}

export { TreeView };
