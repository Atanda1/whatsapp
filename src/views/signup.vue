<template>
  <form class="Signup__shell__inner" @submit.prevent>
    <img src="../assets/whatsapp.png" />
    <input
      class="Signup__shell__inner__input"
      type="mail"
      placeholder="Email"
      v-model="formData.email"
    />
    <input class="Signup__shell__inner__input" type="text" placeholder="Name" v-model="formData.name" />
    <input
      class="Signup__shell__inner__input2"
      type="password"
      placeholder="Password"
      v-model="formData.password"
    />
    <div class="Signup__shell__inner__image-upload">
      <label for="file-input">
        <h5>Upload profile picture</h5>
        <img
          class="Signup__shell__inner__image-upload__icon"
          src="../assets/save.png"
          @click="onPickFile"
        />
      </label>
      <input
        id="file-input"
        type="file"
        ref="fileInput"
        accept="image/*"
        @change="onFilePicked"
      />
    </div>
    <button class="Signup__shell__inner__button mt-form" type="submit" @click="signup">Signup</button>
    <button class="Signup__shell__inner__button">
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
    };
  },
  methods: {
    onPickFile() {
      this.$refs.fileInput.click();
    },
    onFilePicked(event) {
      const files = event.target.files;
      //let filename = files[0].name;
      const fileReader = new FileReader();
      fileReader.addEventListener("load", () => {
        this.imageUrl = fileReader.result;
      });
      fileReader.readAsDataURL(files[0]);
      this.formData.image = files[0];
	},
	signup() {
		console.log(this.formData);
		this.$store.dispatch('signup', this.formData)
	}
  },
};
</script>
