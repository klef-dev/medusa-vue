<template>
  <div class="bg-white">
    <div
      class="max-w-2xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
    >
      <h1
        class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"
      >
        Shopping Cart
      </h1>
      <form
        class="
          mt-12
          lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start
          xl:gap-x-16
        "
      >
        <section aria-labelledby="cart-heading" class="lg:col-span-7">
          <h2 id="cart-heading" class="sr-only">Items in your shopping cart</h2>

          <ul
            role="list"
            class="border-t border-b border-gray-200 divide-y divide-gray-200"
          >
            <li
              class="flex py-6 sm:py-10"
              v-for="item in cart.items"
              :key="item.id"
            >
              <div class="flex-shrink-0">
                <img
                  src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-01.jpg"
                  alt="Front of men&#039;s Basic Tee in sienna."
                  class="
                    w-24
                    h-24
                    rounded-md
                    object-center object-cover
                    sm:w-48 sm:h-48
                  "
                />
              </div>

              <div class="ml-4 flex-1 flex flex-col justify-between sm:ml-6">
                <div
                  class="
                    relative
                    pr-9
                    sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0
                  "
                >
                  <div>
                    <div class="flex justify-between">
                      <h3 class="text-sm">
                        <a
                          href="#"
                          class="font-medium text-gray-700 hover:text-gray-800"
                        >
                          {{ item.title }}
                        </a>
                      </h3>
                    </div>
                    <div class="mt-1 flex text-sm">
                      <p class="text-gray-500">{{ item.description }}</p>

                      <p
                        class="ml-4 pl-4 border-l border-gray-200 text-gray-500"
                      >
                        {{ item.variant.title }}
                      </p>
                    </div>
                    <p class="mt-1 text-sm font-medium text-gray-900">
                      {{ item.unit_price | currency("$") }}
                    </p>
                  </div>

                  <div class="mt-4 sm:mt-0 sm:pr-9">
                    <label for="quantity-0" class="sr-only"
                      >Quantity, Basic Tee</label
                    >
                    <div class="grid grid-cols-3 gap-3 sm:grid-cols-6 mt-2">
                      <button
                        class="
                          border
                          rounded-md
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
                          item.quantity == 1
                            ? 'opacity-25 cursor-not-allowed'
                            : ''
                        "
                        @click.prevent="
                          handleQuantity('dec', {
                            item_id: item.id,
                            quantity: item.quantity,
                          })
                        "
                      >
                        -
                      </button>
                      <label
                        class="
                          border
                          rounded-md
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
                        <p id="size-choice-0-label">{{ item.quantity }}</p>
                      </label>
                      <button
                        class="
                          border
                          rounded-md
                          flex
                          items-center
                          justify-center
                          text-sm
                          font-medium
                          uppercase
                          sm:flex-1
                          focus:outline-none
                        "
                        @click.prevent="
                          handleQuantity('inc', {
                            item_id: item.id,
                            quantity: item.quantity,
                          })
                        "
                      >
                        +
                      </button>
                    </div>

                    <div class="absolute top-0 right-0">
                      <button
                        type="button"
                        class="
                          -m-2
                          p-2
                          inline-flex
                          text-gray-400
                          hover:text-gray-500
                        "
                        @click.prevent="handleRemove(item.id)"
                      >
                        <span class="sr-only">Remove</span>
                        <!-- Heroicon name: solid/x -->
                        <svg
                          class="h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

                <p class="mt-4 flex text-sm text-gray-700 space-x-2">
                  <!-- Heroicon name: solid/check -->
                  <svg
                    class="flex-shrink-0 h-5 w-5 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span>In stock</span>
                </p>
              </div>
            </li>
          </ul>
        </section>

        <!-- Order summary -->
        <section
          aria-labelledby="summary-heading"
          class="
            mt-16
            bg-gray-50
            rounded-lg
            px-4
            py-6
            sm:p-6
            lg:p-8 lg:mt-0 lg:col-span-5
          "
        >
          <h2 id="summary-heading" class="text-lg font-medium text-gray-900">
            Order summary
          </h2>

          <dl class="mt-6 space-y-4">
            <div class="flex items-center justify-between">
              <dt class="text-sm text-gray-600">Subtotal (incl. taxes)</dt>
              <dd class="text-sm font-medium text-gray-900">
                {{ cart.region ? cart.subtotal : 0 | currency("$") }}
              </dd>
            </div>
          </dl>

          <div class="mt-6">
            <button
              type="submit"
              class="
                w-full
                bg-indigo-600
                border border-transparent
                rounded-md
                shadow-sm
                py-3
                px-4
                text-base
                font-medium
                text-white
                hover:bg-indigo-700
                focus:outline-none
                focus:ring-2
                focus:ring-offset-2
                focus:ring-offset-gray-50
                focus:ring-indigo-500
              "
              :disabled="cart.items.length < 1 ? true : false"
            >
              Checkout
            </button>
          </div>
        </section>
      </form>
    </div>
  </div>
</template>
<script lang="ts">
/* eslint-disable @typescript-eslint/no-explicit-any */
import Vue from "vue";
import { mapActions, mapState } from "vuex";
import { NetworkErrorDto } from "@/types";
export default Vue.extend({
  name: "Cart",
  computed: {
    ...mapState({ cart: (state: any) => state.cart }),
  },
  methods: {
    ...mapActions({
      updateQuantity: "updateQuantity",
      removeFromCart: "removeFromCart",
    }),
    async handleQuantity(
      type: string,
      { item_id, quantity }: { item_id: string; quantity: number }
    ) {
      await this.updateQuantity({
        item_id,
        quantity: type == "inc" ? quantity + 1 : quantity - 1,
      }).catch((err: NetworkErrorDto) => {
        console.log(err);
      });
    },
    async handleRemove(item_id: string) {
      await this.removeFromCart(item_id).catch((err: NetworkErrorDto) => {
        console.log(err);
      });
    },
  },
});
</script>
