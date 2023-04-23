import { useState } from 'react';
import { Button } from '@mui/material';
import CreatePostModal from 'components/CreatePostModal/CreatePostModal';

const CreatePostBtn = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button
        variant="text"
        color="inherit"
        onClick={handleClickOpen}
        sx={{ marginTop: '30px', marginX: 'auto' }}
      >
        Create a new post
      </Button>

      <CreatePostModal
        onClose={handleClose}
        open={open}
        title="Please fill this form for new post"
      />
    </>
  );
};

export default CreatePostBtn;
