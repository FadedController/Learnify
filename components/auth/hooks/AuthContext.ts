import { createContext } from "react";
import { firebase } from "../../../functions/firebase";

type AuthContextState = [
  firebase.User,
  React.Dispatch<React.SetStateAction<firebase.User>>
];

const AuthContext = createContext<AuthContextState>(null);

export default AuthContext;
