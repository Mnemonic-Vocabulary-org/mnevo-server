<template>
  <div id="app">
    <v-app>
      <v-container>
        <router-view/>
      </v-container>
    </v-app>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
.danger-alert{
  color: red;
}
</style>
