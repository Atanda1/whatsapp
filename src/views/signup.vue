<template>
  <form class="Signup__shell__inner" @submit.prevent="signup">
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
      type="mail"
      placeholder="Email"
      v-model="formData.email"
      required
    />
    <input
      class="Signup__shell__inner__input"
      type="text"
      placeholder="Name"
      v-model="formData.name"
      required
    />
    <input
      class="Signup__shell__inner__input2"
      type="password"
      placeholder="Password"
      v-model="formData.password"
      required
    />
    <div class="Signup__shell__inner__image-upload">
      <h5>Upload profile picture</h5>
      <label for="file-input">  
        <img
          class="Signup__shell__inner__image-upload__icon"
          src="../assets/save.png"
        />
      </label>
      <input
        id="file-input"
        type="file"
        ref="fileInput"
        accept="image/*"
        @change="onFilePicked"
        required
      />
    </div>
    <button
      class="Signup__shell__inner__button mt-form"
      type="submit"
    >
      Signup
    </button>
    <button class="Signup__shell__inner__button" @click="signupWithGoogle">
      <img src="../assets/google.png" />
    </button>
    <router-link :to="{ name: 'login' }"
      ><h4 class="Signup__shell__inner__forgotPassword">
        You have an account? Login
      </h4></router-link
    >
  </form>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions, mapGetters } = createNamespacedHelpers("authen");

export default {
  name: "Signup",
  data() {
    return {
      formData: {
        email: "",
        password: "",
        name: "",
        image: null,
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
     upload: "uploadData",
     userSignupGoogle:"signUpWithGoogle"
     }),
    onPickFile() {
      this.$refs.fileInput.click();
    },
    onFilePicked(event) {
      const files = event.target.files;
      const fileReader = new FileReader();
      fileReader.addEventListener("load", () => {
        this.imageUrl = fileReader.result;
      });
      fileReader.readAsDataURL(files[0]);
      this.formData.image = files[0];
    },
    signup() {
      console.log(this.formData)
      this.upload({
        email: this.formData.email,
        password: this.formData.password,
        name: this.formData.name,
        image: this.formData.image
      });
    },
    signupWithGoogle() {
      this.userSignupGoogle();
    },
  },
};
</script>
