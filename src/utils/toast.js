import { toast } from 'react-toastify';

export const toastSuccessConfig = {
  pauseOnFocusLoss: false,
  pauseOnHover: false,
  hideProgressBar: true,
};

export const toastErrorConfig = {
  pauseOnFocusLoss: false,
  pauseOnHover: false,
  hideProgressBar: true,
};

// 🦄

export const notifySuccess = (msg, pos = 'TOP_RIGHT') =>
  toast(msg, { ...toastSuccessConfig, position: toast.POSITION[pos] });
export const notifyError = (msg, pos = 'TOP_RIGHT') =>
  toast.error(msg, { ...toastErrorConfig, position: toast.POSITION[pos] });
