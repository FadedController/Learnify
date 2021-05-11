import React, { useContext } from "react";
import { firebase } from "../../../functions/firebase";
import AuthContext from "../hooks/AuthContext";

interface SignInProps {
  providerFx: () => Promise<firebase.auth.UserCredential>;
  providerName: string;
  className?: string;
}

const SignIn: React.FC<SignInProps> = ({
  providerFx,
  providerName,
  className,
}) => {
  const [context, setContext] = useContext(AuthContext);

  const handleSubmit = () => {
    providerFx().then((auth) => {
      setContext(auth.user);
    });
  };

  return (
    <button className={className} onClick={handleSubmit}>
      {providerName}
    </button>
  );
};

export default SignIn;
