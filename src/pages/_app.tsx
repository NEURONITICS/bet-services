import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import { initGA, logPageView } from '../../analytics';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();
  }, []);
  return <Component {...pageProps} />;
}
