import types from './mutations_types';

export default {
  mutations: {
    [types.USUARIO_LOGADO](state, payload) {
      state.usuario = payload;
    },
  },
};
