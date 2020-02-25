-<template>
	<div>
		<span class="tree-view-item-key">{{keyString}}</span>
		<input
			v-if="modifiable"
			class="tree-view-item-value"
			:class="getValueType(data)"
			v-model="valueString"
			@keyup.enter="onUpdateData"
			@blur="onUpdateData"/>
		<span v-else class="tree-view-item-value" :class="getValueType(data)" v-html="valueFormed"/>
		<span v-show="error">{{ error }}</span>
	</div>
</template>


<script>
import _ from 'lodash';

export default {
	name: 'tree-view-item',
	props: ['data', 'modifiable', 'key-string', 'link'],
	data() {
		return {
			valueString: this.data && this.data.toString(),
			error: false
		};
	},
	computed: {
		valueFormed() {
			return this.getValue(this.data);
		}
	},
	watch: {
		valueFormed(val) {
			this.$set(this, 'valueString', _.isString(val) ? val.replace(/^["]+|["]+$/g, '') : val);
		}
	},
	methods: {
		onUpdateData() {
			try {
				const v = this.typedValue(this.valueString);
				this.error = false;
				this.$emit('change-data', [], v);
			} catch (err) {
				this.error = err;
			}
		},
		typedValue(v) {
			if (v === '') {
				throw new Error('empty');
			}

			const dataType = this.getValueType(this.data, '');

			switch (dataType) {
				case 'number':
					if (_.isNaN(_.toNumber(v))) {
						throw new Error('only number');
					}
					return _.toNumber(v);
				case 'boolean':
					if (v.toLowerCase() === 'true') {
						return true;
					}
					if (v.toLowerCase() === 'false') {
						return false;
					}
					throw new Error('true or false');
				case 'string':
				default:
					return v;
			}
		},
		getValue(value) {
			if (_.isNumber(value)) {
				return value;
			}
			if (_.isNull(value)) {
				return 'null';
			}
			if (_.isString(value)) {
				if (this.link && !this.modifiable) {
					return `"${this.linkify(value)}"`;
				}
				return `"${value}"`;
			}
			return value;
		},
		linkify(inputText) {
			// URLs starting with http://, https://, or ftp://
			const replacePattern1 = /(\b(https?|ftp):\/\/[-A-Z0-9+&@#/%?=~_|!:,.;]*[-A-Z0-9+&@#/%=~_|])/gim;
			let replacedText = inputText.replace(replacePattern1, '<a href="$1" target="_blank">$1</a>');
			// URLs starting with www. (without // before it, or it'd re-link the ones done above)
			const replacePattern2 = /(^|[^/])(www\.[\S]+(\b|$))/gim;
			replacedText = replacedText.replace(replacePattern2, '$1<a href="http://$2" target="_blank">$2</a>');
			// Change email addresses to mailto:: links
			const replacePattern3 = /([\w.]+@[a-zA-Z_]+?(\.[a-zA-Z]{2,6})+)/gim;
			replacedText = replacedText.replace(replacePattern3, '<a href="mailto:$1">$1</a>');
			return replacedText;
		},
		getValueType(value, prefix = 'tree-view-item-value-') {
			if (_.isNumber(value)) {
				return `${prefix}number`;
			}
			if (_.isFunction(value)) {
				return `${prefix}function`;
			}
			if (_.isBoolean(value)) {
				return `${prefix}boolean`;
			}
			if (_.isNull(value)) {
				return `${prefix}null`;
			}
			if (_.isString(value)) {
				return `${prefix}string`;
			}
			return `${prefix}unknown`;
		}
	}
};
</script>
