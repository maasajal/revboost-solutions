import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Rating, ThinRoundedStar } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import SectionTitle from "../../../components/SectionTitle";

// Define types for the testimonial
interface Testimonial {
  name: string;
  image: string;
  designation: string;
  rating: number;
  comment: string;
}

const ratingStyle = {
  itemShapes: ThinRoundedStar,
  activeFillColor: "#007aff",
  inactiveFillColor: "#007aff80",
};

// Static testimonial data used directly inside the component
const testimonials: Testimonial[] = [
  {
    name: "Md Abu Sayeed",
    image: "",
    designation: "CEO & Founder",
    rating: 5,
    comment:
      "Quality service with less service fee. Since partnering with BusinessEasy, we’ve seen a significant improvement in our financial organization and accuracy. Their bookkeeping services have given us the clarity we needed to make better business decisions.",
  },
  {
    name: "Pervin Sahira",
    image: "",
    designation: "Business Owner",
    rating: 5,
    comment:
      "Working with BusinessEasy Accounting has been a game-changer for us. Their expertise and attention to detail ensure our finances are always in order. We trust them completely for our accounting needs.",
  },
  {
    name: "Pervin Sahira",
    image: "",
    designation: "Business Owner",
    rating: 5,
    comment:
      "Working with BusinessEasy Accounting has been a game-changer for us. Their expertise and attention to detail ensure our finances are always in order. We trust them completely for our accounting needs.",
  },
];

const UserFeedback: FC = () => {
  return (
    <section id="testimonials">
      <div className="px-3 sm:px-6 md:px-20">
        <SectionTitle title={"What My Clients Say?"} intro={"testimonials"} />
        <div className="pb-20 space-y-20">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={5}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            className="mySwiper"
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
              1280: { slidesPerView: 5 },
            }}
          >
            {testimonials.map((review, index) => (
              <SwiperSlide key={index}>
                <div className="card card-compact bg-base-100 shadow-xl">
                  <figure>
                    <img
                      src={review.image}
                      alt={review.name}
                      className="rounded-full w-1/2 p-5"
                    />
                  </figure>
                  <div className="card-body text-center">
                    <h2 className="text-3xl">{review.name}</h2>
                    <h2 className="text-xl">{review.designation}</h2>
                    <div className="font-semibold flex items-center flex-col gap-3">
                      <div className="rating">
                        <Rating
                          value={review.rating}
                          itemStyles={ratingStyle}
                          style={{ maxWidth: 100 }}
                          readOnly
                        />
                      </div>
                    </div>
                    <q className="mb-4 leading-8">{review.comment}</q>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default UserFeedback;
