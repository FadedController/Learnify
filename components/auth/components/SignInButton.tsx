import React from "react";
import { firebase } from "../../../functions/firebase";

interface SignInProps {
  providerFx: () => Promise<firebase.auth.UserCredential>;
  label: string;
  className?: string;
}

const SignIn: React.FC<SignInProps> = ({ providerFx, label, className }) => {
  return (
    <button className={className} onClick={providerFx}>
      {label}
    </button>
  );
};

export default SignIn;
