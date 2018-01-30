<template>
  <v-flex xs12 sm6 md4 lg4 offset-sm3 offset-md4 offset-lg4>
    <div class="white elevation-2">

      <v-toolbar flat dense class="cyan" dark>

        <v-toolbar-title>
          {{title}}
        </v-toolbar-title>


        <v-spacer></v-spacer>


        <v-toolbar-items>
          <div>


            <btn-navigate
              goTo="register"
              classes="brown"
            >
              register
            </btn-navigate>


            <btn-navigate
              goTo="login"
              classes="green"
            >
              login
            </btn-navigate>


          </div>
        </v-toolbar-items>

      </v-toolbar>

      <div class="pl-4 pr-4 pt-2 pb-2">
        <slot>
          No slot content defined.
        </slot>
      </div>
    </div>
  </v-flex>
</template>

<script>
  function cb(compon){

  }
  export default {
    props: [
      'title'
    ]
  }
</script>

<style scoped>
  .toolbar__title {
    margin-left: 0px;
  }
</style>
