<template>
  <header class="relative bg-white">
    <nav aria-label="Top" class="max-w-7xl mx-auto sm:px-6 lg:px-8">
      <div
        class="
          relative
          border-b border-gray-200
          px-4
          pb-14
          sm:static sm:px-0 sm:pb-0
        "
      >
        <div class="h-16 flex items-center justify-between">
          <!-- Logo -->
          <div class="flex-1 flex">
            <router-link to="/">
              <span class="sr-only">TQ</span>
              <img class="h-10 w-auto" src="../assets/logo.png" alt="" />
            </router-link>
          </div>

          <div class="flex-1 flex items-center justify-end">
            <!-- Cart -->
            <div class="ml-4 flow-root text-sm lg:relative lg:ml-8">
              <button
                type="button"
                class="group -m-2 p-2 flex items-center"
                aria-expanded="false"
                @click.prevent="isOpen = !isOpen"
              >
                <!-- Heroicon name: outline/shopping-bag -->
                <svg
                  class="
                    flex-shrink-0
                    h-6
                    w-6
                    text-gray-400
                    group-hover:text-gray-500
                  "
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
                <span
                  class="
                    ml-2
                    text-sm
                    font-medium
                    text-gray-700
                    group-hover:text-gray-800
                  "
                  v-if="Object.keys(cart).length"
                  >{{
                    cart.items.reduce((total, obj) => obj.quantity + total, 0)
                  }}</span
                >
                <span class="sr-only">items in cart, view bag</span>
              </button>
              <div
                v-if="isOpen"
                class="
                  absolute
                  top-16
                  inset-x-0
                  mt-px
                  pb-6
                  bg-white
                  shadow-lg
                  sm:px-2
                  lg:top-full
                  lg:left-auto
                  lg:right-0
                  lg:mt-3
                  lg:-mr-1.5
                  lg:w-80
                  lg:rounded-lg
                  lg:ring-1
                  lg:ring-black
                  lg:ring-opacity-5
                "
              >
                <h2 class="sr-only">Shopping Cart</h2>

                <form class="max-w-2xl mx-auto px-4">
                  <ul role="list" class="divide-y divide-gray-200">
                    <li
                      class="py-6 flex items-center"
                      v-for="item in cart.items"
                      :key="item.id"
                    >
                      <img
                        src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg"
                        alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
                        class="
                          flex-none
                          w-16
                          h-16
                          rounded-md
                          border border-gray-200
                        "
                      />
                      <div class="ml-4 flex-auto">
                        <h3 class="font-medium text-gray-900">
                          <router-link
                            :to="`/products/${item.variant.product.id}`"
                            >{{ item.title }}</router-link
                          >
                        </h3>
                        <p>
                          Size:
                          <span class="text-gray-500">{{
                            item.variant.title
                          }}</span>
                        </p>
                        <p>
                          Price:
                          <span class="text-gray-500">{{
                            formatPrice(
                              item.unit_price,
                              cart.region.currency_code
                            )
                          }}</span>
                        </p>
                      </div>
                    </li>
                  </ul>

                  <button
                    type="submit"
                    class="
                      w-full
                      bg-indigo-600
                      border border-transparent
                      rounded-md
                      shadow-sm
                      py-2
                      px-4
                      text-sm
                      font-medium
                      text-white
                      hover:bg-indigo-700
                      focus:outline-none
                      focus:ring-2
                      focus:ring-offset-2
                      focus:ring-offset-gray-50
                      focus:ring-indigo-500
                    "
                  >
                    Checkout
                  </button>

                  <p class="mt-6 text-center">
                    <router-link
                      to="/cart"
                      class="
                        text-sm
                        font-medium
                        text-indigo-600
                        hover:text-indigo-500
                      "
                      >View Shopping Bag</router-link
                    >
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/no-explicit-any */
import Vue from "vue";
import { mapState } from "vuex";
import { formatPrice } from "@/helpers";
export default Vue.extend({
  name: "Navbar",
  data: () => ({
    isOpen: false,
  }),
  computed: {
    ...mapState({
      cart: (state: any) => state.cart,
    }),
  },
  methods: {
    formatPrice: (price: number, currency: string) =>
      formatPrice(price, currency),
  },
});
</script>
