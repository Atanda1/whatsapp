<template>
  <div class="Chatroom__list__profile">
    <!-- <img class="Chatroom__list__profile__img" :src="userImageUrl" /> -->
    <div
      class="Chatroom__list__profile__img"
      :style="{ backgroundImage: `url(${userImageUrl})` }"
    >
      <!-- <img :src="result.image" /> -->
    </div>
    <svg
      id="df9d3429-f0ef-48b5-b5eb-f9d27b2deba6"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      class="Chatroom__list__profile__chat"
    >
      <path
        fill="currentColor"
        d="M12.072 1.761a10.05 10.05 0 0 0-9.303 5.65.977.977 0 0 0 1.756.855 8.098 8.098 0 0 1 7.496-4.553.977.977 0 1 0 .051-1.952zM1.926 13.64a10.052 10.052 0 0 0 7.461 7.925.977.977 0 0 0 .471-1.895 8.097 8.097 0 0 1-6.012-6.386.977.977 0 0 0-1.92.356zm13.729 7.454a10.053 10.053 0 0 0 6.201-8.946.976.976 0 1 0-1.951-.081v.014a8.097 8.097 0 0 1-4.997 7.209.977.977 0 0 0 .727 1.813l.02-.009z"
      ></path>
      <path fill="#009588" d="M19 1.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"></path>
    </svg>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="Chatroom__list__profile__chat"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M19.005 3.175H4.674C3.642 3.175 3 3.789 3 4.821V21.02l3.544-3.514h12.461c1.033 0 2.064-1.06 2.064-2.093V4.821c-.001-1.032-1.032-1.646-2.064-1.646zm-4.989 9.869H7.041V11.1h6.975v1.944zm3-4H7.041V7.1h9.975v1.944z"
      ></path>
    </svg>

    <div class="dropdown">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        class="Chatroom__list__profile__chat dropdown-btn"
      >
        <path
          fill="currentColor"
          d="M12 7a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 7zm0 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 9zm0 6a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 15z"
        ></path>
      </svg>
      <div class="dropdown-content">
        <button @click="logout">Logout</button>
      </div>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions } = createNamespacedHelpers("authen");
export default {
  name: "userProfile",
  props: {
    userImageUrl: {
      type: String,
    },
  },
  methods: {
    ...mapActions({
      userLogout: "logout",
    }),
    logout() {
      this.userLogout();
    },
  },
};
</script>

<style>
.dropdown {
  display: inline-block;
  position: relative;
}
.dropdown-content {
  display: none;
  position: absolute;
}
.dropdown:hover .dropdown-content {
  display: block;
}
.dropdown-btn {
  padding-top: 5px;
  border: none;
}
.dropdown-content button {
  display: block;
  padding: 10px;
  text-decoration: none;
  font-size: 16px;
  color: white;
  border: none;
  background-color: #2a2f32;
  box-shadow: 0px 0px 0.5px 0.5px #131c21;
}
.dropdown-content button:hover {
  background-color: #20272b;
}

.Chatroom__list__profile__circle__img {
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: auto;
}

.Chatroom__list__profile__img {
  width: 3rem;
  height: 3rem;
  -webkit-border-radius: 60px;
  -webkit-background-clip: padding-box;
  -moz-border-radius: 60px;
  -moz-background-clip: padding;
  border-radius: 60px;
  background-clip: padding-box;
  /* margin: 7px 0 0 5px; */
  align-items: center;
  background-size: cover;
  background-position: center center;
}
</style>
