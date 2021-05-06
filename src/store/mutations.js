import { sessionStorage } from 'src/assets/js/storage';

const mutations = {
  SET_USER (state, user) {
    state.user = user;
    sessionStorage.setItem('user', user);
  },
  SET_TOKEN (state, token) {
    state.token = token;
    sessionStorage.setItem('token', token);
  },
  SET_USERNAME (state, username) {
    state.username = username;
    sessionStorage.setItem('username', username);
  }
};

export default mutations;

