// index.js
import Emojionearea from './packages/emojionearea/index.js';

const components = [
  Emojionearea,
];

const install = function (Vue, opt = {}) {
  components.forEach(component => {
    Vue.component(component.name, component);
  });
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  Emojionearea,
}