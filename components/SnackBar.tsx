"use client";

interface SnackbarProps {
  open: boolean;
  message: string;
  type?: "success" | "error" | "warning";
}

export default function Snackbar({
  open,
  message,
  type = "success",
}: SnackbarProps) {
  if (!open) return null;

  const bgColor = {
    success: "bg-green-600",
    error: "bg-red-600",
    warning: "bg-yellow-500",
  };

  return (
    <div
      className={`
        fixed
        top-5
        left-1/2
        -translate-x-1/2
        w-1/2
        z-[2147483647]
        px-5
        py-3
        rounded-xl
        text-center
        text-white
        shadow-lg
        animate-in
        slide-in-from-top-5
        duration-300
        ${bgColor[type]}
      `}
    >
      {message}
    </div>
  );
}