<template>
  <div class="tree-view-wrapper">
    <tree-view-item class="tree-view-item-root" :data="parsedData" :max-depth="maxDepth" :current-depth="0"></tree-view-item>
  </div>
</template>

<script>
  import _ from 'lodash';
  import TreeViewItem from './TreeViewItem.vue';

  export default {
    components:{
      TreeViewItem
    },
  	name: "tree-view",
    props: ["data", "max-depth"],
    methods: {

    	// Transformer for the non-Collection types,
      // like String, Integer of Float
      transformValue: function(valueToTransform, keyForValue){
      	return {
        	key: keyForValue,
          type: "value",
          value: valueToTransform
        }
      },

    	// Since we use lodash, the _.map method will work on
      // both Objects and Arrays, returning either the Key as
      // a string or the Index as an integer
    	generateChildrenFromCollection: function(collection){
  			return _.map(collection, (value, keyOrIndex)=>{
            if (this.isObject(value)) {
              return this.transformObject(value, keyOrIndex);
            }
            if (this.isArray(value)) {
              return this.transformArray(value, keyOrIndex);
            }
            if (this.isValue(value)) {
              return this.transformValue(value, keyOrIndex);
            }
          }) ;
      },

    	// Transformer for the Array type
      transformArray: function(arrayToTransform, keyForArray){
      	return {
        	key: keyForArray,
          type: "array",
          children: this.generateChildrenFromCollection(arrayToTransform)
        }
      },

      // Transformer for the Object type
    	transformObject: function(objectToTransform, keyForObject, isRootObject = false){
        return {
        	key: keyForObject,
        	type: "object",
          isRoot: isRootObject,
          children: this.generateChildrenFromCollection(objectToTransform)
        }
      },

      // Helper Methods for value type detection
      isObject: function(value){
      	return _.isPlainObject(value);
      },

      isArray: function(value){
      	return _.isArray(value);
      },

      isValue: function(value){
      	return !this.isObject(value) && !this.isArray(value);
      }
    },
    computed: {
    	parsedData: function(){
      	// Take the JSON data and transform
        // it into the Tree View DSL
  	    return this.transformObject(this.data, "root", true);
      }
    }
  };
</script>

<style scoped>

.tree-view-wrapper {
  overflow: auto;
}

/* Find the first nested node and override the indentation */
.tree-view-item-root > .tree-view-item-leaf > .tree-view-item {
  margin-left: 0!;
}

/* Root node should not be indented */
.tree-view-item-root {
  margin-left: 0!;
}

</style>
