import { CardHeader } from '@mui/material';
import Card from '@mui/material/Card';

const PostPreview = ({ post }) => {
  const { title } = post;

  return (
    <>
      <Card
        sx={{
          width: '95%',
          height: '95%',
          boxShadow:
            '0px 3px 6px 1px rgba(105,105,105,0.46), 0px -2px 6px 1px rgba(105,105,105,0.26)',
        }}
      >
        <CardHeader title={title} sx={{ textTransform: 'capitalize' }} />
      </Card>
    </>
  );
};

export default PostPreview;
