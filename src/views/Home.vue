<template>
  <div class="home">
    <h1>Hello world</h1>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapActions } from "vuex";
import { ProductDto, NetworkErrorDto } from "@/types";

export default Vue.extend({
  name: "Home",
  components: {},
  methods: {
    ...mapActions({ getProducts: "getProducts" }),
  },
  async created() {
    const data: ProductDto = await this.getProducts().catch(
      (err: NetworkErrorDto) => {
        console.log(err.response);
      }
    );
    if (data) {
      console.log(data.products);
    }
  },
});
</script>
