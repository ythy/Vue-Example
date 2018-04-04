import Vue from "vue";
import VueRouter from 'vue-router'
import Login from '@/components/Login/Login.vue'
import Counter from '@/components/Counter/Counter.vue'
import store from '@/store/index'
import UInput from '@/components/common/UInput.vue';
import app from '@/containers/app.vue';
Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { path: '/', component: Login },
    { path: '/counter', component: Counter },
  ]
})

new Vue({ router, store, render: h => h(app) }).$mount('#app');  