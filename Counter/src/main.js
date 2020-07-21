import Vue from 'vue';
import VueRouter from 'vue-router';

import store from './store/index';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import Foo from './components/Foo.vue';
import Bar from './components/Bar.vue';

Vue.config.productionTip = true;

Vue.use(VueRouter);
Vue.use(ElementUI);

// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
const routes = [
    { path: '/foo', component: Foo },
    { path: '/bar', component: Bar }
];

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
    routes // (缩写) 相当于 routes: routes
});

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
