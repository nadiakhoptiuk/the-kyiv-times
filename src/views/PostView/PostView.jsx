import PostInfo from 'components/PostInfo/PostInfo';
import Spinner from 'components/Spinner/Spinner';
import { useParams } from 'react-router';
import { useGetPostInfoByIdQuery } from 'redux/postsApi';
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
