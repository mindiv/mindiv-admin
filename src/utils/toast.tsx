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

export const notifySuccess = (
  msg: string,
  pos:
    | 'TOP_LEFT'
    | 'TOP_CENTER'
    | 'TOP_RIGHT'
    | 'BOTTOM_LEFT'
    | 'BOTTOM_CENTER'
    | 'BOTTOM_RIGHT' = 'TOP_RIGHT'
) => {
  return toast(msg, { ...toastSuccessConfig, position: toast.POSITION[pos] });
};

export const notifyError = (
  msg: string,
  pos:
    | 'TOP_LEFT'
    | 'TOP_CENTER'
    | 'TOP_RIGHT'
    | 'BOTTOM_LEFT'
    | 'BOTTOM_CENTER'
    | 'BOTTOM_RIGHT' = 'TOP_RIGHT'
) => {
  return toast.error(msg, {
    ...toastErrorConfig,
    position: toast.POSITION[pos],
  });
};
