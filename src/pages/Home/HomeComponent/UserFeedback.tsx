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
    name: "Abdullah Sajal",
    image: "https://i.postimg.cc/DzGZYHXg/abdullah-sajal-vai.jpg",
    designation: "CEO & Founder",
    rating: 5,
    comment:
      "RevBoost Solution has simplified our financial management. Their income tracking and rollbase management features are incredibly useful, and the monthly charts provide clear insights into our business. We’re now better organized and can make more informed decisions. Highly recommend!",
  },
  {
    name: "MD TORIKUL ISLAM",
    image: "https://i.postimg.cc/d1bmvWPq/profile-pic.png",
    designation: "Business Owner",
    rating: 4.8,
    comment:
      "RevBoost Solution has made managing taxes and finances easier. Their rollbase management and income tracking features give us clear visibility into our performance. The charts are excellent for tracking monthly and yearly progress. Very satisfied with their services.",
  },
  {
    name: "Sakib Hasan",
    image: "https://i.postimg.cc/6QCWhZkb/sakib-vai.jpg",
    designation: "Business Owner",
    rating: 5,
    comment:
      "Using RevBoost Solution has improved our financial tracking. The charts make it easy to monitor performance, and their income and tax management tools are extremely helpful. We now have a much better understanding of our monthly financial health.",
  },
  {
    name: "Mohsin Ahmed Arfat",
    image: "https://i.postimg.cc/Pr6PLmHm/mohosin-vat.jpg",
    designation: "CEO & Founder",
    rating: 4,
    comment:
      "RevBoost Solution offers great financial tracking tools. The income, expense, and tax management features have improved our business efficiency. We also appreciate the rollbase management, which makes monitoring progress easy. Great value for what they offer.",
  },
  {
    name: "Md Rajiul Islam",
    image: "https://i.postimg.cc/4dZJ2dZf/rajiul-vai.jpg",
    designation: "Business Owner",
    rating: 4.7,
    comment:
      "RevBoost Solution has been key in keeping our finances organized. Their income tracking, expense monitoring, and VAT management are top-notch. The charts make it easy to visualize our monthly performance. We are really pleased with their service.",
  },
  {
    name: "Masum Billah Sakib",
    image: "https://i.postimg.cc/Z5n97r2j/m-ASUMbillah.jpg",
    designation: "Business Owner",
    rating: 4.9,
    comment:
      "Since using RevBoost Solution, we've improved our income and tax tracking. The charts provide valuable insights into monthly trends, and the rollbase management feature is excellent for financial organization. I highly recommend their services.",
  },
];

const UserFeedback: React.FC = () => {
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
                <div className="card card-compact bg-base-100 shadow-xl" data-aos="flip-left" data-aos-duration="2000">
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
