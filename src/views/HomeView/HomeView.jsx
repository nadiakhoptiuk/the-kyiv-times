import Carousel from 'components/Carousel/Carousel';
import CreatePostBtn from 'components/CreatePostBtn/CreatePostBtn';
import Spinner from 'components/Spinner/Spinner';
import { useGetAllPostsQuery } from 'redux/postsApi';
import s from './HomeView.module.css';

const HomeView = () => {
  const { data, isLoading } = useGetAllPostsQuery('');

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <section className={s.homeViewSection}>
          <div className={`${s.homeViewContainer} container`}>
            <Carousel posts={data} />

            <CreatePostBtn />
          </div>
        </section>
      )}
    </>
  );
};

export default HomeView;
