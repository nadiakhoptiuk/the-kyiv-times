import { object, string } from 'yup';

const validationSchema = object({
  postTitle: string('Please enter at least 150 symbols, not only spaces')
    .trim()
    .min(3, 'Please enter title with at least 3 symbols')
    .max(150, 'Post title must be at most 150 characters')
    .required('Post title is required'),
  description: string()
    .trim('Please enter at least 150 symbols, not only spaces')
    .min(150, 'Please enter post with at least 150 symbols')
    .max(2000, 'Post must be at most 2000 characters')
    .required('Post description is required'),
});

export default validationSchema;
