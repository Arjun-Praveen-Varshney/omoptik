import "../styles/globals.css";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import LoadingBar from "react-top-loading-bar";

function MyApp({ Component, pageProps }) {
  const [user, setuser] = useState({ value: null });
  const [progress, setprogress] = useState(0);
  const router = useRouter();
  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      setprogress(40);
    });
    router.events.on("routeChangeComplete", () => {
      setprogress(100);
    });
  }, [router.query]);

  return (
    <>
      <LoadingBar
        color="#4B0082"
        waitingTime={400}
        progress={progress}
        onLoaderFinished={() => setprogress(0)}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
