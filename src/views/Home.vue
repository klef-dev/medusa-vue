<template>
  <div class="home">
    <notify title="Please wait" message="Request being sent" v-if="loading" />
    <products :products="products" v-if="!loading && products" />
  </div>
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/no-explicit-any */
import Vue from "vue";
import { mapActions, mapState } from "vuex";
import { NetworkErrorDto } from "@/types";
import Products from "@/components/Products.vue";
import Notify from "@/components/Notify.vue";

export default Vue.extend({
  name: "Home",
  components: { Products, Notify },
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
