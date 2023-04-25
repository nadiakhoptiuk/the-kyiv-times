import { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Alert, Button, TextField } from '@mui/material';
import PropTypes from 'prop-types';
import { useAddNewPostMutation } from 'redux/postsApi';
import validationSchema from 'service/validationSchema';
import Spinner from 'components/Spinner';
import s from './CreatePostForm.module.css';

const CreatePostForm = ({ onClose }) => {
  const [addNewPost, { isLoading, isSuccess, isFetching, isError }] =
    useAddNewPostMutation();

  const {
    control,
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { postTitle: '', description: '' },
    resolver: yupResolver(validationSchema),
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
    }, 1000);
  }, [isSuccess, onClose]);

  return (
    <>
      {!isLoading && !isSuccess && !isFetching ? (
        <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
          <Controller
            control={control}
            name="postTitle"
            render={({ field }) => (
              <TextField
                placeholder="Enter a post title..."
                variant="filled"
                {...field}
              />
            )}
          />
          <p className={s.errorMessage}>{errors?.postTitle?.message}</p>

          <textarea
            rows="10"
            {...register('description')}
            className={s.descriptionField}
            placeholder="Enter a post..."
          />
          <p className={s.errorMessage}>{errors?.description?.message}</p>

          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ marginTop: '30px', marginX: 'auto' }}
          >
            Create the post
          </Button>
        </form>
      ) : null}

      {isLoading && <Spinner />}

      {isSuccess && (
        <Alert
          variant="filled"
          severity="success"
          color="primary"
          sx={{
            position: 'absolute',
            width: 'max-content',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            fontSize: 'inherit',
          }}
        >
          The post has been succesfully created!
        </Alert>
      )}

      {isError && (
        <Alert
          variant="filled"
          severity="error"
          sx={{
            position: 'absolute',
            width: 'max-content',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            fontSize: 'inherit',
          }}
        >
          Something went wrong! Please try later...
        </Alert>
      )}
    </>
  );
};

export default CreatePostForm;

CreatePostForm.propTypes = {
  onClose: PropTypes.func.isRequired,
};
