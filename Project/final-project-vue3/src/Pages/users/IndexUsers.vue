<template>
  <div class="container mt-3">
    <div class="row g-3">

      <div v-if="loading" class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>

      <div v-else class="col-md-4" v-for="user in users" :key="user.id">
        <UserCardView :user="user" />
      </div>

    </div>
  </div>
</template>

<script>
import axios from "axios";
import { ref } from "vue";
import UserCardView from "@/components/users/CardView.vue";

export default {
  name: "IndexUsers",
  components: {
    UserCardView,
  },
  setup() {
    const users = ref([]);
    const loading = ref(true);

    function getUsers() {
      // Make a request for a user with a given ID
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then(function (response) {
          // handle success
          users.value = response.data;
          loading.value = false;
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {
          // always executed
        });
    }

    getUsers();
    return { users, loading };
  },
};
</script>

<style>
</style>