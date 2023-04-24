import { CardHeader } from '@mui/material';
import Card from '@mui/material/Card';

const PostPreview = ({ post }) => {
  const { title } = post;

  return (
    <>
      <Card
        sx={{
          width: '98%',
          height: '95%',
          boxShadow: '0px 2px 5px 1px rgba(105,105,105,0.3)',
        }}
      >
        <CardHeader title={title} sx={{ textTransform: 'capitalize' }} />
      </Card>
    </>
  );
};

export default PostPreview;
