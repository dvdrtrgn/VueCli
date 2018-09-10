import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import flow from './flow';

import KsVueScrollmagic from 'ks-vue-scrollmagic';
Vue.use(KsVueScrollmagic);

Vue.config.productionTip = false;

const myVue = new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#App');

setTimeout(function() {
  const W = window;
  const html = W.document.documentElement;
  const body = W.document.body;

  W._msie = Boolean(~W.navigator.userAgent.indexOf('rident'));

  html.classList.add(W._msie ? 'msie' : 'norm');
  body.classList.add(myVue._route.name);

  flow(myVue);
}, 99);

window.console.log(myVue);
