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

// 2. ����·��
// ÿ��·��Ӧ��ӳ��һ������� ����"component" ������
// ͨ�� Vue.extend() �����������������
// ���ߣ�ֻ��һ��������ö���
// �������������Ƕ��·�ɡ�
const routes = [
    { path: '/foo', component: Foo },
    { path: '/bar', component: Bar }
];

// 3. ���� router ʵ����Ȼ�� `routes` ����
// �㻹���Դ�������ò���, ��������ô���Űɡ�
const router = new VueRouter({
    routes // (��д) �൱�� routes: routes
});

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
