import Vue from 'vue';
import TreeView from './src/TreeView.vue';

new Vue({ // eslint-disable-line no-new
	el: '#container',
	components: {
		TreeView
	},
	data() {
		return {
			sampleJSON: { testArray: ['Just a Test String', 'in a Test Array', 0, 1, true, false], component: 'vuejsontreeview', descripton: 'A JSON Tree View built in Vue.js', tags: [{ name: 'vue.js' }, { name: 'JSON' }], steps: ['HTML Template', 'Root Component', 'View Component', { 'Transformation Logic': ['Transform Objects', 'Transform Arrays', 'Transform Values'] }, 'Animate', 'Allow Options', 'Blog about it...'] }, // eslint-disable-line max-len
			sampleJSONString: 'Just a Test String',
			sampleJSONArray: ['Just a Test String', 'in a Test Array', 'www.google.com', 0, 1, true, false],
			isRed: false
		};
	},
	methods: {
		onChangeData(data) {
			this.sampleJSON = data;
		},
		toggle() {
			this.isRed = !this.isRed;
		},
		formatter() {
			const red = this.isRed;
			return {
				props: ['value'],
				data() {
					return {
						r: red
					};
				},
				template: '<p :style="{color: r ? \'red\' : \'blue\'}">{{value}}</p>'
			};
		}
	},
	watch: {
		sampleJSON() {
			alert('updated sampleJSON'); // eslint-disable-line no-alert
		}
	}
});
