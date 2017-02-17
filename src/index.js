import TreeViewItem from './TreeViewItem.vue';
import TreeView from './TreeView.vue';

module.exports = function install(Vue){
    Vue.component("tree-view-item", TreeViewItem);
    Vue.component("tree-view", TreeView);  
};
