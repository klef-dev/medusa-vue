<template>
  <div
    aria-live="assertive"
    class="
      fixed
      inset-0
      flex
      items-end
      px-4
      py-6
      pointer-events-none
      sm:p-6 sm:items-start
    "
  >
    <div class="w-full flex flex-col items-center space-y-4 sm:items-end">
      <div
        class="
          max-w-sm
          w-full
          bg-white
          shadow-lg
          rounded-lg
          pointer-events-auto
          ring-1 ring-black ring-opacity-5
          overflow-hidden
        "
        v-if="show"
      >
        <div class="p-4">
          <div class="flex items-start">
            <div class="ml-3 w-0 flex-1 pt-0.5">
              <p class="text-sm font-medium text-gray-900">
                {{ title }}
              </p>
              <p class="mt-1 text-sm text-gray-500">
                {{ message }}
              </p>
            </div>
            <div class="ml-4 flex-shrink-0 flex">
              <button
                class="
                  bg-white
                  rounded-md
                  inline-flex
                  text-gray-400
                  hover:text-gray-500
                  focus:outline-none
                  focus:ring-2
                  focus:ring-offset-2
                  focus:ring-indigo-500
                "
                @click.prevent="show = false"
              >
                <span class="sr-only">Close</span>
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
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "Notify",
  props: {
    title: {
      type: String,
      default: "Status",
    },
    message: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    show: true,
  }),
});
</script>
