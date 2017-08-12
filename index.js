import Vue from 'vue';
import TreeView from './src/TreeView.vue';

new Vue({
    el: '#container',
    components: {
      TreeView
    },
    data() {
        return {
          sampleJSON: {"testArray": ["Just a Test String", "in a Test Array", 0, 1, true, false], "component":"vue-json-tree-view","descripton":"A JSON Tree View built in Vue.js","tags":[{"name":"vue.js"},{"name":"JSON"}],"steps":["HTML Template","Root Component","View Component",{"Transformation Logic":["Transform Objects","Transform Arrays","Transform Values"]},"Animate","Allow Options","Blog about it..."]},
          sampleJSONString: "Just a Test String",
          sampleJSONArray: ["Just a Test String", "in a Test Array", 0, 1, true, false],
        };
    },
    methods: {
      onChangeData: function(data) {
        // console.log(JSON.stringify(data,  null, 2))
        console.log('updated')
      }
    }
});
