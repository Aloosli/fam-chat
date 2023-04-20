import { ref } from "vue";
import { projectAuth } from "@/firebase/config";
import firebase from "firebase/app";

const error = ref(null);

const googleSignIn = async (displayName) => {
  error.value = null;

  const provider = new firebase.auth.GoogleAuthProvider();

  try {
    const res = await projectAuth.signInWithPopup(provider);
    if (!displayName) {
      displayName = res.user.displayName;
    }
    await res.user.updateProfile({ displayName });
    error.value = null;
    return res;
  } catch (err) {
    console.log(err.message);
    error.value = err.message;
  }
};

const useGoogleSignIn = () => {
  return { error, googleSignIn };
};

export default useGoogleSignIn;
