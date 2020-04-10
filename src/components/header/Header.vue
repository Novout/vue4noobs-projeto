<template>
  <v-app-bar
    color="deep-purple accent-2"
    dense
    dark
  >
    <v-app-bar-nav-icon></v-app-bar-nav-icon>

    <v-toolbar-title>He4rt Developers</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-menu
      left
      bottom
    >
      <template v-slot:activator="{ on }">
        <v-btn icon v-on="on">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="({ titulo, href }, index) in itemLista"
          :key="index"
          @click="redirecionar(href)"
        >
          <v-list-item-title>{{ titulo }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      itemLista: [
        { titulo: 'Registrar', href: '/register' },
        { titulo: 'Entrar', href: '/login' },
      ],
    };
  },
  methods: {
    redirecionar(href) {
      this.$router.push(href);
    },
  },
};
</script>
