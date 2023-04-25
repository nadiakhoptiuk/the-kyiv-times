import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import PropTypes from 'prop-types';
import { useGetUserByIdQuery } from 'redux/postsApi';
import CommentsBlock from 'components/PostPreview/CommentsBlock';
import s from './PostInfo.module.css';

const PostInfo = ({ post }) => {
  const { userId, id } = post;
  const { data: user } = useGetUserByIdQuery(userId);
  const navigate = useNavigate();

  function handleGoBack() {
    navigate(`/`, { replace: true });
  }

  return (
    <>
      {user && (
        <>
          <Button className={s.btnBack} type="button" onClick={handleGoBack}>
            &#129044; Go Back
          </Button>

          <h2 className={s.postTitle}>{post.title}</h2>
          <p className={s.postDescription}>{post.body}</p>
          <div className={s.userInfo}>
            <p>Author: {user.name}</p>
            <p>City: {user.address.city}</p>
            <span>E-mail: {user.email}</span>
            <span>Website: {user.website}</span>
            <p>Company: "{user.company.name}"</p>
          </div>

          <CommentsBlock id={id} height={'auto'} scroll={'auto'} />
        </>
      )}
    </>
  );
};

export default PostInfo;

PostInfo.propTypes = {
  post: PropTypes.shape({
    body: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    userId: PropTypes.number.isRequired,
  }).isRequired,
};
