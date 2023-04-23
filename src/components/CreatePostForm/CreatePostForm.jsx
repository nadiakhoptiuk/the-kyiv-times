import { useForm, Controller } from 'react-hook-form';
import { Button, TextField } from '@mui/material';
import { useAddNewPostMutation } from 'redux/postsApi';
import s from './CreatePostForm.module.css';
import { useEffect } from 'react';

const CreatePostForm = ({ onClose }) => {
  const [addNewPost, { isLoading, isSuccess }] = useAddNewPostMutation();
  const {
    control,
    register,
    reset,
    handleSubmit,
    // formState: { errors },
  } = useForm({
    defaultValues: { postTitle: '', description: '' },
  });

  const onSubmit = (data, evt) => {
    evt.preventDefault();

    addNewPost(data);
    reset();
  };

  useEffect(() => {
    if (!isSuccess) return;

    setTimeout(() => {
      onClose();
    }, 500);
  }, [isSuccess, onClose]);

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
                placeholder="Enter a post title..."
                variant="filled"
                color="inherit"
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
            variant="contained"
            color="inherit"
            sx={{ marginTop: '30px', marginX: 'auto' }}
          >
            Create the post
          </Button>
        </form>
      ) : null}

      {isSuccess && <p>The post has been succesfully created</p>}
    </>
  );
};

export default CreatePostForm;
