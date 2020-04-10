import types from './mutations_types';

export default {
  actions: {
    usuarioLogado(context, usuario) {
      context.commit(types.USUARIO_LOGADO, usuario);
    },
  },
};
