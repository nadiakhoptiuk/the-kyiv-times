import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import PropTypes from 'prop-types';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import PostPreview from 'components/PostPreview';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import s from './Carousel.module.css';

const Carousel = ({ posts }) => {
  const [swiperInstance, setSwiperInstance] = useState(null);

  return (
    <>
      {swiperInstance !== null ? (
        <>
          <button
            aria-label="previous slide"
            className={s.swiperBtnPrev}
            onClick={() => {
              swiperInstance.slidePrev();
            }}
          >
            <ArrowBackIosIcon color="primary" fontSize="large" />
          </button>

          <button
            aria-label="next slide"
            className={s.swiperBtnNext}
            onClick={() => {
              swiperInstance.slideNext();
            }}
          >
            <ArrowForwardIosIcon color="primary" fontSize="large" />
          </button>
        </>
      ) : null}

      <Swiper
        spaceBetween={24}
        slidesPerView={3}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        onSwiper={setSwiperInstance}
        modules={[Pagination, Navigation]}
      >
        {posts &&
          posts.map(post => {
            return (
              <SwiperSlide key={post.id}>
                <PostPreview post={post} />
              </SwiperSlide>
            );
          })}
      </Swiper>
    </>
  );
};

export default Carousel;

Carousel.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      body: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      userId: PropTypes.number.isRequired,
    }).isRequired
  ),
};
