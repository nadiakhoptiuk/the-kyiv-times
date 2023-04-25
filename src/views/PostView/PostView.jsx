import { useParams } from 'react-router';
import { useGetPostInfoByIdQuery } from 'redux/postsApi';
import PostInfo from 'components/PostInfo';
import Spinner from 'components/Spinner';
import s from './PostView.module.css';

const PostView = () => {
  const { postId } = useParams();
  const { data: post } = useGetPostInfoByIdQuery(postId, {
    refetchOnMountOrArgChange: true,
  });

  return (
    <section className={s.postViewSection}>
      <div className="container">
        {post ? <PostInfo post={post} /> : <Spinner />}
      </div>
    </section>
  );
};

export default PostView;
