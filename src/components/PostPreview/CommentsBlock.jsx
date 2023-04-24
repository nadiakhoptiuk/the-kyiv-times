import { CardContent, List, ListItem, ListItemText } from '@mui/material';
import Spinner from 'components/Spinner/Spinner';
import { useGetCommentsByPostIdQuery } from 'redux/postsApi';
import s from './PostPreview.module.css';

const CommentsBlock = ({ id }) => {
  const { data: comments, isLoading } = useGetCommentsByPostIdQuery(id);

  return (
    <CardContent sx={{ p: 0 }}>
      {comments && (
        <>
          <h3 className={s.commentsTitle}>Comments:</h3>
          <List
            sx={{
              width: '100%',
              height: 170,
              overflowY: 'scroll',
            }}
          >
            {comments?.map(({ email, body, id }) => {
              return (
                <ListItem key={id}>
                  <ListItemText primary={email} secondary={`"${body}"`} />
                </ListItem>
              );
            })}
          </List>
        </>
      )}

      {isLoading && <Spinner />}
    </CardContent>
  );
};

export default CommentsBlock;
