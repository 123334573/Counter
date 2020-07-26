import Api from '../api/index';
export default {
    toggleCollapse({ commit }) {
        commit('toggleCollapse');
    },
    userLogin({ commit }, userinfo) {
        const username = userinfo.username.trim();
        return new Promise((resolve, reject) => {
            Api.userLogin(username, userinfo.password).then(response => {
                const data = response.data;
                commit('setToken', { token: data.token });
                resolve();
            }).catch(err => {
                reject(err);
            });
        });
    }
};