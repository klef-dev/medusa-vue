<template>
  <div class="bg-white">
    <div
      class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8"
    >
      <h2 class="text-xl font-bold text-gray-900">Available Funitures</h2>

      <div
        class="
          grid grid-cols-1
          gap-y-10
          sm:grid-cols-2
          gap-x-6
          lg:grid-cols-3
          xl:gap-x-8
        "
      >
        <router-link
          v-for="product in products"
          :key="product.id"
          :to="`/products/${product.id}`"
          class="group"
        >
          <div
            class="
              w-full
              aspect-w-1 aspect-h-1
              rounded-lg
              overflow-hidden
              sm:aspect-w-2 sm:aspect-h-3
            "
          >
            <img
              src="https://i.etsystatic.com/15221014/c/2000/1589/0/1282/il/6f53b9/2901337420/il_340x270.2901337420_jvun.jpg"
              :alt="product.title"
              class="
                w-full
                h-full
                object-center object-cover
                group-hover:opacity-75
              "
            />
          </div>
          <div
            class="
              mt-4
              flex
              items-center
              justify-between
              text-base
              font-medium
              text-gray-900
            "
          >
            <h3>
              {{ product.title }}
            </h3>
            <p>$210</p>
          </div>
          <p class="mt-1 text-sm italic text-gray-500">
            {{ product.description }}
          </p>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "Products",
  props: {
    products: {
      type: Array,
      required: true,
    },
  },
});
</script>
