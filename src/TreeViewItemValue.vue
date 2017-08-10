<template>
	<input v-model="value" v-if="modifiable">
	<span v-else>{{ value }}</span>
</template>


<script>
export default {
  	name: 'tree-view-item',
    props: ['data', 'modifiable'],
    data: function(){
    	return {
    		value: this.data
    	}
    }
}
</script>
