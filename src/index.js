import Greeting from './components/greeting/Greeting.vue';

export const components = {
  Greeting
};

export default {
  install (Vue) {
    Object.keys(components).forEach((name) => {
      Vue.component(name, components[name])
    })
  }
};

export {
  Greeting
};