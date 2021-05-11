import "tailwindcss/tailwind.css";
import React, { useState } from "react";
import { firebase } from "../functions/firebase";
import AuthContext from "../components/auth/hooks/AuthContext";
import AppBg from "../components/theme/components/bgApp";

interface AppProps {
  Component: any;
  pageProps: any;
}

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [authContext, setAuthContext] = useState<firebase.User>(null);

  return (
    <AppBg>
      <AuthContext.Provider value={[authContext, setAuthContext]}>
        <Component {...pageProps} />
      </AuthContext.Provider>
    </AppBg>
  );
};

export default App;
