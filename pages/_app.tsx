import "tailwindcss/tailwind.css";
import React from "react";
import AppBg from "../components/theme/components/bgApp";
interface AppProps {
  Component: any;
  pageProps: any;
}

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <AppBg>
      <Component {...pageProps} />
    </AppBg>
  );
};

export default App;
