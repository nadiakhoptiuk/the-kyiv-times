import useLocalStorage from 'hooks/useLocalStorage';
import { Button } from '@mui/material';
import CreatePostModal from 'components/CreatePostModal/CreatePostModal';

const CreatePostBtn = () => {
  const [open, setOpen] = useLocalStorage('isModalOpen', false);

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
        color="primary"
        onClick={handleClickOpen}
        sx={{ marginTop: '30px', marginX: 'auto' }}
      >
        Create a new post
      </Button>

      <CreatePostModal
        onClose={handleClose}
        open={open}
        title="Please fill form below:"
      />
    </>
  );
};

export default CreatePostBtn;
