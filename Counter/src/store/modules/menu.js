import Api from '../../api/index';
export default {
    namespaced: true,
    state: {
        menus: [],
        treeProps: {
            children: 'children',
            label: 'name'
        }
    },
    mutations: {
        setMenus(state, payload) {
            state.menus = payload.menus;
        }
    },
    getters: {
        currentChildren: state => state.menus[0].children
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
        }
    }
}