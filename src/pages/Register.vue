<template>
  <v-app>
    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
            <v-card class="elevation-12">
              <v-toolbar
                color="deep-purple"
                dark
                flat
              >
                <v-toolbar-title>Cadastre sua Conta!</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    label="Conta"
                    type="text"
                    color="deep-purple"
                    v-model="conta"
                  />
                  <v-text-field
                    label="Senha"
                    type="password"
                    color="deep-purple"
                    v-model="senha"
                  />
                  <v-text-field
                    label="Repetir Senha"
                    type="password"
                    color="deep-purple"
                    v-model="repetirSenha"
                  />
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-card-text >Já possui uma conta? Clique
                  <span>
                    <router-link
                      to="/login"
                      style="text-decoration: none; color: purple">
                      aqui
                    </router-link>
                  </span>
                </v-card-text>
                <v-spacer />
                <v-btn
                  color="deep-purple"
                  dark
                  @click.prevent="enviarFormulario()"
                >Entrar
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import {
  required,
  sameAs,
  minLength,
  email,
} from 'vuelidate/lib/validators';

export default {
  data() {
    return {
      conta: '',
      senha: '',
      repetirSenha: '',
    };
  },
  validations: {
    conta: {
      email,
    },
    senha: {
      required,
      minLength: minLength(8),
    },
    repetirSenha: {
      sameAsPassword: sameAs('senha'),
    },
  },
  methods: {
    enviarFormulario() {
      if (!this.$v.$invalid) {
        // POST para a rota em uma possível API
        localStorage.setItem('AUTENTICADO', true);
        this.$store.dispatch('usuarioLogado', {
          conta: this.conta,
          senha: this.senha,
        });
        this.$router.push('/dashboard');
      } else {
        this.$awn.alert('Formulário Inválido');
      }
    },
  },
};
</script>
