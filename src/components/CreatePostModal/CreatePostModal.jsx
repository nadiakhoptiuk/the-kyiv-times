import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  // Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CreatePostForm from 'components/CreatePostForm/CreatePostForm';

const CreatePostModal = ({ open, onClose, title }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      title={title}
      aria-label="modal for create new post"
    >
      <DialogTitle sx={{ m: 0, p: 4, position: 'relative', fontSize: '24px' }}>
        {title}

        {onClose ? (
          <IconButton
            aria-label="close"
            onClick={onClose}
            color="primary"
            sx={{
              p: 1.5,
              position: 'absolute',
              right: 32,
              top: '50%',
              transform: 'translateY(-50%)',
              width: '50px',
              height: '50px',
            }}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </DialogTitle>

      <DialogContent dividers sx={{ p: 4, pt: 2 }}>
        <CreatePostForm onClose={onClose} />
      </DialogContent>
    </Dialog>
  );
};

export default CreatePostModal;
