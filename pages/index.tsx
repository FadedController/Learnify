import React, { useContext } from "react";
import SignIn from "../components/auth/components/SignIn";
import AuthContext from "../components/auth/hooks/AuthContext";
import signInWithGoogle from "../components/auth/functions/googleProvider";

const IndexPage: React.FC = () => {
  const [authContext, setAuthContext] = useContext(AuthContext);

  return (
    <div>
      <h1>This is a component</h1>
      <SignIn providerFx={signInWithGoogle} providerName={"Google"} />
      <pre>{JSON.stringify(authContext, null, 2)}</pre>
    </div>
  );
};

export default IndexPage;
