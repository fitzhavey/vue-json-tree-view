<template>
	<input v-model="value" v-if="modifiable">
	<span v-else>{{ value }}</span>
</template>


<script>
import _ from 'lodash'

export default {
  	name: 'tree-view-item',
    props: ['data', 'modifiable', 'dataType'],
    data: function(){
    	return {
    		value: this.data
    	}
    },
    watch: {
      value: function(v) {
        this.$emit('change-data', [], this.typedValue(v))
      }
    },
    methods: {
      typedValue: function(v) {
        switch (this.dataType) {
          case 'number':
            return _.toNumber(v)
          case 'boolean':
            if (v == 'true') { return true }
            if (v == 'false') { return false }
            return false
          case 'string':
          default:
            return v
        }
      }
    }
}
</script>
