import { auth } from "../../../functions/firebase";

const signOut = () => {
  return auth.signOut();
};

export default signOut;
