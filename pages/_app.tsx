import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AnimateSharedLayout } from "framer-motion";

function Portfolio({ Component, pageProps }: AppProps) {
  return (
    <AnimateSharedLayout>
      <Component {...pageProps} />;
    </AnimateSharedLayout>
  );
}
export default Portfolio;
