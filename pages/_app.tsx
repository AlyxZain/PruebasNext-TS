/** @format */

import '../styles/globals.css';
import './login/Login.css';
import '../components/Header/Header.css';
import '../components/Task/Task.css';
import '../components/TaskForm/TaskForm.css';

// import type { AppProps } from 'next/app';

// export default function App({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />;
// }

import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';
import { store } from '../app/store';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
