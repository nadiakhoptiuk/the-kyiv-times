import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const CreatePostModal = ({ open, onClose, title }) => {
  return (
    <Dialog
      onClose={onClose}
      open={open}
      title="Please fill this form for new post"
      aria-label="modal for create new post"
    >
      <DialogTitle sx={{ m: 0, p: 2, position: 'relative' }}>
        {title}

        {onClose ? (
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: '50%',
              transform: 'translateY(-50%)',
              width: '40px',
              height: '40px',
            }}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </DialogTitle>

      <DialogContent dividers>
        <Typography gutterBottom>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio
        </Typography>
      </DialogContent>
    </Dialog>
  );
};

export default CreatePostModal;
