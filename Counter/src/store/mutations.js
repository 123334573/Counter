export default {
    toggleCollapse(state) {
        state.isCollapse = !state.isCollapse;
    },
    setToken(state, payload) {
        state.token = payload.token;
    },
    setMenus(state, payload) {
        state.menus = payload.menus;
    }
};