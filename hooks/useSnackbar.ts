import { useState } from "react";

export type SnackbarType =
  | "success"
  | "error"
  | "warning";

export default function useSnackbar() {
  const [snackbar, setSnackbar] =
    useState<{
      open: boolean;
      message: string;
      type: SnackbarType;
    }>({
      open: false,
      message: "",
      type: "success",
    });

  const showSnackbar = (
    message: string,
    type: SnackbarType = "success"
  ) => {
    setSnackbar({
      open: true,
      message,
      type,
    });

    setTimeout(() => {
      setSnackbar((prev) => ({
        ...prev,
        open: false,
      }));
    }, 3000);
  };

  return {
    snackbar,
    showSnackbar,
  };
}