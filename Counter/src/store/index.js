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
                    { title: 'aaa', name: 'foo' },
                    { title: 'aaa1', name: 'bar' },
                    { title: 'aaa2', name: 'foo1' }
                ]
            },
            {
                title: 'bb', children: [
                    { title: 'bbba', name: 'foo2' },
                    { title: 'bbb1', name: 'bar3' },
                    { title: 'bbb2', name: 'foo4' }
                ]
            }
        ]
    },
    mutations,
    actions
});