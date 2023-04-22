import Carousel from 'components/Carousel/Carousel';
import s from './HomeView.module.css';

const HomeView = () => {
  return (
    <section className={s.homeViewSection}>
      <div className={`${s.homeViewContainer} container`}>
        <Carousel />
      </div>
    </section>
  );
};

export default HomeView;
