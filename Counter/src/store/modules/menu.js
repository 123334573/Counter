import Api from '../../api/index';
export default {
    namespaced: true,
    state: {
        menus: [],
        treeProps: {
            children: 'children',
            label: 'name'
        },
        current: null,
        currentChildren: [],
        dialogFormVisible: false
    },
    mutations: {
        setMenus(state, payload) {
            state.menus = payload.menus;
        },
        setCurrent(state, payload) {
            state.current = payload.data;
        },
        setCurrentChildren(state, payload) {
            state.currentChildren = payload.data;
        },
        dialogShow(state) {
            state.dialogFormVisible = true;
        },
        dialogHide(state) {
            state.dialogFormVisible = false;
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
        setCurrent({ commit, dispatch }, payload) {
            commit('setCurrent', payload);
            dispatch('setCurrentChildren', { data: payload.data.children || [] });

        },
        setCurrentChildren({ commit }, payload) {
            commit('setCurrentChildren', payload);
        },
        openDialog({ commit }) {
            commit('dialogShow');
        },
        closeDialog({ commit }) {
            commit('dialogHide');
        }
    }
}