<template>
  <form class="Signup__shell__inner" @submit.prevent>
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
      @click="login"
    >
      Reset Password
    </button>
  </form>
</template>

<style scoped></style>

<script>
export default {
  name: "Login",
  data() {
    return {
      formData: {
        email: ""
      },
    };
  },
  methods: {
	login () {
		this.$store.dispatch('resetPassword', { email: this.formData.email })
	},
  }
};
</script>
