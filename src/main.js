import Vue from 'vue'
import App from './App.vue'
import stateMixin from './store.js';

Vue.mixin(stateMixin);

const app = new Vue({
  el: '#root',
  components: { 'app': App }
})
