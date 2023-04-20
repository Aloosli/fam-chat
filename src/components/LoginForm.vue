<template>
  <form @submit.prevent="handleSubmit">
    <input type="email" required placeholder="email" v-model="email" />
    <input type="password" required placeholder="password" v-model="password" />
    <div class="error">{{ error }}</div>
    <button>Login</button>
    <!-- Add this button inside the <form> element in the Login component -->
    <button @click.prevent="handleGoogleSignIn" class="google-sign-in">
      Sign in with Google
    </button>
  </form>
</template>

<script>
import { ref } from "vue";
import useLogin from "../composables/useLogin";
import useGoogleSignIn from "../composables/useGoogleSignIn";

export default {
  setup(props, context) {
    // refs

    const email = ref("");
    const password = ref("");

    const { error, login } = useLogin();

    const handleSubmit = async () => {
      await login(email.value, password.value);
      if (!error.value) {
        context.emit("login");
      }
    };
    const { error: googleSignInError, googleSignIn } = useGoogleSignIn();

    const handleGoogleSignIn = async () => {
      await googleSignIn();
      if (!googleSignInError.value) {
        context.emit("login");
      }
    };

    return { email, password, handleSubmit, error, handleGoogleSignIn  };
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
