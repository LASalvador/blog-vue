import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'

Vue.config.productionTip = false

Vue.use(VueResource);

//Custom Directives
Vue.directive('rainbow', {
    bind(el, binding, vnode){
        el.style.color = "#" + Math.random().toString(16).slice(2, 8);
    }
});
Vue.directive('theme', {
    bind(el, binding, vnode){
        if (binding.value == 'wide'){
            el.style.maxWidth = "1260px";
        } else if (binding.value = 'narrow'){
            el.style.maxWidth = "900px";
        }
        if(binding.arg == 'column'){
            el.style.background = '#ddd';
            el.style.padding = '20px';
        }
    }
});

//Filters
Vue.filter('to-uppercase', function(value){
  return value.toUpperCase();
});

Vue.filter('snnippet', function(value){
  return value.slice(0, 100) + '...';
});

new Vue({
  render: h => h(App),
}).$mount('#app')
