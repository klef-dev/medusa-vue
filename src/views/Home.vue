<template>
  <div class="home">
    <p v-if="loading">Loading...</p>
    <products :products="products" v-if="!loading && products" />
  </div>
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/no-explicit-any */
import Vue from "vue";
import { mapActions, mapState } from "vuex";
import { NetworkErrorDto } from "@/types";
import Products from "@/components/Products.vue";

export default Vue.extend({
  name: "Home",
  components: { Products },
  data: () => ({
    loading: false,
  }),
  computed: {
    ...mapState({ products: (state: any) => state.products }),
  },
  methods: {
    ...mapActions({ getProducts: "getProducts" }),
  },
  async created() {
    this.loading = true;
    await this.getProducts().catch((err: NetworkErrorDto) => {
      console.log(err.response);
    });
    this.loading = false;
  },
});
</script>
