/** @format */

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function Notify() {
  return (
    <ToastContainer
      position='top-center'
      autoClose={1000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme='light'
    />
  );
}
