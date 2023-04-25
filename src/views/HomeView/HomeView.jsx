import { useGetAllPostsQuery } from 'redux/postsApi';
import Carousel from 'components/Carousel';
import CreatePostBtn from 'components/CreatePostBtn';
import Spinner from 'components/Spinner';
import s from './HomeView.module.css';

const HomeView = () => {
  const { data, isLoading } = useGetAllPostsQuery('', {
    refetchOnMountOrArgChange: true,
  });

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
