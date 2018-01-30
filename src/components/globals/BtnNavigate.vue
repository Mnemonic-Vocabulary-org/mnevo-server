<template>
  <v-btn
    dark
    :class="classes"
    @click="navigateTo({name: goTo})"
    v-if="isPressed"
  >
    <div ref="btn">
      <slot>
        no name
      </slot>
    </div>
  </v-btn>
</template>

import LogRegHeader from '@/LogRegHeader'
<script>
  export default {
    props: [
      'goTo',
      'classes',
    ],
    data() {
      return {
        btnName: ""
      }
    },
    mounted(compon) {
      console.log("log");
      return this.btnName = this.$refs.btn.innerText;
    },
    computed: {
      isPressed() {
        console.log(this.btnName);
        return this.$route.path.slice(1).toLowerCase() !== this.btnName.toLowerCase()
      }
    },
    methods: {
      navigateTo(route) {
        this.$router.push(route)
      }
    }
  }
</script>

<style scoped>
</style>
