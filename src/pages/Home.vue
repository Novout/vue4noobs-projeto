<template>
  <v-app>
    <div>
      <Header />
      <section class="d-flex flex-column justify-center align-center pt-10">
      <img
        :src="require('@/assets/vue-logo.png')"
        width="200px"
        alt="Imagem representando o logo da He4rt Developers"
        class="pt-5"
      >
        <p class="font-weight-bold display-2 pt-5">Vue4Noobs</p>
        <span class="font-weight-light">Pela: He4rt Developers</span>
        <div class="my-2 p-5">
          <v-btn
            color="deep-purple accent-3 mr-2"
            dark
            medium
            href="https://github.com/Novout/vue4noobs"
            target="_blank"
          >
            Repositório
          </v-btn>
          <v-btn
            color="deep-purple accent-3 ml-2"
            dark
            medium
            href="https://discord.io/He4rt"
            target="_blank"
          >
            He4rt Discord
          </v-btn>
        </div>
      </section>
    </div>
  </v-app>
</template>

<script>
import Header from '../components/header/Header.vue';

export default {
  name: 'App',
  components: {
    Header,
  },
  data() {
    return {};
  },
};
</script>
