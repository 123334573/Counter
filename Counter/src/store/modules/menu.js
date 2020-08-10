import Api from '../../api/index';
export default {
    namespaced: true,
    state: {
        menus: [],
        treeProps: {
            children: 'children',
            label: 'name'
        },
        currentChildren: []
    },
    mutations: {
        setMenus(state, payload) {
            state.menus = payload.menus;
        }
    },
    getters: {
        getCurrentChildren(state) {
            return data => {
                state.currentChildren = data
            };
        }
    },
    actions: {
        getMenus({ commit }) {
            return new Promise((resolve, reject) => {
                Api.getMenus().then(result => {
                    if (result.IsError) {
                        reject(result.Message);
                    }
                    else {
                        commit('setMenus', { menus: result.Data });
                        resolve();
                    }
                }).catch(err => {
                    reject(err);
                });
            });
        },
        getChildren({ getters }, payload) {
            getters.getCurrentChildren(payload.data);
        }
    }
}