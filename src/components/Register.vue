<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <panel title="REGISTER">
        <form
          name="registerForm"
          autocomplete="off">
          <v-text-field
            label="Login"
            v-model="login"
          ></v-text-field>
          <br>
          <v-text-field
            label="Email"
            type="email"
            v-model="email"
          ></v-text-field>
          <br>
          <v-text-field
            label="Password"
            type="password"
            v-model="password"
            autocomplete="new-password"
          ></v-text-field>
        </form>
        <br>
        <div class="danger-alert" v-html="error" />
        <br>
        <v-btn
          dark
          class="cyan"
          @click="register">
          Register
        </v-btn>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>

export default {
  data () {
    return {
      login: '',
      email: '',
      password: '',
      error: ''
    }
  },
  methods: {
    register () {

    }
  }
}
</script>
