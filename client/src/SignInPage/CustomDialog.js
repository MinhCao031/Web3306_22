import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function CustomDialog({
  title,
  value,
  type,
  children,
  autoOpen = false,
  display = true,
}) {
  const [open, setOpen] = React.useState(autoOpen);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  let Click = 'span';
  if (type === 'span') {
    Click = 'span';
  } else if (type === 'button') {
    Click = 'button';
  }
  return (
    <div>
      {display ? (
        <Click onClick={handleClickOpen}>{value}</Click>
      ) : (
        <span></span>
      )}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {children}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Quay lại</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
