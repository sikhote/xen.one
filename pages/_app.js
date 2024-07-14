import { Analytics } from '@vercel/analytics/react';
import 'lib/styles.scss';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
