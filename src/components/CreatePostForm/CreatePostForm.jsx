import { useForm, Controller } from 'react-hook-form';
import { Button, TextField } from '@mui/material';
import { useAddNewPostMutation } from 'redux/postsApi';
import s from './CreatePostForm.module.css';

const CreatePostForm = ({ onClose }) => {
  const [addNewPost, { isLoading }] = useAddNewPostMutation();
  const {
    control,
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { postTitle: '', description: '' },
  });

  const onSubmit = (data, evt) => {
    evt.preventDefault();

    addNewPost(data);
    reset();

    setTimeout(() => {
      onClose();
    }, 500);
  };

  return (
    <>
      {!isLoading ? (
        <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
          <Controller
            control={control}
            name="postTitle"
            render={({ field }) => (
              <TextField
                id="filled-basic"
                label="Enter a post title..."
                variant="filled"
                sx={{ mb: 2 }}
                {...field}
              />
            )}
          />

          <textarea
            rows="10"
            {...register('description')}
            className={s.descriptionField}
            placeholder="Enter a post..."
          />

          <Button
            type="submit"
            variant="text"
            color="inherit"
            sx={{ marginTop: '30px', marginX: 'auto' }}
          >
            Create
          </Button>
        </form>
      ) : null}
    </>
  );
};

export default CreatePostForm;
