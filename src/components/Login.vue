<template>
  <v-layout column>
    <panel title="LOGIN">
      <form
        name="registerForm"
        autocomplete="off">
        <v-text-field
          label="Login or Mail"
          v-model="loginOrMail"
          autocomplete
          autofocus
        ></v-text-field>
        <br>
        <v-text-field
          label="Password"
          type="password"
          v-model="password"
          autocomplete
          :rules="[validator]"
        ></v-text-field>
      </form>
      <br>
      <div class="danger-alert" v-html="error"/>
      <br>
      <v-btn
        dark
        class="cyan"
        @click="login"
      >
        Login
      </v-btn>
    </panel>
  </v-layout>
</template>

<script>
import RegLog from '@/services/api/RegLog'
  export default {
    data() {
      return {
        loginOrMail: '',
        password: '',
        error: ''
      }
    },
    mounted() {

    },
    computed: {
      inputCheck() {
        console.log("wow");
        return false
      },
      validator(test) {
        if (this.password.toLowerCase() === "fuck you" || this.password.toLowerCase() === "fuckyou") {
          return "no, FUCK YOU"
        }
        return true
      }
    },
    methods: {
      async login() {
        console.log("LOGIN method");
        try {
          console.log("sending request");
          const test = await RegLog.send({
              login: this.loginOrMail,
              password: this.password
            });
          this.$router.push({
            name: 'register'
          })
        } catch (err) {
          console.error(err);
          this.error = err
        }
      }
    }
  }
</script>
