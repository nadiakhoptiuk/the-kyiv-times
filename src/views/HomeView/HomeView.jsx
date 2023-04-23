import Carousel from 'components/Carousel/Carousel';
import CreatePostBtn from 'components/CreatePostBtn/CreatePostBtn';
import s from './HomeView.module.css';

const HomeView = () => {
  return (
    <section className={s.homeViewSection}>
      <div className={`${s.homeViewContainer} container`}>
        <Carousel />

        <CreatePostBtn />
      </div>
    </section>
  );
};

export default HomeView;
