import { mapState } from 'vuex';
<template>
  <v-app>
    <v-container fluid>
      <v-row
        justify="center"
        align="center"
        rows="12"
      >
        <v-col justify="center" align="start" cols="3">
          <v-card>
            <v-list class="py-0">
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>{{ usuarioBemVindo }}</v-list-item-title>
                  <v-list-item-subtitle>Drawer</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <v-divider></v-divider>

              <v-list-item
                v-for="item in items"
                :key="item.title"
                link
                @click="redirecionar(item.href)"
              >
                <v-list-item-icon>
                  <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>{{ item.titulo }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card>
        </v-col>
        <v-col cols="9" overflow>
          <transition name="router" mode="out-in">
            <router-view />
          </transition>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      items: [
        {
          titulo: 'Dashboard',
          icon: 'mdi-view-dashboard',
          href: '/dashboard',
        },
        {
          icon: 'mdi-inbox',
          titulo: 'Inbox',
          href: '/dashboard/inbox',
        },
        {
          icon: 'mdi-star',
          titulo: 'Star',
          href: '/dashboard/star',
        },
        {
          icon: 'mdi-send',
          titulo: 'Send',
          href: '/dashboard/send',
        },
        {
          icon: 'mdi-email-open',
          titulo: 'Drafts',
          href: '/dashboard/drafts',
        },
      ],
      color: 'primary',
      right: true,
      miniVariant: false,
      expandOnHover: false,
      background: false,
    };
  },
  methods: {
    redirecionar(href) {
      this.$router.push(href);
    },
  },
  computed: {
    ...mapGetters(['usuarioBemVindo']),
  },
};
</script>

<style scoped>
.router-enter-active {
  animation: enter-and-leave 0.15s;
}
.router-leave-active {
  animation: enter-and-leave 0.15s reverse;
}
@keyframes enter-and-leave {
  0% {
    transform: scale(1.3);
  }
  100% {
    transform: scale(1);
  }
}
</style>
