import Vue from 'vue';
import { assert } from 'chai';

import Greeting from './Greeting.vue';

describe('The Greeting component', () => {
  it('sets the correct default data', () => {
    assert.equal(typeof Greeting.data, 'function');
    const defaultData = Greeting.data();
    assert.equal(defaultData.name, 'world');
  });

  it('returns an English greeting', () => {
    assert.equal(typeof Greeting.computed, 'object');
    const vm = new Vue(Greeting).$mount();
    assert.equal(vm.englishGreeting, 'Hello world');
  });

  it('returns a Spanish greeting', () => {
    assert.equal(typeof Greeting.computed, 'object');
    const vm = new Vue(Greeting).$mount();
    assert.equal(vm.spanishGreeting, 'Hola world');
  });
});
