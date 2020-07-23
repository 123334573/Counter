import Vue from 'vue';
import VueRouter from 'vue-router';

import store from './store/index';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import Container from './components/Container.vue';
import Foo from './components/Foo.vue';
import Bar from './components/Bar.vue';
import Login from './views/Login.vue';

Vue.config.productionTip = true;

Vue.use(VueRouter);
Vue.use(ElementUI);

// 2. ����·��
// ÿ��·��Ӧ��ӳ��һ������� ����"component" ������
// ͨ�� Vue.extend() �����������������
// ���ߣ�ֻ��һ��������ö���
// �������������Ƕ��·�ɡ�
const routes = [
    {
        path: '/', component: Container, children: [
            { path: '/foo', component: Foo, name: 'foo' },
            { path: '/bar', component: Bar, name: 'bar' }
        ]
    },
    { path: '/login', component: Login, name: 'login' }
];

// 3. ���� router ʵ����Ȼ�� `routes` ����
// �㻹���Դ�������ò���, ��������ô���Űɡ�
const router = new VueRouter({
    routes, // (��д) �൱�� routes: routes

});

router.beforeEach((to, from, next) => {
    if (to.name === 'login') {
        sessionStorage.removeItem('user');
    }
    var user = sessionStorage.getItem('user');
    if (!user && to.name !== 'login') {
        next('login');
    }
    else {
        next();
    }
});

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
