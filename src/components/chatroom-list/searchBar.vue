<template>
  <div class="Chatroom__list__search">
    <input
      v-model="searchQuery"
      type="text"
      placeholder=" Search or start a new chat"
    />
  </div>
</template>

<script>
export default {
  name: "searchBar",
  data() {
    return {
      searchQuery: null,
    };
  },
  watch: {
    searchQuery: function(newValue, oldValue) {
      console.log(newValue, oldValue);
      this.$root.$emit("searchParam", newValue);
    },
  },
};
</script>
