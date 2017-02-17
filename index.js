import Vue from 'vue';
import TreeView from './src/TreeView.vue';

new Vue({
    el: '#container',
    components: {
      TreeView
    },
    data() {
        return {
          sampleJSON: {
            test: [1,2,3]
          }
        };
    }
});
