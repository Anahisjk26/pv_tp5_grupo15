import { useEffect } from "react";
import "./Snackbar.css";

export const Snackbar = ({
  message,
  visible,
  onClose,
  duration = 3000,
  variant = "submit",
}) => {
  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [visible, duration, onClose]);

  return visible ? (
    <div className={`snackbar snackbar-${variant}`}>{message}</div>
  ) : null;
};
