import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import PostPreview from 'components/PostPreview/PostPreview';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Carousel = ({ posts }) => {
  const [swiperInstance, setSwiperInstance] = useState(null);

  return (
    <>
      {swiperInstance !== null ? (
        <>
          <button
            aria-label="previous slide"
            // className={`swiper-button-prev ${
            //   isBeginning ? 'swiper-button-disabled' : ''
            //   }`}
            className="swiper-button-prev"
            onClick={() => {
              swiperInstance.slidePrev();
            }}
          ></button>

          <button
            aria-label="next slide"
            // className={`swiper-button-next ${
            //   swiperInstance.activeIndex() ? 'swiper-button-disabled' : ''
            // }`}
            className="swiper-button-next"
            onClick={() => {
              swiperInstance.slideNext();
            }}
          ></button>
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
