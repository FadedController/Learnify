import React from "react";
import SignIn from "../components/auth/components/SignInButton";
import signInWithGoogle from "../components/auth/functions/googleProvider";
import SignOut from "../components/auth/components/SignOutButton";
import signOut from "../components/auth/functions/signOut";
import useLearnifyUser from "../components/users/hooks/UseLearnifyUser";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../functions/firebase";

const IndexPage: React.FC = () => {
  const [authUser, loading, error] = useAuthState(auth);
  const learnifyUser = useLearnifyUser(authUser, loading);

  return (
    <div>
      <h1>This is a component</h1>
      <SignIn providerFx={signInWithGoogle} label="Sign In With Google" />
      <SignOut signOutFx={signOut} label="Sign Out" />
      <pre>{JSON.stringify(learnifyUser, null, 2)}</pre>
    </div>
  );
};

export default IndexPage;
