import Api from '../api/index';
export default {
    toggleCollapse({ commit }) {
        commit('toggleCollapse');
    },
    userLogin({ commit }, userinfo) {
        const username = userinfo.username.trim();
        return new Promise((resolve, reject) => {
            Api.userLogin(username, userinfo.password).then(result => {
                if (result.IsError) {
                    reject(result.Message);
                }
                else {
                    commit('setToken', { token: result.Data });
                    resolve();
                }
            }).catch(err => {
                reject(err);
            });
        });
    },
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
};