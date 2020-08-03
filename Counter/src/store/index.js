import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        isCollapse: false,
        menus: [
            {
                title: 'aa', children: [
                    { name: 'aaa', code: 'foo' },
                    { name: 'aaa1', code: 'bar' },
                    { name: 'aaa2', code: 'foo1' }
                ]
            },
            {
                title: 'bb', children: [
                    { name: 'bbba', code: 'foo2' },
                    { name: 'bbb1', code: 'bar3' },
                    { name: 'bbb2', code: 'foo4' }
                ]
            }
        ],
        token: ''
    },
    mutations,
    actions
});