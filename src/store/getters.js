export default {
  getters: {
    usuarioBemVindo(state) {
      return `Olá ${state.usuario.conta}!`;
    },
  },
};
