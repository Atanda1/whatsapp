<template>
  <form
    class="Signup__shell__inner"
    style="animation-duration: 0.3s"
    @submit.prevent="login"
  >
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
      :required="true"
    />
    <input
      class="Signup__shell__inner__input2"
      type="password"
      placeholder="Password"
      v-model="formData.password"
      :required="true"
    />
    <router-link :to="{ name: 'reset' }"
      ><h4 class="Signup__shell__inner__forgotPassword">
        Forgot Password
      </h4></router-link
    >
    <button class="Signup__shell__inner__button mt-form" type="submit">
      Login
    </button>
    <!-- <button class="Signup__shell__inner__button" @click="signupWithGoogle">
      <img src="../assets/google.png" />
    </button> -->
    <router-link :to="{ name: 'signup' }"
      ><h4 class="Signup__shell__inner__forgotPassword">
        You don't have an account? Signup
      </h4></router-link
    >
  </form>
</template>

<style scoped></style>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions, mapGetters } = createNamespacedHelpers("authen");

export default {
  name: "Login",
  data() {
    return {
      formData: {
        email: "",
        password: "",
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
      return this.loading;
    },
  },
  methods: {
    ...mapActions({
     userLogin: "login",
     userSignupGoogle:"signUpWithGoogle"
     }),
    login(e) {
      e.preventDefault;
      this.userLogin({
        email: this.formData.email,
        password: this.formData.password,
      });
    },
    signupWithGoogle() {
      this.userSignupGoogle();
    },
  },
};
</script>
