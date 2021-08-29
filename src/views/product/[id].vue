<template>
  <div class="bg-white">
    <notify title="Please wait" message="Request being sent" v-if="loading" />
    <div class="pt-6 pb-16 sm:pb-24">
      <nav
        aria-label="Breadcrumb"
        class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <ol role="list" class="flex items-center space-x-4">
          <li>
            <div class="flex items-center">
              <router-link
                to="/"
                class="mr-4 text-sm font-medium text-gray-900"
              >
                Products
              </router-link>
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
              :href="product.id"
              aria-current="page"
              class="font-medium text-gray-500 hover:text-gray-600"
            >
              {{ product.title }}
            </a>
          </li>
        </ol>
      </nav>
      <div class="mt-8 max-w-2xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div class="lg:grid lg:grid-cols-12 lg:auto-rows-min lg:gap-x-8">
          <div class="lg:col-start-8 lg:col-span-5">
            <div class="flex justify-between">
              <h1 class="text-xl font-medium text-gray-900">
                {{ product.title }}
              </h1>
              <p class="text-xl font-medium text-gray-900">$210</p>
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
                src="https://cdn.shopify.com/s/files/1/0192/1043/6708/products/ada-sofas-29038459486368.jpg?v=1622554534"
                alt="product image"
                :class="[
                  true ? 'lg:col-span-2 lg:row-span-2' : 'hidden lg:block',
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
                </div>

                <fieldset class="mt-2">
                  <legend class="sr-only">Choose a size</legend>
                  <div class="grid grid-cols-3 gap-3 sm:grid-cols-6">
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
                  <div class="grid grid-cols-3 gap-3 sm:grid-cols-6 mt-2">
                    <button
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
                      :class="
                        this.quantity == 1
                          ? 'opacity-25 cursor-not-allowed'
                          : ''
                      "
                      @click.prevent="handleQuantity('dec')"
                    >
                      -
                    </button>
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
                    >
                      <p id="size-choice-0-label">{{ quantity }}</p>
                    </label>
                    <button
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
                      @click.prevent="handleQuantity('inc')"
                    >
                      +
                    </button>
                  </div>
                </fieldset>
              </div>

              <button
                type="submit"
                @click.prevent="handleAddToCart"
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
                Add to bag
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
import Notify from "@/components/Notify.vue";
export default Vue.extend({
  name: "SingleProduct",
  components: { Notify },
  data: () => ({
    selectedSize: null,
    variant_id: "",
    quantity: 1,
    loading: false,
  }),
  computed: {
    ...mapState({ product: (state: any) => state.product }),
  },
  methods: {
    ...mapActions({ getProduct: "getProduct", addToCart: "addToCart" }),
    ...mapMutations({ setValue: "setValue" }),
    handleVariant(id: string) {
      this.product.variants = this.product.variants.map((variant: any) => {
        return { ...variant, checked: false };
      });
      const index = this.product.variants.find((v: any) => v.id == id);
      if (index) {
        index.checked = true;
        this.variant_id = id;
        this.quantity = 1;
      }
      this.$forceUpdate();
    },
    handleQuantity(type: string) {
      if (type == "inc") {
        const variant = this.product.variants.find(
          (v: any) => v.id == this.variant_id
        );
        if (variant && variant.inventory_quantity > this.quantity) {
          this.quantity += 1;
        }
      }
      if (type == "dec") {
        if (this.quantity > 1) {
          this.quantity -= 1;
        }
      }
    },
    async handleAddToCart() {
      this.loading = true;
      await this.addToCart({
        variant_id: this.variant_id,
        quantity: this.quantity,
      }).catch((err: NetworkErrorDto) => {
        console.log(err);
      });
      this.loading = false;
    },
  },
  async created() {
    this.loading = true;
    const data = await this.getProduct(this.$route.params.id).catch(
      (err: NetworkErrorDto) => {
        console.log(err);
      }
    );
    if (data) {
      this.product.variants[0].checked = true;
      this.selectedSize = this.product.variants[0].title;
      this.variant_id = this.product.variants[0].id;
      this.$forceUpdate();
    }
    this.loading = false;
  },
});
</script>
