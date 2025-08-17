import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from '@mui/material';

const DeleteDialog = ({
  open,
  title,
  subtitle,
  onCancel,
  onConfirm,
}: {
  open: boolean;
  title?: string;
  subtitle?: string;
  onCancel: () => void;
  onConfirm: () => void;
}) => {
  return (
    <Dialog open={open} onClose={onCancel}>
      <DialogTitle>{title ?? 'Delete Confirmation'}</DialogTitle>
      <DialogContent dividers>
        <Typography variant="body2" color="text.secondary">
          {subtitle ?? 'This action cannot be undone.'}
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={onCancel} color="inherit">
          Cancel
        </Button>
        <Button color="error" variant="contained" onClick={onConfirm}>
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default DeleteDialog;
