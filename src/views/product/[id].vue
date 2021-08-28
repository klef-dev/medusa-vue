<template>
  <div class="bg-white">
    <div class="pt-6 pb-16 sm:pb-24">
      <nav
        aria-label="Breadcrumb"
        class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <ol role="list" class="flex items-center space-x-4">
          <li v-for="breadcrumb in product.breadcrumbs" :key="breadcrumb.id">
            <div class="flex items-center">
              <a
                :href="breadcrumb.href"
                class="mr-4 text-sm font-medium text-gray-900"
              >
                {{ breadcrumb.name }}
              </a>
              <svg
                viewBox="0 0 6 20"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                class="h-5 w-auto text-gray-300"
              >
                <path
                  d="M4.878 4.34H3.551L.27 16.532h1.327l3.281-12.19z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </li>
          <li class="text-sm">
            <a
              :href="product.href"
              aria-current="page"
              class="font-medium text-gray-500 hover:text-gray-600"
            >
              {{ product.name }}
            </a>
          </li>
        </ol>
      </nav>
      <div class="mt-8 max-w-2xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div class="lg:grid lg:grid-cols-12 lg:auto-rows-min lg:gap-x-8">
          <div class="lg:col-start-8 lg:col-span-5">
            <div class="flex justify-between">
              <h1 class="text-xl font-medium text-gray-900">
                {{ product.name }}
              </h1>
              <p class="text-xl font-medium text-gray-900">
                {{ product.price }}
              </p>
            </div>
          </div>

          <!-- Image gallery -->
          <div
            class="
              mt-8
              lg:mt-0 lg:col-start-1 lg:col-span-7 lg:row-start-1 lg:row-span-3
            "
          >
            <h2 class="sr-only">Images</h2>

            <div
              class="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-3 lg:gap-8"
            >
              <img
                v-for="image in product.images"
                :key="image.id"
                :src="image.imageSrc"
                :alt="image.imageAlt"
                :class="[
                  image.primary
                    ? 'lg:col-span-2 lg:row-span-2'
                    : 'hidden lg:block',
                  'rounded-lg',
                ]"
              />
            </div>
          </div>

          <div class="mt-8 lg:col-span-5">
            <form>
              <!-- Size picker -->
              <div class="mt-8">
                <div class="flex items-center justify-between">
                  <h2 class="text-sm font-medium text-gray-900">Size</h2>
                  <a
                    href="#"
                    class="
                      text-sm
                      font-medium
                      text-indigo-600
                      hover:text-indigo-500
                    "
                    >See sizing chart</a
                  >
                </div>

                <fieldset class="mt-2">
                  <legend class="sr-only">Choose a size</legend>
                  <div class="grid grid-cols-3 gap-3 sm:grid-cols-6">
                    <!--
                    In Stock: "cursor-pointer", Out of Stock: "opacity-25 cursor-not-allowed"
                    Active: "ring-2 ring-offset-2 ring-indigo-500"
                    Checked: "bg-indigo-600 border-transparent text-white hover:bg-indigo-700", Not Checked: "bg-white border-gray-200 text-gray-900 hover:bg-gray-50"
                  -->
                    <div v-for="variant in product.variants" :key="variant.id">
                      <label
                        class="
                          border
                          rounded-md
                          py-3
                          px-3
                          flex
                          items-center
                          justify-center
                          text-sm
                          font-medium
                          uppercase
                          sm:flex-1
                          focus:outline-none
                        "
                        :class="[
                          variant.checked
                            ? 'ring-2 ring-offset-2 ring-indigo-500 bg-indigo-600 border-transparent text-white hover:bg-indigo-700'
                            : 'bg-white border-gray-200 text-gray-900 hover:bg-gray-50',
                          variant.inventory_quantity
                            ? 'cursor-pointer'
                            : 'opacity-25 cursor-not-allowed',
                        ]"
                        @click="handleVariant(variant.id)"
                      >
                        <input
                          type="radio"
                          name="size-choice"
                          :value="variant.title"
                          v-model="selectedSize"
                          class="sr-only"
                          aria-labelledby="size-choice-0-label"
                        />
                        <p id="size-choice-0-label">{{ variant.title }}</p>
                      </label>
                    </div>
                  </div>
                </fieldset>
              </div>

              <button
                type="submit"
                class="
                  mt-8
                  w-full
                  bg-indigo-600
                  border border-transparent
                  rounded-md
                  py-3
                  px-8
                  flex
                  items-center
                  justify-center
                  text-base
                  font-medium
                  text-white
                  hover:bg-indigo-700
                  focus:outline-none
                  focus:ring-2
                  focus:ring-offset-2
                  focus:ring-indigo-500
                "
              >
                Add to cart
              </button>
            </form>

            <!-- Product details -->
            <div class="mt-10">
              <h2 class="text-sm font-medium text-gray-900">Description</h2>

              <div
                class="mt-4 prose prose-sm text-gray-500"
                v-html="product.description"
              />
            </div>

            <div class="mt-8 border-t border-gray-200 pt-8">
              <h2 class="text-sm font-medium text-gray-900">
                Fabric &amp; Care
              </h2>

              <div class="mt-4 prose prose-sm text-gray-500">
                <ul role="list">
                  <li v-for="item in product.details" :key="item">
                    {{ item }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
/* eslint-disable @typescript-eslint/no-explicit-any */
import Vue from "vue";
import { mapActions, mapMutations, mapState } from "vuex";
import { NetworkErrorDto } from "@/types";
export default Vue.extend({
  name: "SingleProduct",
  data: () => ({
    selectedSize: null,
    loading: false,
  }),
  computed: {
    ...mapState({ product: (state: any) => state.product }),
  },
  methods: {
    ...mapActions({ getProduct: "getProduct" }),
    ...mapMutations({ setValue: "setValue" }),
    handleVariant(id: string) {
      this.product.variants = this.product.variants.map((variant: any) => {
        return { ...variant, checked: false };
      });
      const index = this.product.variants.find((v: any) => v.id == id);
      if (index) {
        index.checked = true;
      }
      this.$forceUpdate();
    },
  },
  async created() {
    this.loading = true;
    const data = await this.getProduct(this.$route.params.id).catch(
      (err: NetworkErrorDto) => {
        console.log(err.response);
      }
    );
    if (data) {
      this.product.variants[0].checked = true;
      this.selectedSize = this.product.variants[0].title;
      this.$forceUpdate();
    }
    this.loading = false;
  },
});
</script>
