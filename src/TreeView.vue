<template>
	<div class="tree-view-wrapper">
		<tree-view-item
			class="tree-view-item-root"
			:data="parsedData"
			:max-depth="allOptions.maxDepth"
			:current-depth="0"
			:modifiable="allOptions.modifiable"
			:link="allOptions.link"
			:limit-render-depth="allOptions.limitRenderDepth"
			@change-data="onChangeData"/>
	</div>
</template>

<script>
import _ from 'lodash';
import TreeViewItem from './TreeViewItem.vue';

export default {
	components: {
		TreeViewItem
	},
	name: 'tree-view',
	props: ['data', 'options', 'open-child-details'],
	methods: {

		// Transformer for the non-Collection types,
		// like String, Integer of Float
		transformValue(valueToTransform, keyForValue) {
			return {
				key: keyForValue,
				type: 'value',
				value: valueToTransform
			};
		},

		// Since we use lodash, the _.map method will work on
		// both Objects and Arrays, returning either the Key as
		// a string or the Index as an integer
		generateChildrenFromCollection(collection) {
			return _.map(collection, (value, keyOrIndex) => {
				if (this.isObject(value)) {
					return this.transformObject(value, keyOrIndex);
				}
				if (this.isArray(value)) {
					return this.transformArray(value, keyOrIndex);
				}
				if (this.isValue(value)) {
					return this.transformValue(value, keyOrIndex);
				}
			});
		},

		// Transformer for the Array type
		transformArray(arrayToTransform, keyForArray) {
			return {
				key: keyForArray,
				type: 'array',
				children: this.generateChildrenFromCollection(arrayToTransform)
			};
		},

		// Transformer for the Object type
		transformObject(objectToTransform, keyForObject, isRootObject = false) {
			return {
				key: keyForObject,
				type: 'object',
				isRoot: isRootObject,
				children: this.generateChildrenFromCollection(objectToTransform)
			};
		},

		// Helper Methods for value type detection
		isObject(value) {
			return _.isPlainObject(value);
		},

		isArray(value) {
			return _.isArray(value);
		},

		isValue(value) {
			return !this.isObject(value) && !this.isArray(value);
		},

		onChangeData(path, value) {
			const lastKey = _.last(path);
			const newPath = _.dropRight(_.drop(path));

			const data = _.cloneDeep(this.data);
			let targetObject = data;
			_.forEach(newPath, key => {
				targetObject = targetObject[key];
			});

			if (targetObject[lastKey] !== value) {
				targetObject[lastKey] = value;
				this.$emit('change-data', data);
			}
		},
		
		/**
		 * Recursively sets the 'isOpen' property in each element to open nested children by default based on the provided 'openChildDetails'.
		 * @param {object} data - The data to process.
		 * @param {boolean} childExist - Indicates if the current item should be open.
		 * @param {boolean} defaultSelect - Indicates if the default selection is open.
		 * @returns {object} - The processed data with 'isOpen' property.
		 */
		defaultChildrenOpen(data, childExist = false, defaultSelect = false) {
			const { openKey, uniqueKey } = this.openChildDetails || {}
			const { children, key } = data || {}

			if (!openKey) {
				return data;
			}
			const childUniqueExist = children?.some((child) => child.key === uniqueKey.key && child.value.includes(uniqueKey.value))
			const findKey = children?.some((child) => child.key === openKey)

			const childrenFound = children?.map((child) => this.defaultChildrenOpen(child, childUniqueExist && findKey, childExist && key === openKey));
			const isAnyChildOpen = childrenFound?.some((c) => c.isOpen);

			const isOpen = (!children || !children.length) ? ((childExist && key == openKey) || defaultSelect) : (!!isAnyChildOpen || (childExist && key === openKey) || defaultSelect)
			return {
				...data, ...(children ? { children: childrenFound } : {}), isOpen
			}
		},
	},

	computed: {
		allOptions() {
			return _.extend({}, {
				rootObjectKey: 'root',
				maxDepth: 4,
				limitRenderDepth: false,
				modifiable: false,
				link: false
			}, (this.options || {}));
		},
		parsedData() {
			// Take the JSON data and transform
			// it into the Tree View DSL

			// Strings or Integers should not be attempted to be split, so we generate
			// a new object with the string/number as the value
			if (this.isValue(this.data)) {
				return this.defaultChildrenOpen(this.transformValue(this.data, this.allOptions.rootObjectKey));
			}

			// If it's an object or an array, transform as an object
			return this.defaultChildrenOpen(this.transformObject(this.data, this.allOptions.rootObjectKey, true));
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
	margin-left: 0!important;
}

/* Root node should not be indented */
.tree-view-item-root {
	margin-left: 0!important;
}

</style>
