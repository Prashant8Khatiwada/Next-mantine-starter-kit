import toast, { ToastOptions } from "react-hot-toast";

export const notify = {
    success: (msg: string, opts?: ToastOptions) => toast.success(msg, opts),
    error: (msg: string, opts?: ToastOptions) => toast.error(msg, opts),
    info: (msg: string, opts?: ToastOptions) => toast(msg, opts),
    loading: (msg: string, opts?: ToastOptions) => toast.loading(msg, opts),
    promise: <T>(
        promise: Promise<T>,
        msgs: { loading: string; success: string; error: string },
        opts?: ToastOptions,
    ) => toast.promise(promise, msgs, opts),
};
