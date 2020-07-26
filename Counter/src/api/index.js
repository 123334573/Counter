import Vue from 'vue';
import Axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(VueAxios, Axios);

const apiAddress = 'http://127.0.0.1:1337';

export default {
    userLogin(username, password) {
        return Vue.axios.post(`${apiAddress}`, { username, password });
    }
};