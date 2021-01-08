<template>
  <form class="Signup__shell__inner" @submit.prevent>
    <img src="../assets/whatsapp.png" />
    <input
      class="Signup__shell__inner__input"
      type="text"
      placeholder="Email"
      v-model="formData.email"
    />
    <input
      class="Signup__shell__inner__input2"
      type="password"
      placeholder="Password"
      v-model="formData.password"
    />
    <router-link :to="{ name: 'reset' }"
      ><h4 class="Signup__shell__inner__forgotPassword">
        Forgot Password
      </h4></router-link
    >
    <button
      class="Signup__shell__inner__button mt-form"
      type="submit"
      @click="login"
    >
      Login
    </button>
    <button class="Signup__shell__inner__button" @click="signupWithGoogle">
      <img src="../assets/google.png" />
    </button>
    <router-link :to="{ name: 'signup' }"
      ><h4 class="Signup__shell__inner__forgotPassword">
        You don't have an account? Signup
      </h4></router-link
    >
  </form>
</template>

<style scoped></style>

<script>
export default {
  name: "Login",
  data() {
    return {
      formData: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    login() {
      this.$store.dispatch("login", {
        email: this.formData.email,
        password: this.formData.password,
      });
    },
    signupWithGoogle() {
      this.$store.dispatch("signUpWithGoogle");
    },
  },
};
</script>
