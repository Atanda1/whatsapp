<template>
  <form class="Signup__shell__inner" @submit.prevent="reset">
    <loading-overlay
      :active="loadingStatus"
      :is-full-page="fullPage"
      :loader="loader"
      :width="width"
      :height="height"
      :backgroundColor="backgroundColor"
      :opacity="0.5"
    />
    <img src="../assets/whatsapp.png" />
    <input
      class="Signup__shell__inner__input"
      type="text"
      placeholder="Email"
      v-model="formData.email"
    />
    <button
      class="Signup__shell__inner__button mt-form"
      type="submit"
    >
      Reset Password
    </button>
    <router-link :to="{ name: 'login' }"
    >
     <button
      class="Signup__shell__inner__button bt-width"
    >
      Back to Login
    </button>
    </router-link>
  </form>
</template>

<style scoped>
.bt-width {
  width: 100%;
}
</style>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions, mapGetters } = createNamespacedHelpers("authen");

export default {
  name: "Reset",
  data() {
    return {
      formData: {
        email: ""
      },
      fullPage: false,
      loader: "spinner",
      width: 30,
      height: 30,
      backgroundColor: "#2A2F32",
      opacity: 0.3,
    };
  },
  computed: {
     ...mapGetters({ loading: "loadingStatus"}),
    loadingStatus() {
      return this.loading
    }
  },
  methods: {
    ...mapActions({
     resetItem: "resetPassword",
     }),
	reset () {
		this.resetItem({ email: this.formData.email })
	},
  }
};
</script>
