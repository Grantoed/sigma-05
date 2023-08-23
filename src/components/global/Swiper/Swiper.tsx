import SwiperCore, { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./index.css";
import { ReviewCard } from "../ReviewCard";
import peachImg from "src/images/peach-avatar.jpg";
import appleImg from "src/images/apple-avatar.jpg";
import tomatoImg from "src/images/tomato-avatar.jpg";

SwiperCore.use([Pagination]);

export const SwiperCarousel = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return `<span class="${className}"></span>`;
    },
  };

  return (
    <Swiper
      style={{ marginTop: "60px" }}
      spaceBetween={50}
      slidesPerView={1}
      pagination={pagination}
      modules={[Pagination]}
      className="mySwiper"
      speed={1500}
    >
      <SwiperSlide>
        <ReviewCard
          avatarURL={peachImg}
          text="Just a peachy day since I arrived! Juicy, fresh, and sun-kissed. Truly the ripest pick of the orchard. Highly recommend! 🍑✨"
          name="Cutie Peach"
          role="Fruty"
        />
      </SwiperSlide>
      <SwiperSlide>
        <ReviewCard
          avatarURL={appleImg}
          text="From orchard to table, this apple is the epitome of nature's best. Every bite is a crisp symphony of sweetness and zest. Truly a delightful experience! 🍎✨"
          name="Juicy Apple"
          role="Tooty"
        />
      </SwiperSlide>
      <SwiperSlide>
        <ReviewCard
          avatarURL={tomatoImg}
          text="Red, radiant, and ready to be relished! Every bite's a burst of garden goodness. Best tomato ever! 🍅🌟"
          name="Pretty Tomato"
          role="Vegie"
        />
      </SwiperSlide>
    </Swiper>
  );
};
