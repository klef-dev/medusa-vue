<template>
  <div id="app">
    <navbar />
    <router-view />
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Navbar from "./components/Navbar.vue";
export default Vue.extend({
  components: { Navbar },
  name: "App",
});
</script>
