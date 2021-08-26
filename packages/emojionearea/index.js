// packages/emojionearea/index.js
import Emojionearea from './src/main.vue';

Emojionearea.install = function (Vue) {
  Vue.component(Emojionearea.name, Emojionearea);
};

export default Emojionearea;