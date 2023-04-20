<template>
  <form @submit.prevent="handleSubmit">
    <input
      type="text"
      required
      placeholder="display name"
      v-model="displayName"
    />
    <input type="email" required placeholder="email" v-model="email" />
    <input type="password" required placeholder="password" v-model="password" />
    <div class="error">{{ error }}</div>
    <button>Sign up</button>
  </form>
  <form class="google-sign-up">
    <input
      type="text"
      placeholder="Display name (optional) "
      v-model="displayName"
    />
    <button @click.prevent="handleGoogleSignIn">Sign up with Google</button>
  </form>
</template>

<script>
import { ref } from "vue";
import useSignup from "../composables/useSignup.js";
import useGoogleSignIn from "../composables/useGoogleSignIn";

export default {
  emits: ["enterChat"],
  setup(props, context) {
    const { error, signup } = useSignup();
    // refs
    const displayName = ref("");
    const email = ref("");
    const password = ref("");

    const handleSubmit = async () => {
      await signup(email.value, password.value, displayName.value);
      if (!error.value) {
        context.emit("enterChat");
      }
    };

    const { error: googleSignInError, googleSignIn } = useGoogleSignIn();

    const handleGoogleSignIn = async () => {
      await googleSignIn(displayName.value);
      if (!googleSignInError.value) {
        context.emit("enterChat");
      }
    };

    return {
      displayName,
      email,
      password,
      handleSubmit,
      error,
      handleGoogleSignIn,
    };
  },
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  max-width: 100%;
}

input {
  max-width: 100%;
  box-sizing: border-box;
}
</style>
