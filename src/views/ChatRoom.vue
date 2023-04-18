<template>
  <div class="container">
    <Navbar />
    <ChatWindow />
    <NewChatForm />
  </div>
</template>

<script>
import NewChatForm from "../components/NewChatForm.vue";
import Navbar from "../components/Navbar.vue";
import ChatWindow from "../components/ChatWindow.vue";
import getUser from "../composables/getUser";
import { useRouter } from "vue-router";
import { watch } from "vue";

export default {
  components: { Navbar, NewChatForm, ChatWindow },
  setup() {
    const router = useRouter(); // Step 3: Get the router instance
    const { user } = getUser(); // Step 4: Get the user ref from getUser composable

    // Step 5: Watch the user ref for changes
    watch(user, (currentUser) => {
      // Step 6: Redirect to the Welcome page if the user is not logged in
      if (!user.value) {
        router.push({ name: "Welcome" });
      }
    });
  },
};
</script>

<style></style>
