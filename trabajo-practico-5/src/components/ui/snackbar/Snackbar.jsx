import { Snackbar, Alert } from "@mui/material";

export const SnackbarComponent = ({
  open,
  onClose,
  message,
  severity = "success",
  duration = 3000,
  vertical = "bottom",
  horizontal = "right",
}) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={duration}
      onClose={onClose}
      anchorOrigin={{ vertical, horizontal }}
    >
      <Alert variant="filled" onClose={onClose} severity={severity} sx={{ width: "100%" }}>
        {message}
      </Alert>
    </Snackbar>
  );
};
