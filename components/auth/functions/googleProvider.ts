import { auth, firebase } from "../../../functions/firebase";

const signInWithGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return auth.signInWithPopup(provider);
};

export default signInWithGoogle;
