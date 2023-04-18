<template>
  <form>
    <textarea
      placeholder="Type a message and hit enter to send..."
      v-model="message"
      @keypress.enter="handleSubmit"
    ></textarea>
    <div class="error"></div>
  </form>
</template>

<script>
import { ref } from "vue";
import getUser from "../composables/getUser";

import { timestamp } from "../firebase/config";
import useCollection from "@/composables/useCollection";

export default {
  setup() {
    const { user } = getUser();
    const { addDoc, error } = useCollection("messages");

    const message = ref("");

    const handleSubmit = async () => {
      const chat = {
        name: user.value.displayName,
        message: message.value,
        createdAt: timestamp(),
      };
      await addDoc(chat);
      if (!error.value) message.value = "";
    };
    return { message, handleSubmit, error };
  },
};
</script>

<style>
form {
  margin: 10px;
}
textarea {
  width: 100%;
  max-width: 100%;
  margin-bottom: 6px;
  box-sizing: border-box;
  border-radius: 20px;
  border: 0;
  padding: 10px;
  font-family: inherit;
  outline: none;
}
</style>
