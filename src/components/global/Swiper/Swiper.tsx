import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { ReviewCard } from "../ReviewCard";

export const SwiperCarousel = () => {
  return (
    <Swiper
      style={{ marginTop: "60px" }}
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <ReviewCard
          avatarURL="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
          text="Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy text of the printing and typesetting industry. Lorem Ipsum has been."
          name="Sara Taylor"
          role="consumer"
        />
      </SwiperSlide>
      <SwiperSlide>
        <ReviewCard
          avatarURL="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
          text="Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy text of the printing and typesetting industry. Lorem Ipsum has been."
          name="Sara Taylor"
          role="consumer"
        />
      </SwiperSlide>
      <SwiperSlide>
        <ReviewCard
          avatarURL="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
          text="Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy text of the printing and typesetting industry. Lorem Ipsum has been."
          name="Sara Taylor"
          role="consumer"
        />
      </SwiperSlide>
      ...
    </Swiper>
  );
};
