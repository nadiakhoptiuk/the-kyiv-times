import { List, ListItem, ListItemText } from '@mui/material';
import PropTypes from 'prop-types';
import { useGetCommentsByPostIdQuery } from 'redux/postsApi';
import Spinner from 'components/Spinner';
import s from './PostPreview.module.css';

const CommentsBlock = ({ id, height, scroll }) => {
  const { data: comments, isLoading } = useGetCommentsByPostIdQuery(id);

  return (
    <>
      {comments && (
        <>
          <h3 className={s.commentsTitle}>Comments:</h3>
          <List
            sx={{
              width: '100%',
              height: `${height}`,
              overflowY: `${scroll}`,
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
    </>
  );
};

export default CommentsBlock;

CommentsBlock.propTypes = {
  id: PropTypes.number.isRequired,
  height: PropTypes.string.isRequired,
  scroll: PropTypes.string.isRequired,
};
