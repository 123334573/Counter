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
                    { title: 'aaa' },
                    { title: 'aaa1' },
                    { title: 'aaa2' }
                ]
            },
            {
                title: 'bb', children: [
                    { title: 'bbba' },
                    { title: 'bbb1' },
                    { title: 'bbb2' }
                ]
            }
        ]
    },
    mutations,
    actions
});